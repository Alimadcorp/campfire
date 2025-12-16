export default function Home() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-primary font-primary"
      suppressHydrationWarning
    >
      <main className="flex w-full max-w-3xl flex-col items-center gap-10 px-8 py-32 text-center">
        <h1 className="text-6xl text-white text-shadow-lg">CAMPFIRE LAHORE</h1>

        <p className="max-w-xl text-lg text-white/90 tracking-wide">
          Game jam for high schoolers in 200+ cities<br/>Feb 28 - Mar 1, 2026
        </p>

        <a
          href="https://alimad.fillout.com/campfire"
          className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-primary transition hover:scale-105 hover:shadow-xl"
        >
          RSVP Now
        </a>
      </main>
    </div>
  );
}
