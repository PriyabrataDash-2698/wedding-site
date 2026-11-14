# Wedding site (React + Vite, no backend)

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # outputs /dist (static files)

## Customise
- `src/config.js`: names, date, venues, schedule, photo captions (English, Hindi, Kannada).
- Photos: drop files into `public/photos/` and set `src: "photos/1.jpg"` in config.
- Music: add `public/music.mp3` (use a track you have rights to). Without it the music button hides.
- Colours and fonts: `src/styles.css` (top variables).

## Deploy (free)
- Netlify: drag the `dist` folder onto app.netlify.com/drop.
- Vercel: `npx vercel` in this folder (build: `npm run build`, output: `dist`).
- GitHub Pages: push `dist` to a `gh-pages` branch.

Share the live link as a QR code with any free QR generator.
