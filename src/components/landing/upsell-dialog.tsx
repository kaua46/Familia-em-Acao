import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface UpsellDialogProps {
    children: React.ReactNode;
}

export function UpsellDialog({ children }: UpsellDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-purple-600 text-white border-purple-500 w-[90vw] max-w-sm rounded-lg p-6 flex flex-col items-center justify-center text-center">
        <AlertDialogHeader className="text-center space-y-1">
          <AlertDialogTitle className="text-lg md:text-xl font-headline font-bold text-yellow-400">
            ESPERE! OFERTA EXCLUSIVA!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-purple-100 text-sm md:text-base">
            Leve o <span className="font-bold">PLANO PREMIUM</span> de <span className="line-through">R$19,90</span> por apenas:
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="text-center my-4">
            <p className="text-3xl md:text-4xl font-extrabold text-yellow-400 my-2">R$15,90</p>
            <ul className="text-xs text-purple-100 list-none p-0 space-y-1">
                <li>✅ Todo o conteúdo do Plano Essencial</li>
                <li>✅ +10 jogos exclusivos</li>
                <li>✅ Álbum de Figurinhas "Valentes na Fé"</li>
                <li>✅ Todos os bônus</li>
            </ul>
        </div>
        <AlertDialogFooter className="w-full flex-col sm:flex-col sm:space-x-0 gap-2 items-center">
            <AlertDialogAction asChild className="w-full max-w-[300px]">
                <a href="https://pay.lowify.com.br/checkout?product_id=BlrNgQ">
                    <Button size="lg" className="w-full font-bold shadow-lg animate-pulse bg-yellow-400 hover:bg-yellow-500 text-purple-900">
                        SIM, QUERO A OFERTA!
                    </Button>
                </a>
            </AlertDialogAction>
            <AlertDialogCancel asChild className="w-full max-w-[300px]">
                 <a href="https://pay.lowify.com.br/checkout?product_id=FdHSSl">
                    <Button variant="link" className="text-white/60 hover:text-white/80 h-auto py-1 px-0 text-xs text-center">
                        Não, obrigado. seguir com o Plano Essencial.
                    </Button>
                 </a>
            </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
