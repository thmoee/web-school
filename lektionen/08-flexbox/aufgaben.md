# Aufgaben – Lektion 08

In `uebung/` liegt der Brettspielclub mit dem CSS aus Lektion 07. Zwei Dinge sind neu:

- Die drei Beiträge stecken jetzt gemeinsam in einem `<div class="beitraege">`. Für Flexbox braucht es einen gemeinsamen Container, und kein semantisches Element passt hier. Genau dafür gibt es `<div>`.
- Die Seite darf jetzt bis zu `64rem` breit werden, damit Platz für mehrere Karten nebeneinander ist.

## ⭐ 1. Erst vorhersagen: Das Flexbox-Rätsel

Öffne `uebung/flex-raetsel.html` in VS Code, **aber noch nicht im Browser.** Es gibt fünf Container mit je drei Kästen A, B und C. Der Kasten B hat drei Zeilen Text.

Skizzier für jedes Rätsel auf Papier, wo die drei Kästen stehen und wie groß sie sind. Öffne die Seite dann mit Live Server und vergleich.

Die Auflösung steht in `loesung/flex-raetsel.md`.

## ⭐ 2. Die Navigation

In Lektion 06 hast du die Menüpunkte mit `display: inline` nebeneinandergestellt. Ersetz das durch Flexbox:

- Die `<ul>` in der `<nav>` wird ein Flex-Container. Die Regel mit `display: inline` brauchst du nicht mehr.
- Zwischen den Menüpunkten ist ein kleiner Abstand mit `gap`.
- Wenn das Fenster zu schmal ist, brechen die Menüpunkte in die nächste Zeile um.

## ⭐ 3. Der Kopfbereich

Im `<header>` steht der Name des Clubs links und das Menü rechts, beide auf gleicher Höhe.

Mach das Fenster danach schmaler. Was passiert, wenn nicht mehr beides in eine Zeile passt? Sorg dafür, dass das Menü dann unter den Namen rutscht.

## ⭐ 4. Die Beiträge nebeneinander

- `.beitraege` wird ein Flex-Container mit Abstand zwischen den Karten. Den alten `margin-bottom` der Karten brauchst du nicht mehr.
- Jede Karte ist ungefähr `15rem` breit und wächst mit, wenn Platz übrig ist.
- In einem breiten Fenster stehen alle drei nebeneinander und sind gleich breit. In einem schmalen Fenster stehen sie untereinander.

Mach das Fenster langsam schmaler und beobachte, wann die Karten umbrechen. Warum gerade dort?

Prüf mit `check.html`.

## ⭐⭐ 5. Der Footer

Im Footer steht das Copyright links und die Links rechts. Wenn es eng wird, dürfen sie untereinander rutschen.

## ⭐⭐ 6. Ein Footer, der unten bleibt

Lösch vorübergehend zwei der drei Beiträge aus dem HTML. Bei einem großen Fenster hängt der Footer jetzt irgendwo in der Mitte, und darunter ist leerer Platz.

Sorg dafür, dass der Footer immer am unteren Rand des Fensters steht, wenn die Seite kürzer ist als das Fenster:

1. Der `<body>` wird ein Flex-Container mit `flex-direction: column` und ist mindestens so hoch wie das Fenster (`min-height: 100vh`, die Einheit `vh` ist ein Hundertstel der Fensterhöhe).
2. `<main>` darf wachsen und schluckt den freien Platz.

Hol die Beiträge danach zurück, zum Beispiel mit `Strg+Z` oder `git restore`.

## ⭐⭐ 7. Flexbox Froggy

Spiel [Flexbox Froggy](https://flexboxfroggy.com/#de). In 24 Leveln bringst du Frösche mit Flexbox auf ihre Seerosenblätter. Es gibt das Spiel auch auf Deutsch.

## ⭐⭐⭐ 8. „Weiterlesen“ in einer Linie

Wenn die Karten nebeneinander stehen, sind sie dank `stretch` gleich hoch. Aber die Links „Weiterlesen“ stehen unterschiedlich weit oben, je nachdem, wie viel Text in der Karte ist.

Sorg dafür, dass bei allen drei Karten „Weiterlesen“ ganz unten steht, auf einer Linie. Tipp: Eine Karte kann selbst wieder ein Flex-Container sein. Und lies noch einmal den Abschnitt über `margin: auto`.

Sind die Abstände zwischen den Absätzen danach plötzlich größer? Die Erklärung steht in der README unter „Eine Falle: Margins“.

## Projekt-Schritt

- Bau den Kopfbereich deines Projekts mit Flexbox: Name links, Navigation rechts.
- Wenn du Karten hast: Stell sie mit `flex-wrap` nebeneinander, sodass sie bei schmalen Fenstern umbrechen.
- Prüf jede Seite bei einem schmalen und einem breiten Fenster.
