import Image from "next/image";
import Reveal from "@/components/Reveal";
import { profile, projects, skills, learning } from "@/lib/data";

const h2 = "mb-4 mt-12 scroll-mt-4 text-xl font-bold";
const btn = "inline-block rounded-lg border border-line bg-card px-3.5 py-2 text-sm font-medium transition duration-200 hover:-translate-y-0.5 hover:border-ink";
const link = "font-medium text-accent underline-offset-4 hover:underline";
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

const Tags = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((t) => (
      <span key={t} className="rounded-md bg-tag px-2 py-0.5 text-xs font-bold text-tagtx transition-transform duration-200 hover:-translate-y-0.5">{t}</span>
    ))}
  </div>
);

export default function Home() {
  return (
    <div className="mx-auto max-w-[1000px] px-5">
      <nav className="flex flex-wrap items-center justify-between gap-3 py-[18px]">
        <a href="#about" aria-label="Home" className="grid size-[38px] place-items-center rounded-full bg-ink font-bold text-bg transition-transform duration-300 hover:rotate-12">M</a>
        <ul className="flex flex-wrap gap-[18px] text-mute">
          {["about", "projects", "skills", "learning", "contact"].map((s) => (
            <li key={s}>
              <a href={`#${s}`} className="relative transition-colors hover:text-ink after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-ink after:transition-all after:duration-300 hover:after:w-full">
                {s[0].toUpperCase() + s.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main id="about" className="mb-10 rounded-xl border border-line bg-card px-5 py-6 sm:px-12 sm:py-10">
        <section className="flex flex-wrap items-start justify-between gap-8">
          <div className="min-w-0 flex-[1_1_420px]">
            <h1 className="mb-3 text-[22px] font-bold leading-snug motion-safe:animate-fade-up sm:text-[28px]">{profile.name} – {profile.title}</h1>
            <p className="text-mute motion-safe:animate-fade-up" style={delay(100)}>{profile.intro}</p>
            <dl className="my-4 rounded-lg bg-chip px-4 py-3.5 text-sm motion-safe:animate-fade-up" style={delay(200)}>
              {profile.snapshot.map(([k, v]) => (
                <div key={k} className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="min-w-[90px] text-mute">{k}</dt><dd>{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 flex flex-wrap gap-2.5 motion-safe:animate-fade-up" style={delay(300)}>
              <a className={`${btn} !border-ink bg-ink text-bg`} href={`mailto:${profile.email}`}>Email me</a>
              <a className={btn} href={profile.github} {...ext}>GitHub</a>
              <a className={btn} href={profile.linkedin} {...ext}>LinkedIn</a>
              <a className={btn} href={profile.facebook} {...ext}>Facebook</a>
              <a className={btn} href="/resume.pdf" download="Md_Asaduzzaman_Minhaz_Resume.pdf">Download Resume</a>
            </div>
          </div>

          <div className="relative size-[150px] flex-none sm:size-[220px] motion-safe:animate-pop" style={delay(150)}>
            <div className="absolute inset-0 rounded-full motion-safe:animate-spin-slow" style={{ background: "conic-gradient(#ea4335 0 25%,#fbbc05 0 50%,#4285f4 0 75%,#34a853 0)" }} />
            <div className="absolute inset-[7px] overflow-hidden rounded-full bg-card">
              <Image src="/avatar.jpg" alt={profile.name} width={206} height={206} priority className="size-full object-cover" />
            </div>
          </div>
        </section>

        <Reveal>
          <h2 className={h2}>What I do</h2>
          <ul className="my-2 list-disc space-y-1 pl-5">{profile.doing.map((d) => <li key={d}>{d}</li>)}</ul>
        </Reveal>

        <h2 id="projects" className={h2}>Projects</h2>
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <article className="group border-t border-line py-5 transition-transform duration-300 first:border-t-0 hover:translate-x-1">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-base font-bold transition-colors group-hover:text-accent">{p.name}</h3>
                <span className="rounded bg-chip px-2 py-0.5 text-xs text-mute">{p.kind}</span>
              </div>
              <p className="mb-2.5 mt-1.5 text-mute">{p.desc}</p>
              <Tags items={p.tech} />
              {(p.live || p.client || p.server) && (
                <div className="mt-3 flex flex-wrap gap-3.5 text-sm">
                  {p.live && <a className={link} href={p.live} {...ext}>Live demo</a>}
                  {p.client && <a className={link} href={p.client} {...ext}>Client code</a>}
                  {p.server && <a className={link} href={p.server} {...ext}>Server code</a>}
                </div>
              )}
            </article>
          </Reveal>
        ))}

        <h2 id="skills" className={h2}>Skills</h2>
        {Object.entries(skills).map(([k, v], i) => (
          <Reveal key={k} delay={i * 60} className="mb-3.5">
            <b className="mb-1.5 block text-sm">{k}</b>
            <Tags items={v} />
          </Reveal>
        ))}

        <Reveal>
          <h2 id="learning" className={h2}>Currently learning</h2>
          <Tags items={learning} />
        </Reveal>

        <Reveal>
          <h2 id="contact" className={h2}>Contact</h2>
          <p className="text-mute">The fastest way to reach me is email. I reply to internship and job messages first.</p>
          <ul className="my-2 list-disc space-y-1 pl-5">
            <li>Email: <a className={link} href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li>LinkedIn: <a className={link} href={profile.linkedin} {...ext}>asaduzzaman-minhaz</a></li>
            <li>GitHub: <a className={link} href={profile.github} {...ext}>mdasaduzzamanminhaz3</a></li>
            <li>Facebook: <a className={link} href={profile.facebook} {...ext}>asaduzzaman.minhaz.7</a></li>
            <li>Discord: {profile.discord}</li>
          </ul>
        </Reveal>
      </main>

      <footer className="pb-10 text-center text-[13px] text-mute">© {new Date().getFullYear()} {profile.name}. All rights reserved.</footer>
    </div>
  );
}