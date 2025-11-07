import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const printFamilyImage = PlaceHolderImages.find(p => p.id === "print-family");
const printPrinterImage = PlaceHolderImages.find(p => p.id === "print-printer");

export function PrintAtHomeSection() {
  return (
    <section id="print" className="w-full py-16 md:py-24 lg:py-32 bg-purple-600 text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl max-w-3xl mx-auto">
              Imprima em Casa e Crie Momentos Mágicos em Família
            </h2>
            <p className="max-w-[900px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
             Receba tudo em formato digital e comece a brincar hoje mesmo. É prático, rápido e econômico.
            </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 flex flex-col items-center">
            {printFamilyImage && (
              <Image
                alt="Pai e filho brincando com atividades bíblicas"
                className="mx-auto aspect-square overflow-hidden rounded-lg object-cover shadow-lg w-full max-w-md"
                data-ai-hint={printFamilyImage.imageHint}
                src={printFamilyImage.imageUrl}
                width={400}
                height={400}
              />
            )}
             <h3 className="text-center text-2xl font-bold text-white md:text-3xl font-headline">
              Diversão e Aprendizado Bíblico
            </h3>
          </div>
          <div className="space-y-6 flex flex-col items-center">
            {printPrinterImage && (
              <Image
                alt="Impressora imprimindo jogos educativos"
                className="mx-auto aspect-square overflow-hidden rounded-lg object-cover shadow-lg w-full max-w-md"
                data-ai-hint={printPrinterImage.imageHint}
                src={printPrinterImage.imageUrl}
                width={400}
                height={400}
              />
            )}
            <h3 className="text-center text-2xl font-bold text-white md:text-3xl font-headline">
              Imprima & Inspire
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
