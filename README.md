# Digital Portfolio — Prinston Sarfo Adu Tutu

A responsive, static portfolio built with plain HTML5, CSS3, and vanilla
JavaScript for the Cloud Computing Technologies program at George Brown
College. No frameworks, no build step, no database — just files you can host
for free.

---

## 1. Project Overview

This site presents your profile, technical skills, work experience, projects,
education, certifications, resume, and contact information in a single-page
layout with a sticky navigation bar. It's built to be graded easily: every
rubric category has its own section, linked directly from the nav bar.

---

## 2. Folder & File Structure

```
digital-portfolio/
├── index.html                 → all page content and structure
├── css/
│   └── styles.css             → all styling (colors, layout, responsiveness)
├── js/
│   └── script.js              → all interactivity (nav, theme, modal, etc.)
├── assets/
│   ├── images/
│   │   ├── profile-photo.jpg  → your headshot (add this file)
│   │   ├── multi-tier-java-app/screenshot.png
│   │   ├── m365-admin/screenshot.png
│   │   ├── windows-server-infra/screenshot.png
│   │   ├── hyperv-dr/screenshot.png
│   │   ├── networking-lab/screenshot.png
│   │   └── linux-admin/screenshot.png
│   ├── certificates/          → optional certificate images/PDFs
│   └── documents/
│       ├── Prinston-Resume.pdf
│       ├── Unofficial-Transcript.pdf
│       └── Recommendation-Letter.pdf
├── README.md                  → this file
└── .gitignore
```

Empty folders contain a `README.txt` placeholder so Git keeps them — delete
each placeholder once you've added a real file to that folder.

---

## 3. How to Open the Website Locally

**Simplest option:** double-click `index.html` to open it in your browser.
Almost everything will work. The one exception is the automatic "is the
resume PDF there yet?" check, which needs a local server (see below) to run
correctly — it's skipped safely otherwise.

**Recommended option — VS Code Live Server:**
1. Open the `digital-portfolio` folder in VS Code.
2. Install the "Live Server" extension (by Ritwick Dey) from the Extensions
   panel if you don't have it.
3. Right-click `index.html` → **Open with Live Server**.
4. Your browser opens the site at an address like
   `http://127.0.0.1:5500/index.html`, and it reloads automatically as you
   edit files.

---

## 4. How to Replace Your Name & Contact Information

Your name, email, phone, and links are already filled in throughout
`index.html`. If anything changes:

- **Name:** search for `Prinston Sarfo Adu Tutu` in `index.html` and update
  every instance (hero, footer, `<title>`).
- **Email:** update the two spots — `mailto:Prinstonsarfo9@gmail.com` (the
  link) and `data-email="Prinstonsarfo9@gmail.com"` (used by the copy
  button) — in the Contact section.
- **Phone:** update the `tel:` link and its display text in the Contact
  section.
- **LinkedIn / GitHub:** search for the URLs
  `https://www.linkedin.com/in/prinston-sarfo-adu-tutu-aa6944201` and
  `https://github.com/Prinstonn` — each appears in the hero, contact section,
  and footer.

---

## 5. Profile Photograph

By request, this portfolio does not include a profile photo — the hero
section is text-only. If you change your mind later, add an image tag
back into the `.hero` section of `index.html` and a matching `<img>` /
`object-fit: cover` rule in `css/styles.css`.

---

## 6. How to Add Project Screenshots

Each project's screenshot lives in a folder named after its `id` (matching
the `PROJECTS` array in `js/script.js`), e.g.
`assets/images/multi-tier-java-app/screenshot.png`. The card image and its
`alt` text are generated automatically from `project.id` and `project.title`
in `projectImagePlaceholder()` — you don't need to edit HTML to swap images.

**To replace a screenshot:** just overwrite the existing file in that
project's folder (keep the filename `screenshot.png`, or update the path in
`projectImagePlaceholder()` if you rename it).

**To add a screenshot for a new project:** create a folder named after its
`id` inside `assets/images/`, add `screenshot.png` there, and the card will
pick it up automatically.

The modal's "Screenshot Gallery" (opened via "View Project Details") still
shows placeholder tiles — see `buildGallery()` in `js/script.js` to swap
those for additional real screenshots if you'd like more than one image per
project.

---

## 7. How to Add or Remove Projects

All project content lives in the `PROJECTS` array at the top of
`js/script.js` — cards and the details modal are both generated from it, so
you only edit content in one place.

- **To add a project:** copy an existing object in the `PROJECTS` array and
  update every field (`id`, `title`, `category`, `summary`, etc.).
- **To remove a project:** delete its object from the array.
- **Categories** used for filtering are: `devops`, `cloud`, `systems`,
  `networking`. Use one of these (or add a new filter button in `index.html`
  to match a new category).

---

## 8. How to Add Your Resume, Transcript, Certificate & Recommendation Letter

Place PDFs in `assets/documents/`:

| File | Purpose |
|---|---|
| `Prinston-Resume.pdf` | Powers the "Open Resume" / "Download PDF" buttons |
| `Unofficial-Transcript.pdf` | Shown as a "View Document" card in Credentials |
| `Recommendation-Letter.pdf` | Shown as a "View Document" card in Credentials |

