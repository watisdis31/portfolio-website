import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
    title: "iClus Reborn",
    desc: "One of the projects I worked on at PT Killian Teknologi Indonesia. iClus Reborn is a claims platform for airline passenger cases, covering the full path from first submission through review and settlement on a single product. We developed it with Indonesian airline partners, so each carrier gets its own workspace while insurers and admins work the same cases from their own menus. I focused on the frontend, building the role-specific and airline-specific surfaces in React with Vite and Vue with Nuxt.",
    image: "/projects/iclus-8.png",
    imageRatio: "16 / 10",
    teamSize: 2,
    featured: true,
    kind: "work",
    role: "Frontend",
    imageFit: "contain",
    imagePosition: "center",
    imagePadding: "0.5rem",
    techStack: ["React", "Vite", "Vue.js", "Nuxt.js", "bcrypt"],
    keyFeatures: [
      "End-to-end claim workflow from passenger submission to settlement on one platform.",
      "Airline-specific pages so each carrier works claims in its own workspace.",
      "Role-based menus for airline staff, insurance teams, and platform admins.",
      "Shared claim records that stay in sync as a case moves from intake to payout.",
    ],
    liveUrl: "https://iclus.co.id/en",
    githubUrl: "",
    githubDisabled: true,
    images: [
      "/projects/iclus-8.png",
      "/projects/iclus-1.png",
      "/projects/iclus-2.png",
      "/projects/iclus-3.png",
      "/projects/iclus-4.png",
      "/projects/iclus-5.png",
      "/projects/iclus-6.png",
      "/projects/iclus-7.png",
    ],
  },
  {
    title: "Phoenix",
    desc: "One of the projects I worked on at PT Killian Teknologi Indonesia. A web-based Enterprise Resource Planning (ERP) application that helps companies manage business operations efficiently. It supports HRD data management, policy recording, and financial operations so company processes stay structured, transparent, and integrated on a single platform. I mainly worked on the insurance claim module, operational modules such as task management, and the calendar module.",
    image: "/projects/phoenix-1.png",
    imageRatio: "16 / 10",
    teamSize: 2,
    featured: true,
    kind: "work",
    role: "Full Stack",
    imageFit: "contain",
    imagePosition: "center",
    imagePadding: "0.5rem",
    techStack: ["PHP", "Laravel", "React", "Vite", "MySQL", "AWS", "REST API"],
    keyFeatures: [
      "Insurance claim module for recording and processing policy claims.",
      "Operational task management to keep company workflows structured.",
      "Calendar module for scheduling and tracking operational activities.",
      "Full finance features for auditing, cash advance, and reimbursement.",
    ],
    liveUrl: "https://phoenix.fresnel.co.id",
    githubUrl: "",
    githubDisabled: true,
    images: [
      "/projects/phoenix-1.png",
      "/projects/phoenix-2.png",
      "/projects/phoenix-3.png",
      "/projects/phoenix-4.png",
      "/projects/phoenix-5.png",
      "/projects/phoenix-6.png",
      "/projects/phoenix-7.png",
      "/projects/phoenix-8.png",
      "/projects/phoenix-9.png",
      "/projects/phoenix-10.png",
    ],
  },
  {
    title: "Split Bill Calculator 2.0",
    desc: "The rewrite I kept coming back to. The first version encoded a whole order into a URL and did the math. 2.0 is that same idea, rebuilt with a tighter interface and a real backend. You open a bill, itemize the order, apply tax, service, and discounts, then hand someone a link. A receipt photo goes through Google GenAI so the line items land on the bill instead of being typed by hand, and anything the scan misses stays editable. Bills persist in PostgreSQL through a REST API, so a split can be reopened later. Friends claim what they ordered and see their own share. They never need an account to do it.",
    image: "/projects/split-bill-v2-1.png",
    imageRatio: "16 / 10",
    teamSize: 1,
    kind: "personal",
    role: "Full Stack",
    imageFit: "contain",
    imagePosition: "center",
    imagePadding: "0.5rem",
    techStack: [
      "Next.js",
      "React",
      "Vite",
      "TypeScript",
      "PostgreSQL",
      "bcrypt",
      "Google GenAI",
      "REST API",
    ],
    keyFeatures: [
      "Receipt OCR with Google GenAI that turns a photo into editable line items.",
      "Shareable links where each person claims what they ordered and sees their own total, with no sign-in required.",
      "Tax, service charge, and discounts on the itemized order, plus a shared-item toggle that splits a dish evenly.",
      "Bills saved to your account, and a copy friends can keep so the split is still there next week.",
    ],
    liveUrl: "https://ezsplitbill.vercel.app/",
    githubUrl: "https://github.com/watisdis31/Split-Bill-Calculator-v2",
    images: [
      "/projects/split-bill-v2-1.png",
      "/projects/split-bill-v2-6.png",
      "/projects/split-bill-v2-7.png",
      "/projects/split-bill-v2-8.png",
      "/projects/split-bill-v2-3.png",
      "/projects/split-bill-v2-5.png",
      "/projects/split-bill-v2-2.png",
      "/projects/split-bill-v2-4.png",
    ],
  },
  {
    title: "PendengarMu",
    desc: "Hacktiv8 Final Project where we made a web based application for people who are struggling with mental health, users can fill out the form we have and then based on the user's data, the app will recommend to them lots of psychiatrists that cater to their problems. ",
    image: "/projects/pendengarMu.png",
    imageRatio: "16 / 10",
    teamSize: 6,
    kind: "hacktiv8",
    role: "Full Stack & Project Leader",
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
    images: [
      "/projects/pendengarMu-1.png",
      "/projects/pendengarMu-2.png",
      "/projects/pendengarMu-3.png",
      "/projects/pendengarMu-4.png",
      "/projects/pendengarMu-5.png",
      "/projects/pendengarMu-6.png",
      "/projects/pendengarMu-7.png",
      "/projects/pendengarMu-8.png",
    ],
  },
  {
    title: "Split Bill Calculator",
    desc: "A lightweight, no-nonsense web tool designed to eliminate the friction of splitting group bills. By encoding data directly into the URL, this app allows users to itemize orders, calculate taxes/discounts, and generate a unique, sharable link.",
    image: "/projects/split-bill.png",
    imageRatio: "16 / 10",
    teamSize: 2,
    kind: "personal",
    role: "Full Stack",
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
    images: [
      "/projects/split-bill-1.png",
      "/projects/split-bill-2.png",
      "/projects/split-bill-3.png",
    ],
  },
  {
    title: "EZ-Budgeting",
    desc: "A personal project for myself where I made a simple personal finance tracker that shows me where my money goes because I'm bad at keeping track of my expenses.",
    image: "/projects/ez-budgeting.png",
    imageRatio: "16 / 10",
    teamSize: 1,
    kind: "personal",
    role: "Full Stack",
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
    kind: "personal",
    role: "Full Stack",
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
    kind: "hacktiv8",
    role: "Full Stack",
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
    kind: "hacktiv8",
    role: "Full Stack",
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
    kind: "personal",
    role: "Full Stack",
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
    images: [
      "/projects/indie-website.png",
      "/projects/indie-website-2.png",
      "/projects/indie-website-3.png",
      "/projects/indie-website-4.png",
    ],
  },
  {
    title: "Social Media Website",
    desc: "Hacktiv8 Group Project where we made a social media app similar to X and facebook. Website is not available because we've stopped the backend server.",
    image: "/projects/kitabmuka.png",
    imageRatio: "16 / 10",
    teamSize: 3,
    kind: "hacktiv8",
    role: "Frontend & Project Leader",
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
];

