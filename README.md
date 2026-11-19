# Data Analytics Portfolio

A two-page static GitHub Pages website:

- `index.html` — homepage
- `projects.html` — projects organized into **Labs** and **Executive summaries**
- `styles.css` — shared design
- `projects.js` — lists of project links

## Add your own projects

1. Create `labs/` and `summaries/` folders in the repository as needed.
2. Upload your exported `.html` reports (or `.pdf` documents) into the appropriate folder.
3. Open `projects.js` and add an object to the `labs` or `summaries` array, for example:

```js
const labs = [
  { title: "Data Cleaning Lab", description: "Cleaning and exploring data with pandas.", url: "labs/data-cleaning.html", tag: "PYTHON" },
];
```

Make sure the filename and URL match exactly. Until you add projects, the page displays a clear placeholder rather than broken links.

## Publish with GitHub Pages

Upload `index.html`, `projects.html`, `styles.css`, `projects.js`, and any project folders to the root of a public GitHub repository. Go to **Settings → Pages → Deploy from a branch**, select `main` and `/(root)`, and save.
