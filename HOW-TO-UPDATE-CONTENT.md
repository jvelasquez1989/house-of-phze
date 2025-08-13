# How to Update Content

All content is in easy-to-edit files and folders. No need to touch deep code!

## 1. Changing Images
- Replace files in the `/images/` folder:
  - `background.jpg` — main background/banner
  - `profile.jpg` — main profile photo
  - `logo.png` — project logo
  - `album-cover.jpg` — cover art for latest single
  - Add photos for the gallery if desired

## 2. Editing Audio
- Replace or add files in `/audio/` (e.g., `track1.mp3`, `track2.mp3`)
- Update track titles and file names in `index.html` (look for the "Music Section" comments)

## 3. Editing Videos
- Place looped video visualizers in `/videos/` and update the `<video src="...">` in `index.html`
- For YouTube/TikTok videos, just update their embed URLs in the "Video Gallery" section

## 4. Editing Text, Events, Links, Bio, Top 8, etc.
- **Open `index.html` in a text editor**
- All editable content is clearly commented (search for `<!-- Edit this ... -->`)
- Update:
  - Bio text in the banner section
  - Event details in the "Upcoming Shows" section
  - Social/profile links (Instagram, Spotify, etc.)
  - "Top 8" artist names and links
  - Blog/bulletin entries
  - Mailing list action URL (replace with your Formspree or preferred service)

## 5. Adding/Removing Sections
- You can easily add, remove, or move sections by editing and saving `index.html`.

## 6. Saving/Uploading Changes
- Save your edits.
- Upload the changed files to your hosting (Netlify, GitHub, etc.).

## Need Help?
- You can open an issue on your GitHub repo, or DM your web dev!