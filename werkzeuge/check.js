/*
 * Prüfwerkzeug für die Übungen.
 *
 * Jede check.html ruft pruefe([...]) mit einer Liste von Abschnitten auf.
 * Ein Abschnitt lädt eine Seite in einen iframe und führt Tests darauf aus:
 *
 *   pruefe([
 *     {
 *       titel: "Deine Seite",
 *       datei: "uebung/index.html",
 *       tests: [
 *         {
 *           name: "Die Seite hat eine `<h1>`",
 *           tipp: "Schreib eine Hauptüberschrift in den body.",
 *           test: ({ doc }) => doc.querySelector("h1") !== null,
 *         },
 *       ],
 *     },
 *   ]);
 *
 * Ein Test bekommt ein Objekt mit:
 *   doc        – das Dokument, so wie der Browser es verstanden hat
 *   quelltext  – die Datei als Text, so wie du sie geschrieben hast
 *   alle(sel)  – alle passenden Elemente als Array
 *   datei(pfad) – lädt eine weitere Datei als Text (null, wenn es sie nicht gibt)
 *   seite(pfad) – lädt eine weitere HTML-Datei als Dokument (oder null)
 *   ueberschriftenOhneSprung(dok) – true, wenn die Überschriften keine Ebene überspringen
 *
 * Für CSS:
 *   stil(el)    – die berechneten Stile eines Elements oder Selektors, wie in den DevTools unter „Berechnet“
 *   regeln()    – alle CSS-Regeln der Seite als flache Liste, auch die innerhalb von @media
 *   breite(px)  – stellt die Vorschau auf diese Breite, damit Media Queries greifen.
 *                 Nach dem Test wird die Breite automatisch zurückgesetzt.
 *   kontrast(el) – das Kontrastverhältnis zwischen Text und Hintergrund, von 1 bis 21
 *   helligkeit(farbe) – wie hell eine CSS-Farbe ist, von 0 (schwarz) bis 1 (weiß)
 *   zustand(el, ":hover", …) – die berechneten Stile, als ob el gerade in diesem Zustand wäre
 *                 (als einfaches Objekt, z. B. zustand(el, ":hover").backgroundColor)
 *   dunkel(fn)  – führt fn aus, als ob der Dark Mode eingeschaltet wäre
 *
 * Tests mit `bonus: true` zählen nicht zur Pflicht.
 * Mit ?ziel=loesung in der Adresse wird loesung/ statt uebung/ geprüft.
 *
 * Du musst diese Datei nicht verstehen. Spätestens in Modul 3 kannst du sie aber lesen.
 */
