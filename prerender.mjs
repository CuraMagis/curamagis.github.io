import { createServer } from 'node:http';
import { readFileSync, writeFileSync } from 'node:fs';
import { join, extname } from 'node:path';
import puppeteer from 'puppeteer';

const PORT = 3333;
const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.jsx': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
};

const server = createServer((req, res) => {
  const url = req.url.split('?')[0];
  const filePath = join('.', url === '/' ? 'index.html' : url);
  try {
    const data = readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end();
  }
});

await new Promise(r => server.listen(PORT, r));
console.log(`Serving at http://localhost:${PORT}`);

const browser = await puppeteer.launch({
  headless: true,
  executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
});
const page = await browser.newPage();

page.on('console', msg => console.log('[browser]', msg.text()));

await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0' });
await page.waitForSelector('#root h1, #root [class]', { timeout: 20000 });
await new Promise(r => setTimeout(r, 1500));

const renderedRoot = await page.evaluate(() => document.getElementById('root').innerHTML);
console.log(`Captured root innerHTML (${renderedRoot.length} chars)`);

await browser.close();
server.close();

const template = readFileSync('index.html', 'utf8');
// Strip any previously injected pre-rendered content (idempotent re-runs)
const stripped = template.replace(/<div id="root">[\s\S]*?<\/div>/, '<div id="root"></div>');
const output = stripped.replace('<div id="root"></div>', `<div id="root">${renderedRoot}</div>`);
writeFileSync('index.html', output, 'utf8');
console.log(`Done. index.html is now ${output.length} bytes with pre-rendered content.`);
