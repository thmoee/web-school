# Aufgaben – Lektion 05

In `uebung/` liegt die Seite des Brettspielclubs aus Lektion 03, ein bisschen erweitert. Sie bekommt jetzt ihr erstes CSS.

## ⭐ 1. Das Stylesheet einbinden

1. In `uebung/` liegt schon eine leere `stil.css`. Bind sie im `<head>` von `index.html` ein.
2. Gib dem `<body>` eine Schrift ohne Serifen (`font-family: system-ui, sans-serif;`) und eine Textfarbe deiner Wahl.
3. Öffne die Seite mit Live Server. Hat sich die Schrift überall geändert, auch in den Überschriften und der Liste? Warum?

Schreib dein CSS ausschließlich in `stil.css`, nicht in die HTML-Datei.

## ⭐ 2. Selektoren

Jede Teilaufgabe braucht genau eine Regel. Überleg jedes Mal zuerst, welcher Selektor genau die gewünschten Elemente trifft und keine anderen.

1. Alle Überschriften `<h1>` und `<h2>` bekommen dieselbe Farbe. Mit **einer** Regel.
2. Die Links in der Navigation sind nicht unterstrichen. Die Links im Footer bleiben es.
3. Der Absatz mit der Klasse `hinweis` bekommt eine Hintergrundfarbe.
4. Die Datumsangaben in den Beiträgen sind grau und kursiv. Das Datum im Kasten „Nächstes Treffen“ bleibt, wie es ist.
5. Denk dir eine Klasse `wichtig` aus, die Text fett macht. Gib sie im HTML dem Satz „Wer es lernen will: Am Freitag erklärt Mira die Regeln.“

Prüf mit `check.html`.

## ⭐ 3. Erst vorhersagen: Das Kaskaden-Rätsel

Öffne `uebung/raetsel.html` in VS Code, **aber noch nicht im Browser.**

Lies das CSS im `<style>`-Element und schreib für jeden der neun Texte auf, welche Farbe er haben wird. Schreib zu jeder Antwort ein Stichwort, warum: Spezifität, Reihenfolge, Vererbung oder `style`-Attribut.

Öffne die Seite dann mit Live Server. Wo lagst du falsch? Untersuch die Fälle mit Rechtsklick → Untersuchen. Im Bereich *Stile* siehst du, welche Regeln durchgestrichen sind.

Die Auflösung steht in `loesung/raetsel.md`.

## ⭐⭐ 4. Die kaputte Seite

`uebung/kaputt.html` ist die Ankündigung eines Flohmarkts. Ganz oben in `uebung/kaputt.css` steht, wie sie aussehen soll. Aber im CSS stecken **vier Fehler**.

1. Öffne die Seite mit Live Server. Was stimmt alles nicht?
2. Such die Fehler mit den DevTools. Drei davon zeigt dir der Bereich *Stile* direkt an. Beim vierten taucht die Regel dort gar nicht erst auf. Woran könnte das liegen?
3. Repariere `kaputt.css`.

`check.html` prüft auch diese Seite.

## ⭐⭐ 5. Was wird vererbt?

Probier in `stil.css` nacheinander aus, und mach die Änderung danach wieder rückgängig. Überleg jedes Mal vorher, was passieren wird:

- `main { color: purple; }` Welche Texte werden lila? Auch die Überschriften der Beiträge?
- `main { border: 3px solid purple; }` Bekommt jeder Absatz in `<main>` auch einen Rahmen?
- `main { text-align: center; }` Wird das vererbt?

## ⭐⭐⭐ 6. Spezifität ausrechnen

Berechne für jeden Selektor die Spezifität (A, B, C) und sortier sie vom schwächsten zum stärksten:

```css
#kopf .menue a
ul li a
.menue a
*
a:hover
.menue .aktiv
li
#kopf a
```

Zwei davon sind gleich stark. Welche Regel gewinnt dann?

Die Lösung steht ebenfalls in `loesung/raetsel.md`. Wenn du es genau wissen willst: In den DevTools zeigt dir Chrome die Spezifität an, wenn du mit der Maus über einen Selektor im Bereich *Stile* fährst.

## Projekt-Schritt

Jetzt bekommt dein Kursprojekt sein eigenes CSS:

- Leg `projekt/stil.css` an und bind sie in **jede** Seite deines Projekts ein. Liegt eine Seite in einem Unterordner, denk an den Pfad.
- Wähl eine Grundschrift für den `<body>` und zwei, drei Farben, die zu deinem Thema passen.
- Gestalte die Links in der Navigation.

Noch kein Layout und keine Abstände, das kommt in den nächsten Lektionen.
