/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CaseStudyReveal, {
  RevealItem,
} from "@/app/components/CaseStudyReveal";
import HeroComponentStack from "@/app/components/HeroComponentStack";
import MagnetImage from "@/app/components/MagnetImage";
import WorkflowDiagram from "@/app/components/WorkflowDiagram";

export const metadata: Metadata = {
  title: "Archetype UI: Designing in Code | Isaiah Quindo",
  description:
    "How AI changed our design workflow at Open Architects. Design moved out of Figma and into an interactive playground built in Next.js.",
  openGraph: {
    title: "Archetype UI: Designing in Code",
    description:
      "How AI changed our design workflow at Open Architects. Design moved out of Figma and into an interactive playground built in Next.js.",
    images: [
      {
        url: "/images/open-architects-archetype-hero.png",
        width: 1280,
        height: 720,
        alt: "Archetype UI: Designing in Code",
      },
    ],
    type: "article",
    url: "https://isaiahquindo.com/case-studies/open-architects-archetype-ui",
  },
};

export default function OpenArchitectsArchetypeUI() {
  return (
    <>
      <Header />
      <CaseStudyReveal className="min-h-lvh px-6 pt-40">
        <div className="max-w-7xl m-auto">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 max-w-3xl">
              <RevealItem delay={0.4}>
                <h1 className="text-4xl font-bold">
                  Archetype UI: Designing in Code
                </h1>
              </RevealItem>
              <RevealItem delay={0.55}>
                <p className="text-gray-400">
                  How AI changed our design workflow at Open Architects
                </p>
              </RevealItem>
            </div>

            <RevealItem delay={0.7} scaleIn>
              <HeroComponentStack />
            </RevealItem>

            <div className="flex flex-col gap-4 max-w-3xl">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="text-gray-400">
                Open Architects builds data dashboards for K-12 school
                districts, and I am the only designer on the team. When I
                joined as Senior Product Designer, every screen started in
                Figma. Today, most of my design work happens in code.
              </p>
              <p className="text-gray-400">
                I rebuilt our design system as real React components and now
                prototype directly in a live app I call Archetype UI, prompting
                Claude to do most of the building. Figma still earns its place
                for genuinely complex visual work, but it is no longer where
                design starts. Here is what changed, and why it made a
                one-designer team faster.
              </p>
            </div>

            <div className="flex flex-col gap-4 max-w-3xl">
              <h2 className="text-2xl font-bold">Project</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                <div className="flex flex-col">
                  <dt className="text-xs uppercase tracking-wider text-gray-500">
                    Client
                  </dt>
                  <dd className="text-gray-300">Open Architects</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-xs uppercase tracking-wider text-gray-500">
                    Role
                  </dt>
                  <dd className="text-gray-300">Senior Product Designer</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-xs uppercase tracking-wider text-gray-500">
                    Platform
                  </dt>
                  <dd className="text-gray-300">Web</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-xs uppercase tracking-wider text-gray-500">
                    Tools
                  </dt>
                  <dd className="text-gray-300">
                    Figma · Claude Code · Figma MCP · Next.js · Tailwind
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="bg-black pb-40">
          <div className="max-w-7xl m-auto">
            <div className="flex flex-col gap-10">
              <div className="relative w-full aspect-[16/9] rounded-4xl bg-[#F9FAFB] overflow-hidden mt-8 grid grid-cols-2 p-6 md:p-10">
                <div className="flex flex-col gap-3 items-center justify-center relative z-10">
                  <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                    Figma
                  </span>
                  <MagnetImage
                    src="/images/archetype/date-picker-figma.png"
                    alt="Date picker, Figma design"
                    width={1202}
                    height={965}
                    wrapperClassName="w-full"
                    className="w-full h-auto rounded-2xl shadow-xl ring-1 ring-black/5"
                  />
                </div>
                <div className="flex flex-col gap-3 items-center justify-center relative z-20 -ml-12 md:-ml-20">
                  <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                    Coded React Component
                  </span>
                  <MagnetImage
                    src="/images/archetype/date-picker-code.png"
                    alt="Date picker, running live in Archetype UI"
                    width={1202}
                    height={965}
                    wrapperClassName="w-full"
                    className="w-full h-auto rounded-2xl shadow-xl ring-1 ring-black/5"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 max-w-3xl">
                <h2 className="text-2xl font-bold">The problem</h2>
                <p className="text-gray-400">
                  In Figma, every design is a mockup. It looks finished, but it
                  is still a picture, and there is always the question of
                  whether it will survive being built. Designing only in Figma
                  left me with three recurring problems.
                </p>
                <ul className="list-disc list-none flex flex-col gap-4">
                  <li className="text-gray-400 flex flex-row gap-3 self-start items-start">
                    <span className="shrink-0 flex size-6 md:size-7 items-center justify-center rounded-full bg-gray-800 text-xs md:text-sm font-semibold text-gray-300 ring-1 ring-inset ring-white/10">
                      1
                    </span>
                    Prototypes could only go so far. Real interactions, loading
                    and empty states, live data, and responsive behavior had to
                    be described in notes instead of shown.
                  </li>
                  <li className="text-gray-400 flex flex-row gap-3 self-start items-start">
                    <span className="shrink-0 flex size-6 md:size-7 items-center justify-center rounded-full bg-gray-800 text-xs md:text-sm font-semibold text-gray-300 ring-1 ring-inset ring-white/10">
                      2
                    </span>
                    Handoff lost detail. The code Figma generates rarely
                    shipped as-is, and "is this even buildable?" hung over
                    every spec.
                  </li>
                  <li className="text-gray-400 flex flex-row gap-3 self-start items-start">
                    <span className="shrink-0 flex size-6 md:size-7 items-center justify-center rounded-full bg-gray-800 text-xs md:text-sm font-semibold text-gray-300 ring-1 ring-inset ring-white/10">
                      3
                    </span>
                    It was slow. A major feature could take weeks to design in
                    Figma alone.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4 max-w-3xl">
                <h2 className="text-2xl font-bold">The change</h2>
                <p className="text-gray-400">
                  I moved the starting point from Figma to Next.js. Using our
                  Figma files as a reference, I rebuilt the design system as
                  real React components. Claude generated most of that code,
                  reading the original designs through the Figma MCP, a bridge
                  that lets Claude pull layout and styles straight from Figma.
                </p>
                <p className="text-gray-400">
                  Now new screens get built by prompting Claude directly:
                  composing existing components, adjusting state and
                  interaction, and adding new components when I need them. My
                  job in the loop is mostly prompting and reviewing. I describe
                  what I want, Claude builds it, I refine, and we repeat.
                </p>
                <p className="text-gray-400">
                  All of this lives in Archetype UI, a standalone Next.js app
                  kept separate from our production codebase. It uses the same
                  design system but has no backend and none of the constraints
                  of production code, so I can move fast and try things without
                  consequences.
                </p>
              </div>

              <WorkflowDiagram />

              <div className="flex flex-col gap-4 max-w-3xl">
                <h2 className="text-2xl font-bold">The result</h2>
                <p className="text-gray-400">
                  The biggest change was what I could put in front of people.
                  Instead of debating whether something was feasible, engineers
                  could open the prototype and use it. Stakeholder reviews got
                  the same upgrade: a working flow says far more than a
                  clickable Figma file, and the conversation stayed about the
                  product instead of the mockup.
                </p>
                <p className="text-gray-400">
                  The prototypes also got more honest. Edge cases, interaction
                  feedback, and realistic flows running on mock data (sorting
                  tables, exporting files, validating input) could be shown in
                  motion instead of explained in a spec.
                </p>
                <p className="text-gray-400">
                  As the only designer, this was a force multiplier.
                  Exploration that used to require engineering time, or simply
                  never happened, was now one prompt away.
                </p>
              </div>

              <video
                src="/videos/archetype-ui-demo.mp4"
                poster="/images/archetype-ui-demo-poster.jpg"
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full aspect-[1560/1036] rounded-4xl bg-[#F9FAFB] object-cover"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="text-xs uppercase tracking-[0.12em] text-gray-500">
                    MTSS Progress Monitoring
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    3 wks <span className="text-gray-600">&rarr;</span> 1 wk
                  </span>
                  <span className="text-sm text-gray-400">
                    Design time, from first concept to engineering handoff.
                  </span>
                </div>
                <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="text-xs uppercase tracking-[0.12em] text-gray-500">
                    Where design starts
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    80%
                  </span>
                  <span className="text-sm text-gray-400">
                    of new features now prototyped in code first, not Figma.
                  </span>
                </div>
                <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="text-xs uppercase tracking-[0.12em] text-gray-500">
                    Design system
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    40+
                  </span>
                  <span className="text-sm text-gray-400">
                    components rebuilt as live React in Archetype UI.
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 max-w-3xl">
                <h2 className="text-2xl font-bold">Reflections</h2>
                <p className="text-gray-400">
                  Designing in code did not replace design thinking. The hard
                  questions are the same: what should this feel like, what does
                  the user actually need, what is the simplest path through.
                  What changed is the speed. The answers stop being pictures
                  and become something you can click, test, and ship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CaseStudyReveal>
      <Footer />
    </>
  );
}
