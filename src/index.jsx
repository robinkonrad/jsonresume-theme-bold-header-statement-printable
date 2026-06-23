import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import Resume from './Resume.jsx';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderDocument(element, options = {}) {
  const sheet = new ServerStyleSheet();

  try {
    const body = renderToStaticMarkup(sheet.collectStyles(element));
    const styles = sheet.getStyleTags();
    const fonts = (options.fonts || [])
      .map((href) => `<link rel="stylesheet" href="${escapeHtml(href)}">`)
      .join('\n');
    const title = escapeHtml(options.title || 'Resume');

    return `<!doctype html>
<html lang="${escapeHtml(options.lang || 'en')}" dir="${escapeHtml(options.dir || 'ltr')}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  ${fonts}
  ${styles}
  ${options.headAfterStyles || ''}
</head>
<body>${body}</body>
</html>`;
  } finally {
    sheet.seal();
  }
}

export function render(resume) {
  return renderDocument(<Resume resume={resume} />, {
    fonts: [
      'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&display=swap',
    ],
    headAfterStyles: `<style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      margin: 0;
      padding: 0;
      background: #f5f5f5;
    }
    @media print {
      body {
        background: white;
      }
      @page {
        margin: 0.5in;
      }
    }
  </style>`,
    lang: 'en',
    dir: 'ltr',
    title: `${resume.basics?.name || 'Resume'} - Resume`,
    includeTokensCss: false,
  });
}
