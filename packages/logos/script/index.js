// Read synchronously all the directories in the assets directory;
const fs = require('fs');
const path = require('path');
const renameFilesInDirectory = require('./rename');

const assetsDirectory = path.join(__dirname, '..', 'assets');

renameFilesInDirectory(assetsDirectory);

const libDirectory = path.join(__dirname, '..', 'lib');
const directories = fs.readdirSync(assetsDirectory).filter(item => {
  const fullPath = path.join(assetsDirectory, item);
  return fs.statSync(fullPath).isDirectory();
});

// Loop thgrouh file array of the read directories in the assets folder
directories.forEach(directory => {
  const directoryPath = path.join(assetsDirectory, directory);
  const files = fs.readdirSync(directoryPath).filter(item => {
    const fullPath = path.join(directoryPath, item);
    return fs.statSync(fullPath).isFile();
  });
  
  //Loop through the files array and create index.tsx file in the lib directory
  const output =files.map(file => {
    const filePath = path.join(directoryPath, file);
    const SvgContent = fs.readFileSync(filePath, 'utf8');
    
    const variableName = file.replace('.svg', '');
    console.log(variableName);
    const updatedSvgContent = SvgContent
        .replace(/width="\d+"/g, 'width={size}') // Replace any width attribute
        .replace(/height="\d+"/g, 'height={size}'); // Replace any height attribute
    return `
    export const ${variableName} = ({size = 32}) => {
      return <div>${updatedSvgContent}</div>
    }
    `
  }).join('\n');

  const libDirectoryPath = path.join(libDirectory, directory);
  
  //remove the directory and index.tsx file if it exists
  fs.rmSync(libDirectoryPath, { recursive: true, force: true });
  fs.mkdirSync(libDirectoryPath, { recursive: true });
  fs.writeFileSync(path.join(libDirectoryPath, 'index.tsx'), output, 'utf8');
});