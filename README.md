# Personal CV Website

A 5-page personal CV site — plain HTML, CSS, and JavaScript. No build tools, no
dependencies. Open `index.html` (or serve the folder) and it runs.

## Pages

| File               | Page                          |
| ------------------ | ----------------------------- |
| `index.html`       | About Me (home)               |
| `education.html`   | Education + certificates      |
| `sports.html`      | Sports & athletics            |
| `activities.html`  | Extracurricular activities    |
| `volunteering.html`| Volunteering & community      |

## Preview locally

```powershell
python -m http.server 5500
# then open http://localhost:5500
```

## Replacing the placeholders (important)

Everything on the site is **dummy content**. To make it real:

### 1. Name and contact details

The name "John Doe", email `john.doe@example.com`, and phone `+254 712 345 678`
appear on all 5 pages. Do a find-and-replace across `*.html` for:

- `John Doe` → your name
- `john.doe@example.com` → your email
- `+254 712 345 678` → your phone
- `JD` (in `favicon.svg` and the `.brand-mark` badges) → your initials

### 2. Photos

Replace each image file with your own photo, keeping the same file name (any
JPG works; the layout crops to fit). Current placeholder files:

| File                                      | Where it shows                        | Replace with                                  |
| ----------------------------------------- | ------------------------------------- | --------------------------------------------- |
| `images/portrait.jpg`                     | Home hero (portrait)                  | A clear portrait of you                       |
| `images/education/graduation-1.jpg`       | Education / certificates gallery      | Your graduation photo                         |
| `images/education/certificate-1.jpg`      | Education / certificates gallery      | Scan of your KCSE (or equivalent) certificate |
| `images/education/certificate-2.jpg`      | Education / certificates gallery      | Scan of your first-aid certificate            |
| `images/education/certificate-3.jpg`      | Education / certificates gallery      | Scan of a course certificate                  |
| `images/sports/swimming-1.jpg`            | Sports / swimming section             | You at a swimming gala                        |
| `images/sports/swimming-2.jpg`            | Sports / swimming section             | Medal ceremony / podium photo                 |
| `images/sports/football-1.jpg`            | Sports / football section             | You playing football                          |
| `images/sports/athletics-1.jpg`           | Sports / athletics section            | You at a track / cross-country event          |
| `images/activities/debate-1.jpg`          | Activities gallery                    | Debate / public speaking photo                |
| `images/activities/music-1.jpg`           | Activities gallery                    | Music / choir performance photo               |
| `images/activities/robotics-1.jpg`        | Activities gallery                    | Robotics / science club photo                 |
| `images/volunteering/cleanup-1.jpg`       | Volunteering gallery                  | Community clean-up photo                      |
| `images/volunteering/mentoring-1.jpg`     | Volunteering gallery                  | Mentoring / teaching photo                    |
| `images/volunteering/fooddrive-1.jpg`     | Volunteering gallery                  | Food / clothing drive photo                   |

After replacing a photo, remove its `Sample photo` tag in the matching HTML
file (search for `sample-tag`).

### 3. Text

Browse each page and edit the paragraphs, dates, and results directly in
the HTML — the markup is intentionally simple and commented.

## Adding a new gallery photo

Copy an existing `<figure class="gallery-item">` block, change the image path,
caption, and date. Click-to-enlarge (lightbox) works automatically.

## Deploying updates

```powershell
git add .
git commit -m "Update content"
git push
```

GitHub Pages rebuilds automatically within a minute or two.

## Structure

```
├── index.html            About Me
├── education.html        Education
├── sports.html           Sports
├── activities.html       Extracurricular activities
├── volunteering.html     Volunteering & community
├── css/styles.css        Design system (warm paper theme, document-style layout)
├── js/main.js            Mobile nav, lightbox, scroll reveal
├── images/               All photos (organized by page)
└── favicon.svg           Browser tab icon
```