const skills = {
  programmingLanguages: ["JavaScript", "TypeScript", "PHP", "SQL", "Git"],
  frontend: [
    "React.js",
    "Next.js",
    "Vue",
    "Nuxt",
    "Vite",
    "React Native",
    "Android Expo",
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
    "NestJS",
    "Sequelize",
    "Laravel",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "REST API",
    "ApolloDB",
    "Docker",
    "GCP / AWS",
  ],
};

const socialLinks = [
  { label: "GitHub", href: "https://github.com/watisdis31" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vincentius-edward-8905509a/",
  },
  {
    label: "JobStreet",
    href: "https://id.jobstreet.com/profiles/vincentius-edward-0HHJD5sz33",
  },
];

function ActionButton({
  href,
  className = "",
  dark = false,
  accent = false,
  disabled = false,
  children,
  ...props
}) {
  const toneClass = accent
    ? "btn-link--accent"
    : dark
      ? "btn-link--dark"
      : "btn-link--light";
  const classes = `btn-link ${toneClass} ${className}`.trim();

  if (disabled) {
    return (
      <button type="button" className={classes} disabled {...props}>
        <span className="btn-title">
          <span className="btn-content">{children}</span>
        </span>
      </button>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      <span className="btn-title">
        <span className="btn-content">{children}</span>
      </span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <header data-reveal className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft">
          {description}
        </p>
      )}
    </header>
  );
}