(function () {
  "use strict";

  const skript = document.currentScript;
  const zeigeLoesung = new URLSearchParams(location.search).get("ziel") === "loesung";

  const stil = document.createElement("link");
  stil.rel = "stylesheet";
  stil.href = new URL("check.css", skript.src).href;
  document.head.append(stil);

  // Live Server fügt jeder HTML-Seite ein Skript für das automatische Neuladen hinzu.
  // Das soll die Tests nicht durcheinanderbringen.
  const LIVE_SERVER = /<!-- Code injected by live-server -->\s*<script[^>]*>[\s\S]*?<\/script>\s*/g;

  function pruefe(abschnitte) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => start(abschnitte));
    } else {
      start(abschnitte);
    }
  }

  async function start(abschnitte) {
    const kopf = element("header", "kopf");
    const zusammenfassung = element("p", "zusammenfassung", "Prüfe …");
    const neu = element("button", null, "Neu prüfen");
    neu.type = "button";
    neu.addEventListener("click", () => location.reload());
    kopf.append(element("h1", null, document.title), zusammenfassung, neu);
    if (zeigeLoesung) {
      kopf.append(element("p", "hinweis", "Geprüft wird die Lösung (?ziel=loesung), nicht deine Übung."));
    }
    document.body.append(kopf);

    if (location.protocol === "file:") {
      zusammenfassung.textContent = "";
      document.body.append(
        meldung("Diese Seite funktioniert nur mit Live Server. Rechtsklick auf `check.html` in VS Code → „Open with Live Server“."),
      );
      return;
    }

    const ergebnisse = [];
    for (const abschnitt of abschnitte) {
      ergebnisse.push(...(await pruefeAbschnitt(abschnitt)));
    }

    const pflicht = ergebnisse.filter((e) => !e.bonus);
    const bonus = ergebnisse.filter((e) => e.bonus);
    const geschafft = pflicht.filter((e) => e.ok).length;
    let text = `${geschafft} von ${pflicht.length} erfüllt`;
    if (bonus.length > 0) {
      text += ` · Bonus: ${bonus.filter((e) => e.ok).length} von ${bonus.length}`;
    }
    if (geschafft === pflicht.length) {
      const hatLoesung = !zeigeLoesung && abschnitte.some((abschnitt) => abschnitt.datei.startsWith("uebung/"));
      text += hatLoesung ? " – alles erfüllt! Vergleich jetzt mit der Lösung." : " – alles erfüllt!";
      kopf.classList.add("fertig");
    }
    zusammenfassung.textContent = text;
  }

  async function pruefeAbschnitt(abschnitt) {
    const datei = zeigeLoesung ? abschnitt.datei.replace(/^uebung\//, "loesung/") : abschnitt.datei;
    const bereich = element("section", "abschnitt");
    bereich.append(element("h2", null, abschnitt.titel), element("p", "datei", `\`${datei}\``));
    document.body.append(bereich);

    const quelltext = await ladeText(datei);
    if (quelltext === null) {
      bereich.append(meldung(`Die Datei \`${datei}\` gibt es noch nicht.${abschnitt.fehlt ? " " + abschnitt.fehlt : ""}`));
      return abschnitt.tests.map((test) => ({ bonus: Boolean(test.bonus), ok: false }));
    }

    const liste = element("ul", "tests");
    const rahmen = document.createElement("iframe");
    rahmen.title = "Vorschau";
    const vorschau = element("details", "vorschau");
    vorschau.open = true;
    vorschau.append(element("summary", null, "Vorschau"), rahmen);
    bereich.append(liste, vorschau);

    const geladen = new Promise((fertig) => rahmen.addEventListener("load", fertig, { once: true }));
    rahmen.src = datei;
    await geladen;

    const doc = rahmen.contentDocument;
    entferneLiveServer(doc);
    const ctx = {
      doc,
      quelltext,
      alle: (selektor) => [...doc.querySelectorAll(selektor)],
      datei: (pfad) => ladeText(new URL(pfad, rahmen.contentWindow.location.href)),
      seite: async (pfad) => {
        const text = await ctx.datei(pfad);
        return text === null ? null : new DOMParser().parseFromString(text, "text/html");
      },
      ueberschriftenOhneSprung: (dok = doc) => {
        const ebenen = [...dok.querySelectorAll("h1, h2, h3, h4, h5, h6")].map((h) => Number(h.tagName[1]));
        return ebenen[0] === 1 && ebenen.every((ebene, i) => i === 0 || ebene <= ebenen[i - 1] + 1);
      },
      stil: (el) => rahmen.contentWindow.getComputedStyle(typeof el === "string" ? doc.querySelector(el) : el),
      regeln: () => {
        const liste = [];
        const sammle = (regeln) => {
          for (const regel of regeln) {
            liste.push(regel);
            if (regel.cssRules) sammle(regel.cssRules);
          }
        };
        for (const blatt of doc.styleSheets) {
          try {
            sammle(blatt.cssRules);
          } catch {
            // Stylesheets von anderen Websites darf man nicht auslesen.
          }
        }
        return liste;
      },
      breite: async (px) => {
        rahmen.style.width = `${px}px`;
        await naechstesBild();
      },
      kontrast: (el) => {
        const element = typeof el === "string" ? doc.querySelector(el) : el;
        // Ganz unten liegt die Grundfarbe des Browsers, im Dark Mode ist sie dunkel.
        const leinwandFarbe = doc.createElement("div");
        leinwandFarbe.style.backgroundColor = "Canvas";
        doc.documentElement.append(leinwandFarbe);
        let hintergrund = farbe(ctx.stil(leinwandFarbe).backgroundColor).slice(0, 3);
        leinwandFarbe.remove();
        const ebenen = [];
        for (let e = element; e; e = e.parentElement) ebenen.unshift(e);
        for (const e of ebenen) hintergrund = mische(farbe(ctx.stil(e).backgroundColor), hintergrund);
        const text = mische(farbe(ctx.stil(element).color), hintergrund);
        const [hell, dunkel] = [helligkeit(text), helligkeit(hintergrund)].sort((a, b) => b - a);
        return (hell + 0.05) / (dunkel + 0.05);
      },
      helligkeit: (css) => helligkeit(farbe(css).slice(0, 3)),
      // Jede Regel mit :hover (oder einem anderen Zustand) wird kurz verdoppelt, und zwar mit einer Klasse
      // statt des Zustands. Eine Klasse zählt bei der Spezifität genauso viel wie eine Pseudoklasse,
      // und die Kopie steht direkt hinter dem Original. So gewinnt dieselbe Regel wie im echten Zustand.
      zustand: (el, ...zustaende) => {
        const element = typeof el === "string" ? doc.querySelector(el) : el;
        const muster = `(${zustaende.join("|")})(?![\\w-])`;
        const kopien = [];
        const durchsuche = (liste) => {
          for (let i = liste.cssRules.length - 1; i >= 0; i--) {
            const regel = liste.cssRules[i];
            if (regel.selectorText && new RegExp(muster).test(regel.selectorText)) {
              liste.insertRule(`${regel.selectorText.replace(new RegExp(muster, "g"), ".check-zustand")} { ${regel.style.cssText} }`, i + 1);
              kopien.push([liste, liste.cssRules[i + 1]]);
            } else if (regel.cssRules && !regel.selectorText) {
              durchsuche(regel);
            }
          }
        };
        for (const blatt of doc.styleSheets) {
          try {
            durchsuche(blatt);
          } catch {
            // Stylesheets von anderen Websites darf man nicht verändern.
          }
        }
        const ohneUebergang = ohneUebergaenge(doc);
        element.classList.add("check-zustand");
        const berechnet = ctx.stil(element);
        const ergebnis = {};
        for (const name of berechnet) {
          const schluessel = name.startsWith("--") ? name : name.replace(/-([a-z])/g, (_, b) => b.toUpperCase());
          ergebnis[schluessel] = berechnet.getPropertyValue(name);
        }
        element.classList.remove("check-zustand");
        if (element.classList.length === 0) element.removeAttribute("class");
        for (const [liste, kopie] of kopien) liste.deleteRule([...liste.cssRules].indexOf(kopie));
        ohneUebergang.entferne();
        return ergebnis;
      },
      // Die Regeln aus @media (prefers-color-scheme: dark) werden kurz ohne Bedingung ans Ende gehängt.
      // Dazu kommt color-scheme: dark, damit auch light-dark() und die Grundfarben des Browsers umschalten.
      dunkel: async (fn) => {
        const regeln = ctx
          .regeln()
          .filter((r) => r.media && /prefers-color-scheme\s*:\s*dark/.test(r.media.mediaText))
          .flatMap((r) => [...r.cssRules].map((innen) => innen.cssText));
        const ohneUebergang = ohneUebergaenge(doc);
        const dunkleRegeln = doc.createElement("style");
        dunkleRegeln.textContent = `:root { color-scheme: dark; }\n${regeln.join("\n")}`;
        doc.head.append(dunkleRegeln);
        try {
          return await fn();
        } finally {
          dunkleRegeln.remove();
          ohneUebergang.entferne();
        }
      },
    };

    const ergebnisse = [];
    for (const test of abschnitt.tests) {
      let ok = false;
      try {
        ok = Boolean(await test.test(ctx));
      } catch (fehler) {
        // Meist fehlt einfach ein Element, auf das der Test zugreift.
        console.warn(`Test „${test.name}“:`, fehler);
      }
      if (rahmen.style.width) {
        rahmen.style.width = "";
        await naechstesBild();
      }
      const punkt = element("li", ok ? "ok" : "offen");
      punkt.append(element("span", "symbol", ok ? "✓" : test.bonus ? "○" : "✗"), element("span", "name", test.name));
      if (test.bonus) punkt.append(element("span", "bonus", "Bonus"));
      if (!ok && test.tipp) punkt.append(element("p", "tipp", test.tipp));
      liste.append(punkt);
      ergebnisse.push({ bonus: Boolean(test.bonus), ok });
    }
    return ergebnisse;
  }

  async function ladeText(adresse) {
    try {
      const antwort = await fetch(adresse, { cache: "no-store" });
      return antwort.ok ? (await antwort.text()).replace(LIVE_SERVER, "") : null;
    } catch {
      return null;
    }
  }

  function entferneLiveServer(doc) {
    const suche = doc.createTreeWalker(doc, NodeFilter.SHOW_COMMENT);
    const funde = [];
    while (suche.nextNode()) {
      if (suche.currentNode.data.includes("Code injected by live-server")) funde.push(suche.currentNode);
    }
    for (const kommentar of funde) {
      if (kommentar.nextElementSibling?.tagName === "SCRIPT") kommentar.nextElementSibling.remove();
      kommentar.remove();
    }
  }

  // Wartet, bis der Browser die Vorschau in der neuen Breite aufgebaut hat.
  // Kein requestAnimationFrame: Das pausiert, solange der Tab im Hintergrund liegt.
  function naechstesBild() {
    return new Promise((fertig) => setTimeout(fertig, 50));
  }

  // Schaltet Übergänge ab, damit man sofort den Endzustand messen kann und nicht einen Zwischenstand.
  function ohneUebergaenge(doc) {
    const regel = doc.createElement("style");
    regel.textContent = "*, *::before, *::after { transition: none !important; }";
    doc.head.append(regel);
    return {
      entferne() {
        // Erst den Browser die zurückgesetzten Stile berechnen lassen, dann die Übergänge wieder erlauben.
        // Sonst gleitet die Seite vom geprüften Zustand zurück, und der nächste Test misst einen Zwischenstand.
        void doc.documentElement.offsetHeight;
        regel.remove();
      },
    };
  }

  // Wandelt jede CSS-Farbe in [rot, grün, blau, deckkraft] um, indem sie auf eine Leinwand gemalt wird.
  // So funktionieren auch Schreibweisen wie hsl(), oklch() oder Farbnamen.
  const leinwand = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  function farbe(css) {
    leinwand.clearRect(0, 0, 1, 1);
    leinwand.fillStyle = css;
    leinwand.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = leinwand.getImageData(0, 0, 1, 1).data;
    return [r, g, b, a / 255];
  }

  // Legt eine (halb)durchsichtige Farbe über einen deckenden Hintergrund.
  function mische([r, g, b, a], unten) {
    return [r, g, b].map((wert, i) => wert * a + unten[i] * (1 - a));
  }

  // Relative Helligkeit nach WCAG 2
  function helligkeit(rgb) {
    const [r, g, b] = rgb.map((wert) => {
      const s = wert / 255;
      return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  // Erstellt ein Element. Text in `Backticks` wird als Code dargestellt.
  function element(tag, klasse, text) {
    const el = document.createElement(tag);
    if (klasse) el.className = klasse;
    if (text) {
      text.split("`").forEach((teil, i) => {
        if (i % 2 === 1) el.append(Object.assign(document.createElement("code"), { textContent: teil }));
        else el.append(teil);
      });
    }
    return el;
  }

  function meldung(text) {
    return element("p", "meldung", text);
  }

  window.pruefe = pruefe;
})();
