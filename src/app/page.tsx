"use client";

import { useState, useEffect } from "react";

function StarIcon() {
  return (
    <svg
      className="h-5 w-5 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ChessIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 22H5v-2h14v2M17.16 8.26A4.96 4.96 0 0018 5.5C18 3 16 1 13.5 1S9 3 9 5.5c0 1.03.31 1.99.84 2.76L7 11h2.7l-.85 2H6v2h2.1L6 20h3l1.5-5h3l1.5 5h3l-2.1-5H18v-2h-2.85l-.85-2H17l-2.84-2.74z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );
}

// ─── Navbar ─────────────────────────────────────────────────────────────────
function Navbar() {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-gray-200 bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <a
          href="https://nextlevelchess.com"
          className="text-lg font-extrabold uppercase tracking-wider text-foreground"
        >
          Next Level Chess
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Courses dropdown */}
          <div className="relative">
            <button
              onClick={() => setCoursesOpen(!coursesOpen)}
              onBlur={() => setTimeout(() => setCoursesOpen(false), 150)}
              className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Courses
              <svg
                className={`h-4 w-4 transition-transform ${coursesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {coursesOpen && (
              <div className="absolute left-0 top-full mt-2 w-72 rounded-lg border border-border bg-surface p-2 shadow-xl">
                <a
                  href="https://courses.nextlevelchess.blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-4 py-3 text-sm transition-colors hover:bg-accent-light"
                >
                  <p className="font-semibold text-foreground">
                    The Simplified Chess Improvement System
                  </p>
                </a>
                <a
                  href="https://courses.nextlevelchess.blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-4 py-3 text-sm transition-colors hover:bg-accent-light"
                >
                  <p className="font-semibold text-foreground">
                    Reach 1200 Elo
                  </p>
                </a>
              </div>
            )}
          </div>

          <a
            href="https://nextlevelchess.com/articles"
            className="text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Articles
          </a>
          <a
            href="https://nextlevelchess.com/about-me"
            className="text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            About me
          </a>
        </div>

        {/* CTA button + mobile hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#get-ebook"
            className="rounded-full border-2 border-foreground px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("hero-email")
                ?.scrollIntoView({ behavior: "smooth" });
              document.getElementById("hero-email")?.focus();
            }}
          >
            Get my Free eBook
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-surface px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="https://courses.nextlevelchess.blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-accent"
            >
              Courses
            </a>
            <a
              href="https://nextlevelchess.com/articles"
              className="text-sm font-medium text-foreground hover:text-accent"
            >
              Articles
            </a>
            <a
              href="https://nextlevelchess.com/about-me"
              className="text-sm font-medium text-foreground hover:text-accent"
            >
              About me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Hero Section ───────────────────────────────────────────────────────────
function HeroSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative overflow-hidden bg-foreground text-white">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Social proof bar */}
        <div className="mb-8 flex flex-wrap items-center gap-3 animate-fade-in-up">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-300">
            5.0 from 134 reviews
          </span>
          <span className="text-gray-500">|</span>
          <span className="text-sm text-gray-300">
            Trusted by thousands of chess players
          </span>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            {/* Dream outcome headline */}
            <h1
              className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Stop Blundering Your Games.{" "}
              <span className="text-accent">
                Reach 1200+ Elo in 30 Days.
              </span>
            </h1>

            <p
              className="mb-8 text-lg leading-relaxed text-gray-300 md:text-xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              GM Noël Studer&apos;s 3x3 Method gives you a simple, proven system
              to train chess efficiently &mdash; so you see real rating gains
              without spending hours on the wrong things.
            </p>

            {/* Lead magnet CTA */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                Free Grandmaster eBook
              </p>
              <form
                className="flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) {
                    window.open(
                      `https://nextlevelchess.com/?email=${encodeURIComponent(email)}`,
                      "_blank"
                    );
                  }
                }}
              >
                <input
                  id="hero-email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-14 flex-1 rounded-lg border border-gray-600 bg-gray-800 px-4 text-white placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
                <button
                  type="submit"
                  className="cta-button animate-pulse-glow h-14 whitespace-nowrap"
                >
                  Get Free eBook
                  <ArrowRightIcon />
                </button>
              </form>
              <p className="mt-3 text-xs text-gray-400">
                Join 5,000+ chess improvers. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Visual hook - eBook mockup */}
          <div
            className="relative flex items-center justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative">
              <div className="rounded-2xl bg-white p-8 shadow-2xl rotate-2 transition-transform hover:rotate-0">
                <div className="mb-4 text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">
                    Free Download
                  </p>
                </div>
                <div className="mb-6 flex flex-col items-center">
                  <ChessIcon />
                  <h3 className="mt-3 text-xl font-bold text-foreground">
                    The Art of Chess Training
                  </h3>
                  <p className="text-sm text-muted">A Grandmaster Guide</p>
                </div>
                <div className="space-y-2 text-sm text-foreground">
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    <span>The 3x3 Training Method</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    <span>GM-Tested Study Plans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Common Blunder Fixes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Rating Plateau Breakers</span>
                  </div>
                </div>
                <div className="mt-6 border-t border-border pt-4 text-center">
                  <p className="text-xs font-semibold text-muted">
                    by GM Noël Studer
                  </p>
                  <p className="text-xs text-muted">
                    Switzerland&apos;s Youngest-Ever Grandmaster
                  </p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -right-4 -top-4 rounded-full bg-accent px-4 py-2 text-sm font-bold text-white shadow-lg">
                FREE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── "So That" Benefit Stack ────────────────────────────────────────────────
