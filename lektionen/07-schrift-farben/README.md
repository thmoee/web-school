# Lektion 07 – Schrift, Farben und Custom Properties

Die meisten Webseiten bestehen vor allem aus Text. Ob man ihn gern liest, entscheiden Schrift, Größe, Zeilenabstand und Farben. Und mit Custom Properties legst du deine Farben an einer einzigen Stelle fest.

## Schriftarten

```css
body {
  font-family: "Source Sans 3", Arial, sans-serif;
}
```

Das ist ein **Schriftstapel**: Der Browser nimmt die erste Schrift, die auf dem Gerät vorhanden ist. Schriftnamen mit Leerzeichen stehen in Anführungszeichen. Am Ende steht immer eine **generische Familie**, die es überall gibt:

| Familie | Aussehen |
|---|---|
| `serif` | mit Füßchen, wie in einer Zeitung |
| `sans-serif` | ohne Füßchen, wie auf den meisten Webseiten |
| `monospace` | alle Zeichen gleich breit, wie im Code-Editor |
| `system-ui` | die Schrift des Betriebssystems, also auf jedem Gerät eine andere |

Eigene Schriftdateien kannst du mit `@font-face` einbinden. Lade sie dafür herunter und leg sie zu deiner Website. Bindest du sie direkt von einem fremden Server wie Google Fonts ein, schickt jeder Besuch die IP-Adresse dorthin. In Deutschland gab es dafür schon Abmahnungen.

## Schriftgröße: `rem` und `em`

Du kennst `rem` schon: ein Vielfaches der Grundschriftgröße, meist 16px. Es gibt auch `em`, und das ist ein Vielfaches der Schriftgröße **des Elternelements**. Das klingt ähnlich, kann aber überraschen:

```css
li {
  font-size: 0.8em;
}
```

Ein `<li>` in einer Liste ist 80 % so groß wie der Text drumherum. Ein `<li>` in einer verschachtelten Liste ist 80 % von 80 %, also 64 %. Und so weiter. Mit `rem` passiert das nicht, deshalb ist `rem` die sichere Wahl für Schriftgrößen. `em` ist praktisch, wenn etwas mit der Schrift wachsen *soll*, zum Beispiel das Padding eines Knopfes.

Und `px`? Wer im Browser eine größere Grundschrift einstellt, bekommt mit `rem` größeren Text, mit `px` nicht. Schriftgrößen gehören deshalb nie in `px`.

## Gut lesbarer Text

```css
body {
  font-size: 1.125rem;
  line-height: 1.6;
}

p {
  max-width: 65ch;
}
```

- **`line-height`** ist der Zeilenabstand. Schreib ihn **ohne Einheit**, dann ist er ein Vielfaches der jeweiligen Schriftgröße, auch bei Überschriften. Für Fließtext ist etwa 1.5 bis 1.7 angenehm, für große Überschriften weniger.
- **Zeilenlänge:** Am leichtesten liest man Zeilen mit 45 bis 75 Zeichen. Die Einheit `ch` ist ungefähr die Breite eines Zeichens.
- **`font-weight`** geht von `100` (sehr dünn) bis `900` (sehr fett). `400` ist `normal`, `700` ist `bold`. Welche Stufen es wirklich gibt, hängt von der Schrift ab.

## Farben schreiben

Dieselbe Farbe, viermal geschrieben (bei HSL ein bisschen gerundet):

```css
color: seagreen;
color: #2e8b57;
color: rgb(46 139 87);
color: hsl(146 50% 36%);
```

| Schreibweise | Bedeutung |
|---|---|
| Name | 148 Farben haben einen Namen. Gut zum Ausprobieren. |
| `#rrggbb` | Rot, Grün und Blau, je zwei Stellen von `00` bis `ff` (hexadezimal) |
| `rgb(r g b)` | dasselbe mit Zahlen von 0 bis 255 |
| `hsl(h s% l%)` | Farbton, Sättigung, Helligkeit |

**HSL** ist am einfachsten zu verstehen. Der Farbton ist ein Winkel auf dem Farbkreis: 0 ist Rot, 120 Grün, 240 Blau. Die Sättigung geht von 0 % (grau) bis 100 % (knallig), die Helligkeit von 0 % (schwarz) bis 100 % (weiß). Für eine hellere Variante einer Farbe änderst du nur die letzte Zahl.

Durchsichtig wird eine Farbe mit einem vierten Wert nach einem Schrägstrich: `rgb(0 0 0 / 50%)` ist halb durchsichtiges Schwarz.

## Kontrast

Hellgrauer Text auf weißem Grund sieht elegant aus, ist aber für viele Menschen schwer zu lesen: bei Sonne auf dem Handy, mit schlechten Augen oder auf einem billigen Bildschirm.

Gemessen wird das als **Kontrastverhältnis** von 1:1 (gleiche Farbe) bis 21:1 (schwarz auf weiß). Die Richtlinien für barrierefreie Webseiten (WCAG) verlangen:

- mindestens **4.5:1** für normalen Text
- mindestens **3:1** für großen Text ab etwa 24px, oder ab etwa 19px, wenn er fett ist

Die DevTools rechnen das für dich aus. Untersuch ein Element mit Text und klick im Bereich *Stile* auf das kleine Farbquadrat neben `color`. Im Farbwähler steht das Kontrastverhältnis. Ein Haken heißt: reicht. In Firefox findest du es auch im Bereich *Barrierefreiheit*.

## Custom Properties

In einem echten Stylesheet taucht dieselbe Farbe zehn-, zwanzigmal auf. Willst du sie ändern, musst du jede Stelle finden. Mit **Custom Properties**, auch CSS-Variablen genannt, legst du sie einmal fest:

```css
:root {
  --farbe-akzent: #1f6f5c;
  --farbe-text: #2b2b2b;
  --abstand: 1.5rem;
}

h1 {
  color: var(--farbe-akzent);
  margin-bottom: var(--abstand);
}
```

- Der Name beginnt immer mit zwei Bindestrichen. Den Rest denkst du dir aus.
- Mit `var(--name)` setzt du den Wert ein.
- `:root` ist das `<html>`-Element, also die Wurzel des Dokuments. Was dort steht, gilt überall.
- Mit `var(--name, blue)` gibst du einen Ersatzwert an, falls die Variable nicht existiert.

Custom Properties werden **vererbt**. Du kannst sie also für einen Teil der Seite neu setzen:

```css
.warnung {
  --farbe-akzent: #b42318;
}
```

Jetzt benutzt alles in `.warnung`, was `var(--farbe-akzent)` verwendet, die rote Farbe. Der Rest der Seite bleibt grün.

Benenn die Variablen nach ihrer Aufgabe, nicht nach der Farbe: `--farbe-akzent` statt `--gruen`. Dann passt der Name auch noch, wenn der Akzent orange wird. In Lektion 11 zahlt sich das richtig aus: Für einen Dark Mode änderst du nur noch die Variablen.

## In den DevTools

Im Bereich *Stile* siehst du bei `var(--farbe-akzent)` den eingesetzten Wert, wenn du mit der Maus darüberfährst. Die Variablen selbst findest du in der Regel für `:root`, ganz unten bei den geerbten Stilen. Änderst du dort einen Wert, ändert sich die ganze Seite.

**Weiter mit [`aufgaben.md`](aufgaben.md).**
