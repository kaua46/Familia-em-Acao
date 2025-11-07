"use client";

import { Rocket } from "lucide-react";
import { useState, useEffect } from "react";

export function LaunchBanner() {
  const [currentDate, setCurrentDate] = useState<string | null>(null);

  useEffect(() => {
    // This ensures the code runs only on the client, after hydration
    const date = new Date();
    const formattedDate = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    });
    setCurrentDate(formattedDate);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="flex w-full flex-col items-center justify-center gap-1 bg-orange-500 py-2 px-4 text-center text-sm font-semibold text-white sm:text-base md:flex-row md:gap-2">
      <div className="flex items-center gap-2">
        <Rocket className="h-5 w-5" />
        <span>LANÇAMENTO</span>
      </div>
      <span className="hidden md:inline">|</span>
      <span>
        Oferta válida somente hoje {currentDate && `(${currentDate})`}
      </span>
    </div>
  );
}
