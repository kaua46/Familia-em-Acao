import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "O que exatamente eu vou receber?",
    answer:
      "Você receberá arquivos digitais em formato PDF de alta qualidade, prontos para imprimir. Nenhum produto físico será enviado, o acesso é 100% digital e imediato.",
  },
  {
    question: "Como vou receber os materiais?",
    answer:
      "Assim que o pagamento for confirmado, você receberá um e-mail com um link exclusivo para baixar todo o material na mesma hora, sem espera.",
  },
  {
    question: "Posso imprimir quantas vezes quiser?",
    answer:
      "Sim! Seu acesso é vitalício e a impressão é ilimitada. Use com seus filhos, netos ou alunos da escola dominical, hoje e sempre.",
  },
  {
    question: "Qual papel devo usar para a impressão?",
    answer:
      "Para um acabamento mais bonito e durável, recomendamos papéis com maior gramatura (como offset 180g ou papel fotográfico), mas você pode usar sulfite comum.",
  },
  {
    question: "É seguro comprar neste site?",
    answer:
      "Sim, sua compra é 100% segura. Usamos a maior e mais segura plataforma de pagamentos do Brasil, que protege todos os seus dados com criptografia de ponta.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight font-headline text-gray-900 dark:text-gray-50 sm:text-4xl md:text-5xl">
            Perguntas Frequentes
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Esclareça suas últimas dúvidas antes de transformar os momentos em família.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b">
                <AccordionTrigger className="py-5 text-lg font-semibold text-left hover:no-underline">
                  <div className="flex items-center gap-4">
                     <HelpCircle className="h-6 w-6 text-primary flex-shrink-0" />
                     <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 dark:text-gray-300 pb-5 pl-14">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
