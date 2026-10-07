# Aufgaben – Lektion 07

In `uebung/` liegt der Brettspielclub mit dem CSS aus Lektion 06, ein bisschen aufgeräumt. Dabei haben sich ein paar Probleme eingeschlichen.

## ⭐ 1. Erst vorhersagen: `em` oder `rem`?

Öffne `uebung/em.html` in VS Code, **aber noch nicht im Browser.** Dort stehen zwei gleich verschachtelte Listen. Die eine verkleinert ihre Einträge mit `em`, die andere mit `rem`.

Rechne für jede der sechs Zeilen aus, wie groß die Schrift in Pixeln sein wird. Öffne die Seite dann mit Live Server und prüf im Bereich *Berechnet* nach, was bei `font-size` steht.

Die Auflösung steht in `loesung/em.md`.

## ⭐ 2. Alle Farben an einer Stelle

In `uebung/stil.css` stehen die Farben direkt in den Regeln, manche davon mehrmals.

1. Leg in einer Regel für `:root` Custom Properties für alle Farben an. Überleg dir Namen, die die Aufgabe beschreiben, nicht die Farbe: `--farbe-akzent`, `--farbe-text`, `--farbe-linie` und so weiter.
2. Ersetze jede Farbe in den anderen Regeln durch `var(--…)`. Auch `white` ist eine Farbe.
3. Probier es aus: Ändere `--farbe-akzent` in `:root` und schau, wie sich die ganze Seite mitändert. Stell sie danach zurück oder behalte, was dir besser gefällt.

`check.html` sagt dir, ob noch irgendwo eine Farbe direkt steht. Welche Regel es ist, steht dann in der Konsole der DevTools.

## ⭐ 3. Kontrast-Detektiv

Drei Texte auf der Seite haben zu wenig Kontrast. Manche sieht man sofort, einen erst auf den zweiten Blick.

1. Such sie mit den DevTools: Untersuch einen Text, klick im Bereich *Stile* auf das Farbquadrat neben `color` und lies das Kontrastverhältnis ab.
2. Mach die Farben dunkler, bis sie mindestens 4.5:1 erreichen. Im Farbwähler von Chrome siehst du dafür sogar eine Linie, ab der der Kontrast reicht.

Weil du jetzt Variablen hast, änderst du dafür nur noch Werte in `:root`.

## ⭐ 4. Schrift und Lesbarkeit

- Ersetze alle Schriftgrößen in `px` durch `rem`.
- Der Fließtext ist mindestens 16px groß.
- Der Zeilenabstand des Fließtexts liegt zwischen 1.4 und 1.8. Wie sieht die Seite mit `1.2` aus, wie mit `2`?
- Überschriften brauchen weniger Zeilenabstand als Fließtext. Mach das Fenster schmal, bis eine Überschrift zwei Zeilen hat, und vergleich.

Prüf mit `check.html`.

## ⭐⭐ 5. Nicht nur Farben

Custom Properties können jeden Wert speichern. Leg auch den Eckenradius als Variable an, zum Beispiel `--radius: 8px;`, und benutz sie überall, wo runde Ecken vorkommen.

## ⭐⭐ 6. Eine andere Akzentfarbe für den Kasten

Der Kasten „Nächstes Treffen“ soll eine andere Akzentfarbe bekommen: für die Überschrift und den Rahmen links.

Schreib dafür keine neuen `color`-Regeln. Setz stattdessen nur `--farbe-akzent` in der Regel für `aside` neu. Warum funktioniert das?

## ⭐⭐ 7. Eine Schrift für die Überschriften

Gib den Überschriften eine andere Schrift als dem Fließtext. Oft passt eine Schrift mit Serifen gut zu einem Text ohne, oder umgekehrt. Denk an den Schriftstapel mit einer generischen Familie am Ende.

## ⭐⭐⭐ 8. Eine Farbpalette aus einer Zahl

Leg eine Variable `--farbton: 165;` an und bau alle Farben der Seite mit `hsl()` daraus: zum Beispiel `--farbe-akzent: hsl(var(--farbton) 55% 28%);` und `--farbe-akzent-hell: hsl(var(--farbton) 40% 92%);`.

Jetzt änderst du eine einzige Zahl, und die ganze Seite bekommt ein neues, stimmiges Farbschema. Probier 20, 220 und 280. Bleibt der Kontrast überall gut genug?

## Projekt-Schritt

- Leg die Farben deines Projekts als Custom Properties in `:root` an und benutz sie überall.
- Prüf den Kontrast aller Texte, auch von Links und Text auf farbigem Hintergrund.
- Wähl Schriften, Schriftgrößen in `rem` und einen angenehmen Zeilenabstand.
