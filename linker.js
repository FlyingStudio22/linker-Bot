const fs = require('fs');
const axios = require('axios');
const { promisify } = require('util');
const writeFileAsync = promisify(fs.writeFile);

// Read the list of links from a text file
async function readLinksFromFile(filePath) {
  try {
    const fileData = await fs.promises.readFile(filePath, 'utf8');
    const links = fileData.split('\n').map(link => link.trim());
    return links.filter(link => link !== '');
  } catch (error) {
    throw new Error('Error reading file:', error);
  }
}

// Download the video from a given link
async function downloadVideo(link, savePath) {
  try {
    const response = await axios.get(link, { responseType: 'arraybuffer' });
    const videoData = response.data;
    const fileName = link.substring(link.lastIndexOf('/') + 1);
    const saveFilePath = savePath + fileName;
    await writeFileAsync(saveFilePath, videoData);
    console.log(`Downloaded: ${fileName}`);
  } catch (error) {
    console.log(`Error downloading video from ${link}:`, error);
  }
}

// Process the list of links and download videos
async function processLinks(linksFilePath, savePath) {
  try {
    const links = await readLinksFromFile(linksFilePath);
    for (const link of links) {
      console.log(`Found video: ${link}`);
      console.log(`Downloading now...`);
      await downloadVideo(link, savePath);
      console.log(`Download complete for ${link}`);
    }
    console.log('All videos downloaded!');
  } catch (error) {
    console.log('Error processing links:', error);
  }
}

// Specify the path to the file containing the list of links
const linksFilePath = 'links.txt';

// Specify the save path on the USB flash drive
const usbDrivePath = 'D:/Pokemon Indigo League/';

// Start processing the links and save videos to the USB drive
processLinks(linksFilePath, usbDrivePath);
