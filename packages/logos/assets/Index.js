const fs = require('fs');
const path = require('path');

const brandLogosPath = path.join(__dirname, 'brand_logo');

fs.readdir(brandLogosPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    
    files.forEach(file => {
        let newFileName = file
          .replace(/[\s_-]+/g, ' ') // Replace spaces, underscores, and dashes with a space
          .split(' ') // Split by space
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
          .join(''); // Join back to a single string

        newFileName = newFileName.charAt(0).toUpperCase() + newFileName.slice(1);
        
        const oldFilePath = path.join(brandLogosPath, file);
        const newFilePath = path.join(brandLogosPath, newFileName);
        
        fs.rename(oldFilePath, newFilePath, (renameErr) => {
            if (renameErr) {
                console.error(`Error renaming file ${file} to ${newFileName}:`, renameErr);
            } else {
                console.log(`Renamed: ${file} to ${newFileName}`);
            }
        });
    });
});
