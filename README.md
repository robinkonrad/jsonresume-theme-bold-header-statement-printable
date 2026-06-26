# JSON Resume Theme: Bold Header Statement Printable

A compact, print-oriented [JSON Resume](https://jsonresume.org/) theme with a strong teal header, restrained section styling, and dense content blocks for multi-page resumes.

The renderer returns a complete HTML document. It is published as an ESM package and exposes a named `render` export.

## Install

```sh
npm install jsonresume-theme-bold-header-statement-printable
```

`react` and `react-dom` are peer dependencies. Install them in the application that renders the resume when they are not already present.

## Render a Resume

Pass a JSON Resume object to `render` and write the returned HTML to a file:

```js
import { writeFile } from 'node:fs/promises';
import { render } from 'jsonresume-theme-bold-header-statement-printable';
import resume from './resume.json' with { type: 'json' };

const html = render(resume);
await writeFile('resume.html', html);
```

Open `resume.html` in a browser or print it to PDF. The theme loads the Outfit font from Google Fonts; the browser needs network access for that font unless it is already cached.

## Print Layout

The theme is designed for compact printing:

- Print margins are set to `0.5in`.
- Content blocks use tighter vertical padding while preserving their horizontal padding.
- Work, education, project, volunteer, award, certificate, publication, and reference blocks request that browsers keep each block on one page.
- Section headings request that they remain with the content that follows.

Page-break behavior ultimately depends on the browser or PDF renderer. A block taller than the printable area cannot be kept on a single page.

## Supported Sections

The following JSON Resume fields are rendered when present:

- `basics`: name, label, contact details, profiles, and summary
- `work`
- `skills`
- `education`
- `projects`
- `volunteer`
- `awards`
- `certificates`
- `publications`
- `languages`
- `references`

The package does not render sections that are not listed above, such as `interests`.

## Development

```sh
npm install
npm run build
```

The build produces the distributable ESM module at `dist/index.js`.

## License

MIT
