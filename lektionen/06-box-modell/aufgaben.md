# Aufgaben – Lektion 06

In `uebung/` liegt der Brettspielclub mit dem CSS aus Lektion 05. Schreib deine neuen Regeln unten in `stil.css`.

## ⭐ 1. Erst vorhersagen: Wie breit ist das?

Öffne `uebung/breite.html` in VS Code, **aber noch nicht im Browser.** Lies das CSS und schreib deine Antworten auf:

1. Wie breit ist Box A, vom linken bis zum rechten Rand ihres Rahmens?
2. Wie breit ist Box B?
3. Wie viel Platz ist zwischen Box A und Box B?
4. Wie viel Platz ist zwischen Box B und Box C?
5. Wie breit ist das Inline-Element im Satz?
6. Schiebt das Inline-Element die Zeilen darüber und darunter weg?

Öffne die Seite dann mit Live Server und miss nach: Untersuch jede Box und schau im Bereich *Berechnet* (Firefox: *Layout*) auf das Box-Modell. Fahr auch im HTML mit der Maus über die Boxen, dann siehst du die Margins in Orange.

Die Auflösung steht in `loesung/breite.md`.

## ⭐ 2. `box-sizing` für alle

Sorg dafür, dass **alle** Elemente der Seite `box-sizing: border-box` benutzen. Ab jetzt gehört diese Regel an den Anfang jedes Stylesheets, das du schreibst.

## ⭐ 3. Eine Spalte in der Mitte

Auf einem breiten Bildschirm sind die Zeilen gerade sehr lang und schwer zu lesen.

- Der ganze Inhalt der Seite, also Kopf, Hauptteil, Kasten und Fußbereich, ist höchstens `45rem` breit und steht in der Mitte.
- Wenn das Fenster schmaler ist, bleibt links und rechts trotzdem mindestens `1rem` Platz bis zum Rand.

Tipp: Es geht mit einer einzigen Regel. Welches Element enthält alles andere?

Mach das Fenster breit und schmal und schau, ob es sich richtig verhält.

## ⭐ 4. Beiträge als Karten

Jeder Beitrag (`<article>`) wird eine Karte:

- Innenabstand, damit der Text nicht am Rand klebt
- ein dünner Rahmen
- abgerundete Ecken
- Abstand zur nächsten Karte

Gib auch dem Absatz `.hinweis` ein Padding und runde Ecken.

Prüf mit `check.html`.

## ⭐⭐ 5. Navigation nebeneinander

Die Menüpunkte stehen noch untereinander, mit Aufzählungspunkten.

1. Entfern die Aufzählungspunkte (`list-style: none`) und das Einrücken der Liste.
2. Stell die `<li>` nebeneinander. Welchen `display`-Wert brauchen sie dafür?
3. Gib den Links ein Padding, damit man sie leichter trifft. Mach sie zuerst sichtbar, zum Beispiel mit `outline: 1px solid red`. Was passiert mit dem Padding oben und unten? Welcher `display`-Wert hilft?

In Lektion 08 lernst du mit Flexbox einen besseren Weg dafür. Aber so verstehst du, was Block und Inline bedeuten.

## ⭐⭐ 6. Der rätselhafte Streifen

1. Gib dem `<header>` eine Hintergrundfarbe.
2. Schau ganz oben auf die Seite. Über dem farbigen Bereich ist ein Streifen ohne Farbe. Woher kommt er? Untersuch die `<h1>` und schau, wo ihr Margin hingerutscht ist. Lies dazu in der README noch einmal „Zusammenfallende Abstände“.
3. Bring den Streifen weg, ohne den Margin der `<h1>` anzufassen.

## ⭐⭐⭐ 7. Ein Knopf

Mach aus dem Menüpunkt „Mitmachen“ einen Knopf, der auffällt:

- Gib dem Link im HTML die Klasse `knopf`.
- Hintergrundfarbe, weiße Schrift und runde Ecken.

Wenn deine Schrift nicht weiß wird: Welche Regel ist stärker, und warum? Schau in den Bereich *Stile*.

## Projekt-Schritt

- Setz `box-sizing: border-box` für alle Elemente.
- Begrenz die Breite deines Inhalts und zentrier ihn.
- Gib deinen Inhalten Luft. Was auf deiner Seite mehrfach vorkommt, wie Rezepte, Spiele oder Orte, kann eine Karte werden.
