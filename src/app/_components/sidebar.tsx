export default function Sidebar() {
  return (
    <aside className="w-full space-y-8">
      {/* ABOUT ME SECTION */}
      <div className="border border-gray-200 p-6 bg-white text-center">
        <h3 className="text-xs uppercase tracking-widest font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
          Sobre Mí
        </h3>
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
          {/* Aquí puedes poner la URL de tu foto o avatar */}
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80" alt="Jhomber" className="w-full h-full object-cover" />
        </div>
        <p className="text-xs text-gray-600 leading-relaxed text-justify">
          ¡Hola! Soy Jhomber, estudiante de Ingeniería de Sistemas e Informática en la UNS. Apasionado por el desarrollo Android, redes y ciberseguridad. Este es mi espacio personal donde comparto proyectos y apuntes técnicos.
        </p>
      </div>

      {/* POPULAR POSTS SECTION */}
      <div className="border border-gray-200 p-6 bg-white">
        <h3 className="text-xs uppercase tracking-widest font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
          Posts Populares
        </h3>
        <div className="space-y-4 text-left">
          <div className="group cursor-pointer">
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Nov 18, 2026</span>
            <h4 className="text-xs font-bold text-gray-800 group-hover:underline">Arquitectura de Redes VLANs implementada en Cisco</h4>
          </div>
          <div className="group cursor-pointer">
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Nov 10, 2026</span>
            <h4 className="text-xs font-bold text-gray-800 group-hover:underline">Desarrollo de Apps en Android con Kotlin y Firebase</h4>
          </div>
        </div>
      </div>
    </aside>
  );
}
