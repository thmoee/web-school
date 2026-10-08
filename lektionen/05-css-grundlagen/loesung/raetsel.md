# Lösung: Kaskaden-Rätsel

| Absatz | Farbe | Warum |
|---|---|---|
| 1 | orange | Drei Regeln treffen: zweimal `p` (0, 0, 1) und `main p` (0, 0, 2). `main p` ist genauer und gewinnt. |
| 2 | blau | `.text` (0, 1, 0) schlägt `main p` (0, 0, 2). Eine Klasse schlägt beliebig viele Elemente. |
| 3 | grün | `#dritter` (1, 0, 0) schlägt alles andere. |
| 4 | lila | `.text.wichtig` (0, 2, 0) hat zwei Klassen und schlägt `.text` (0, 1, 0). |
| 5 | orange | `.text.wichtig` trifft nur Elemente, die **beide** Klassen haben. Für `wichtig` allein gibt es keine Regel, also gewinnt `main p`. |
| 6 | rot | Steht nicht in `<main>`, also trifft `main p` nicht. Bleiben die beiden `p`-Regeln mit gleicher Spezifität: Die untere gewinnt. |
| 7 | pink | Das `style`-Attribut schlägt jeden Selektor. |
| 8 | grün | Für `<h2>` gibt es keine Regel. Die Farbe wird von `#kasten` geerbt. |
| 9 | rot | Für `<p>` gibt es eine eigene Regel, und die schlägt immer die Vererbung, auch wenn das Elternelement eine ID hat. |

Die Fälle 8 und 9 sind die Gemeinsten. Vererbung kommt erst zum Zug, wenn **keine einzige** Regel das Element selbst trifft.

# Lösung: Spezifität

| Selektor | A, B, C |
|---|---|
| `*` | 0, 0, 0 |
| `li` | 0, 0, 1 |
| `ul li a` | 0, 0, 3 |
| `.menue a` | 0, 1, 1 |
| `a:hover` | 0, 1, 1 |
| `.menue .aktiv` | 0, 2, 0 |
| `#kopf a` | 1, 0, 1 |
| `#kopf .menue a` | 1, 1, 1 |

`.menue a` und `a:hover` sind gleich stark. Wenn beide auf denselben Link zutreffen, gewinnt die Regel, die weiter unten im CSS steht.

`*` zählt gar nichts. Er trifft zwar alles, ist aber schwächer als jeder andere Selektor.