function BenefitStack() {
  const benefits = [
    {
      feature: "Structured 3x3 Training Method",
      benefit: "you know exactly what to study each day without guessing",
    },
    {
      feature: "GM-Led Game Analysis Templates",
      benefit: "you never repeat the same mistake twice",
    },
    {
      feature: "Tactical Pattern Recognition Drills",
      benefit: "you spot winning moves in seconds, not minutes",
    },
    {
      feature: "Opening Repertoire Roadmaps",
      benefit: "you play confidently from move 1 without memorizing 20 lines",
    },
    {
      feature: "Endgame Conversion Checklists",
      benefit: "you stop throwing away won positions in the final phase",
    },
    {
      feature: "Weekly Improvement Tracking",
      benefit: "you see measurable progress and stay motivated",
    },
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            What You Get
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Everything You Need to Improve — Nothing You Don&apos;t
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <CheckIcon />
              <div>
                <p className="font-semibold">{item.feature}</p>
                <p className="mt-1 text-sm text-muted">
                  <span className="italic">so that</span> {item.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Authority / About Section ──────────────────────────────────────────────
function AuthoritySection() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="h-80 w-72 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl">
                <div className="flex h-full flex-col items-center justify-center text-white">
                  <ChessIcon />
                  <p className="mt-4 text-lg font-bold">GM Noël Studer</p>
                  <p className="text-sm text-gray-400">Grandmaster & Coach</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-accent px-5 py-3 text-white shadow-lg">
                <p className="text-2xl font-extrabold">2500+</p>
                <p className="text-xs">Peak Elo Rating</p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
              Your Coach
            </p>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight md:text-4xl">
              Learn From Switzerland&apos;s Youngest-Ever Grandmaster
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                GM Noël Studer became the youngest Swiss Grandmaster at just{" "}
                <strong className="text-foreground">20 years old</strong> and
                has won numerous Swiss Championship titles.
              </p>
              <p>
                After transitioning from professional play to coaching, he
                discovered that most players waste time on the{" "}
                <strong className="text-foreground">wrong type of training</strong>.
                His methods cut through the noise and focus only on what actually
                moves your rating.
              </p>
              <p>
                His writing and courses have already helped{" "}
                <strong className="text-foreground">
                  thousands of players
                </strong>{" "}
                break through plateaus and enjoy chess more.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl bg-accent-light p-4">
                <p className="text-2xl font-extrabold text-accent">GM</p>
                <p className="text-xs text-muted">Title at age 20</p>
              </div>
              <div className="rounded-xl bg-accent-light p-4">
                <p className="text-2xl font-extrabold text-accent">5,000+</p>
                <p className="text-xs text-muted">Students helped</p>
              </div>
              <div className="rounded-xl bg-accent-light p-4">
                <p className="text-2xl font-extrabold text-accent">5.0</p>
                <p className="text-xs text-muted">Avg. rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials / Social Proof Wall ───────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marcus T.",
      rating: "900 → 1350",
      text: "I was stuck at 900 for over a year. Noël's system helped me finally break through. The structured approach meant I stopped wasting time on random puzzles.",
    },
    {
      name: "Sarah K.",
      rating: "1100 → 1400",
      text: "The 3x3 method changed how I think about studying chess. I train less but improve more. My blunder rate dropped dramatically in just 3 weeks.",
    },
    {
      name: "Daniel R.",
      rating: "600 → 1200",
      text: "As a complete beginner, the Beginner Chess Mastery course gave me a clear path. I went from getting checkmated in 10 moves to winning most of my games.",
    },
    {
      name: "Anna M.",
      rating: "1200 → 1550",
      text: "The game analysis templates alone are worth the price. I finally understand my mistakes instead of just moving on to the next game.",
    },
    {
      name: "James L.",
      rating: "800 → 1250",
      text: "Noël explains concepts so clearly. No fluff, no filler — just practical advice that works. Best chess investment I've made.",
    },
    {
      name: "Priya S.",
      rating: "1000 → 1300",
      text: "I tried YouTube tutorials, books, coaches — nothing worked until I found this system. It's the structure I was missing.",
    },
  ];

  return (
    <section className="section-padding bg-foreground text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            Real Results
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Join Thousands Who Already Boosted Their Ratings
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <span className="font-semibold">5.0</span>
            <span className="text-gray-400">from 134 reviews</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl bg-gray-800 p-6 transition-all hover:bg-gray-750"
            >
              <div className="mb-3 flex">
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-300">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center justify-between border-t border-gray-700 pt-3">
                <p className="font-semibold">{t.name}</p>
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent">
                  {t.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Courses Section with Benefit Stacking ──────────────────────────────────
function CoursesSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            Proven Courses
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Choose Your Path to Chess Mastery
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Beginner Course */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all hover:shadow-xl">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-accent-light px-3 py-1 text-xs font-bold uppercase text-accent">
                Beginners
              </span>
              <h3 className="mt-4 text-2xl font-extrabold">
                Beginner Chess Mastery
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <span className="text-sm text-muted">5.0 (40 reviews)</span>
              </div>
            </div>

            <p className="mb-6 text-muted">
              From openings to endgames — learn every fundamental you need to
              reach 1200 on Chess.com.
            </p>

            <ul className="mb-8 space-y-3">
              {[
                "Complete opening repertoire for White & Black",
                "Tactical pattern library with spaced repetition",
                "Endgame technique that converts wins",
                "Game analysis framework to learn from every loss",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-extrabold">$97</p>
                <p className="text-xs text-muted">One-time payment</p>
              </div>
              <a
                href="https://courses.nextlevelchess.blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button text-base"
              >
                Enroll Now
              </a>
            </div>
          </div>

          {/* Premium Course */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-accent bg-background p-8 transition-all hover:shadow-xl">
            <div className="absolute right-0 top-0 rounded-bl-xl bg-accent px-4 py-2 text-xs font-bold uppercase text-white">
              Most Popular
            </div>

            <div className="mb-6">
              <span className="inline-block rounded-full bg-accent-light px-3 py-1 text-xs font-bold uppercase text-accent">
                All Levels
              </span>
              <h3 className="mt-4 text-2xl font-extrabold">
                The Simplified Chess Improvement System
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <span className="text-sm text-muted">5.0 (94 reviews)</span>
              </div>
            </div>

            <p className="mb-6 text-muted">
              The complete system to get the most out of every minute you study
              chess. For players serious about improvement.
            </p>

            <ul className="mb-8 space-y-3">
              {[
                "Everything in Beginner Mastery, plus...",
                "The complete 3x3 Training Method system",
                "Advanced positional understanding modules",
                "Calculation & visualization exercises",
                "Personal study plan generator",
                "Lifetime access + all future updates",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-extrabold">$397</p>
                <p className="text-xs text-muted">One-time payment</p>
              </div>
              <a
                href="https://courses.nextlevelchess.blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button animate-pulse-glow text-base"
              >
                Get the System
              </a>
            </div>
          </div>
        </div>

        {/* Scarcity / Urgency */}
        <div className="mt-8 rounded-xl bg-accent-light p-6 text-center">
          <p className="text-sm font-semibold text-accent">
            Limited Offer: Get the free eBook + a bonus lesson when you enroll this week
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Value Equation Section ─────────────────────────────────────────────────
function ValueEquation() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
          Why This Works
        </p>
        <h2 className="mb-12 text-3xl font-extrabold tracking-tight md:text-4xl">
          The Hormozi Value Equation Applied to Chess
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-border bg-surface p-6 text-center">
            <div className="mb-3 text-3xl">🎯</div>
            <h3 className="mb-2 font-bold text-accent">Dream Outcome</h3>
            <p className="text-sm text-muted">
              Reach 1200+ Elo and win games with confidence
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 text-center">
            <div className="mb-3 text-3xl">📈</div>
            <h3 className="mb-2 font-bold text-accent">High Likelihood</h3>
            <p className="text-sm text-muted">
              134 five-star reviews. Proven by thousands of students.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 text-center">
            <div className="mb-3 text-3xl">⚡</div>
            <h3 className="mb-2 font-bold text-accent">Fast Results</h3>
            <p className="text-sm text-muted">
              See improvement in 30 days, not 30 months
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 text-center">
            <div className="mb-3 text-3xl">🧠</div>
            <h3 className="mb-2 font-bold text-accent">Low Effort</h3>
            <p className="text-sm text-muted">
              20 minutes/day of focused training beats hours of random study
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA / Newsletter ─────────────────────────────────────────────────
function FinalCTA() {
  const [email, setEmail] = useState("");

  return (
    <section className="section-padding bg-foreground text-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
          Ready to Stop Guessing and Start{" "}
          <span className="text-accent">Improving?</span>
        </h2>
        <p className="mb-8 text-lg text-gray-300">
          Get GM Noël Studer&apos;s free eBook and start training like a
          Grandmaster today. No spam, just chess wisdom.
        </p>

        <form
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            if (email) {
              window.open(
                `https://nextlevelchess.com/?email=${encodeURIComponent(email)}`,
                "_blank"
              );
            }
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-14 flex-1 rounded-lg border border-gray-600 bg-gray-800 px-4 text-white placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
          <button
            type="submit"
            className="cta-button animate-pulse-glow h-14 whitespace-nowrap"
          >
            Get Free eBook
          </button>
        </form>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <CheckIcon />
            <span>100% Free</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon />
            <span>No Spam</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon />
            <span>Unsubscribe Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Exit Intent Popup ──────────────────────────────────────────────────────
function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [popupEmail, setPopupEmail] = useState("");

  useEffect(() => {
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShowPopup(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [dismissed]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
        <button
          onClick={() => {
            setShowPopup(false);
            setDismissed(true);
          }}
          className="absolute right-4 top-4 text-2xl text-muted hover:text-foreground"
          aria-label="Close popup"
        >
          &times;
        </button>

        <div className="mb-4 text-4xl">♟️</div>
        <h3 className="mb-2 text-2xl font-extrabold text-foreground">
          Wait! Don&apos;t Leave Your Elo Behind
        </h3>
        <p className="mb-6 text-muted">
          Get the free eBook that has helped thousands of players break through
          their rating plateaus.
        </p>

        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (popupEmail) {
              window.open(
                `https://nextlevelchess.com/?email=${encodeURIComponent(popupEmail)}`,
                "_blank"
              );
              setShowPopup(false);
              setDismissed(true);
            }
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={popupEmail}
            onChange={(e) => setPopupEmail(e.target.value)}
            required
            className="h-12 w-full rounded-lg border border-border bg-background px-4 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
          <button type="submit" className="cta-button w-full">
            Send Me the Free eBook
          </button>
        </form>

        <p className="mt-4 text-xs text-muted">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}

// ─── Minimal Footer ─────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-foreground py-8 text-center text-sm text-gray-400">
      <div className="mx-auto max-w-4xl px-6">
        <p className="font-semibold text-white">Next Level Chess</p>
        <p className="mt-1">
          &copy; {new Date().getFullYear()} GM Noël Studer. All rights
          reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="https://nextlevelchess.com/articles"
            className="hover:text-accent transition-colors"
          >
            Articles
          </a>
          <a
            href="https://courses.nextlevelchess.blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Courses
          </a>
          <a
            href="https://nextlevelchess.com/about-me"
            className="hover:text-accent transition-colors"
          >
            About
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BenefitStack />
      <AuthoritySection />
      <TestimonialsSection />
      <CoursesSection />
      <ValueEquation />
      <FinalCTA />
      <Footer />
      <ExitIntentPopup />
    </>
  );
}
