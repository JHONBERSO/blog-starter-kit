import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 py-6 mb-8">
      {/* Título o Marca centrada */}
      <div className="text-center mb-4">
        <Link href="/" className="text-3xl md:text-4xl font-serif tracking-widest uppercase text-gray-900 font-bold">
          JHOMBER
        </Link>
        <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Ingeniería, Ciberseguridad & Desarrollo</p>
      </div>

      {/* Menú Horizontal de Categorías estilo revista */}
      <nav className="border-t border-b border-gray-200 py-2">
        <ul className="flex flex-wrap justify-center items-center gap-6 text-xs uppercase tracking-wider font-semibold text-gray-700">
          <li><Link href="/" className="hover:text-black transition-colors">Inicio</Link></li>
          <li><Link href="#" className="hover:text-black transition-colors">Sistemas</Link></li>
          <li><Link href="#" className="hover:text-black transition-colors">Android</Link></li>
          <li><Link href="#" className="hover:text-black transition-colors">Ciberseguridad</Link></li>
          <li><Link href="#" className="hover:text-black transition-colors">Redes</Link></li>
          <li><Link href="#" className="hover:text-black transition-colors">Sobre Mí</Link></li>
        </ul>
      </nav>
    </header>
  );
}
