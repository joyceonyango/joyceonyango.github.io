
# Joyce Onyango — Portfolio Files

## What's in this folder

```
jekyll-theme/
│
├── index.html          ← Standalone home page (goes in repo ROOT)
├── about.html          ← Standalone about page (goes in repo ROOT)
├── experience.html     ← Standalone experience page (goes in repo ROOT)
├── projects.html       ← Standalone projects page (goes in repo ROOT)
├── contact.html        ← Standalone contact page (goes in repo ROOT)
│
├── _data/
│   ├── nav.yml         ← Fixed: /experience now has leading /
│   ├── experience.yml  ← Job data for Jekyll theme
│   ├── projects.yml    ← Project data for Jekyll theme
│   └── stack.yml       ← Tech stack grouped by category
│
├── _includes/
│   ├── header.html     ← Nav with dark mode toggle + burger menu
│   ├── footer.html     ← Footer (Joyce Onyango, open source link)
│   ├── job.html        ← Renders one job from experience.yml
│   ├── project.html    ← Renders one project from projects.yml
│   ├── building_svg.html  ← Fallback icon for jobs with no logo
│   ├── github_svg.html
│   ├── linkedin_svg.html
│   ├── link_svg.html
│   └── right_arrow.html
│
├── _layouts/
│   └── default.html    ← Fixed: removed Gourav Khunger branding
│                          Fixed: no more @gourav_khunger Twitter
│                          Fixed: og:site_name is now "Joyce Onyango"
│
└── _pages/
    ├── index.html      ← Jekyll version of home (uses Liquid + layout)
    ├── about.html      ← Jekyll version of about
    ├── experience.html ← Jekyll version of experience (loops experience.yml)
    ├── projects.html   ← Jekyll version of projects (loops projects.yml)
    └── contact.html    ← Jekyll version of contact
```

## Fixes applied

1. **Email links** — All Cloudflare `/cdn-cgi/l/email-protection#...` obfuscation
   removed. All email links now point to `mailto:joycedefense1@gmail.com`.

2. **nav.yml** — `/experience` now has the leading `/` (was `experience`).

3. **_layouts/default.html** — Removed all Gourav Khunger references:
   - `og:site_name` → "Joyce Onyango"
   - Twitter meta → @joyceonyango
   - Profile OG tags removed
   - GA script wrapped to skip if `google_analytics` is empty

## How to deploy

### Option A — Standalone HTML (simplest, works right now)
Copy `index.html`, `about.html`, `experience.html`, `projects.html`, `contact.html`
and `shared.css` to the **root** of your repo. GitHub Pages will serve them directly
without any build step.

### Option B — Jekyll theme (full setup)
Copy all files into your repo keeping the folder structure intact.
The standalone HTML pages in root serve the actual site; the Jekyll `_pages/`
and `_data/` files power the theme's dynamic layout system.

Make sure your GitHub Actions workflow has these steps in order:
1. npm install
2. npm run build  ← compiles Tailwind → assets/css/theme.css
3. bundle exec jekyll build
4. Deploy _site/ to gh-pages branch

## Shared.css
The standalone HTML pages all require `shared.css` in the repo root.
This file was created in the previous session — make sure it's committed.