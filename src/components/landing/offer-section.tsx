import { Button } from "@/components/ui/button";
import { CheckCircle2, Star, ThumbsUp, Users } from "lucide-react";
import { UpsellDialog } from "./upsell-dialog";

const essentialFeatures = [
  "10 Jogos Bíblicos Educativos",
  "Arquivos PDF para impressão",
  "Atividades para toda a família",
  "Acesso vitalício",
];

const premiumFeatures = [
  "Tudo do Plano Essencial e mais:",
  "+10 Jogos EXCLUSIVOS (Total de 20)",
  "Álbum de Figurinhas 'Valentes na Fé'",
  "100+ Figurinhas de Heróis Bíblicos",
  "Bônus: Guia de Atividades Extras",
  "Impressão Ilimitada",
];


export function OfferSection() {
  return (
    <section id="offer" className="w-full scroll-mt-20 py-16 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
           <h2 className="text-3xl font-bold tracking-tight font-headline text-gray-900 dark:text-gray-50 sm:text-4xl md:text-5xl">
              Transforme o tempo em família com fé e diversão
            </h2>
        </div>
        
        <div className="mx-auto grid max-w-md items-start justify-center gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-12">
          {/* Plano Essencial */}
          <div className="flex flex-col rounded-xl bg-white text-foreground p-6 shadow-lg text-center relative border border-gray-200 transition-transform hover:scale-105">
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-bold font-headline text-primary">PLANO ESSENCIAL</h3>
              <p className="mt-2 text-4xl font-extrabold">
                R$10<span className="text-lg font-medium align-super">,00</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground min-h-[3rem]">O primeiro passo para criar memórias inesquecíveis com 10 jogos bíblicos.</p>
              <ul className="mt-6 space-y-3 text-left text-sm">
                {essentialFeatures.map((item) => (
                   <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500" />
                      <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
             <UpsellDialog>
                <Button variant="outline" className="w-full mt-8 font-bold shadow-md">
                  QUERO O PLANO ESSENCIAL
                </Button>
             </UpsellDialog>
          </div>

          {/* Plano Premium */}
          <div className="flex flex-col rounded-xl bg-white text-foreground p-6 shadow-2xl relative ring-2 ring-primary text-center transition-transform hover:scale-105">
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1.5 text-sm font-bold text-purple-900 flex items-center gap-1.5">
              <Star className="w-4 h-4" />
              MAIS POPULAR
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-bold font-headline text-primary">PLANO PREMIUM</h3>
              <div className="mt-2">
                <p className="text-sm line-through text-muted-foreground">de R$97,90 por apenas</p>
                <p className="text-4xl font-extrabold text-primary">
                  R$19<span className="text-lg font-medium align-super">,90</span>
                </p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground min-h-[3rem]">A experiência completa com o dobro de conteúdo, álbum e todos os bônus!</p>
              <ul className="mt-6 space-y-3 text-left text-sm">
                {premiumFeatures.map((item) => (
                   <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className={item.startsWith('+') || item.startsWith('Bônus') ? 'font-semibold' : ''}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="https://pay.lowify.com.br/checkout?product_id=zxQynS">
              <Button size="lg" className="w-full mt-8 font-bold shadow-lg animate-pulse bg-yellow-400 hover:bg-yellow-500 text-purple-900">
                <ThumbsUp className="mr-2 h-5 w-5"/>
                QUERO O PLANO PREMIUM
              </Button>
            </a>
            <div className="flex items-center justify-center gap-2 mt-3 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>+1.234 pessoas já compraram</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
