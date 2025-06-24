import fs from 'fs';
import path from 'path';
import pdfParse from 'pdf-parse';

const pdfPath = path.join(__dirname, '../resume/Pranav_Nair_March_2025__Public_copy_.pdf');
const outputPath = path.join(__dirname, '../resume/resume.txt');

async function extractResume() {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdfParse(dataBuffer);
    fs.writeFileSync(outputPath, data.text, 'utf-8');
    console.log('Resume text extracted to', outputPath);
  } catch (err) {
    console.error('Error extracting resume:', err);
  }
}

extractResume(); 