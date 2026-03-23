const fs = require('fs');
const path = require('path');

// Colors for output
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

const srcDir = path.join(__dirname, 'src');

function getAllFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllFiles(filePath, fileList);
        } else {
            fileList.push(filePath);
        }
    }
    return fileList;
}

function checkImports(filePath) {
    const code = fs.readFileSync(filePath, 'utf-8');
    let hasError = false;

    // Regex to find imports: import ... from '...' or import '...'
    const importRegex = /import\s+(?:.*?\s+from\s+)?['"](.*?)['"]/g;
    let match;

    while ((match = importRegex.exec(code)) !== null) {
        const importPath = match[1];

        // Ignore node_modules, aliases or absolute URLs
        if (!importPath.startsWith('.') && !importPath.startsWith('/')) continue;

        // Resolve what the path would actual be
        let resolvedPath = path.resolve(path.dirname(filePath), importPath);
        let exactMatchFound = false;

        // Check extensions because imports might omit them
        const extensionsToTry = ['', '.js', '.jsx', '.css', '.png', '.jpg', '.jpeg', '.svg', '/index.js', '/index.jsx'];

        for (const ext of extensionsToTry) {
            const testPath = resolvedPath + ext;

            // We must check if the file exists AND if its real casing matches
            if (fs.existsSync(testPath)) {
                const dir = path.dirname(testPath);
                const base = path.basename(testPath);

                try {
                    // Windows is case-insensitive on existsSync, but readdirSync is exact
                    const filesInDir = fs.readdirSync(dir);
                    if (filesInDir.includes(base)) {
                        exactMatchFound = true;
                        break;
                    } else {
                        // It exists but casing is wrong
                        console.log(`${RED}CASE MISMATCH ERROR:${RESET} in ${filePath}`);
                        console.log(`  Imported: ${YELLOW}${importPath}${RESET}`);
                        console.log(`  Actual File: ${GREEN}${filesInDir.find(f => f.toLowerCase() === base.toLowerCase())}${RESET}`);
                        hasError = true;
                        break;
                    }
                } catch (e) {
                    // directory doesn't exist etc
                }
            }
        }
    }
    return hasError;
}

console.log('Scanning codebase for case-sensitivity import errors...');
const allFiles = getAllFiles(srcDir).filter(f => f.endsWith('.js') || f.endsWith('.jsx'));
let totalErrors = 0;

for (const file of allFiles) {
    if (checkImports(file)) {
        totalErrors++;
    }
}

if (totalErrors === 0) {
    console.log(`${GREEN}Success: No case sensitivity issues found!${RESET}`);
} else {
    console.log(`${RED}Found issues in ${totalErrors} files.${RESET}`);
}
