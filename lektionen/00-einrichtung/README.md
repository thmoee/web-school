# Lektion 00 – Einrichtung

In dieser Lektion richtest du alles ein, was du für den Kurs brauchst. Danach kannst du eine Webseite bearbeiten, sie im Browser ansehen und mit den Entwicklertools hineinschauen.

## Was eine Webseite eigentlich ist

Eine Webseite besteht aus Textdateien. Der Browser lädt sie und setzt sie zusammen:

- **HTML** beschreibt den *Inhalt* und seine Struktur: Das ist eine Überschrift, das ist eine Liste, das ist ein Link.
- **CSS** beschreibt das *Aussehen*: Farben, Abstände, Schriften, Layout.
- **JavaScript** beschreibt das *Verhalten*: Was passiert, wenn man klickt, tippt oder Daten lädt.

**TypeScript** ist JavaScript mit Typen. Der Browser versteht nur JavaScript, deshalb wird TypeScript vorher in JavaScript übersetzt. Dazu kommen wir in Modul 3.

Keine dieser Dateien braucht ein spezielles Programm. Du könntest alles im einfachsten Texteditor schreiben. Ein guter Editor macht es nur viel angenehmer.

## 1. VS Code installieren

Lade [Visual Studio Code](https://code.visualstudio.com/) herunter und installiere es.

Öffne dann den **ganzen Kursordner**: *Datei → Ordner öffnen…* und wähle `web-school`. Wichtig ist der Ordner, nicht eine einzelne Datei. Links siehst du jetzt den Explorer mit allen Lektionen.

## 2. Live Server installieren

Live Server ist eine Erweiterung für VS Code. Sie startet einen kleinen Webserver auf deinem Rechner und lädt die Seite im Browser automatisch neu, sobald du speicherst.

Wenn du den Kursordner öffnest, schlägt VS Code dir die Erweiterung unten rechts vor. Falls nicht: Öffne die Erweiterungen (`Strg+Umschalt+X`), suche nach **Live Server** von Ritwick Dey und installiere sie.

So öffnest du eine Seite: Rechtsklick auf eine `.html`-Datei im Explorer → **Open with Live Server**. Im Browser steht dann eine Adresse wie `http://127.0.0.1:5500/lektionen/...`.

> **Warum nicht einfach die Datei doppelklicken?** Für einfache Seiten geht das auch. Aber manches funktioniert nur über einen Server, zum Beispiel die Prüfseiten `check.html` und später das Laden von Daten mit TypeScript. Gewöhn dir Live Server deshalb gleich an.

## 3. Die Entwicklertools

Jeder Browser hat eingebaute Entwicklertools, kurz **DevTools**. Du öffnest sie mit `F12` oder `Strg+Umschalt+I`. Oder mit Rechtsklick auf irgendetwas auf der Seite → **Untersuchen**.

Die zwei wichtigsten Bereiche für den Anfang:

- **Elemente** (in Firefox heißt er **Inspektor**) zeigt das HTML so, wie der Browser es verstanden hat. Du kannst hier Text und Code direkt ändern und siehst sofort das Ergebnis. Aber nur bis zum nächsten Neuladen, deine Datei bleibt unverändert.
- **Konsole** zeigt Fehlermeldungen. Außerdem kannst du hier JavaScript eintippen und direkt ausführen.

Du wirst die DevTools ständig benutzen. Wenn etwas nicht so aussieht, wie du denkst: Rechtsklick → Untersuchen.

## 4. Nützliche Tastenkürzel in VS Code

Auf dem Mac nimmst du `Cmd` statt `Strg`.

| Kürzel | Was es tut |
|---|---|
| `Strg+S` | Speichern. Live Server lädt die Seite dann neu. |
| `Strg+P` | Datei nach Namen suchen und öffnen |
| `Strg+Umschalt+P` | Befehlspalette: Hier findest du jeden Befehl, z. B. „Dokument formatieren“ |
| `Strg+#` | Zeile aus- oder einkommentieren (auf englischer Tastatur `Strg+/`) |
| `Alt+↑` / `Alt+↓` | Zeile nach oben oder unten verschieben |
| `Strg+Z` | Rückgängig |
| `Strg+Ö` | Terminal ein- und ausblenden (auf englischer Tastatur ``Strg+` ``) |

## 5. Git: Zwischenstände speichern

Git ist ein Programm, das **Schnappschüsse** deines Ordners speichert. Ein Schnappschuss heißt **Commit**. Damit kannst du jederzeit sehen, was du geändert hast, und zu einem früheren Stand zurückkehren, wenn etwas kaputtgeht. Fast alle Entwicklerinnen und Entwickler benutzen Git jeden Tag.

### Einmalig einrichten

1. Installier Git von [git-scm.com](https://git-scm.com/downloads). Unter macOS reicht es, im Terminal `git --version` einzugeben. Dann bietet dir das System die Installation an. Unter Linux installierst du das Paket `git`.
2. Öffne ein Terminal. In VS Code: *Terminal → Neues Terminal* oder `Strg+Ö`. Das Terminal öffnet sich direkt in deinem Kursordner.
3. Sag Git, wer du bist. Das steht später an jedem Commit:

   ```sh
   git config --global user.name "Dein Name"
   git config --global user.email "du@example.com"
   ```

Falls du den Kurs noch nicht auf deinem Rechner hast, holst du ihn mit `git clone` und der Adresse, die du von der Kursleitung bekommst:

```sh
git clone https://github.com/BEISPIEL/web-school.git
```

### Der tägliche Ablauf

Diese fünf Befehle brauchst du fast jedes Mal:

```sh
git status                    # Was hat sich seit dem letzten Commit geändert?
git diff                      # Was genau hat sich geändert, Zeile für Zeile?
git add .                     # Alle Änderungen für den nächsten Commit vormerken
git commit -m "Lektion 01: Grundgerüst geschrieben"   # Schnappschuss speichern
git log --oneline             # Liste aller bisherigen Commits
```

Der Ablauf ist immer gleich: arbeiten → `git status` → `git add .` → `git commit -m "..."`. Mach einen Commit, wenn du eine Aufgabe fertig hast, und spätestens am Ende jedes Treffens.

Die Nachricht nach `-m` beschreibt kurz, was du getan hast. „Lektion 02: Bilder und Links eingebaut“ hilft dir in drei Wochen weiter, „Änderungen“ nicht.

`git diff` zeigt nur Änderungen, die noch nicht mit `git add` vorgemerkt sind. Zum Verlassen von `git diff` und `git log` drückst du `q`.

### Wenn etwas schiefgeht

```sh
git restore uebung/index.html   # Datei auf den Stand des letzten Commits zurücksetzen
git restore .                   # ALLE Dateien auf den letzten Commit zurücksetzen
```

Damit holst du eine Übung zurück, die du völlig verbaut hast. Aber Vorsicht: Alles, was du seit dem letzten Commit an dieser Datei geändert hast, ist danach weg. Das lässt sich nicht rückgängig machen. Ein Grund mehr, oft zu committen.

### Neue Lektionen holen

```sh
git pull
```

Damit lädst du neue Lektionen und Korrekturen herunter. Mach vorher einen Commit, damit sich deine Änderungen und die neuen Dateien nicht in die Quere kommen.

### Und in VS Code?

VS Code hat links eine Leiste **Quellcodeverwaltung** (`Strg+Umschalt+G`), mit der du dasselbe per Klick machen kannst. Benutz am Anfang trotzdem die Befehle im Terminal. Dann verstehst du, was die Knöpfe eigentlich tun.

## So arbeitest du mit den Lektionen

Jede Lektion hat:

- eine `README.md` wie diese hier mit der Erklärung,
- eine `aufgaben.md` mit den Aufgaben,
- einen Ordner `uebung/` mit den Dateien, die du bearbeitest,
- einen Ordner `loesung/` mit einer möglichen Lösung,
- eine `check.html`, die deine Übung automatisch prüft.

Die `check.html` öffnest du auch mit Live Server. Lass den Tab offen, während du arbeitest: Bei jedem Speichern prüft er neu.

Wenn du mit einer Aufgabe fertig bist, machst du einen Commit.

**Weiter mit [`aufgaben.md`](aufgaben.md).**
