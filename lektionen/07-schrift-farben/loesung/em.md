# Lösung: em oder rem?

| | `.em` | `.rem` |
|---|---|---|
| Ebene 1 | 12px (0.75 × 16) | 12px (0.75 × 16) |
| Ebene 2 | 9px (0.75 × 12) | 12px |
| Ebene 3 | 6.75px (0.75 × 9) | 12px |

Bei `em` rechnet jedes `<li>` mit der Schriftgröße seines Elternelements, und das ist das `<li>` eine Ebene höher. So wird die Schrift mit jeder Ebene kleiner. `rem` bezieht sich immer auf das `<html>`-Element, egal wie tief etwas verschachtelt ist.

Ganz genau genommen ist das Elternelement eines `<li>` die `<ul>`. Die hat aber keine eigene Schriftgröße und erbt die des `<li>` darüber.
