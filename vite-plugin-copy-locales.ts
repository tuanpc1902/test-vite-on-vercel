import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

export function copyLocalesPlugin(): Plugin {
    return {
        name: 'vite-plugin-copy-locales',
        buildStart() {
            const sourceDir = path.join(__dirname, 'src/locales');
            const destDir = path.join(__dirname, 'public/locales');

            fs.readdirSync(sourceDir, { withFileTypes: true }).forEach(langDir => {
                if (langDir.isDirectory()) {
                    const langPath = path.join(sourceDir, langDir.name);
                    fs.readdirSync(langPath, { withFileTypes: true }).forEach(pageDir => {
                        if (pageDir.isDirectory()) {
                            const pagePath = path.join(langPath, pageDir.name);
                            fs.readdirSync(pagePath).forEach(fileName => {
                                const filePath = path.join(pagePath, fileName);
                                let destFileName = fileName;

                                // Đổi tên file default.json
                                if (fileName === 'default.json') {
                                    destFileName = `${pageDir.name}.json`;
                                }

                                const destFilePath = path.join(destDir, langDir.name, pageDir.name, destFileName);

                                if (fs.existsSync(filePath)) {
                                    fs.mkdirSync(path.dirname(destFilePath), { recursive: true });
                                    fs.copyFileSync(filePath, destFilePath);
                                }
                            });
                        }
                    });
                }
            });
        },
    };
}
