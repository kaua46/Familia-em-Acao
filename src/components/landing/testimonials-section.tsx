import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: "testimonial-ana",
    name: "Ana P.",
    location: "Mãe de 2",
    comment: "Meus filhos não largam mais os jogos! É incrível ver eles aprendendo sobre a Bíblia e se divertindo tanto. Reduzimos muito o tempo nas telas.",
  },
  {
    id: "testimonial-carla",
    name: "Carla S.",
    location: "Professora da EBD",
    comment: "Usei o material na minha classe e foi um sucesso. As crianças ficaram super engajadas e as aulas se tornaram mais dinâmicas. Recomendo demais!",
  },
  {
    id: "testimonial-maria",
    name: "Maria L.",
    location: "Avó",
    comment: "Comprei para meus netos e foi o melhor presente. Passamos tardes inteiras brincando e conversando sobre as histórias. Momentos que não têm preço.",
  },
];

const StarRating = ({ rating = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);


export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight font-headline text-gray-900 sm:text-4xl md:text-5xl">
            O que as famílias estão dizendo
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Veja como o nosso kit já está transformando momentos em famílias de todo o Brasil.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find(p => p.id === testimonial.id);
            return (
              <Card key={testimonial.id} className="bg-background shadow-lg transform transition-transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {image && (
                        <Image
                        src={image.imageUrl}
                        alt={`Foto de ${testimonial.name}`}
                        width={64}
                        height={64}
                        className="rounded-full object-cover"
                        data-ai-hint={image.imageHint}
                        />
                    )}
                    <div>
                      <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <StarRating />
                  <p className="mt-4 text-muted-foreground">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
