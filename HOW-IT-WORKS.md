# Alpha — how it works

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

## Birth control and the ring
Birth control is free text: type whatever you use. If the name includes "ring", the entry gets a ring box (no tick box needed).
Everything about birth control is on the **Birth control** tab (nothing on Today, Me or the day log). The one exception, by request:
the calendar shows a small circle on days the ring went in (solid) or came out (dashed).
For a ring, that tab has a one-tap **Ring in/out today** button and an **Or add an earlier date** box: choose Put in / Taken out, pick the date, tap **Add this date**.
The choice flips after each date, so past dates can be entered quickly in order. **Ring history** lists them, each with ✕ to remove it.

## Backups
**Me → Save a backup** saves one file with everything, which you can keep in Files or iCloud Drive.
**Restore from a backup** puts it back (for example on a new phone).

## Where it lives
The app is installed from **https://alpha-womb.github.io** (GitHub account `alpha-womb`,
project `alpha-womb.github.io`). Only the app files are there, never your data.
To update it: change the files here, change `VERSION` in `sw.js`, then save and upload with git.
The phone picks up the new version the next time it opens the app with internet.

## Advice on the Today screen
Today shows boxes for the current phase: Hormonal changes, Food, Seeds, Exercise, Sleep (and Supplement in the luteal phase).
The wording is Riyo's approved text from the advice doc (https://claude.ai/artifact/MUsx7TLLQmVBMitSiPkKEv), copied word for word
into `ADVICE` and `SEEDS` near the top of the screens section in `index.html`. Change the doc first, then the app.
Seeds switch from flax + pumpkin to sesame + sunflower once the luteal phase starts (about day 15).

## Still to come
- Mood and symptom patterns, once there are a few cycles of entries.
