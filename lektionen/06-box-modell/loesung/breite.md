# Lösung: Wie breit ist das?

| Frage | Antwort | Warum |
|---|---|---|
| 1. Breite von Box A | 350px | 300 Inhalt + 2 × 20 Padding + 2 × 5 Rahmen |
| 2. Breite von Box B | 300px | Mit `border-box` zählen Padding und Rahmen zur `width`. Der Inhalt ist nur noch 250px breit. |
| 3. Abstand zwischen A und B | 30px | `margin-bottom` von A. B hat oben keinen Margin. |
| 4. Abstand zwischen B und C | 30px | 30px unten bei B und 20px oben bei C fallen zusammen. Der größere Wert gewinnt. |
| 5. Breite des Inline-Elements | so breit wie sein Text, plus Padding und Rahmen | Bei Inline-Elementen wird `width` ignoriert. |
| 6. Abstand über und unter dem Inline-Element | keiner | Padding und Rahmen werden gezeichnet und ragen in die Nachbarzeilen. `margin` oben und unten wirkt gar nicht. Links und rechts dagegen schieben Margin und Padding den Text zur Seite. |

Ändere bei `.d` zum Vergleich `display: inline-block;`. Jetzt gilt die Breite von 300px, und die Zeile wird so hoch, dass alles hineinpasst.
