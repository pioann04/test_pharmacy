import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
// Standard image import - just replace the file, don't change import path
import logo from "@/assets/logo.png";
import gesyLogo from "@/assets/gesy-logo.png";
import woltIcon from "@/assets/wolt-icon.png";
import { pharmacyConfig } from "@/config/pharmacyConfig";

const Footer = () => {
  const { t, language } = useLanguage();

  const pharmacyName = language === "el" ? pharmacyConfig.name.el : pharmacyConfig.name.en;
  const hours = language === "el" ? pharmacyConfig.hours.el : pharmacyConfig.hours.en;
  const { facebook, instagram } = pharmacyConfig.social;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt={`${pharmacyName} Logo`} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <h3 className="font-semibold text-foreground">{pharmacyName}</h3>
                <p className="text-xs text-muted-foreground">
                  {language === "el" ? pharmacyConfig.subtitle.el : pharmacyConfig.subtitle.en}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
            {(facebook || instagram) && (
              <div className="flex items-center space-x-3">
                {facebook && (
                  <a
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                )}
                {instagram && (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t.footer.quickLinks}</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {t.nav.home}
              </a>
              <a href="#about" onClick={(e) => scrollToSection(e, "#about")} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {t.nav.about}
              </a>
              <a href="#services" onClick={(e) => scrollToSection(e, "#services")} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {t.nav.services}
              </a>
              <a href="#gallery" onClick={(e) => scrollToSection(e, "#gallery")} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {t.nav.gallery}
              </a>
              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {t.nav.contact}
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t.footer.contact}</h4>
            <div className="space-y-3">
              <a
                href={`tel:${pharmacyConfig.phone.replace(/\s/g, '')}`}
                className="flex items-center space-x-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                <span>{pharmacyConfig.phone}</span>
              </a>
              <a
                href={`mailto:${pharmacyConfig.email}`}
                className="flex items-center space-x-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                <span>{pharmacyConfig.email}</span>
              </a>
              <a
                href={pharmacyConfig.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{pharmacyConfig.address}</span>
              </a>
              {pharmacyConfig.wolt && (
                <a
                  href={pharmacyConfig.wolt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <img src={woltIcon} alt="Wolt" className="h-5 w-5 rounded-full" />
                  <span>{language === "el" ? "Παραγγελία μέσω Wolt" : "Order on Wolt"}</span>
                </a>
              )}
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t.footer.businessHours}</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>
                  <p>{hours.monFri}</p>
                  <p>{hours.sat}</p>
                  <p>{hours.sun}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {pharmacyName}. {language === "el" ? "Όλα τα δικαιώματα κατοχυρωμένα." : "All rights reserved."}
          </p>
          <img 
            src={gesyLogo} 
            alt="ΓΕΣΥ Logo" 
            className="h-12 w-auto rounded-full"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
