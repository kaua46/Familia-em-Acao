import Image from "next/image";

export function AlbumSection() {
  return (
    <section id="album" className="w-full py-16 md:py-24 lg:py-32 bg-secondary text-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">
              Álbum de Figurinhas Valentes na Fé
            </h2>
          </div>
        </div>
        <div className="mx-auto max-w-5xl pt-12">
          <div className="flex justify-center [perspective:1000px]">
              <Image
                alt="Álbum de Figurinhas Valentes na Fé"
                className="rounded-xl object-cover object-center shadow-2xl transition-transform duration-500 hover:rotate-0 lg:group-hover:-rotate-3"
                src="https://i.ibb.co/nMr6VtvZ/vnf.jpg"
                width={500}
                height={600}
              />
          </div>
        </div>
      </div>
    </section>
  );
}
