import { ArrowUpRight, GithubLogo, LinkedinLogo, Envelope, Phone, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { RESUME_DATA } from "@/lib/resume";

export function Footer() {
  const { personal, projects } = RESUME_DATA;

  return (
    <footer
      id="footer"
      className="relative z-10 border-t border-white/10 px-6 py-10 md:px-10 md:py-12"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-foreground">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(212,162,47,0.9)]"
              />
              {personal.name} // STARK AI LABS
            </div>
            <p className="max-w-[38ch] font-sans text-sm leading-relaxed text-zinc-400">
              AI/ML Engineering Student &amp; Systems Builder. Designing LLM Agents, Custom Language Models, and Automated Fintech engines.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1 font-mono text-xs text-zinc-400">
              <a href={`mailto:${personal.email}`} className="hover:text-accent flex items-center gap-1.5 transition-colors">
                <Envelope size={14} className="text-accent" /> {personal.email}
              </a>
              <a href={`tel:${personal.phone}`} className="hover:text-accent flex items-center gap-1.5 transition-colors">
                <Phone size={14} className="text-accent" /> {personal.phone}
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-4 md:grid-cols-3">
            {projects.map((proj) => (
              <a
                key={proj.id}
                href="#projects"
                className="group flex flex-col gap-1"
              >
                <span className="font-sans text-[13px] font-medium text-foreground transition-colors group-hover:text-accent flex items-center gap-1">
                  {proj.title.split(" — ")[0]}
                  <ArrowUpRight
                    size={11}
                    weight="bold"
                    className="opacity-0 transition-opacity group-hover:opacity-100 text-accent"
                  />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  {proj.category}
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/5 pt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 md:flex-row md:items-center md:justify-between">
          <span>Build 2026.08.12 &nbsp;&middot;&nbsp; {personal.name} &nbsp;&middot;&nbsp; J.A.R.V.I.S. Active</span>

          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <GithubLogo size={14} /> GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <LinkedinLogo size={14} /> LinkedIn
            </a>
            <a
              href={personal.resumeUrl}
              download
              className="text-accent hover:underline flex items-center gap-1"
            >
              <DownloadSimple size={14} /> Resume (DOCX)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
