import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16">
      <section className="w-full max-w-lg border border-[#17352c]/15 bg-white px-8 py-12 text-center shadow-xl sm:px-12">
        <p className="text-sm font-bold tracking-[0.3em] text-[#527566]">
          PAGE NOT FOUND
        </p>
        <h1 className="my-5 text-8xl font-bold leading-none text-[#17352c] sm:text-9xl">
          404
        </h1>
        <p className="mx-auto max-w-sm text-lg text-[#17352c]/75">
          Looks like this page wandered off. Let&apos;s get you back home.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center justify-center border border-[#17352c] bg-[#17352c] px-6 py-3 font-bold text-[#f1f5ed] transition-colors hover:bg-[#285244] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17352c]"
        >
          Back to home
        </Link>
      </section>
    </main>
  );
}
