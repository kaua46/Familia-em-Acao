export function GamesSection() {
  return (
    <section id="games" className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground text-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-headline tracking-tighter text-primary sm:text-5xl">Mais de 20 Jogos Bíblicos para Aprender Brincando</h2>
            </div>
            <div className="rounded-lg bg-secondary p-4 text-center max-w-md mx-auto lg:mx-0 mt-6">
              <h4 className="font-semibold text-lg text-foreground">Exemplo de jogo:</h4>
              <p className="text-2xl font-bold text-primary mt-1">Verdade ou Mentira?</p>
              <p className="text-muted-foreground mt-2">Teste os conhecimentos bíblicos da família de forma divertida e desafiadora!</p>
            </div>
          </div>
          <div className="group flex items-center justify-center [perspective:1000px]">
            <div className="aspect-video w-full max-w-2xl">
              <iframe 
                className="w-full h-full rounded-lg shadow-2xl shadow-purple-500/30" 
                src="https://www.youtube.com/embed/mS9MkChvJe4" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
