interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">ЭкоГород · 9 класс</div>
        <nav className="flex gap-8">
          <a
            href="#problem"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Проблема
          </a>
          <a
            href="#goals"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Цели
          </a>
        </nav>
      </div>
    </header>
  );
}