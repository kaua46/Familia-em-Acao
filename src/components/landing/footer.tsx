export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800 py-6">
      <div className="container mx-auto px-4 md:px-6 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {currentYear} Fé e Família em Ação. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
