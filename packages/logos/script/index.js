// Read synchronously all the directories in the assets directory;
const fs = require('fs');
const path = require('path');
const renameFilesInDirectory = require('./rename');

const assetsDirectory = path.join(__dirname, '..', 'assets');

renameFilesInDirectory(assetsDirectory);

//Remove the lib .DS_Store unwanted file if it exists in assets directory
//.DSStore is automatically created by macOS
fs.readdirSync(path.join(__dirname, '..', 'assets')).forEach(item => {
  //remove the .DSStore file in the assets directory's subdirectory
  const dsStorePath = path.join(__dirname, '..', 'assets', item, '.DSStore');
  if (fs.existsSync(dsStorePath)) {
    fs.unlinkSync(dsStorePath);
  }
  
});


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
    const updatedSvgContent = SvgContent
      .replace(/<svg[^>]*width="\d+"[^>]*height="\d+"/g, `<svg width={width || size} height={height || size} className="package_logo package_logo_${variableName.toLowerCase()}"`) // Replace width and height attribute of svg tag
      .replace(/xlink:href/g,'xlinkHref')
      .replace(/xmlns:xlink/,'xmlnsXlink')
      .replace(/style=["']?mask-type:alpha["']?/g, '')
      .replace(/<svg([^>]*)>/g, `<svg$1 {...props}>`);
    
    return `
    export const ${variableName} = ({size = 32 as number, width, height, ...props}:{size?:number, width?:number, height?:number, props?:any}) => {
      return ${updatedSvgContent}
    }
    `
  }).join('\n');

  const libDirectoryPath = path.join(libDirectory, directory);
  
  //remove the directory and index.tsx file if it exists
  fs.rmSync(libDirectoryPath, { recursive: true, force: true });
  fs.mkdirSync(libDirectoryPath, { recursive: true });
  //create the index.tsx file in the lib directory
  fs.writeFileSync(path.join(libDirectoryPath, 'index.tsx'), output, 'utf8');
});