/**
 * PHARMACY CONFIGURATION FILE
 * 
 * This is the SINGLE SOURCE OF TRUTH for the pharmacy website.
 * Update these values when setting up a new pharmacy website.
 * 
 * =====================================================
 * HOW TO SET UP A NEW PHARMACY:
 * =====================================================
 * 1. Update ALL values in this file
 * 2. Replace these image files (keep the same file names!):
 *    - src/assets/logo.png      → Pharmacy logo
 *    - src/assets/hero.png      → Hero background image
 *    - src/assets/gallery-1.png → Gallery image 1
 *    - src/assets/gallery-2.png → Gallery image 2
 *    - src/assets/gallery-3.png → Gallery image 3
 *    - public/favicon.png       → Browser tab icon
 * 3. Update index.html meta tags (title, description)
 * =====================================================
 */

export const pharmacyConfig = {
  // ===== PHARMACY NAME =====
  name: {
    en: "Apollo Pharmacy",
    el: "Φαρμακείο Απόλλων",
  },
  subtitle: {
    en: "Pharmacy",
    el: "Φαρμακείο",
  },

  // ===== CONTACT INFORMATION =====
  phone: "99 123456",
  email: "apollo@pharmacy.cy",
  
  // ===== ADDRESS =====
  // Full address as a single string for display
  address: "123 Main Street, Limassol 3000, Cyprus",
  mapsLink: "https://maps.google.com/?q=123+Main+Street,+Limassol,+Cyprus,+3000",

  // ===== SOCIAL MEDIA =====
  // Set to empty string "" to hide the icon
  social: {
    facebook: "https://www.facebook.com/apollopharmacy",
    instagram: "", // e.g., "https://www.instagram.com/apollopharmacy"
  },

  // ===== WOLT DELIVERY =====
  // Set to empty string "" to hide the Wolt icon
  wolt: "", // e.g., "https://wolt.com/en/cyp/limassol/restaurant/pharmacy-name"

  // ===== BUSINESS HOURS =====
  hours: {
    en: {
      monFri: "Mon–Fri: 8 AM–1:30 PM, 3–6:30 PM",
      sat: "Sat: 8 AM–1:30 PM",
      sun: "Sun: Closed",
      monFriLabel: "Monday – Friday",
      monFriTime1: "8 AM – 1:30 PM",
      monFriTime2: "3 – 6:30 PM",
      satLabel: "Saturday",
      satTime: "8 AM – 1:30 PM",
      sunLabel: "Sunday",
      sunTime: "Closed",
    },
    el: {
      monFri: "Δευ–Παρ: 08:00–13:30, 15:00–18:30",
      sat: "Σάββατο: 08:00–13:30",
      sun: "Κυριακή: Κλειστά",
      monFriLabel: "Δευτέρα – Παρασκευή",
      monFriTime1: "08:00 – 13:30",
      monFriTime2: "15:00 – 18:30",
      satLabel: "Σάββατο",
      satTime: "08:00 – 13:30",
      sunLabel: "Κυριακή",
      sunTime: "Κλειστά",
    },
  },

  // ===== GALLERY ALT TEXT =====
  // Update these to describe YOUR gallery images
  gallery: {
    alt1: {
      en: "Pharmacy storefront",
      el: "Πρόσοψη φαρμακείου",
    },
    alt2: {
      en: "Pharmacy interior",
      el: "Εσωτερικό φαρμακείου",
    },
    alt3: {
      en: "Product display",
      el: "Προϊόντα",
    },
  },

  // ===== META / SEO =====
  // These should also be updated in index.html
  meta: {
    titleEn: "Apollo Pharmacy",
    titleEl: "Φαρμακείο Απόλλων",
    descriptionEn: "Apollo Pharmacy - Expert care for every family in Cyprus.",
    descriptionEl: "Φαρμακείο Απόλλων - Εξειδικευμένη φροντίδα για κάθε οικογένεια στην Κύπρο.",
    twitterHandle: "@ApolloPharmacy",
  },

  // ===== STANDARD IMAGE PATHS (for reference) =====
  // These are the standard file names - just replace the files, don't change paths
  images: {
    logo: "@/assets/logo.png",
    hero: "@/assets/hero.png",
    gallery1: "@/assets/gallery-1.png",
    gallery2: "@/assets/gallery-2.png",
    gallery3: "@/assets/gallery-3.png",
    favicon: "/favicon.png",
    gesyLogo: "@/assets/gesy-logo.png",
    woltIcon: "@/assets/wolt-icon.png",
  },
};

// Helper to get localized value
export const getLocalizedValue = <T>(obj: { en: T; el: T }, lang: "en" | "el"): T => {
  return obj[lang];
};
