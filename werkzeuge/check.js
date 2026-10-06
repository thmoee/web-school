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
