# The Desi Drink - Cafe Website

A free digital menu website for my brother's cafe. Customers scan a QR code on the table or poster and browse the full menu on their phone — no app, no ordering, just a nice-looking menu.

Live site: https://sanjay-00.github.io/the-desi-drink/

---

## What it does

- Browse the full menu with photos, prices, and item options (sizes/portions)
- Auto-rotating combo slideshow up top
- "Fan Favourites" strip highlighting bestsellers (currently the ice creams)
- Search and filter by category
- Tap-to-call and Google Maps / Instagram links

---

## How to update the menu or cafe info

Open `config.js`. That's the only file you need to touch for any content changes: menu items, prices, photos, address, hours, Instagram link, opening times.

- To change the combo slideshow, edit the `heroSlides` array — copy a block to add another slide.
- To mark an item as a bestseller (shows up in the "Fan Favourites" strip), add `bestseller: true` to it.

After editing, push the changes and the site updates automatically in about a minute.

---

## How to add real food photos

Drop your photos into the `assets/menu/` folder, then update the image path in `config.js` for that item. Each item already has a comment showing the suggested filename.

Square photos (600x600 or similar) look best.

---

## Making the QR codes

Go to https://www.qr-code-generator.com, paste the URL below, download the PNG.

```
https://sanjay-00.github.io/the-desi-drink/
```

---

## Running it locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

---

## Tech used

HTML, Tailwind CSS, vanilla JS. Hosted free on GitHub Pages.
