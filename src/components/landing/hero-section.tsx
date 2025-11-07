import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";

const heroImage = PlaceHolderImages.find(p => p.id === "hero-games");

export function HeroSection() {
  return (
    <section id="home" className="w-full py-16 md:py-24 lg:py-32 bg-background dark:bg-gray-800/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-headline font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              Desperte a imaginação e fortaleça a fé dos seus filhos
            </h1>
          </div>
          <div className="w-full max-w-4xl pt-8">
            <Card className="shadow-xl rounded-lg">
              <CardContent className="p-2">
                {heroImage && (
                  <Image
                    alt="Jogos e materiais didáticos bíblicos para crianças"
                    className="aspect-video w-full overflow-hidden rounded-md object-cover"
                    data-ai-hint={heroImage.imageHint}
                    src={heroImage.imageUrl}
                    width={1200}
                    height={675}
                    priority
                  />
                )}
              </CardContent>
            </Card>
          </div>
          <a href="#offer">
              <Button size="lg" className="font-bold text-base md:text-lg animate-pulse shadow-lg bg-yellow-400 hover:bg-yellow-500 text-purple-900 px-6">
                QUERO MEU KIT AGORA 🙏
                <ArrowDown className="ml-2 h-5 w-5"/>
              </Button>
            </a>
        </div>
      </div>
    </section>
  );
}