function GalleryChevron({ direction }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        d={direction === "prev" ? "M10.25 2.75 4.5 8l5.75 5.25" : "M5.75 2.75 11.5 8 5.75 13.25"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function ProjectImage({ project, compact = false }) {
  const gallery = project.images?.length ? project.images : [project.image];
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hasSlid, setHasSlid] = useState(false);
  const [zoomState, setZoomState] = useState("closed");
  const hasGallery = !compact && gallery.length > 1;
  const zoomed = zoomState !== "closed";
  const current = gallery[Math.min(index, gallery.length - 1)];
  const slideClass = hasSlid
    ? `gallery-slide gallery-slide--${direction > 0 ? "next" : "prev"}`
    : "";
  const alt = hasGallery
    ? `${project.title} preview ${index + 1} of ${gallery.length}`
    : `${project.title} preview`;

  const openZoom = () => setZoomState("open");

  const closeZoom = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setZoomState((current) => {
      if (current !== "open") return current;
      return reduceMotion ? "closed" : "closing";
    });
  };

  const onLightboxAnimationEnd = (event) => {
    if (event.target !== event.currentTarget) return;
    if (zoomState === "closing") setZoomState("closed");
  };

  useEffect(() => {
    project.images?.forEach((src) => {
      const preload = new Image();
      preload.src = src;
    });
  }, [project.images]);

  useEffect(() => {
    if (!zoomed) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeZoom();
      if (event.key === "ArrowLeft" && gallery.length > 1) {
        event.preventDefault();
        setDirection(-1);
        setHasSlid(true);
        setIndex((currentIndex) => (currentIndex - 1 + gallery.length) % gallery.length);
      }
      if (event.key === "ArrowRight" && gallery.length > 1) {
        event.preventDefault();
        setDirection(1);
        setHasSlid(true);
        setIndex((currentIndex) => (currentIndex + 1) % gallery.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [zoomed, gallery.length]);

  const go = (step, event) => {
    event?.stopPropagation();
    setDirection(step);
    setHasSlid(true);
    setIndex((currentIndex) =>
      (currentIndex + step + gallery.length) % gallery.length,
    );
  };

  return (
    <>
      <div
        className={`frame ${compact ? "w-24 shrink-0 sm:w-40" : "w-full"} ${hasGallery ? "project-gallery" : ""}`}
        style={{ aspectRatio: compact ? undefined : (project.imageRatio ?? "16 / 10") }}
      >
        <img
          key={current}
          className={slideClass}
          src={current}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={{
            objectFit: project.imageFit ?? "contain",
            objectPosition: project.imagePosition ?? "center",
            padding: compact ? 0 : (project.imagePadding ?? 0),
          }}
        />
        {hasGallery && (
          <>
            <button
              type="button"
              className="gallery-nav gallery-nav--prev"
              aria-label={`Previous ${project.title} screenshot`}
              onClick={(event) => go(-1, event)}
            >
              <GalleryChevron direction="prev" />
            </button>
            <button
              type="button"
              className="gallery-nav gallery-nav--next"
              aria-label={`Next ${project.title} screenshot`}
              onClick={(event) => go(1, event)}
            >
              <GalleryChevron direction="next" />
            </button>
            <p className="gallery-count">
              {index + 1} / {gallery.length}
            </p>
          </>
        )}
        {!compact && (
          <button
            type="button"
            className="gallery-nav gallery-nav--zoom"
            aria-label={`View ${alt} larger`}
            onClick={openZoom}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <circle
                cx="7"
                cy="7"
                r="4.25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M10.25 10.25 13.25 13.25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </button>
        )}
      </div>
      {zoomed &&
        createPortal(
          <div
            className={`lightbox${zoomState === "closing" ? " is-closing" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} screenshot`}
            onClick={closeZoom}
            onAnimationEnd={onLightboxAnimationEnd}
          >
            <button
              type="button"
              className="lightbox-close"
              aria-label="Close screenshot"
              autoFocus
              onClick={closeZoom}
            >
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M3.5 3.5 12.5 12.5M12.5 3.5 3.5 12.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </button>
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  className="gallery-nav gallery-nav--prev"
                  aria-label={`Previous ${project.title} screenshot`}
                  onClick={(event) => go(-1, event)}
                >
                  <GalleryChevron direction="prev" />
                </button>
                <button
                  type="button"
                  className="gallery-nav gallery-nav--next"
                  aria-label={`Next ${project.title} screenshot`}
                  onClick={(event) => go(1, event)}
                >
                  <GalleryChevron direction="next" />
                </button>
                <p className="gallery-count lightbox-count">
                  {index + 1} / {gallery.length}
                </p>
              </>
            )}
            <img key={current} className={slideClass} src={current} alt={alt} />
          </div>,
          document.body,
        )}
    </>
  );
}

function ProjectMeta({ project, index, offline = false }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-ink-mute">
      <span>{String(index + 1).padStart(2, "0")}</span>
      <span aria-hidden="true">·</span>
      <span>
        {project.kind === "work"
          ? "Work project"
          : project.kind === "personal"
            ? "Personal project"
            : project.kind === "hacktiv8"
              ? "Hacktiv8 project"
              : project.teamSize === 1
                ? "Solo project"
                : "Team project"}
      </span>
      <span aria-hidden="true">·</span>
      {offline ? (
        <span>Offline</span>
      ) : project.liveUrl ? (
        <span className="inline-flex items-center gap-1.5 text-moss">
          <span className="h-1.5 w-1.5 rounded-full bg-moss" aria-hidden="true" />
          Live
        </span>
      ) : (
        <span>Private</span>
      )}
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="btn-row flex flex-wrap gap-3 pt-2">
      {project.liveUrl && (
        <ActionButton
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          accent
        >
          Visit site <span className="ml-2" aria-hidden="true">↗</span>
        </ActionButton>
      )}
      {(project.githubUrl || project.githubDisabled) && (
        <ActionButton
          href={project.githubUrl}
          target={project.githubDisabled ? undefined : "_blank"}
          rel={project.githubDisabled ? undefined : "noreferrer"}
          disabled={project.githubDisabled}
          aria-label={project.githubDisabled ? "GitHub (private repository)" : undefined}
        >
          GitHub
          {!project.githubDisabled && (
            <span className="ml-2" aria-hidden="true">↗</span>
          )}
        </ActionButton>
      )}
    </div>
  );
}

