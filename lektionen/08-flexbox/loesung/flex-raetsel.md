# Lösung: Flexbox-Rätsel

**Rätsel 1:** A, B und C stehen links nebeneinander, jedes so breit wie sein Inhalt. Alle drei sind so hoch wie B. Das liegt am Standardwert `align-items: stretch`.

**Rätsel 2:** A ganz links, C ganz rechts, B in der Mitte. A und C sind jetzt nur so hoch wie ihr Text und stehen auf halber Höhe von B. Mit `align-items: center` wird nicht mehr gestreckt.

**Rätsel 3:** Die Hauptachse geht jetzt nach unten, also stehen A, B und C untereinander. Die Querachse geht nach rechts, und `align-items: flex-start` heißt: alle links und nur so breit wie ihr Inhalt. Ohne diese Zeile wären alle drei so breit wie der Container, wegen `stretch`.

**Rätsel 4:** A und C sind so breit wie ihr Inhalt. B bekommt mit `flex: 1` den ganzen restlichen Platz. Hätten alle drei `flex: 1`, wären sie gleich breit.

**Rätsel 5:** Untereinander, über die ganze Breite. Und `justify-content: center`? Scheinbar passiert gar nichts. Der Container ist genau so hoch wie sein Inhalt, also gibt es keinen freien Platz, den man verteilen könnte. Gib `.r5` eine Höhe wie `height: 20rem`, dann rutschen die drei in die Mitte.

Wenn du bei einem Rätsel falsch lagst: Untersuch den Container und klick auf das Schild `flex` im Bereich *Elemente*. Dann siehst du, wo der freie Platz ist.
