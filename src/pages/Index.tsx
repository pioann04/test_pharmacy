import { useState, useEffect } from "react";
import { 
  Pill, 
  Stethoscope, 
  Heart, 
  Baby, 
  Leaf, 
  HeartHandshake,
  Clock,
  Phone,
  Mail,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Activity,
  CircleDot,
  TestTube,
  ShieldCheck,
  Wind
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { pharmacyConfig } from "@/config/pharmacyConfig";
// Standard image imports - just replace the files, don't change import paths
import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero.png";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gesyLogo from "@/assets/gesy-logo.png";
import woltIcon from "@/assets/wolt-icon.png";

const serviceIcons = [Heart, Activity, CircleDot, TestTube, ShieldCheck, Wind];

const Index = () => {
  const { t, language } = useLanguage();
  const pharmacyName = language === "el" ? pharmacyConfig.name.el : pharmacyConfig.name.en;
  const hours = language === "el" ? pharmacyConfig.hours.el : pharmacyConfig.hours.en;
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<{ src: string; alt: string } | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentValueSlide, setCurrentValueSlide] = useState(0);

  const values = [
    { icon: Heart, ...t.about.values.compassionateCare },
    { icon: Baby, ...t.about.values.familyFocus },
    { icon: Stethoscope, ...t.about.values.expertKnowledge },
    { icon: HeartHandshake, ...t.about.values.trustIntegrity },
  ];

  // Gallery uses alt text from pharmacyConfig for easy customization
  const galleryAlt = language === "el" ? pharmacyConfig.gallery : pharmacyConfig.gallery;
  const galleryImages = [
    { src: gallery1, alt: language === "el" ? pharmacyConfig.gallery.alt1.el : pharmacyConfig.gallery.alt1.en },
    { src: gallery2, alt: language === "el" ? pharmacyConfig.gallery.alt2.el : pharmacyConfig.gallery.alt2.en },
    { src: gallery3, alt: language === "el" ? pharmacyConfig.gallery.alt3.el : pharmacyConfig.gallery.alt3.en },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Gallery autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextValueSlide = () => {
    setCurrentValueSlide((prev) => (prev + 1) % values.length);
  };

  const prevValueSlide = () => {
    setCurrentValueSlide((prev) => (prev - 1 + values.length) % values.length);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Pharmacy Hero" 
              className="h-full w-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 lg:to-transparent" />
          </div>
          
          {/* GESY Logo - Top Right */}
          <div className="absolute top-4 right-4 z-10 lg:top-8 lg:right-8">
            <img 
              src={gesyLogo} 
              alt="ΓΕΣΥ Logo" 
              className="h-16 w-auto lg:h-24 rounded-full"
            />
          </div>
          
          {/* Content */}
          <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
            <div className="max-w-xl lg:max-w-2xl">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {t.hero.title}{" "}
                <span className="text-primary">{t.hero.titleHighlight}</span>
              </h1>
              <p className="mb-6 text-lg text-muted-foreground sm:text-xl">
                {t.hero.description}
              </p>

              {/* Business Hours Message */}
              <div className="mb-8 inline-flex items-center gap-4 rounded-xl bg-primary text-primary-foreground px-6 py-4 shadow-lg">
                <Clock className="h-6 w-6" />
                <div className="text-sm font-medium">
                  <span>{hours.monFriLabel}: </span>
                  <span className="opacity-90">{hours.monFriTime1}, {hours.monFriTime2}</span>
                  <span className="mx-3 opacity-50">|</span>
                  <span>{hours.satLabel}: </span>
                  <span className="opacity-90">{hours.satTime}</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button size="lg" className="gap-2" onClick={() => window.open(`tel:${pharmacyConfig.phone.replace(/\s/g, '')}`)}>
                  <Phone className="h-5 w-5" />
                  {t.hero.callUs || "Call Us"} - {pharmacyConfig.phone}
                </Button>
                <Button variant="outline" size="lg" className="bg-background/50 backdrop-blur-sm" onClick={() => scrollToSection("#services")}>
                  {t.hero.servicesButton}
                </Button>
                {pharmacyConfig.wolt && (
                  <a
                    href={pharmacyConfig.wolt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                    aria-label="Order on Wolt"
                  >
                    <img src={woltIcon} alt="Wolt" className="h-12 w-12 rounded-full transition-transform hover:scale-110" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
                {t.about.title}
              </h2>
              <div className="space-y-4 text-muted-foreground text-left">
                <p>{t.about.paragraph1}</p>
                <p>{t.about.paragraph2}</p>
              </div>
            </div>

            {/* Values Carousel */}
            <div className="relative mx-auto max-w-md">
              <div className="overflow-hidden">
                <div className="bg-card rounded-2xl p-8 text-center shadow-lg border border-border/50">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    {(() => {
                      const IconComponent = values[currentValueSlide].icon;
                      return <IconComponent className="h-10 w-10" />;
                    })()}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{values[currentValueSlide].title}</h3>
                  <p className="text-muted-foreground">{values[currentValueSlide].description}</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background shadow-lg hover:bg-background"
                onClick={prevValueSlide}
                aria-label="Previous value"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background shadow-lg hover:bg-background"
                onClick={nextValueSlide}
                aria-label="Next value"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {values.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentValueSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentValueSlide 
                        ? "bg-primary w-6" 
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to value ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <span className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {t.services.badge || "What We Offer"}
              </span>
              <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">{t.services.title}</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">{t.services.subtitle}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.services.items.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <div 
                    key={service.title} 
                    className="group relative bg-card rounded-2xl p-6 border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                    <div className="relative">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="mb-3 text-lg font-semibold text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="bg-secondary py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">{t.gallery.title}</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">{t.gallery.subtitle}</p>
            </div>

            {/* Carousel */}
            <div className="relative mx-auto max-w-4xl">
              {/* Main Image */}
              <div 
                className="relative overflow-hidden rounded-2xl cursor-pointer shadow-xl"
                onClick={() => setSelectedGalleryImage(galleryImages[currentSlide])}
              >
                <img 
                  src={galleryImages[currentSlide].src} 
                  alt={galleryImages[currentSlide].alt} 
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-all duration-500" 
                />
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
                onClick={prevSlide}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
                onClick={nextSlide}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "bg-primary w-8" 
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <span className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {t.contact.badge || "Get in Touch"}
              </span>
              <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
                {t.contact.title}
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                {t.contact.subtitle}
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Location */}
                <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{t.contact.address}</h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    {pharmacyConfig.address}
                  </p>
                  <Button 
                    variant="link" 
                    className="text-primary p-0 h-auto font-medium"
                    onClick={() => window.open(pharmacyConfig.mapsLink, "_blank")}
                  >
                    {t.contact.getDirections || "Get Directions"} →
                  </Button>
                </div>

                {/* Phone */}
                <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                    <Phone className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{t.contact.phone}</h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    {t.contact.speakWithUs || "Speak with our team"}<br />
                    <span className="text-foreground font-medium">{pharmacyConfig.phone}</span>
                  </p>
                  <Button 
                    variant="link" 
                    className="text-primary p-0 h-auto font-medium"
                    onClick={() => window.open(`tel:${pharmacyConfig.phone.replace(/\s/g, '')}`)}
                  >
                    {t.contact.callNow || "Call Now"} →
                  </Button>
                </div>

                {/* Email */}
                <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{t.contact.email}</h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    {t.contact.writeToUs || "Send us a message"}<br />
                    <span className="text-foreground font-medium text-xs">{pharmacyConfig.email}</span>
                  </p>
                  <Button 
                    variant="link" 
                    className="text-primary p-0 h-auto font-medium"
                    onClick={() => window.open(`mailto:${pharmacyConfig.email}`)}
                  >
                    {t.contact.emailUs || "Email Us"} →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Gallery Lightbox Dialog */}
      <Dialog open={!!selectedGalleryImage} onOpenChange={() => setSelectedGalleryImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <DialogTitle className="sr-only">{selectedGalleryImage?.alt}</DialogTitle>
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute top-2 right-2 z-10 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedGalleryImage(null)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </Button>
            {selectedGalleryImage && (
              <img 
                src={selectedGalleryImage.src} 
                alt={selectedGalleryImage.alt}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
