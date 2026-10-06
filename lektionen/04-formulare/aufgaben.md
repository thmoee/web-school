# Aufgaben – Lektion 04

## ⭐ 1. Anmeldung zum Spieleabend

Bau in `uebung/index.html` ein Anmeldeformular mit diesen Feldern:

1. **Name**: Pflichtfeld
2. **E-Mail**: Pflichtfeld, mit dem passenden Feldtyp
3. **Anzahl Personen**: eine Zahl von 1 bis 6
4. **Lieblingsart von Spielen**: eine Auswahlliste mit mindestens drei Optionen, z. B. Strategie, Party, Kooperativ, Egal
5. **Essen**: Radio-Buttons für „Alles“, „Vegetarisch“ und „Vegan“, gruppiert in einem `<fieldset>` mit `<legend>`
6. **„Ich bringe Snacks mit“**: eine Checkbox
7. **Nachricht**: ein mehrzeiliges Textfeld
8. Ein Button zum **Absenden**

Jedes Feld bekommt ein `<label>` und einen `name`.

Prüf mit `check.html`.

## ⭐ 2. Absenden ausprobieren

Öffne `uebung/index.html` mit Live Server, füll das Formular aus und schick es ab. Schau dir dann die Adressleiste an.

- Findest du jeden Wert wieder? Unter welchem Namen?
- Was steht dort für die Radio-Buttons?
- Was passiert mit der Checkbox, wenn sie keinen Haken hat?
- Lösch bei einem Feld kurz den `name` und schick nochmal ab. Was fehlt jetzt?

## ⭐ 3. Nur mit der Tastatur

1. Klick auf jedes Label. Landest du jedes Mal im richtigen Feld?
2. Füll das Formular jetzt **ohne Maus** aus. Mit `Tab` springst du zum nächsten Feld, mit `Umschalt+Tab` zurück, mit der `Leertaste` setzt du einen Haken, und mit den Pfeiltasten wählst du Radio-Buttons und Optionen.

Klappt alles? Ist die Reihenfolge sinnvoll?

## ⭐⭐ 4. Die Prüfung des Browsers

1. Schick das Formular leer ab. Was passiert?
2. Gib eine E-Mail-Adresse ohne `@` ein. Und dann bei den Personen eine `10`.
3. Öffne jetzt die DevTools, such im Bereich *Elemente* dein Namensfeld und lösch dort das Attribut `required` (Doppelklick darauf, dann Entf). Schick das Formular ohne Namen ab.

Was bedeutet das für eine echte Website, die Anmeldungen speichert?

## ⭐⭐ 5. Mehr Felder

- Wähl bei den Radio-Buttons eine Option vor.
- Begrenz die Nachricht auf 300 Zeichen.
- Füg ein Feld **Wunschtermin** mit Datumsauswahl hinzu. Es soll erst ab dem 1. November 2026 gehen.

## ⭐⭐⭐ 6. Muster

Füg ein Feld **Spitzname** hinzu. Erlaubt sind nur 3 bis 12 Buchstaben, keine Zahlen oder Sonderzeichen. Dafür brauchst du `pattern`. Such auf [MDN](https://developer.mozilla.org/de/docs/Web/HTML/Attributes/pattern) heraus, wie es funktioniert.

Was zeigt der Browser als Fehlermeldung an? Mit dem `title`-Attribut kannst du ihm einen Hinweis mitgeben, der in die Meldung übernommen wird.

## Projekt-Schritt

Bau in dein Kursprojekt ein Formular ein, das zu deinem Thema passt: ein Kontaktformular, ein Gästebuch-Eintrag, eine kleine Umfrage. Am besten auf einer eigenen Seite, die in der Navigation verlinkt ist.

Damit ist Modul 1 abgeschlossen. Öffne [`projekt/check.html`](../../projekt/check.html) und prüf, ob dein Projekt bereit für Modul 2 ist.
