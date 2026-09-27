export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-emerald-50 px-6 py-12">
      <section className="w-full max-w-xl rounded-2xl border border-emerald-100 bg-white p-8 text-center shadow-sm sm:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
          Las Planadas de Escamequita
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Proyecto nuevo, desde cero
        </h1>

        <p className="mt-4 leading-7 text-stone-600">
          Aquí se organizará información pública verificada y una forma sencilla
          de solicitar información sobre el proyecto.
        </p>

        <p className="mt-6 text-xs text-stone-500">
          Demostración independiente. No es el sitio oficial ni está afiliada
          con sus propietarios.
        </p>
      </section>
    </main>
  );
}
