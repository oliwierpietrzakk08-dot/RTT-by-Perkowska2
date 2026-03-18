import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import { Facebook, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Skontaktuj się z nami" 
          subtitle="Masz pytania? Chcesz zapisać swoje dziecko na zajęcia? Jesteśmy do Twojej dyspozycji."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Lewa kolumna: Dane kontaktowe */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-8 uppercase">Dane kontaktowe</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-border flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-1">Adres</p>
                    <p className="text-sm font-medium">ul. Zdunska 48, lok. 4, 99-400 Łowicz</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-border flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-1">Telefon</p>
                    <p className="text-sm font-medium italic text-foreground/50">[wkrótce]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-border flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-1">E-mail</p>
                    <p className="text-sm font-medium italic text-foreground/50">[wkrótce]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-border flex items-center justify-center shrink-0">
                    <Facebook className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-1">Facebook</p>
                    <Link 
                      href="https://www.facebook.com/rttbyperkowska/" 
                      target="_blank" 
                      className="text-sm font-medium text-primary hover:underline underline-offset-4"
                    >
                      facebook.com/rttbyperkowska
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white border border-border">
              <h4 className="font-bold mb-4 tracking-tight">Godziny otwarcia</h4>
              <p className="text-sm text-foreground/60 leading-loose">
                Nasze biuro jest otwarte w godzinach trwania zajęć. <br />
                Prosimy o kontakt telefoniczny lub mailowy w celu umówienia spotkania.
              </p>
            </div>
          </div>

          {/* Prawa kolumna: Formularz */}
          <div>
            <h3 className="text-xl font-bold tracking-tight mb-8 uppercase">Formularz zapisów</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
