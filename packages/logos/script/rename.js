const fs = require('fs');
const path = require('path');

function renameFilesInDirectory(directoryPath) {
  const items = fs.readdirSync(directoryPath); // Synchronously read the directory

  items.forEach(item => {
    const fullPath = path.join(directoryPath, item);
    const stats = fs.statSync(fullPath); // Synchronously get stats

    if (stats.isDirectory()) {
      // Recursively process subdirectories
      renameFilesInDirectory(fullPath);
    } else if (stats.isFile()) {
      const baseName = item.replace(path.extname(item), ''); // Get the base name without extension
      const newFileName = baseName
        .replace(/[\s_,+-]+/g, ' ') // Replace spaces, underscores, dashes, and plus with a space
        .split(' ') // Split by space
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join('') + path.extname(item); // Join back to a single string and add the original extension

      const oldFilePath = fullPath;
      const newFilePath = path.join(directoryPath, newFileName);
      
      fs.renameSync(oldFilePath, newFilePath); // Synchronously rename the file
    }
  });
}

// const logoPath = path.join(__dirname, '..', 'assets');
// // Call the function with the logoPath
// renameFilesInDirectory(logoPath);


module.exports = renameFilesInDirectory;