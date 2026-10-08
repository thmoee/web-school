# Aufgaben – Lektion 10

In `uebung/` liegt wieder die Startseite des Brettspielclubs, jetzt mit einem Bild. Ihr Stylesheet wurde an einem großen Monitor gebaut, und dort sieht sie gut aus. Auf einem Handy hat sie niemand angeschaut.

## ⭐ 1. Erst vorhersagen: Was geht auf dem Handy kaputt?

Öffne `uebung/stil.css`, **aber noch nicht die Seite.** Such alle Stellen, die auf einem 375px breiten Handy Probleme machen werden. Schreib zu jeder einen Kommentar ins CSS, zum Beispiel `/* PROBLEM: feste Breite, viel zu breit fürs Handy */`.

Öffne die Seite dann mit Live Server und schalt in den DevTools den Gerätemodus ein (`Strg+Umschalt+M`). Stell eine Breite von 375px ein und scroll die Seite einmal ganz durch, auch nach rechts.

Hast du alle Probleme gefunden? Gibt es welche, die du nicht vorhergesagt hast?

## ⭐ 2. Weg mit den festen Breiten

- Der `<body>` hat keine feste Breite mehr, sondern höchstens `64rem`. Links und rechts bleibt wie in Lektion 06 immer etwas Platz zum Rand.
- Bilder werden nie breiter als ihr Container und behalten ihr Seitenverhältnis. Schreib dafür eine Regel für alle `img`. Die feste Breite und Höhe von `.titelbild` brauchst du dann nicht mehr.
- Auch die drei Spalten der Beiträge und die beiden Spalten des Seitenlayouts haben feste Breiten. Um die kümmerst du dich in Aufgabe 3.

## ⭐ 3. Mobile first

Bau das Layout jetzt mobile first um. Ohne Media Query gilt das Handy-Layout:

- Alles steht untereinander: Kopf, Hauptinhalt, Kasten „Nächstes Treffen“, Fußbereich. Tipp: Bei `grid-template-areas` darf jede Zeile auch nur ein Wort haben.
- Die Beiträge stehen untereinander. Ist mehr Platz, stehen sie automatisch nebeneinander. Du kennst schon eine Grid-Zeile, die genau das tut.
- Im Kopfbereich rutscht das Menü unter den Namen, wenn beides nicht nebeneinander passt. Die Menüpunkte brechen bei Bedarf um.

Erst ab einer Breite von `60rem` steht der Kasten rechts neben dem Hauptinhalt, so wie vorher. Dafür brauchst du eine Media Query mit `min-width`.

Prüf mit `check.html`, und schau dir die Seite bei 375px, 800px und 1200px an.

## ⭐ 4. Ohne viewport-Tag

Lösch kurz den viewport-Meta-Tag aus `index.html` und schau dir die Seite im Gerätemodus bei 375px an. Was passiert? Warum hilft dir dein ganzes responsives CSS jetzt nicht?

Füg den Tag danach wieder ein.

## ⭐⭐ 5. Für Finger gemacht

Mach die Menülinks so groß, dass man sie auf dem Handy gut mit dem Finger trifft: mindestens 44px hoch. Miss in den DevTools nach.

## ⭐⭐ 6. Eine Überschrift, die mitwächst

Die `<h1>` ist auf dem Handy riesig. Benutz `clamp()`, damit sie auf schmalen Bildschirmen kleiner und auf breiten größer ist. Zieh im Gerätemodus die Breite hin und her und schau zu.

## ⭐⭐ 7. Deine eigenen Breakpoints

Mach das Fenster im Gerätemodus ganz langsam breiter, von 320px bis 1400px. Gibt es Breiten, bei denen etwas komisch aussieht? Zum Beispiel ein Menüpunkt allein in einer Zeile, eine einzige Karte mit riesigem Leerraum daneben oder viel zu lange Zeilen?

Such dir eine solche Stelle aus und verbessere sie mit einer weiteren Media Query.

## ⭐⭐⭐ 8. Zum Ausdrucken

Drück auf der Seite `Strg+P` und schau dir die Druckvorschau an. Menü, Bild und „Weiterlesen“-Links braucht auf Papier niemand, und farbige Hintergründe verschwenden Tinte.

Schreib eine Media Query `@media print`, die das ändert. In Chrome kannst du das auch ohne Drucken testen: DevTools → Menü mit den drei Punkten → *Weitere Tools* → *Rendering* → bei *CSS-Medientyp emulieren* `print` auswählen.

## Projekt-Schritt

- Füg die Regel für Bilder in dein Stylesheet ein.
- Schau dir jede Seite deines Projekts im Gerätemodus bei 375px an. Gibt es einen waagerechten Scrollbalken? Ist alles lesbar, ist jeder Link gut zu treffen?
- Bau dein Layout mobile first mit `min-width`-Media Queries.

Was dein Projekt am Ende von Modul 2 können soll, prüft [`projekt/check.html`](../../projekt/check.html).
