import fs from 'fs';
import path from 'path';

// Check both local images and external URLs across src and index.html
function getFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== 'dist' && entry.name !== '.git') {
        getFiles(fullPath, files);
      }
    } else if (/\.(jsx?|tsx?|html|css)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

const filesToCheck = ['index.html', ...getFiles('src')];
let allText = '';
for (const file of filesToCheck) {
  if (fs.existsSync(file)) {
    allText += fs.readFileSync(file, 'utf8') + '\n';
  }
}

// 1. Check local images
const localImgRegex = /\/images\/[a-zA-Z0-9_\-\.]+\.(jpg|jpeg|png|webp|svg)/g;
const localMatches = allText.match(localImgRegex) || [];
const uniqueLocalImgs = [...new Set(localMatches)];

console.log(`\n=== VERIFYING LOCAL NIGERIAN AI IMAGES ===`);
console.log(`Found ${uniqueLocalImgs.length} unique local image references...`);

let missingLocal = [];
for (const imgPath of uniqueLocalImgs) {
  const diskPath = path.join(process.cwd(), 'public', imgPath.replace(/^\//, ''));
  if (fs.existsSync(diskPath)) {
    const stat = fs.statSync(diskPath);
    console.log(`✓ [${(stat.size / 1024).toFixed(0)} KB] ${imgPath}`);
  } else {
    console.error(`✗ MISSING: ${imgPath} -> ${diskPath}`);
    missingLocal.push(imgPath);
  }
}

// 2. Check Unsplash URLs (avatars etc)
const imgRegex = /https:\/\/images\.unsplash\.com\/[^\s"'`<>)]+/g;
const matches = allText.match(imgRegex) || [];
const uniqueUrls = [...new Set(matches)];

console.log(`\n=== VERIFYING EXTERNAL ASSETS ===`);
console.log(`Checking ${uniqueUrls.length} unique Unsplash URLs (${matches.length} occurrences)...`);

async function checkUrl(url) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 7000);
    const res = await fetch(url, { method: 'HEAD', signal: controller.signal });
    clearTimeout(timer);
    return { url, status: res.status, ok: res.ok };
  } catch (err) {
    return { url, status: err.name === 'AbortError' ? 'TIMEOUT' : 'ERROR', ok: false, message: err.message };
  }
}

async function run() {
  const results = await Promise.all(uniqueUrls.map(checkUrl));
  const bad = results.filter(r => !r.ok);
  const good = results.filter(r => r.ok);

  console.log(`Working Unsplash URLs: ${good.length}`);
  console.log(`Failed / Broken: ${bad.length}`);

  if (missingLocal.length > 0 || bad.length > 0) {
    console.error('\n❌ AUDIT FAILED!');
    process.exit(1);
  } else {
    console.log('\n✨ ALL local Nigerian images and external assets are 100% verified and functional!');
  }
}

run();
