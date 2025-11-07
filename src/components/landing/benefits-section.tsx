import { Clock, InfinityIcon, Printer } from "lucide-react";

const benefits = [
  {
    icon: <InfinityIcon className="h-10 w-10 text-primary" />,
    title: "Acesso Vitalício",
    description: "Compre uma vez e use para sempre com todos os seus filhos, netos e alunos.",
  },
  {
    icon: <Printer className="h-10 w-10 text-primary" />,
    title: "Impressão Ilimitada",
    description: "Imprima quantas vezes quiser, para usar em casa, na igreja, na escola ou em eventos.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Entrega Digital Imediata",
    description: "Receba todo o material por e-mail, logo após a confirmação do pagamento, sem espera.",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground text-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-5xl">
              Facilidade e liberdade total para você
            </h2>
        </div>
        <div className="mx-auto grid max-w-4xl items-start gap-8 pt-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="grid gap-1 text-center p-4 rounded-lg bg-secondary">
              <div className="mx-auto flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold font-headline text-primary mt-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
