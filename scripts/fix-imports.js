import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Fix imports in dist/index.js
const indexPath = join(__dirname, '../dist/index.js');
if (existsSync(indexPath)) {
    let content = readFileSync(indexPath, 'utf8');
    content = content.replace(/\.jsx'/g, "'");
    writeFileSync(indexPath, content, 'utf8');
}

// Fix imports in icon files
const iconsDir = join(__dirname, '../dist/icons');
if (existsSync(iconsDir)) {
    const files = readdirSync(iconsDir);
    for (const file of files) {
        if (file.endsWith('.js')) {
            const filePath = join(iconsDir, file);
            let content = readFileSync(filePath, 'utf8');
            content = content.replace(/\.jsx'/g, "'");
            writeFileSync(filePath, content, 'utf8');
        }
    }
}

console.log('Fixed .jsx imports in built files');
