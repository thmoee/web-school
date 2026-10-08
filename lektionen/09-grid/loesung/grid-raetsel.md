# Lösung: Grid-Rätsel

```
┌─────┬────────────┬─────┐
│  1  │     2 (über zwei Spalten)
├─────┼────────────┼─────┤
│  3  │     4      │     │  ← Lücke
├─────┴────────────┴─────┤
│           5            │
├─────┬────────────┬─────┤
│  6  │            │  7  │  ← Lücke
└─────┴────────────┴─────┘
```

- **1** landet in der ersten freien Zelle: Zeile 1, Spalte 1.
- **2** braucht zwei Spalten. Spalte 2 und 3 sind frei, also passt es noch in Zeile 1.
- **3** und **4** füllen Zeile 2 von links.
- **5** soll von der ersten bis zur letzten Linie gehen. In Zeile 2 ist nur noch Spalte 3 frei, das reicht nicht. Also rutscht 5 in Zeile 3, und in Zeile 2 bleibt eine **Lücke**.
- **6** beginnt Zeile 4.
- **7** soll in Spalte 3. Der Browser springt dorthin, und Spalte 2 bleibt leer.

Die Spaltenbreiten: Der Container ist 32rem breit, abzüglich zweimal 0.5rem `gap` bleiben 31rem. Die werden 1 : 2 : 1 verteilt, also 7.75rem, 15.5rem und 7.75rem.

Probier zum Schluss `grid-auto-flow: dense;` am Container. Welche Lücke wird jetzt gefüllt, und womit?
