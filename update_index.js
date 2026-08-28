import fs from 'fs';

const html = fs.readFileSync('stitch_design.html', 'utf8');

// Find the start of the body content
let startIndex = html.indexOf('<header');
if (startIndex === -1) {
  startIndex = html.indexOf('<body');
  startIndex = html.indexOf('>', startIndex) + 1;
}

// Find the end of the body content
let endIndex = html.lastIndexOf('</body>');
if (endIndex === -1) {
  endIndex = html.length;
}

const bodyContent = html.substring(startIndex, endIndex).trim();

const astroContent = `---
import Layout from '../layouts/Layout.astro';
---

<Layout>
  ${bodyContent}
</Layout>
`;

fs.writeFileSync('src/pages/index.astro', astroContent);
console.log('index.astro updated.');
