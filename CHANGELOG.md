# Changelog

All notable changes to this package are documented in this file.

## [1.0.4] - 2026-06-26

### Changed

- Reworked the theme as a standalone ESM renderer with a named `render` export.
- Removed the workspace-only `@jsonresume/core` dependency and render the document locally with React and styled-components.
- Reduced typography and vertical content spacing for more compact printed resumes while retaining the existing horizontal block padding.
- Added print-specific page-break rules for content blocks, skill categories, and section headings.
- Updated package documentation to describe the actual renderer API, supported sections, print behavior, and local build process.

### Packaging

- Limit published files to the compiled `dist` bundle and package documentation so repository metadata, including any future `.github` directory, is excluded from npm deliveries.
