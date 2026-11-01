# Alpha Womb — how it works

A period tracker that lives on your iPhone home screen. All your data stays on the phone.

## The files
- `index.html` — the whole app (screens, cycle maths, Clue import, backups).
- `manifest.json`, `icon-180.png`, `icon-512.png`, `icon.svg` — name and icon for the home screen.
- `sw.js` — keeps a copy of the app on the phone so it opens without internet.
  Change `VERSION` in it whenever the app is updated.

None of these files contain your data. Your data is saved inside the app on the phone.

## How the app works things out
- **A period** is a run of light/medium/heavy days. Gaps of up to 2 days still count as one period.
  Spotting on its own doesn't start a period.
- **Average cycle** = the average gap between your last 6 period start dates.
  Gaps shorter than 15 or longer than 60 days are ignored, because they're probably missed logging.
- **Next period** = last period start + average cycle.
- **Ovulation (rough)** = 14 days before the next expected period. The fertile window runs from 5 days before to 1 day after it.
- **Phases:** Menstrual (the period days) → Follicular → Ovulatory (ovulation day ± 1) → Luteal.

## Bringing in Clue data
In the Clue export, the file that matters is `measurements.json`. Send it to the phone (AirDrop or Files),
then go to **Me → Import from Clue**. Bleeding days go into the calendar. Symptoms (cramps, tiredness, bloating, etc.)
are kept on each day for spotting patterns later. Importing never overwrites days you've already logged.

## Backups
**Me → Save a backup** saves one file with everything, which you can keep in Files or iCloud Drive.
**Restore from a backup** puts it back (for example on a new phone).

## Where it lives
The app is installed from **https://alpha-womb.github.io** (GitHub account `alpha-womb`,
project `alpha-womb.github.io`). Only the app files are there, never your data.
To update it: change the files here, change `VERSION` in `sw.js`, then save and upload with git.
The phone picks up the new version the next time it opens the app with internet.

## Still to come
- Advice for each phase (food, seeds, exercise, sleep), researched and approved by you first.
- Mood and symptom patterns, once there are a few cycles of entries.
