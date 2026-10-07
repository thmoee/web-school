# Aufgaben – Lektion 09

Der Brettspielclub bekommt eine zweite Seite: „Unsere Spiele“. Sie liegt in `uebung/index.html`, mit dem CSS aus Lektion 08. Die Spiele stehen in einer Liste `<ul class="spiele">`, jedes Spiel ist ein `<li class="spiel">`.

## ⭐ 1. Erst vorhersagen: Das Grid-Rätsel

Öffne `uebung/grid-raetsel.html` in VS Code, **aber noch nicht im Browser.** Ein Raster mit drei Spalten und sieben Kästen, von denen manche besondere Plätze bekommen.

Zeichne ein Raster auf Papier und trag ein, in welcher Zelle jeder Kasten landet. Wie breit sind die drei Spalten? Gibt es leere Zellen?

Öffne die Seite dann mit Live Server. Untersuch das Raster und klick auf das Schild `grid`, dann siehst du die Linien und ihre Nummern.

Die Auflösung steht in `loesung/grid-raetsel.md`.

## ⭐ 2. Das Spieleraster

- Die Liste `.spiele` wird ein Grid mit drei gleich breiten Spalten und Abstand zwischen den Karten.
- Die Aufzählungspunkte und das Einrücken der Liste brauchst du nicht mehr.

Beobachte, wie die Karten einer Zeile automatisch gleich hoch sind.

## ⭐ 3. Ein Raster, das sich selbst anpasst

Mach das Fenster schmal. Drei Spalten sind auf dem Handy viel zu eng.

Ändere `grid-template-columns` so, dass jede Spalte mindestens `13rem` breit ist und so viele Spalten nebeneinander stehen, wie hineinpassen. Mach das Fenster dann langsam breiter und schmaler und beobachte, wie Spalten dazukommen und verschwinden.

## ⭐ 4. Das Seitenlayout

Der Kasten „Spiel des Monats“ steht noch unter der Liste. Er soll rechts neben dem Hauptinhalt stehen:

```
┌──────────── header ────────────┐
├────────── main ─────────┬ aside┤
│                         │      │
├──────────── footer ────────────┤
```

- Mach den `<body>` zu einem Grid mit zwei Spalten: links der ganze Rest, rechts `16rem`.
- Benutz `grid-template-areas` und gib jedem der vier Bereiche mit `grid-area` seinen Namen.

Untersuch den `<body>` und schalt in den DevTools die Anzeige der Bereichsnamen ein.

Auf einem schmalen Bildschirm ist das Layout jetzt zu eng. Darum kümmerst du dich in Lektion 10.

Prüf mit `check.html`.

## ⭐⭐ 5. Das hervorgehobene Spiel

Die Karte mit der Klasse `hervorgehoben` soll zwei Spalten breit sein.

Mach das Fenster danach breiter und schmaler. Bleiben dabei manchmal Lücken im Raster? Was ändert `grid-auto-flow: dense` an der Liste? Ist die neue Reihenfolge für Leute, die die Seite mit der Tastatur oder einem Screenreader benutzen, noch sinnvoll?

## ⭐⭐ 6. Grid Garden

Spiel [Grid Garden](https://cssgridgarden.com/#de). Dort gießt du mit Grid in 28 Leveln einen Garten. Das Spiel gibt es auch auf Deutsch.

## ⭐⭐⭐ 7. Nachbauen

In `uebung/vorlage.png` siehst du ein Mosaik aus Kacheln. Das HTML dafür steht schon in `uebung/nachbau.html`. Bau das Aussehen in `uebung/nachbau.css` nach, so genau du kannst.

Ein paar Hinweise: Das Raster hat vier gleich breite Spalten, und jede Zeile ist `8rem` hoch. Die Zeilenhöhe legst du mit `grid-auto-rows` fest. Jede Kachel ist ein eigener Flex-Container, damit der Text unten steht.

Leg dein Ergebnis und die Vorlage nebeneinander und vergleich. Eine mögliche Lösung steht in `loesung/nachbau.css`.

## Projekt-Schritt

- Wenn dein Projekt Dinge enthält, die mehrfach vorkommen: Stell sie in ein Raster mit `repeat(auto-fill, minmax(…, 1fr))`.
- Überleg dir, ob eine Seite deines Projekts ein Seitenlayout mit Bereichen braucht, zum Beispiel eine Seitenleiste. Wenn ja, bau es mit `grid-template-areas`.
