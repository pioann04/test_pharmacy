# Pharmacy Website Setup - PR Template

**Copy this template, fill in your details, and give it to the AI along with your images.**

---

## PR: Setup [PHARMACY NAME] Website

### Purpose
Configure the pharmacy website template with the new pharmacy's branding, contact information, and images.

---

## 📝 PHARMACY DETAILS (fill these in)

```
PHARMACY NAME:
- English: [e.g., Sunshine Pharmacy]
- Greek: [e.g., Φαρμακείο Ηλιοφάνεια]

CONTACT:
- Phone: [e.g., 26 987654]
- Email: [e.g., info@sunshinepharmacy.cy]

ADDRESS:
- Full Address: [e.g., 45 Poseidonos Ave, Paphos 8042, Cyprus]
- Google Maps Link: [e.g., https://maps.app.goo.gl/abc123]

SOCIAL MEDIA (leave blank if none):
- Facebook: [URL or leave empty]
- Instagram: [URL or leave empty]

WOLT DELIVERY (leave blank if none):
- Wolt Link: [URL or leave empty]

BUSINESS HOURS:
- Monday-Friday Morning: [e.g., 8:00 AM – 1:30 PM]
- Monday-Friday Afternoon: [e.g., 3:00 PM – 6:30 PM]
- Saturday: [e.g., 8:00 AM – 1:30 PM]
- Sunday: [e.g., Closed]

GALLERY IMAGE DESCRIPTIONS:
- Image 1: [e.g., Store exterior view]
- Image 2: [e.g., Pharmacy interior]
- Image 3: [e.g., Product shelves]

SEO:
- Twitter Handle: [e.g., @SunshinePharmCY or leave empty]
```

---

## 📁 FILES TO MODIFY

### 1. `src/config/pharmacyConfig.ts`

Update ALL values with the pharmacy details above:

| Field | Description |
|-------|-------------|
| `name.en` | English pharmacy name |
| `name.el` | Greek pharmacy name |
| `phone` | Phone number |
| `email` | Email address |
| `address` | Full address string |
| `mapsLink` | Google Maps URL |
| `social.facebook` | Facebook URL (empty string "" if none) |
| `social.instagram` | Instagram URL (empty string "" if none) |
| `wolt` | Wolt delivery URL (empty string "" if none) |
| `hours.en.*` | All English business hours fields |
| `hours.el.*` | All Greek business hours fields |
| `gallery.alt1.en/el` | Gallery image 1 description |
| `gallery.alt2.en/el` | Gallery image 2 description |
| `gallery.alt3.en/el` | Gallery image 3 description |
| `meta.titleEn` | English SEO title |
| `meta.titleEl` | Greek SEO title |
| `meta.descriptionEn` | English SEO description |
| `meta.descriptionEl` | Greek SEO description |
| `meta.twitterHandle` | Twitter handle |

### 2. `index.html`

Update these meta tags to match the pharmacy:

| Tag | Format/Value |
|-----|--------------|
| `<title>` | `[Greek Name] \| [English Name]` |
| `<meta name="description">` | Bilingual description |
| `<meta name="author">` | English pharmacy name |
| `<meta property="og:title">` | Same as title |
| `<meta property="og:description">` | Bilingual description |
| `<meta name="twitter:site">` | Twitter handle |

---

## 🖼️ IMAGES TO REPLACE

Copy the attached images to replace these files (**keep the exact file names**):

| Attached Image | Copy To | Purpose |
|----------------|---------|---------|
| Logo image | `src/assets/logo.png` | Header & footer logo |
| Hero image | `src/assets/hero.png` | Hero section background |
| Gallery image 1 | `src/assets/gallery-1.png` | Gallery carousel |
| Gallery image 2 | `src/assets/gallery-2.png` | Gallery carousel |
| Gallery image 3 | `src/assets/gallery-3.png` | Gallery carousel |
| Favicon image | `public/favicon.png` | Browser tab icon |

---

## ✅ CHECKLIST

- [ ] Updated `src/config/pharmacyConfig.ts` with all details
- [ ] Updated `index.html` meta tags
- [ ] Replaced `src/assets/logo.png`
- [ ] Replaced `src/assets/hero.png`
- [ ] Replaced `src/assets/gallery-1.png`
- [ ] Replaced `src/assets/gallery-2.png`
- [ ] Replaced `src/assets/gallery-3.png`
- [ ] Replaced `public/favicon.png`

---

## 🚫 DO NOT MODIFY

These files should NOT be changed - all customization happens through config and images only:

- `src/pages/Index.tsx`
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/i18n/translations.ts`
- Any other component files

---

## 📋 EXAMPLE FILLED TEMPLATE

```
PHARMACY NAME:
- English: Sunshine Pharmacy
- Greek: Φαρμακείο Ηλιοφάνεια

CONTACT:
- Phone: 26 987654
- Email: info@sunshinepharmacy.cy

ADDRESS:
- Full Address: 45 Poseidonos Ave, Paphos 8042, Cyprus
- Google Maps Link: https://maps.app.goo.gl/abc123xyz

SOCIAL MEDIA:
- Facebook: https://www.facebook.com/sunshinepharmacycy
- Instagram: https://www.instagram.com/sunshinepharmacy

WOLT DELIVERY:
- Wolt Link: https://wolt.com/en/cyp/paphos/restaurant/sunshine-pharmacy

BUSINESS HOURS:
- Monday-Friday Morning: 8:00 AM – 1:30 PM
- Monday-Friday Afternoon: 3:00 PM – 7:00 PM
- Saturday: 8:00 AM – 2:00 PM
- Sunday: Closed

GALLERY IMAGE DESCRIPTIONS:
- Image 1: Sunshine Pharmacy storefront exterior
- Image 2: Modern pharmacy interior with consultation area
- Image 3: Health and beauty product display

SEO:
- Twitter Handle: @SunshinePharmCY
```

Then attach: logo.png, hero.png, gallery-1.png, gallery-2.png, gallery-3.png, favicon.png
