# Lektion 01 – HTML-Grundlagen

Eine Auffrischung: wie HTML aufgebaut ist und wie der Browser es liest. Einiges davon hast du bestimmt schon mal gesehen. Lies trotzdem alles, vor allem den letzten Abschnitt.

## Elemente und Tags

HTML besteht aus **Elementen**. Ein Element hat meistens ein Start-Tag, einen Inhalt und ein End-Tag:

```html
<p>Das ist ein Absatz.</p>
```

- `<p>` ist das Start-Tag.
- `Das ist ein Absatz.` ist der Inhalt.
- `</p>` ist das End-Tag. Der Schrägstrich macht den Unterschied.

Manche Elemente haben keinen Inhalt und deshalb auch kein End-Tag. Sie heißen **leere Elemente**:

```html
<img src="katze.jpg" alt="Eine schlafende Katze">
<br>
<meta charset="utf-8">
```

Vielleicht hast du schon `<br />` mit Schrägstrich am Ende gesehen. Das ist erlaubt, in HTML aber nicht nötig.

## Attribute

Attribute geben einem Element zusätzliche Informationen. Sie stehen immer im Start-Tag, in der Form `name="wert"`:

```html
<a href="https://de.wikipedia.org">Zur Wikipedia</a>
```

Hier sagt `href`, wohin der Link führt. Ein Element kann mehrere Attribute haben, getrennt durch Leerzeichen. Manche Attribute brauchen gar keinen Wert, zum Beispiel `<input required>`. Das siehst du in Lektion 04.

## Verschachtelung

Elemente können andere Elemente enthalten:

```html
<p>Das ist <strong>wirklich</strong> wichtig.</p>
```

Dabei gilt: Was zuletzt geöffnet wurde, wird zuerst geschlossen. Wie Klammern in der Mathematik.

```html
<!-- richtig -->
<p>Das ist <strong>wichtig</strong>.</p>

<!-- falsch: strong wird erst nach p geschlossen -->
<p>Das ist <strong>wichtig</p></strong>
```

Durch die Verschachtelung entsteht ein **Baum**: Jedes Element steckt in genau einem Elternelement und kann selbst Kinder haben. In den DevTools im Bereich *Elemente* siehst du diesen Baum. Mit den kleinen Pfeilen klappst du Äste auf und zu.

Einrückung macht den Baum im Code sichtbar. Dem Browser ist sie egal, dir aber nicht: Mit sauberer Einrückung siehst du sofort, was worin steckt.

## Das Grundgerüst

Jede HTML-Seite hat das gleiche Gerüst:

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Titel der Seite</title>
  </head>
  <body>
    <h1>Hallo Welt</h1>
  </body>
</html>
```

Zeile für Zeile:

| Code | Bedeutung |
|---|---|
| `<!DOCTYPE html>` | „Das ist modernes HTML.“ Ohne diese Zeile schaltet der Browser in einen alten Kompatibilitätsmodus, und manches verhält sich seltsam. |
| `<html lang="de">` | Das Wurzelelement, alles andere steckt darin. `lang` gibt die Sprache an. Dann sprechen Screenreader die Seite richtig aus, und der Browser trennt Wörter richtig. |
| `<head>` | Informationen *über* die Seite. Wird nicht angezeigt. |
| `<meta charset="utf-8">` | Die Zeichenkodierung. Sorgt dafür, dass ä, ö, ü, ß und Emojis richtig ankommen. |
| `<meta name="viewport" …>` | Damit die Seite auf dem Handy nicht winzig verkleinert dargestellt wird. Wichtig in Modul 2. |
| `<title>` | Text im Browser-Tab, in Lesezeichen und in Suchergebnissen. |
| `<body>` | Alles, was man auf der Seite sieht. |

**Tipp:** Tippst du in VS Code in einer leeren HTML-Datei `!` und drückst `Enter`, bekommst du ein fertiges Grundgerüst. Das ist *Emmet*, es ist in VS Code eingebaut. Schreib das Gerüst die ersten paar Male aber von Hand, bis du es auswendig kannst. Außerdem setzt Emmet `lang="en"`, das musst du jedes Mal ändern.

## Kommentare

```html
<!-- Das ist ein Kommentar. Der Browser ignoriert ihn. -->
```

Kommentare sind Notizen für Menschen. Aber Achtung: Im Quelltext kann sie jeder lesen, der die Seite besucht.

## Leerraum

Mehrere Leerzeichen und Zeilenumbrüche fasst der Browser zu *einem* Leerzeichen zusammen:

```html
<p>Hallo


        Welt</p>
```

Das wird angezeigt als „Hallo Welt“. Für Struktur benutzt du Elemente, keine Leerzeilen.

## Der Browser verzeiht (fast) alles

Wenn du in HTML einen Fehler machst, bekommst du keine Fehlermeldung. Der Browser rät, was du gemeint hast, und zeigt trotzdem etwas an.

Das ist gut, denn eine Webseite mit einem kleinen Fehler bleibt benutzbar. Es ist aber auch schlecht: Fehler bleiben unbemerkt und zeigen sich manchmal an einer ganz anderen Stelle, als sie im Code stehen.

Zwei Ansichten helfen dir, solche Fehler zu finden:

- Der **Quelltext** (`Strg+U`) zeigt, was du *geschrieben* hast.
- Der Bereich **Elemente** in den DevTools zeigt, was der Browser *daraus gemacht* hat.

Wenn die beiden sich unterscheiden, hast du einen Fehler gefunden. Das übst du in den Aufgaben.

Außerdem gibt es den [W3C-Validator](https://validator.w3.org/#validate_by_input). Dort kannst du deinen Code einfügen und bekommst eine Liste aller Fehler.

**Weiter mit [`aufgaben.md`](aufgaben.md).**
