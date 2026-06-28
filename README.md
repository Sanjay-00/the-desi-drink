# The Desi Drink — Cafe Website 

A free, mobile-first menu & ordering site for **The Desi Drink** cafe. Customers
scan a QR code, browse the menu, customize items, and place the order straight to
the cafe's WhatsApp. No monthly fees, no backend, no database.

- **Tech:** a single `index.html` (HTML + Tailwind CSS via CDN + vanilla JS)
- **Content:** everything editable lives in `config.js`
- **Ordering:** WhatsApp (the order becomes a pre-filled WhatsApp message)
- **Hosting:** GitHub Pages (free)

---

## 1. Edit your content (`config.js`)

Open `config.js` — it's the only file you normally touch. You can change:

- Cafe name, tagline, phone, address, Google Maps link, opening hours, Instagram
- The "Our Story" text and the top combo banner
- The whole menu: items, prices, descriptions, photos, customization options

To **add a menu item**, copy one `{ ... }` block inside `menu: [ ... ]`, paste it,
and edit the details. Every item needs a unique `id`.

---

## 2. Replace the photos with real ones

Right now the menu uses free stock photos (web links). To use the cafe's own
photos:

1. Make a folder named `assets/menu/` in this project.
2. Drop your photo files in there (e.g. `masala-chai.jpg`).
3. In `config.js`, change that item's `image` value to the path, e.g.
   `image: 'assets/menu/masala-chai.jpg'`

Each menu line already has a `// REPLACE -> assets/menu/...` hint showing a
suggested filename. Square photos (e.g. 600×600) look best.

---

## 3. The WhatsApp number (important)

The order is sent to the cafe's WhatsApp. Because this is a static website, the
number ends up in the customer's browser (and it's on your poster anyway), so it
**cannot be truly secret**. What we *do* is keep it **out of the committed code**:

- `config.js` (committed) contains a placeholder: `__WHATSAPP_NUMBER__`
- `config.local.js` (gitignored) holds your real number for **local testing**
- The **live site** gets the number from a GitHub **secret** at deploy time

### Set the number for the live site
1. Push this project to GitHub (see step 4).
2. Go to your repo → **Settings → Secrets and variables → Actions → New repository secret**.
3. Name: `WHATSAPP_NUMBER`  •  Value: the number in international format with no
   `+` and no spaces, e.g. `918825209423`.
4. Done — the deploy workflow injects it automatically on every push.

### Test locally
Open `config.local.js` and put your real number there. This file is gitignored,
so it never gets pushed.

---

## 4. Put it online with GitHub Pages (free)

1. Create a free account at https://github.com and make a **new repository**
   (e.g. `the-desi-drink`). You can make it public.
2. Push this folder to that repo:
   ```bash
   git add .
   git commit -m "The Desi Drink website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/the-desi-drink.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Add the `WHATSAPP_NUMBER` secret (step 3 above).
5. Every push now auto-deploys. Your site will be live at:
   `https://YOUR_USERNAME.github.io/the-desi-drink/`

> Want a custom domain like `thedesidrink.in`? Buy one and add it under
> **Settings → Pages → Custom domain**.

---

## 5. Make the QR codes for the posters

The site reacts to URL options so each poster/table can be different:

| Use case            | URL to put in the QR                                         |
|---------------------|-------------------------------------------------------------|
| General poster      | `https://YOUR_SITE/`                                         |
| Table 1 (dine-in)   | `https://YOUR_SITE/?table=1`                                 |
| Table 2             | `https://YOUR_SITE/?table=2`                                 |
| Takeaway counter    | `https://YOUR_SITE/?type=takeaway`                           |
| Kitchen demo screen | `https://YOUR_SITE/?admin=true`                              |

When a customer scans a `?table=2` QR, the order is automatically tagged
"Table 2" and they can't change it — so the kitchen knows exactly where to serve.

**To generate the QR images:** paste each URL into any free QR generator
(e.g. https://www.qr-code-generator.com or https://qrcode.tec-it.com) and
download the PNG for the poster.

---

## 6. Local preview

Just open `index.html` in a browser. For best results (so `config.js` loads
cleanly) run a tiny local server from this folder:

```bash
python -m http.server 8000
```
then visit http://localhost:8000

---

## Notes & future ideas

- **Tailwind via CDN** shows a console warning and isn't the fastest. It's fine
  to launch with. Later you can pre-build Tailwind into a small CSS file.
- **Live kitchen orders:** the `?admin=true` panel is a *demo* — orders only
  show on the same device. True real-time order tracking needs a free backend
  (e.g. Firebase). Ask and this can be added.
- **Add to Home Screen (app feel):** can be added with a web manifest + icons.
