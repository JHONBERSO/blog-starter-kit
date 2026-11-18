import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import Sidebar from "@/app/_components/sidebar";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default function Index() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main className="bg-gray-50 min-h-screen pb-16">
      {/* Cabecera centrada estilo revista */}
      <Header />

      <Container>
        {/* Banner Hero Principal (Artículo destacado arriba) */}
        {heroPost && (
          <section className="relative w-full h-[420px] mb-12 overflow-hidden bg-gray-900 group">
            <img
              src={heroPost.coverImage}
              alt={heroPost.title}
              className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-12 text-white">
              <span className="text-xs uppercase tracking-widest text-gray-300 mb-2">
                {heroPost.date}
              </span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold uppercase tracking-wide max-w-2xl mb-4 leading-tight">
                {heroPost.title}
              </h2>
              <div>
                <Link
                  href={`/posts/${heroPost.slug}`}
                  className="inline-block border border-white px-5 py-2 text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  Leer más
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Diseño de dos columnas: Izquierda (Artículos) / Derecha (Barra Lateral) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Columna Izquierda (2/3 del ancho) */}
          <div className="lg:col-span-2 space-y-12">
            {allPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-gray-200 p-6 md:p-8 shadow-sm"
              >
                <div className="text-center mb-6">
                  <span className="text-[11px] uppercase tracking-widest text-amber-700 font-semibold block mb-1">
                    Artículo Técnico • {post.date}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 uppercase tracking-wide">
                    <Link href={`/posts/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-[11px] uppercase tracking-widest text-gray-400 mt-1">
                    Por Jhomber
                  </p>
                </div>

                {/* Imagen del post */}
                <div className="mb-6 overflow-hidden">
                  <Link href={`/posts/${post.slug}`}>
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-72 object-cover hover:opacity-95 transition-opacity"
                    />
                  </Link>
                </div>

                {/* Extracto con letra capital estilo revista */}
                <p className="text-sm text-gray-600 leading-relaxed text-justify first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-gray-900">
                  {post.excerpt}
                </p>

                <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                  <Link
                    href={`/posts/${post.slug}`}
                    className="text-xs uppercase tracking-widest font-bold text-gray-900 hover:text-amber-700 transition-colors"
                  >
                    Continuar leyendo →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Columna Derecha (1/3 del ancho): Barra Lateral */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </Container>
    </main>
  );
}