function ProjectDetails({ project }) {
  return (
    <>
      <p className="mt-5 text-base leading-7 text-ink-soft">{project.desc}</p>
      <div className="mt-7">
        <p className="eyebrow">Role</p>
        <p className="mt-3 text-sm leading-6 text-ink-soft">{project.role}</p>
      </div>
      <div className="mt-7">
        <p className="eyebrow">Key features</p>
        <ul className="mt-3 divide-y divide-rule border-y border-rule text-sm leading-6 text-ink-soft">
          {(project.keyFeatures ?? []).map((feature) => (
            <li key={`${project.title}-${feature}`} className="py-2.5 pl-4 before:mr-2 before:text-accent before:content-['—']">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-5 font-mono text-[0.7rem] leading-5 text-ink-mute">
        {project.techStack.join(" · ")}
      </p>
      <ProjectLinks project={project} />
    </>
  );
}

export default function App() {
  const dispatch = useDispatch();
  const mobileMenuOpen = useSelector((state) => state.ui.mobileMenuOpen);
  const [activeSection, setActiveSection] = useState("home");
  const [heroInView, setHeroInView] = useState(true);

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

    revealElements.forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => sectionObserver.observe(section));
    return () => sectionObserver.disconnect();
  }, []);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return undefined;

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setHeroInView(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-72px 0px 0px 0px" },
    );

    heroObserver.observe(hero);
    return () => heroObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") dispatch(closeMenu());
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [dispatch, mobileMenuOpen]);

  const featuredProjects = projects.filter(
    (project) => project.liveUrl || project.featured,
  );
  const archivedProjects = projects.filter(
    (project) => !project.liveUrl && !project.featured,
  );
  const skillGroups = [
    ["Programming Languages", skills.programmingLanguages],
    ["Frontend", skills.frontend],
    ["Backend", skills.backend],
  ];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="header-reveal fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper">
        <div className="page-shell flex h-[4.5rem] items-center justify-between">
          <a
            href="#home"
            className={`site-logo${heroInView ? "" : " is-named"}`}
            aria-label="Vincentius Edward, home"
          >
            <img
              src="/mark.svg"
              alt=""
              width="40"
              height="40"
              className="site-logo__mark"
            />
            <span className="site-logo__name" aria-hidden="true">
              Vincentius Edward
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {navLinks.map((item, index) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  style={{ "--nav-index": index }}
                  className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                  aria-current={isActive ? "location" : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => dispatch(toggleMenu())}
            className="min-h-11 border border-rule px-4 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-navigation" className="border-t border-rule bg-paper md:hidden">
            <nav className="page-shell" aria-label="Mobile navigation">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => dispatch(closeMenu())}
                  className="flex min-h-14 items-center border-b border-rule font-display text-2xl tracking-[-0.02em] text-ink transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="pt-[4.5rem]">
        <section id="home" className="scroll-mt-20 border-b border-rule">
          <div className="page-shell grid gap-14 py-20 sm:py-28 lg:grid-cols-12 lg:gap-10 lg:py-36">
            <div className="lg:col-span-7">
              <p data-reveal className="eyebrow">
                Full-Stack Web Developer <span className="px-1 text-accent">·</span> North Jakarta, Indonesia
              </p>
              <h1
                data-reveal
                style={{ "--reveal-delay": "80ms", fontSize: "clamp(2.75rem, 8vw, 5.5rem)" }}
                className="mt-6 max-w-4xl font-display leading-[0.94] tracking-[-0.055em]"
              >
                Vincentius Edward
              </h1>
              <p
                data-reveal
                style={{ "--reveal-delay": "140ms" }}
                className="mt-8 max-w-xl text-xl leading-8 text-ink-soft sm:text-2xl sm:leading-9"
              >
                Building responsive interfaces and reliable backend systems with clean, maintainable code.
              </p>
              <div
                data-reveal
                style={{ "--reveal-delay": "200ms" }}
                className="btn-row mt-9 flex flex-wrap gap-3"
              >
                <ActionButton href="#projects" dark>
                  View projects <span className="ml-2" aria-hidden="true">↓</span>
                </ActionButton>
                <ActionButton href="/cv/Vincentius-Edward-CV.pdf" download>
                  My CV
                </ActionButton>
                <ActionButton href="#contact">Contact me</ActionButton>
              </div>
            </div>

            <aside
              data-reveal
              style={{ "--reveal-delay": "160ms" }}
              className="self-end lg:col-span-5 lg:pb-2"
            >
              <p className="eyebrow mb-4">Dossier</p>
              <dl className="grid grid-cols-2 border-y border-rule font-mono text-xs leading-5">
                {[
                  ["Background", "F&B operations → web development"],
                  ["Availability", "Open to full-time roles"],
                ].map(([term, value]) => (
                  <div
                    key={term}
                    className="min-w-0 border-b border-rule py-3 pr-4"
                  >
                    <dt className="text-ink-mute">{term}</dt>
                    <dd className="mt-1 break-words text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-b border-rule">
          <div className="page-shell py-20 sm:py-28 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-3">
                <p className="eyebrow lg:sticky lg:top-28">01 — About</p>
              </div>
              <div className="lg:col-span-9">
                <div data-reveal className="max-w-4xl">
                  <p className="font-display text-2xl leading-[1.25] tracking-[-0.02em] text-ink sm:text-3xl">
                    I&apos;m a fullstack developer building web apps and business systems that real teams rely on every day. I care about making things that are fast, clear, and actually make people&apos;s work easier. Whether it&apos;s a landing page, a dashboard, or a full system, I want to build software that helps businesses grow.
                  </p>
                  <p className="mt-8 max-w-3xl text-lg leading-8 text-ink-soft">
                    Before tech, I spent years in F&B as an Assistant Operations Manager, so I know what it&apos;s like to run a business on the ground. That&apos;s why I build with the people using it in mind.
                  </p>
                </div>

                <div data-reveal style={{ "--reveal-delay": "100ms" }} className="mt-20">
                  <p className="eyebrow">Skills</p>
                  <dl className="mt-5 border-t border-rule">
                    {skillGroups.map(([label, items]) => (
                      <div key={label} className="grid gap-3 border-b border-rule py-5 md:grid-cols-[12rem_1fr] md:gap-8">
                        <dt className="font-mono text-xs uppercase tracking-[0.06em] text-ink-mute">{label}</dt>
                        <dd className="flex flex-wrap gap-x-2 gap-y-1 text-base text-ink">
                          {items.map((skill, index) => (
                            <span key={skill}>
                              {skill}
                              {index < items.length - 1 && <span className="ml-2 text-accent">·</span>}
                            </span>
                          ))}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 border-b border-rule">
          <div className="page-shell py-20 sm:py-28 lg:py-32">
            <SectionHeading
              eyebrow="02 — Selected Work"
              title="Projects built around useful, real-world interactions."
              description="A selection of personal experiments and collaborative applications across frontend, backend, and product-focused work."
            />

            <div className="mt-16 space-y-24 sm:mt-20 sm:space-y-32">
              {featuredProjects.map((project, index) => (
                <article
                  key={project.title}
                  data-reveal
                  style={{ "--reveal-delay": `${(index % 3) * 80}ms` }}
                  className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12"
                >
                  <div className={`lg:col-span-7 ${index % 2 ? "lg:order-2" : ""}`}>
                    <ProjectImage project={project} />
                  </div>
                  <div className={`lg:col-span-5 ${index % 2 ? "lg:order-1" : ""}`}>
                    <ProjectMeta project={project} index={projects.indexOf(project)} />
                    <h3 className="mt-4 font-display text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">{project.title}</h3>
                    <ProjectDetails project={project} />
                  </div>
                </article>
              ))}
            </div>

            <div data-reveal className="mt-28 sm:mt-36">
              <p className="eyebrow">Archive — backend servers offline</p>
              <div className="mt-5 border-t border-rule">
                {archivedProjects.map((project) => (
                  <article key={project.title} className="flex gap-5 border-b border-rule py-6 sm:gap-8">
                    <div className="hidden sm:block">
                      <ProjectImage project={project} compact />
                    </div>
                    <div className="min-w-0 flex-1">
                      <ProjectMeta project={project} index={projects.indexOf(project)} offline />
                      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="max-w-3xl">
                          <h3 className="font-display text-2xl tracking-[-0.02em]">{project.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-ink-soft">{project.desc}</p>
                          <p className="mt-3 text-sm leading-6 text-ink-soft">Role — {project.role}</p>
                          <p className="mt-3 font-mono text-[0.7rem] leading-5 text-ink-mute">{project.techStack.join(" · ")}</p>
                          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft">
                            {project.keyFeatures.map((feature) => <li key={feature}>— {feature}</li>)}
                          </ul>
                        </div>
                        <div className="shrink-0">
                          <ProjectLinks project={project} />
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20">
          <div className="page-shell py-20 sm:py-28 lg:py-36">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <p data-reveal className="eyebrow">03 — Contact</p>
                <h2 data-reveal style={{ "--reveal-delay": "80ms", fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }} className="mt-5 max-w-3xl font-display leading-[0.95] tracking-[-0.05em]">
                  Let’s work together
                </h2>
                <p data-reveal style={{ "--reveal-delay": "140ms" }} className="mt-7 max-w-lg text-lg leading-8 text-ink-soft">
                  Full-stack developer with lots of hands-on experience building products across frontend and backend.
                </p>
                <a
                  data-reveal
                  style={{ "--reveal-delay": "200ms" }}
                  href="mailto:vincentiusedward31@gmail.com"
                  className="link-underline mt-10 inline-block break-all font-display text-2xl tracking-[-0.03em] sm:text-3xl"
                >
                  vincentiusedward31@gmail.com
                </a>
              </div>
              <div data-reveal style={{ "--reveal-delay": "120ms" }} className="lg:col-span-5 lg:self-end">
                <p className="eyebrow mb-4">Elsewhere</p>
                <div>
                  {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="social-row font-display text-2xl tracking-[-0.02em]">
                      <span>{link.label}</span>
                      <span className="font-sans text-lg" aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-rule">
        <div className="page-shell flex flex-col gap-3 py-6 font-mono text-[0.7rem] text-ink-mute sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Vincentius Edward</span>
          <span>North Jakarta, Indonesia</span>
          <a href="#home" className="link-underline">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