If you don't have the transcript or recommendation letter ready, delete the
corresponding `<article class="doc-card">` block in `index.html` (inside the
`#credentials` section, look for the HTML comment above each card).

**Privacy reminder:** before adding your transcript, remove your student
number, home address, date of birth, and any login information from the
PDF.

Certificates (e.g. an AWS certificate image or PDF) can go in
`assets/certificates/` — link to them from the Certifications list in
`index.html` if you'd like a "View Certificate" button.

---

## 9. How to Update GitHub, LinkedIn & Project Links

- **GitHub / LinkedIn:** see section 4 above.
- **Project GitHub links:** in `js/script.js`, each project object has a
  `github` field set to `null`. Once a project has a real, working
  repository, set it to the URL as a string, e.g.
  `github: "https://github.com/Prinstonn/multi-tier-java-app"`. The "View on
  GitHub" button appears automatically once this is set.
- **Project documentation links:** the same applies to the `docs` field.

Do not invent GitHub URLs — leave `github: null` until a real repository
exists.

---

## 10. How to Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `digital-portfolio`) and push this
   project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/digital-portfolio.git
   git push -u origin main
   ```
2. On GitHub, open the repository → **Settings** → **Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch",
   branch `main`, folder `/ (root)`.
4. Save. GitHub gives you a live URL, typically:
   `https://YOUR-USERNAME.github.io/digital-portfolio/`
5. It can take a minute or two to go live the first time.

---

## 11. How to Deploy to Vercel

1. Push the project to GitHub (see steps above).
2. Go to [vercel.com](https://vercel.com) and sign in (GitHub login is
   easiest).
3. Click **Add New → Project**, then select your `digital-portfolio`
   repository.
4. Framework preset: choose **Other** (this is a static site — no build
   command or output directory is needed).
5. Click **Deploy**. Vercel gives you a live URL such as
   `https://digital-portfolio-yourname.vercel.app`.

---

## 12. How to Confirm the Professor Can Access the Site

1. Open the deployed URL in a **private/incognito browser window** (so
   you're not relying on being logged into anything).
2. Confirm the page loads with no sign-in prompt, no "404", and no broken
   images or links.
3. Click through every nav link, project's "View Project Details," the
   resume buttons, and the contact links.
4. Test on your phone (or resize your browser window) to confirm the mobile
   menu and layout work.
5. Share the exact URL you tested — don't send a `localhost` or file path.

---

## 13. Final Submission Checklist

- [ ] Replace all `[REPLACE: ...]` placeholders (see list in section 15)
- [ ] Proofread the biography, experience, and project descriptions
- [ ] Add a professional photograph, or leave the fallback icon if you'd
      rather not include one
- [ ] Add the final resume PDF
- [ ] Confirm GitHub and LinkedIn links are correct and working
- [ ] Add real screenshots to every published project
- [ ] Confirm every button and navigation link works
- [ ] Remove any project or document not ready for public viewing
- [ ] Remove sensitive information from the transcript
- [ ] Test the portfolio on mobile and desktop
- [ ] Test the deployed website in an incognito/private browser window
- [ ] Confirm no login or permission request appears
- [ ] Submit the correct live URL to D2L before the deadline

---

## 14. Privacy Checklist

Before publishing, double-check that none of the following appear anywhere
on the public site (including inside uploaded PDFs):

- [ ] Student number
- [ ] Home address
- [ ] Date of birth
- [ ] Login credentials or passwords
- [ ] Any other identifier you wouldn't want publicly searchable

---

## 15. Customization Checklist — Every Placeholder to Replace

Search `index.html` for these exact strings (Ctrl+F / Cmd+F):

| Placeholder | Location | What to do |
|---|---|---|
| `[REPLACE: FUTURE CERTIFICATION NAME]` | Certifications list | Name of a certification once you've earned it (delete the `<li>` if you have none to add yet) |
| `[REPLACE: ISSUING ORGANIZATION]` | Certifications list | Organization that issued the future certification |
| `[REPLACE: DOCUMENT PATH]` (in comments) | Credentials section | Confirms where transcript/recommendation PDFs belong |
| `[REPLACE: PROJECT GITHUB URL]` (in comments, also `github: null` in `js/script.js`) | Project cards & modal | Real repository URL, once one exists |
| `[REPLACE: PROJECT IMAGE ...]` (in `js/script.js`) | Project card images | Real screenshots — see section 6 |
| `[REPLACE: screenshot N ...]` (in `js/script.js`) | Project modal gallery | Real screenshots — see section 6 |

Also confirm (already filled in, but double-check for typos):

- Name, email, phone
- LinkedIn URL: `www.linkedin.com/in/prinston-sarfo-adu-tutu-aa6944201`
- GitHub URL: `https://github.com/Prinstonn`
- Resume path: `assets/documents/Prinston-Resume.pdf`

---

## A note on the design

The visual direction is a dark "cloud console" theme: deep navy background,
cyan/blue/violet accents, and terminal-style section labels (like
`$ whoami` and `$ ls skills/`), paired with a small node-graph illustration
in the hero meant to evoke connected cloud infrastructure. It's intended to
feel like genuine, deliberate student work rather than a generic template —
feel free to adjust colors and copy in `css/styles.css` and `index.html` to
make it feel even more like your own.
