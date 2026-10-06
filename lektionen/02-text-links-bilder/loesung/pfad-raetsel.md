# Lösung: Pfad-Rätsel

```
website/
├── index.html
├── kontakt.html
├── bilder/
│   ├── logo.png
│   └── urlaub/
│       └── strand.jpg
└── blog/
    ├── artikel-1.html
    └── artikel-2.html
```

| | Du bist in … | willst zu … | Pfad |
|---|---|---|---|
| 1 | `index.html` | `logo.png` | `bilder/logo.png` |
| 2 | `index.html` | `artikel-1.html` | `blog/artikel-1.html` |
| 3 | `blog/artikel-1.html` | `artikel-2.html` | `artikel-2.html` |
| 4 | `blog/artikel-1.html` | `index.html` | `../index.html` |
| 5 | `blog/artikel-2.html` | `strand.jpg` | `../bilder/urlaub/strand.jpg` |
| 6 | `kontakt.html` | `strand.jpg` | `bilder/urlaub/strand.jpg` |

So kommst du drauf: Geh in Gedanken in den Ordner, in dem die Datei liegt. Von dort aus bedeutet jeder Ordnername „hinein“ und jedes `..` „eine Ebene hinaus“.

Bei 3 liegen beide Dateien im selben Ordner `blog/`, deshalb reicht der Dateiname. Bei 5 und 6 ist das Ziel dasselbe, aber der Pfad ist ein anderer, weil die Dateien an verschiedenen Orten liegen.

## Und was ist mit `/bilder/logo.png`?

Ein Pfad, der mit `/` beginnt, geht nicht von der aktuellen Datei aus, sondern vom **obersten Ordner des Servers**. Auf einer echten Website, bei der `website/` dieser oberste Ordner ist, funktioniert `/bilder/logo.png` deshalb von jeder Seite aus gleich.

Bei Live Server ist der oberste Ordner aber `web-school/`, also der ganze Kurs. `/bilder/logo.png` würde dort ins Leere zeigen. Bleib im Kurs deshalb bei relativen Pfaden ohne `/` am Anfang.
