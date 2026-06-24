import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, toggleMenu } from "./features/ui/uiSlice";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About & Skills", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    title: "Split Bill Calculator",
    desc: "A lightweight, no-nonsense web tool designed to eliminate the friction of splitting group bills. By encoding data directly into the URL, this app allows users to itemize orders, calculate taxes/discounts, and generate a unique, sharable link.",
    image: "/projects/split-bill.png",
    imageRatio: "16 / 10",
    teamSize: 2,
    imageFit: "contain",
    imagePosition: "center",
    imagePadding: "0.5rem",
    techStack: ["JavaScript", "HTML", "CSS", "Bootstrap", "Firebase"],
    keyFeatures: [
      "Pure Vanilla JS calculation engine for tax, service, and discounts.",
      "URL-based data encoding for instant sharing.",
      "Mobile-first design with QR code generation for quick splits with friends.",
    ],
    liveUrl: "https://easypaycalc.vercel.app",
    githubUrl: "https://github.com/watisdis31/Split-bill-calculator",
  },
  {
    title: "EZ-Budgeting",
    desc: "A personal project for myself where I made a simple personal finance tracker that shows me where my money goes because I'm bad at keeping track of my expenses.",
    image: "/projects/ez-budgeting.png",
    imageRatio: "16 / 10",
    teamSize: 1,
    imageFit: "contain",
    imagePosition: "center",
    imagePadding: "0.5rem",
    techStack: ["JavaScript", "HTML", "CSS", "Bootstrap", "Firebase"],
    keyFeatures: [
      "Firebase Authentication",
      "Tracks and compares your daily and monthly expenses and incomes",
      "Pie chart to show your expenses daily and monthly",
    ],
    liveUrl: "https://ez-budgeting.vercel.app",
    githubUrl: "https://github.com/watisdis31/easy-budgeting",
  },
  {
    title: "Life RPG",
    desc: "A fun little project about gamified productivity tracker that transforms daily tasks into quest-based leveling. It bridges the gap between classic RPG mechanics and life organization.",
    image: "/projects/life-rpg.png",
    imageRatio: "16 / 10",
    teamSize: 1,
    imageFit: "contain",
    imagePosition: "center",
    imagePadding: "0.5rem",
    techStack: ["JavaScript", "HTML", "CSS", "Bootstrap", "Firebase"],
    keyFeatures: [
      "Firebase Authentication",
      "Avatar System: Click your avatar to upload an image",
      "Daily Reset Timer",
    ],
    liveUrl: "https://liferpg-ecru.vercel.app",
    githubUrl: "https://github.com/watisdis31/life-rpg-simulator",
  },
  {
    title: "Pokedex Database",
    desc: "Hacktiv8 Project where I made a Pokemon database using PokeAPI (a public REST API) and have team building features, meta build recommendation from AI for competitive team building. Website is not available because we've stopped the backend server.",
    image: "/projects/no-photo.png",
    imageRatio: "16 / 10",
    teamSize: 1,
    imageFit: "contain",
    imagePosition: "center",
    imagePadding: "0.5rem",
    techStack: [
      "Node.js",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "Axios",
      "dotenv",
      "bcryptjs",
      "jsonwebtoken",
      "jwtdecode",
      "Jest",
      "Supertest",
      "React",
      "Vite",
      "JSX",
      "TailwindCSS",
      "REST API",
      "Google Cloud Server",
    ],
    keyFeatures: [
      "Google and github sign in",
      "AI recommendation by gemini AI",
      "CORS support",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/watisdis31/pokedex-project-frontend",
  },
  {
    title: "UKEA E-commerce App",
    desc: "Hacktiv8 Project about an e-commerce app for staff to maintain stocks and sales. Website is not available because we've stopped the backend server.",
    image: "/projects/ukea.png",
    imageRatio: "16 / 10",
    teamSize: 1,
    imageFit: "contain",
    imagePosition: "center",
    imagePadding: "0.5rem",
    techStack: [
      "Node.js",
      "Express",
      "Sequelize",
      "ESLint",
      "PostgreSQL",
      "Axios",
      "dotenv",
      "bcryptjs",
      "jsonwebtoken",
      "jwtdecode",
      "Jest",
      "Supertest",
      "React",
      "React-dom",
      "Vite",
      "JSX",
      "TailwindCSS",
      "multer",
      "sweetalert2",
      "Google Cloud Server",
    ],
    keyFeatures: [
      "Admin and staffs validations and certain access",
      "Image upload with uploadcare",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/watisdis31/ukea-frontend-vercel",
  },
  {
    title: "Personal Indie Website",
    desc: "A fun personal project for myself when I discovered people were trying to make their own personal indie website and bring back the Y2K era.",
    image: "/projects/indie-website.png",
    imageRatio: "16 / 10",
    teamSize: 1,
    imageFit: "contain",
    imagePosition: "center",
    imagePadding: "0.5rem",
    techStack: ["JavaScript", "HTML", "CSS", "Firebase"],
    keyFeatures: [
      "Guestbook that you can sign and other users can reply",
      "Deployed using nekoweb hosting",
    ],
    liveUrl: "https://watisdis31.nekoweb.org",
    githubUrl: "https://github.com/watisdis31/personal-indie-website",
  },
  {
    title: "Social Media Website",
    desc: "Hacktiv8 Group Project where we made a social media app similar to X and facebook. Website is not available because we've stopped the backend server.",
    image: "/projects/kitabmuka.png",
    imageRatio: "16 / 10",
    teamSize: 3,
    imageFit: "contain",
    imagePosition: "center",
    imagePadding: "0.5rem",
    techStack: [
      "Express",
      "EJS",
      "bcryptjs",
      "dotenv",
      "Sequelize",
      "PostgreSQL",
      "nodemailer",
    ],
    keyFeatures: [
      "Features MVC architecture",
      "Admin dashboard",
      "Communities on which users can join or create",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/watisdis31/fsjs-p1-pairprogram",
  },
  {
    title: "PendengarMu",
    desc: "Hacktiv8 Final Project where we made a web based application for people who are struggling with mental health, users can fill out the form we have and then based on the user's data, the app will recommend to them lots of psychiatrists that cater to their problems. ",
    image: "/projects/pendengarMu.png",
    imageRatio: "16 / 10",
    teamSize: 6,
    imageFit: "contain",
    imagePosition: "center",
    imagePadding: "0.5rem",
    techStack: [
      "Next.js",
      "React Native",
      "Lucide React",
      "jsonwebtoken",
      "jwtdecode",
      "bcryptjs",
      "dotenv",
      "MongoDB",
      "Mongoose",
      "pusher",
      "Next Auth",
      "REST API",
    ],
    keyFeatures: [
      "Real-time chat",
      "Video call with agora",
      "Easy payment using Midtrans",
    ],
    liveUrl: "https://pendengarmu.vercel.app",
    githubUrl:
      "https://github.com/Final-Project-H8-FSJS-RMT-069-P3/pendengarMu",
  },
];

const skills = {
  programmingLanguages: ["JavaScript", "TypeScript", "PHP", "SQL", "Git"],
  frontend: [
    "React.js",
    "Next.js",
    "React Native",
    "Redux Toolkit",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Axios",
    "Apollo Client",
  ],
  backend: [
    "Node.js",
    "Express",
    "Sequelize",
    "Laravel",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "REST API",
    "Socket.IO",
    "ApolloDB",
    "Google Cloud / AWS",
  ],
};

function ActionButton({
  href,
  className = "",
  dark = false,
  children,
  ...props
}) {
  return (
    <a
      href={href}
      className={`btn-link ${dark ? "btn-link--dark" : "btn-link--light"} ${className}`.trim()}
      {...props}
    >
      <span className="btn-ripple v1" aria-hidden="true" />
      <span className="btn-ripple v2" aria-hidden="true" />
      <span className="btn-title">
        <span className="btn-content">{children}</span>
      </span>
    </a>
  );
}

export default function App() {
  const dispatch = useDispatch();
  const mobileMenuOpen = useSelector((state) => state.ui.mobileMenuOpen);

  const programmingLanguageSkills = skills?.programmingLanguages ?? [];
  const frontendSkills = skills?.frontend ?? [];
  const backendSkills = skills?.backend ?? [];

  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="header-reveal fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-center px-4">
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative pb-1 text-sm font-medium text-slate-500 transition hover:text-slate-900 after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-slate-900 after:transition-all after:duration-300 hover:after:w-full select-none"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => dispatch(toggleMenu())}
            className="absolute right-4 rounded-full border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 md:hidden select-none"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => dispatch(closeMenu())}
                  className="py-2 text-sm font-medium text-slate-500 transition hover:text-slate-900 select-none"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="pt-16">
        <section id="home" className="border-b border-slate-200/80">
          <div className="mx-auto max-w-6xl px-4 py-20 text-center md:py-24">
            <p
              data-reveal
              style={{ "--reveal-delay": "20ms" }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-black md:text-sm select-none"
            >
              Full-Stack Web Developer
            </p>

            <h1
              data-reveal
              style={{ "--reveal-delay": "80ms", color: "#000000" }}
              className="mt-3 text-3xl font-black leading-tight md:text-4xl select-none"
            >
              Vincentius Edward
            </h1>

            <p
              data-reveal
              style={{ "--reveal-delay": "140ms" }}
              className="mt-1 text-sm font-medium text-black/70 md:text-base select-none"
            >
              Based in North Jakarta, Indonesia
            </p>

            <div
              data-reveal
              style={{ "--reveal-delay": "200ms" }}
              className="mt-5 flex justify-center"
            >
              <p className="w-full max-w-2xl text-center text-black/65 md:text-lg">
                Building responsive interfaces and reliable backend systems with
                clean, maintainable code.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <ActionButton
                href="#projects"
                dark
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View Projects
              </ActionButton>

              <ActionButton
                href="/cv/Vincentius-Edward-CV.pdf"
                download
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              >
                My CV
              </ActionButton>

              <ActionButton
                href="#contact"
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              >
                Contact Me
              </ActionButton>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 border-b border-slate-200/80"
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
              <div className="text-center md:text-left">
                <h2
                  data-reveal
                  className="text-center text-2xl font-black md:text-left md:text-3xl select-none"
                  style={{ color: "#000000" }}
                >
                  About
                </h2>
                <div
                  data-reveal
                  style={{ "--reveal-delay": "80ms" }}
                  className="mt-4 flex justify-center md:justify-start"
                >
                  <div className="w-full max-w-3xl text-center text-black/70 md:text-left">
                    <p className="mb-8 whitespace-normal wrap-break-word leading-8">
                      I’m a Hacktiv8 graduate and aspiring full-stack developer
                      with hands-on experience building web applications that
                      focus on usability, performance, and clean structure. I
                      enjoy turning ideas into practical, user-friendly products
                      and I’m comfortable working across both frontend and
                      backend tasks.
                    </p>
                    <br />

                    <p className="whitespace-normal wrap-break-word leading-8">
                      Before moving into web development, I spent several years
                      in the F&B management business and worked as an assistant
                      operational manager. That experience helped me build a
                      strong sense of responsibility, attention to detail, and
                      the ability to work under pressure while keeping
                      operations organized and efficient. It also strengthened
                      my communication, teamwork, and problem-solving skills in
                      a fast-paced environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex md:items-stretch">
                <div className="w-px self-stretch bg-slate-100/80" />
              </div>

              <div className="text-center md:text-left">
                <h2
                  className="text-center text-2xl font-black md:text-left md:text-3xl select-none"
                  style={{ color: "#000000" }}
                >
                  Skills
                </h2>

                <div className="mx-auto mt-8 max-w-4xl space-y-8 md:mx-0">
                  <div>
                    <h3 className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-black md:text-left select-none">
                      Programming Languages
                    </h3>
                    <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
                      {programmingLanguageSkills.map((skill) => (
                        <span
                          key={`lang-${skill}`}
                          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-black select-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-black md:text-left select-none">
                      Frontend
                    </h3>
                    <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
                      {frontendSkills.map((skill) => (
                        <span
                          key={`fe-${skill}`}
                          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-black select-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-black md:text-left select-none">
                      Backend
                    </h3>
                    <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
                      {backendSkills.map((skill) => (
                        <span
                          key={`be-${skill}`}
                          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-black select-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="scroll-mt-24 border-b border-slate-200/80"
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2
              data-reveal
              className="text-center text-2xl font-black md:text-3xl"
              style={{ color: "#000000" }}
            >
              Projects
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 80}ms` }}
                  className="project-card flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition"
                >
                  <div
                    className="overflow-hidden border-b border-slate-200 bg-slate-100"
                    style={{ aspectRatio: project.imageRatio ?? "16 / 10" }}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="project-image block h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 bg-slate-50 text-[10px] font-semibold text-slate-600 select-none">
                          {project.teamSize}
                        </div>
                        <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 select-none">
                          {project.teamSize === 1
                            ? "Solo Project"
                            : "Team Project"}
                        </span>
                      </div>
                      <span
                        className={`rounded-full border px-2.5 py-1 text-[11px] font-medium select-none ${
                          project.liveUrl
                            ? "border-green-500 text-green-700 bg-green-50"
                            : "border-red-500 text-red-700 bg-red-50"
                        }`}
                      >
                        {project.liveUrl ? "Live" : "Offline"}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold text-black select-none">
                      {project.title}
                    </h3>

                    <p className="mt-3 min-h-22 text-sm leading-relaxed text-black/70 whitespace-normal wrap-break-word">
                      {project.desc}
                    </p>

                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-black">
                        Tech Stack
                      </p>
                      <div className="mt-2 flex min-h-16 flex-wrap content-start gap-2">
                        {(project.techStack ?? []).map((tech) => (
                          <span
                            key={`${project.title}-${tech}`}
                            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-black select-none"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-black">
                        Key Features
                      </p>
                      <ul className="mt-2 min-h-18 list-disc space-y-1 pl-5 text-xs text-black/70">
                        {(project.keyFeatures ?? [])
                          .slice(0, 3)
                          .map((feature) => (
                            <li key={`${project.title}-${feature}`}>
                              {feature}
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      {project.liveUrl ? (
                        <ActionButton
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          dark
                          className="rounded-full bg-red-600 px-3 py-2 text-xs font-semibold text-white hover:bg-red-700"
                        >
                          Live
                        </ActionButton>
                      ) : (
                        <span
                          className="inline-flex items-center rounded-full bg-slate-300 px-3 py-2 text-xs font-semibold text-slate-600"
                          aria-disabled="true"
                        >
                          Live
                        </span>
                      )}

                      {project.githubUrl ? (
                        <ActionButton
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900"
                        >
                          GitHub
                        </ActionButton>
                      ) : (
                        <span
                          className="inline-flex items-center rounded-full bg-slate-300 px-3 py-2 text-xs font-semibold text-slate-600"
                          aria-disabled="true"
                        >
                          GitHub
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 pt-14 pb-16">
          <div className="mx-auto max-w-6xl px-4">
            <div
              data-reveal
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
            >
              <h2
                className="text-2xl font-black md:text-3xl"
                style={{ color: "#000000" }}
              >
                Let’s work together
              </h2>
              <p className="mt-2 text-black/70">
                Open to internship and junior full-stack opportunities.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ActionButton
                  href="mailto:vincentiusedward31@gmail.com"
                  dark
                  className="rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  vincentiusedward31@gmail.com
                </ActionButton>

                <ActionButton
                  href="https://github.com/watisdis31"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900"
                >
                  GitHub
                </ActionButton>

                <ActionButton
                  href="https://www.linkedin.com/in/vincentius-edward-8905509a/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900"
                >
                  LinkedIn
                </ActionButton>

                <ActionButton
                  href="https://id.jobstreet.com/profiles/vincentius-edward-0HHJD5sz33"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900"
                >
                  JobStreet
                </ActionButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6">
        <p className="text-center text-sm text-slate-400 select-none">
          © {new Date().getFullYear()} Vincentius Edward
        </p>
      </footer>
    </div>
  );
}
