import fs from 'fs';
import path from 'path';

// Folders to clean
const foldersToClean = [
  path.resolve('reports/allure-report'), // HTML reports
  path.resolve('reports/allure-results'), // Playwright test results folder
  path.resolve('reports/screenshots'), // Screenshots folder
  path.resolve('reports/videos') // Videos folder
];

// Function to delete folder contents
function deleteFolderContents(folder) {
  if (!fs.existsSync(folder)) return;

  fs.readdirSync(folder).forEach(file => {
    const curPath = path.join(folder, file);
    if (fs.lstatSync(curPath).isDirectory()) {
      deleteFolderContents(curPath);  // Recursively delete subfolders
      fs.rmdirSync(curPath);
    } else {
      fs.unlinkSync(curPath);
    }
  });
}

foldersToClean.forEach(folder => {
  deleteFolderContents(folder);
  console.log(`Cleaned folder: ${folder}`);
}); 