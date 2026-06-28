# The Desi Drink - Cafe Website

A free menu and ordering website for my brother's cafe. Customers scan a QR code on the table or poster, browse the menu, and send their order to the cafe's WhatsApp in one tap.

Live site: https://sanjay-00.github.io/the-desi-drink/

---

## What it does

- Browse the full menu with photos, prices, and item customization
- Add items to a cart and place the order via WhatsApp
- Table-specific QR codes: scanning Table 2's QR locks the order to Table 2
- Takeaway mode for counter orders
- Cart saves across refresh so an accidental reload doesn't wipe the order

---

## How to update the menu or cafe info

Open `config.js`. That's the only file you need to touch for any content changes: menu items, prices, photos, address, hours, Instagram link, opening times.

After editing, push the changes and the site updates automatically in about a minute.

---

## How to add real food photos

Drop your photos into the `assets/menu/` folder, then update the image path in `config.js` for that item. Each item already has a comment showing the suggested filename.

Square photos (600x600 or similar) look best.

---

## Making the QR codes

Go to https://www.qr-code-generator.com, paste the URL, download the PNG.

| For | URL |
|-----|-----|
| General poster | `https://sanjay-00.github.io/the-desi-drink/` |
| Table 1 | `https://sanjay-00.github.io/the-desi-drink/?table=1` |
| Table 2 | `https://sanjay-00.github.io/the-desi-drink/?table=2` |
| Table 3 | `https://sanjay-00.github.io/the-desi-drink/?table=3` |
| Table 4 | `https://sanjay-00.github.io/the-desi-drink/?table=4` |
| Takeaway counter | `https://sanjay-00.github.io/the-desi-drink/?type=takeaway` |

---

## Running it locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

---

## Tech used

HTML, Tailwind CSS, vanilla JS. Hosted free on GitHub Pages.
