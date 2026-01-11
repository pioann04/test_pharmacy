# Pharmacy Website Template Guide

This is a **centralized template** for pharmacy websites. All customizable values are in ONE place.

---

## 🎯 QUICK SETUP (2 Steps Only!)

### Step 1: Update Configuration File

Edit `src/config/pharmacyConfig.ts` with your pharmacy details:

| Field | Example |
|-------|---------|
| `name.en` | Apollo Pharmacy |
| `name.el` | Φαρμακείο Απόλλων |
| `phone` | 99 123456 |
| `email` | info@pharmacy.cy |
| `address` | 123 Main Street, Limassol |
| `mapsLink` | https://maps.google.com/... |
| `social.facebook` | https://facebook.com/... |
| `social.instagram` | https://instagram.com/... |
| `wolt` | https://wolt.com/... |
| `hours` | Business hours (EN/EL) |
| `gallery.alt1-3` | Gallery image descriptions |
| `meta` | SEO title/description |

### Step 2: Replace Image Files

Replace these files with your images (**keep the same file names!**):

| File | Purpose | Size Recommendation |
|------|---------|---------------------|
| `src/assets/logo.png` | Logo (header, footer) | 200x200px |
| `src/assets/hero.png` | Hero background | 1920x1080px |
| `src/assets/gallery-1.png` | Gallery image 1 | 800x600px |
| `src/assets/gallery-2.png` | Gallery image 2 | 800x600px |
| `src/assets/gallery-3.png` | Gallery image 3 | 800x600px |
| `public/favicon.png` | Browser tab icon | 32x32px or 64x64px |

### Step 3: Update index.html Meta Tags

Update the meta tags in `index.html` (marked with comments) for SEO:
- `<title>`
- `<meta name="description">`
- `<meta property="og:*">`
- `<meta name="twitter:*">`

---

## 📁 File Structure

```
src/
├── config/
│   └── pharmacyConfig.ts  ← ALL SETTINGS HERE
├── assets/
│   ├── logo.png           ← Replace with your logo
│   ├── hero.png           ← Replace with hero image
│   ├── gallery-1.png      ← Replace with gallery image
│   ├── gallery-2.png      ← Replace with gallery image
│   ├── gallery-3.png      ← Replace with gallery image
│   ├── gesy-logo.png      ← KEEP (standard GESY logo)
│   └── wolt-icon.png      ← KEEP (standard Wolt icon)
public/
└── favicon.png            ← Replace with your favicon
index.html                  ← Update meta tags
```

---

## 🚀 AI PROMPTS FOR SETUP

### PROMPT 1: Full Setup (attach Logo + Hero image)

```
Set up this pharmacy website with the following details:

PHARMACY NAME:
- English: [Your Pharmacy Name]
- Greek: [Το Φαρμακείο Σας]

CONTACT:
- Phone: [99 123456]
- Email: [info@pharmacy.cy]

ADDRESS:
- Full: [123 Main Street, City, Cyprus]
- Maps Link: [https://maps.google.com/...]

SOCIAL (leave empty if none):
- Facebook: [URL or empty]
- Instagram: [URL or empty]
- Wolt: [URL or empty]

HOURS (if different from 8AM-1:30PM, 3-6:30PM):
- Mon-Fri: [hours]
- Saturday: [hours]
- Sunday: [Closed]

I've attached the logo and hero image.
```

### PROMPT 2: Gallery Images (attach 3 images)

```
Update the gallery with these images:
- Image 1: [description, e.g., "Store exterior"]
- Image 2: [description, e.g., "Interior view"]  
- Image 3: [description, e.g., "Product display"]

Copy these to replace the existing gallery-1.png, gallery-2.png, and gallery-3.png files.
```

---

## 🔧 How Features Work

### Social Media Icons
- **Facebook/Instagram**: Show only if URL is provided in config
- Set to empty string `""` to hide

### Wolt Delivery
- Shows in Hero section and Footer if URL provided
- Set to empty string `""` to hide

### Gallery Alt Text
- Configured in `pharmacyConfig.gallery.alt1-3`
- Supports both EN and EL

### Business Hours
- Configured in `pharmacyConfig.hours`
- Displayed in Hero banner and Footer

---

## ✅ New Pharmacy Checklist

- [ ] **Config**: Update `src/config/pharmacyConfig.ts`
- [ ] **Logo**: Replace `src/assets/logo.png`
- [ ] **Hero**: Replace `src/assets/hero.png`
- [ ] **Gallery**: Replace `src/assets/gallery-1.png`, `gallery-2.png`, `gallery-3.png`
- [ ] **Favicon**: Replace `public/favicon.png`
- [ ] **SEO**: Update `index.html` meta tags

---

## 📋 Standard Files (DO NOT RENAME)

These files have standardized names. **Just replace the content, don't rename:**

| Standard Name | Purpose |
|---------------|---------|
| `logo.png` | Pharmacy logo |
| `hero.png` | Hero background |
| `gallery-1.png` | Gallery image 1 |
| `gallery-2.png` | Gallery image 2 |
| `gallery-3.png` | Gallery image 3 |
| `gesy-logo.png` | GESY certification logo |
| `wolt-icon.png` | Wolt delivery icon |

---

## Notes

- All text appears in both **English and Greek**
- Website is fully **responsive** (mobile-friendly)
- Social icons only appear if URLs are provided
- Contact form uses Resend (requires `RESEND_API_KEY` secret)
