import { generateRSSFeed } from '../lib/rss';
import fs from 'fs';
import path from 'path';

// This generates the RSS feed during build time
async function generateRSSFile() {
  try {
    const rssFeed = generateRSSFeed();
    const rssPath = path.join(process.cwd(), 'public', 'rss.xml');
    
    // Ensure public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    fs.writeFileSync(rssPath, rssFeed, 'utf8');
    console.log('RSS feed generated successfully at public/rss.xml');
  } catch (error) {
    console.error('Error generating RSS feed:', error);
  }
}

// Execute the function
generateRSSFile();