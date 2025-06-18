import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htaccessContent = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>`;

const distPath = path.join(__dirname, 'dist');


if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}


fs.writeFileSync(path.join(distPath, '.htaccess'), htaccessContent, 'utf8');

console.log('.htaccess file created successfully inside dist!');