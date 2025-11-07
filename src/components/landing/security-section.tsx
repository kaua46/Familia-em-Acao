import { Lock, ShieldCheck } from "lucide-react";

export function SecuritySection() {
  return (
    <section id="security" className="w-full py-12 md:py-16 bg-secondary dark:bg-gray-800">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 md:flex-row md:gap-6">
        <ShieldCheck className="h-10 w-10 text-green-600" />
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            AMBIENTE 100% SEGURO
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Seus dados estão protegidos. Pagamento processado com criptografia de ponta a ponta.
          </p>
        </div>
      </div>
    </section>
  );
}
