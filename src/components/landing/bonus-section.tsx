import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Gift } from "lucide-react";

export function BonusSection() {
  return (
    <section id="bonus" className="w-full py-16 md:py-24 lg:py-32 bg-purple-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-accent text-accent-foreground font-bold text-lg px-6 py-2 hover:bg-accent/90">
                <Gift className="mr-2 h-5 w-5"/>
                BÔNUS EXCLUSIVO
              </Badge>
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-white">
                Guia de Atividades Bíblicas Extras para Mudar o Jogo
              </h2>
              <p className="max-w-[600px] text-purple-100 md:text-xl/relaxed mx-auto lg:mx-0">
                Um material complementar para inspirar ainda mais momentos de conexão e aprendizado através da Palavra, com ideias criativas para usar a Bíblia e atividades que fortalecem o vínculo familiar.
              </p>
            </div>
          </div>
          <div className="flex justify-center [perspective:1000px]">
            <Image
              alt="Folha de Atividades Bônus"
              className="rounded-lg object-cover object-center shadow-2xl transition-transform duration-500 hover:rotate-0 lg:group-hover:rotate-3 [transform:rotateY(10deg)_rotateX(-3deg)]"
              src="https://i.ibb.co/8Lkzbs8q/bonus.jpg"
              width={550}
              height={412}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
