export default function Home() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-primary"
      suppressHydrationWarning
    >
      <main className="flex w-full max-w-3xl flex-col items-center gap-10 px-8 py-32 text-center">
        <h1 className="sm:text-8xl text-5xl font-primary text-white solid-shadow text-shadow-[#0004]">CAMPFIRE LAHORE</h1>

        <p className="max-w-xl sm:text-2xl text-lg text-white/90 tracking-wide font-subheading text-shadow-2xs">
          Game jam for high schoolers in 200+ cities<br/>Feb 28 - Mar 1, 2026
        </p>
        <a
          href="https://forms.hackclub.com/t/a3QSt8MuvHus"
          className="hc-button rounded-2xl font-primary px-6 py-3 text-3xl"
        >
          RSVP Now
        </a>
      </main>
    </div>
  );
}
