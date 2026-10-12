import { useEffect } from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';
import { COUPLE_DATA } from '../data/invitationData';

export default function NotFound() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Page not found — ${COUPLE_DATA.title}`;
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <div className="min-h-svh bg-[#2b0209] text-[#F7EAD7] flex flex-col items-center px-5 py-8 sm:py-10 bg-[radial-gradient(ellipse_at_top,#680E1F,transparent_70%)]">
      <header className="text-center mb-10 sm:mb-12">
        <a href="/" className="font-instrument text-2xl sm:text-3xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#C89B53]">
          {COUPLE_DATA.title}
        </a>
        <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#E4E2B8]">An Engagement Celebration</p>
      </header>

      <main className="w-full max-w-xl my-auto relative bg-[#F7EAD7] text-[#580C1B] px-7 py-12 sm:px-14 sm:py-14 text-center shadow-[0_25px_80px_rgba(0,0,0,0.3)] rounded-t-[10rem] sm:rounded-t-[14rem]">
        <div aria-hidden="true" className="absolute inset-3 sm:inset-4 border border-[#580C1B]/20 rounded-t-[9.5rem] sm:rounded-t-[13rem] pointer-events-none" />
        <Heart aria-hidden="true" className="w-5 h-5 mx-auto text-[#9A7036] mb-3" strokeWidth={1} />
        <p className="font-instrument text-[7rem] sm:text-[9rem] leading-none tracking-tight">404</p>
        <p className="text-[10px] uppercase tracking-[0.3em] mt-3 mb-7">Page not found</p>
        {/* <div aria-hidden="true" className="w-12 h-px bg-[#9A7036]/50 mx-auto mb-7" /> */}
        <h1 className="font-instrument text-3xl sm:text-4xl leading-tight">
          A little lost on the<br /><span className="italic">way to forever.</span>
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-[#580C1B]/80 max-w-xs mx-auto">
          This page may have moved, or the link may be a little mixed up. Your invitation is right this way.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center gap-3 bg-[#580C1B] text-[#F7EAD7] px-6 py-4 text-xs uppercase tracking-wider hover:bg-[#470101] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#580C1B]"
        >
          Open invitation <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
        </a>
        <div className="mt-5">
          <a href="/" className="inline-block py-2 text-xs underline underline-offset-4 hover:text-[#2b0209] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#580C1B]">
            View the full celebration
          </a>
        </div>
      </main>

      <footer className="mt-10 sm:mt-12 text-[10px] uppercase tracking-[0.2em] text-[#E4E2B8] text-center">
        With love, always.
      </footer>
    </div>
  );
}
