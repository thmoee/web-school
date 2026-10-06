# Lektion 04 – Formulare

Mit Formularen geben Menschen Daten ein: eine Anmeldung, eine Suche, eine Bestellung. In dieser Lektion baust du Formulare. In Modul 3 wertest du sie mit TypeScript aus.

## Ein erstes Formular

```html
<form>
  <label for="name">Name</label>
  <input type="text" id="name" name="name">

  <button type="submit">Absenden</button>
</form>
```

- `<form>` umschließt alle Felder, die zusammen abgeschickt werden.
- `<input>` ist ein Eingabefeld. Es ist ein leeres Element, hat also kein End-Tag.
- `<label>` ist die Beschriftung. Das `for`-Attribut verweist auf die `id` des Feldes, zu dem sie gehört.
- `name` legt fest, unter welchem Namen der Wert verschickt wird. Ein Feld ohne `name` wird nicht mitgeschickt.
- `<button type="submit">` schickt das Formular ab.

`id` und `name` haben oft denselben Wert, sind aber zwei verschiedene Dinge: `id` ist für die Seite selbst (zum Beispiel für das Label), `name` ist für die verschickten Daten.

## Warum jedes Feld ein Label braucht

- **Klickfläche:** Wer auf ein Label klickt, landet im zugehörigen Feld. Bei Checkboxen und Radio-Buttons ist das viel angenehmer, als den kleinen Kreis zu treffen.
- **Screenreader** lesen das Label vor, sobald man im Feld ist. Ohne Label hört man nur „Eingabefeld“ und weiß nicht, was hinein soll.

Statt `for` und `id` kannst du das Feld auch direkt ins Label packen:

```html
<label>Name <input type="text" name="name"></label>
```

Ein `placeholder` ersetzt kein Label. Der Platzhaltertext verschwindet, sobald man tippt, und ist oft schwer lesbar. Er eignet sich höchstens für ein Beispiel: `placeholder="z. B. alex@example.com"`.

## Was beim Absenden passiert

Ohne weitere Angaben schickt der Browser das Formular an dieselbe Seite und hängt die Daten an die Adresse an:

```
index.html?name=Alex&email=alex%40example.com
```

Probier das unbedingt aus, dann siehst du genau, welche Daten verschickt werden.

Echte Websites schicken Formulare an einen Server, der die Daten verarbeitet, zum Beispiel mit `<form action="/anmelden" method="post">`. Einen Server haben wir nicht. In Modul 3 fängst du das Absenden stattdessen mit TypeScript ab.

## Feldtypen

Das `type`-Attribut bestimmt, was für ein Feld ein `<input>` ist:

| Typ | Wofür | Besonderheit |
|---|---|---|
| `text` | kurzer Text | der Standard, wenn du `type` weglässt |
| `email` | E-Mail-Adresse | prüft das Format, das Handy zeigt eine Tastatur mit `@` |
| `password` | Passwort | zeigt Punkte statt Zeichen |
| `number` | Zahl | mit `min`, `max` und `step` |
| `date` | Datum | der Browser zeigt einen Kalender |
| `tel` | Telefonnummer | Handy zeigt Zifferntastatur |
| `checkbox` | an oder aus | |
| `radio` | eine Auswahl aus mehreren | siehe unten |
| `range` | Schieberegler | mit `min` und `max` |
| `color` | Farbauswahl | |

Für längeren Text gibt es `<textarea>`. Es ist **kein** leeres Element: Was zwischen den Tags steht, ist der vorausgefüllte Text.

```html
<label for="nachricht">Nachricht</label>
<textarea id="nachricht" name="nachricht" rows="4"></textarea>
```

## Auswahl: Radio-Buttons, Checkboxen, Auswahllisten

**Radio-Buttons** für „genau eins von mehreren“. Alle Buttons einer Gruppe haben denselben `name`, aber verschiedene `value`s. Eine Gruppe gehört in ein `<fieldset>`, dessen `<legend>` die Frage ist:

```html
<fieldset>
  <legend>Wie kommst du?</legend>
  <label><input type="radio" name="anreise" value="bahn" checked> Mit der Bahn</label>
  <label><input type="radio" name="anreise" value="rad"> Mit dem Rad</label>
  <label><input type="radio" name="anreise" value="auto"> Mit dem Auto</label>
</fieldset>
```

`checked` wählt eine Option vor. Verschickt wird der `value` der gewählten Option, hier zum Beispiel `anreise=rad`.

**Checkboxen** für „ja oder nein“. Eine Checkbox ohne Haken wird gar nicht mitgeschickt.

```html
<label><input type="checkbox" name="newsletter"> Newsletter abonnieren</label>
```

**Auswahllisten** für viele Optionen, die als Radio-Buttons zu viel Platz bräuchten:

```html
<label for="land">Land</label>
<select id="land" name="land">
  <option value="de">Deutschland</option>
  <option value="at">Österreich</option>
  <option value="ch">Schweiz</option>
</select>
```

## Eingebaute Prüfung

Der Browser kann Eingaben vor dem Absenden prüfen:

| Attribut | Bedeutung |
|---|---|
| `required` | Pflichtfeld |
| `minlength`, `maxlength` | Mindest- und Höchstlänge von Text |
| `min`, `max` | kleinster und größter Wert bei Zahlen und Datum |
| `pattern` | ein Muster, dem die Eingabe folgen muss |

Ist etwas falsch, zeigt der Browser beim Absenden eine Meldung und schickt nichts ab.

Wichtig: Diese Prüfung ist nur eine Hilfe für die Menschen, die das Formular ausfüllen. Sie ist **kein Schutz**. Jeder kann sie in den DevTools mit zwei Klicks abschalten. Ein echter Server muss alles noch einmal selbst prüfen.

## Buttons

| Code | Was passiert |
|---|---|
| `<button type="submit">` | schickt das Formular ab (Standard in einem Formular) |
| `<button type="button">` | nichts. Brauchst du später mit TypeScript. |
| `<button type="reset">` | leert alle Felder. Selten nützlich, eher ärgerlich, wenn man ihn versehentlich trifft. |

Schreib `type` immer dazu, dann ist klar, was der Button tun soll.

**Weiter mit [`aufgaben.md`](aufgaben.md).**
