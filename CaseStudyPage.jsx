import { useState, useEffect, useRef } from "react";

// ═══ DESIGN TOKENS ═══
const t = {
  gold: "#D4AF37",
  goldLight: "#E8C84A",
  rust: "#C44536",
  forest: "#2C5530",
  earth: "#8B4513",
  dark: "#1A1A1A",
  darkMid: "#2A2A2A",
  cream: "#FAF8F3",
  sand: "#E8D5B7",
  white: "#FFFFFF",
  textPrimary: "#2C2C2C",
  textSecondary: "#6B6B6B",
  textDimmed: "#9A9A9A",
  goldGlow: "0 4px 20px rgba(212,175,55,0.3)",
  goldGlowHover: "0 8px 30px rgba(212,175,55,0.5)",
};

const fontHeading = "'Space Grotesk', system-ui, sans-serif";
const fontBody = "'Inter', system-ui, sans-serif";
const fontMono = "'JetBrains Mono', monospace";

// ═══ OMOC CASE STUDY DATA ═══
const caseStudy = {
  id: "omoc",
  title: "OMOC",
  subtitle: "Social Commerce Platform",
  hook: "I applied to redesign a few screens. Nine months later, I'd designed both sides of a social commerce platform.",
  role: "UX/UI Designer (Freelance)",
  duration: "April – December 2025",
  platforms: "Web (Seller) + Mobile (Buyer)",
  team: "Founder, 2 Developers, Me",
  metrics: [
    { value: "9", label: "Months" },
    { value: "100+", label: "Screens" },
    { value: "6", label: "Feature Areas" },
    { value: "2", label: "Platforms" },
  ],
  tags: ["UX Design", "Systems Design", "Mobile", "Desktop", "E-Commerce"],
  moments: [
    {
      id: "onboarding",
      number: "01",
      title: "Seller Onboarding",
      headline: "A signup form became a compliance system",
      theme: "Navigating ambiguity when requirements fundamentally change",
      summary:
        "What started as a 4-step signup became a 7-step EU compliance system spanning three entity types. The founder sent a PDF that transformed everything.",
      before: "4 generic steps — email, OTP, store name, profile picture. Wrong input components. No compliance.",
      after: "7 contextual steps with entity-type classification, progressive disclosure, VIES validation with 3 states, and design-system-consistent components.",
      details: [
        "Used the founder's PDF spec as a starting point, then built complete flows in Claude artifacts before touching Figma",
        "Applied progressive disclosure — classify the seller first, then surface only relevant fields per entity type (individual vs. sole proprietor vs. company)",
        "Designed a country selector component from scratch and added it to the design system",
        "Created three VIES validation states: validating, success, error with recovery path",
        "Fixed accessibility issues with input fields the previous design had wrong",
      ],
      insight: "I can take ambiguous, expanding requirements and create structured, logical flows. I fix what's broken even when it's not in the brief.",
    },
    {
      id: "order-management",
      number: "02",
      title: "Order Management",
      headline: "Designing how orders flow between two sides of a marketplace",
      theme: "Systems thinking — every screen on one side has consequences on the other",
      summary:
        "The biggest piece of work in the project. Nothing existed — I designed the seller dashboard with 11+ statuses AND the buyer-side cancel/return/complain flows, simultaneously.",
      before: "No order management system at all. No dashboard, no status tracking, no buyer-side order actions.",
      after: "Full seller dashboard with 11+ order statuses, buyer item-level selection for cancel/return/complain, and chat-based complaint resolution.",
      details: [
        "Deeply researched how Etsy and Shopify handle every order status from both seller and buyer perspectives",
        "Designed the seller dashboard first — all statuses and flows — then mapped how each buyer action creates a seller-side status change",
        "For buyer cancellation: created item-by-item selection (not abstract 'full vs partial'), made it clear you're requesting — not cancelling — since sellers may have started preparing",
        "Introduced chat-based complaint resolution instead of forms — based on patterns from Etsy, Binance, AliExpress",
        "Clear communication with founder played a huge role — this was the biggest feature of the platform",
      ],
      insight: "I can design complex systems that work across platforms and user types. I think about how one user's action affects another user's experience.",
    },
    {
      id: "shop-design",
      number: "03",
      title: "Shop & Store Design",
      headline: "I designed the builder AND adapted when engineering said no",
      theme: "Collaboration, pragmatism, and cross-platform design",
      summary:
        "Two connected features: how sellers build their shop (desktop) and how buyers experience it (mobile). Designed buyer-side first, then worked backwards to the builder.",
      before: "No shop building tools for sellers. Buyer store view existed but needed redesign.",
      after: "Full shop builder with form-based editing, redesigned buyer store with categories, grid, policies. Live preview editing was cut after dev feedback — adapted without losing value.",
      details: [
        "Designed the buyer-facing store first — what the end result looks like — then worked backwards to what the builder needs to produce",
        "Store template structure (categories, product grid, policies, color/size selectors) came from my research with Claude, inspired by e-commerce UI kits",
        "Original vision included live preview editing — devs said too complex to implement",
        "Adapted: kept live preview for viewing, removed editing. Full-width form + separate preview page. Core user value preserved.",
        "Used expanded/condensed design approach for description, reviews, and store policies sections",
      ],
      insight: "I handle dev constraints without ego — I adapt the design while preserving user value. Whenever developers say something can't be done, I understand and find another way.",
    },
    {
      id: "comments",
      number: "04",
      title: "Comments & Report",
      headline: "Not every task is a system. Sometimes it's focused craft.",
      theme: "Range — micro-interaction design, pattern reference, practical decisions",
      summary:
        "Instagram-style comments with slide-up sheets, long-press context menus for edit/delete/report, and confirmation flows. Contained, polished interaction design.",
      before: "Basic comment display with no interaction capabilities.",
      after: "Full comment system: slide-up sheet, long-press edit/delete (own) or report (others), reply threads, realistic timestamps, report confirmation flow.",
      details: [
        "Took screenshots of existing OMOC design + Instagram comments as input for Claude artifacts",
        "Long-press for context menu (edit/delete/report) — taken from Instagram and Telegram patterns, plus swipe would be more complex to develop",
        "Created realistic time formats (just now, 2h, 2w) matching social platform conventions",
        "Report confirmation with green checkmark — users need to know their report was submitted, it's a trust signal",
      ],
      insight: "After three heavy systems stories, this proves range — I'm not just a systems thinker who can't execute on focused interaction details.",
    },
  ],
  resolution: {
    growth:
      "Before OMOC, my UX/UI education was YouTube courses and copying Dribbble designs. I could use Figma, but I had no idea how to create components or think at a platform level.",
    discovery:
      "My biggest skill isn't designing fancy marketing pages. It's systems thinking — attention to detail, thinking about the whole workflow, understanding how pieces connect.",
    founderQuote: "I appreciate your attention to detail",
    advice:
      "Keep learning. Research how others have done it. Use AI not to skip thinking but to think faster. With practice and continuous learning, you can handle any scope.",
  },
  workflow: {
    title: "My UX Workflow — AI as a Design Thinking Tool",
    steps: [
      { num: "01", label: "Receive task", detail: "From founder via WhatsApp" },
      { num: "02", label: "Clarify", detail: "Discuss with Claude if unclear" },
      { num: "03", label: "Research", detail: "Etsy, Shopify, Instagram patterns" },
      { num: "04", label: "Prototype", detail: "Build full flow in Claude artifacts" },
      { num: "05", label: "Present", detail: "Screenshot artifact → founder feedback" },
      { num: "06", label: "Iterate", detail: "Refine artifact based on discussion" },
      { num: "07", label: "Design", detail: "Move to Figma with OMOC design system" },
      { num: "08", label: "Polish", detail: "Final iterations in Figma with founder" },
    ],
  },
};

// ═══ SCROLL PROGRESS BAR ═══
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: 3,
        background: `linear-gradient(90deg, ${t.gold}, ${t.goldLight})`,
        zIndex: 100,
        transition: "width 0.1s linear",
      }}
    />
  );
}

// ═══ BACK NAVIGATION ═══
function BackNav() {
  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        left: 20,
        zIndex: 90,
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 16px",
        background: "rgba(26,26,26,0.85)",
        backdropFilter: "blur(12px)",
        borderRadius: 999,
        cursor: "pointer",
        transition: "all 0.2s ease",
        border: `1px solid rgba(212,175,55,0.15)`,
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.sand} strokeWidth="2">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      <span style={{ fontFamily: fontBody, fontSize: 13, color: t.sand, fontWeight: 500 }}>
        All Work
      </span>
    </div>
  );
}

// ═══ HERO SECTION ═══
function CaseStudyHero({ data }) {
  return (
    <section
      style={{
        background: t.dark,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div style={{ maxWidth: 960, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
          {data.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: fontMono,
                fontSize: 11,
                fontWeight: 500,
                color: t.gold,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                padding: "4px 12px",
                border: `1px solid rgba(212,175,55,0.25)`,
                borderRadius: 999,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title block */}
        <h1
          style={{
            fontFamily: fontHeading,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 700,
            color: t.white,
            lineHeight: 1.1,
            margin: 0,
            marginBottom: 8,
          }}
        >
          {data.title}
        </h1>
        <p
          style={{
            fontFamily: fontHeading,
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 400,
            color: t.sand,
            margin: 0,
            marginBottom: 40,
            opacity: 0.8,
          }}
        >
          {data.subtitle}
        </p>

        {/* Hook quote */}
        <div
          style={{
            borderLeft: `3px solid ${t.gold}`,
            paddingLeft: 24,
            marginBottom: 56,
            maxWidth: 720,
          }}
        >
          <p
            style={{
              fontFamily: fontBody,
              fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
              lineHeight: 1.6,
              color: t.white,
              margin: 0,
              fontWeight: 400,
            }}
          >
            {data.hook}
          </p>
        </div>

        {/* Meta grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 24,
            paddingTop: 32,
            borderTop: `1px solid rgba(212,175,55,0.15)`,
          }}
        >
          {[
            { label: "Role", value: data.role },
            { label: "Duration", value: data.duration },
            { label: "Platform", value: data.platforms },
            { label: "Team", value: data.team },
          ].map((item) => (
            <div key={item.label}>
              <span
                style={{
                  fontFamily: fontMono,
                  fontSize: 10,
                  fontWeight: 600,
                  color: t.gold,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: fontBody,
                  fontSize: 14,
                  color: t.sand,
                  lineHeight: 1.5,
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0.4,
          animation: "bounceDown 2s ease-in-out infinite",
        }}
      >
        <span style={{ fontFamily: fontMono, fontSize: 10, color: t.gold, letterSpacing: "0.1em" }}>
          SCROLL
        </span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.gold} strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

// ═══ METRICS BAR ═══
function MetricsBar({ metrics }) {
  return (
    <section
      style={{
        background: t.white,
        borderBottom: `1px solid rgba(212,175,55,0.12)`,
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
          textAlign: "center",
        }}
      >
        {metrics.map((m) => (
          <div key={m.label}>
            <div
              style={{
                fontFamily: fontHeading,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                backgroundImage: `linear-gradient(135deg, ${t.gold}, ${t.goldLight})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.1,
                marginBottom: 4,
              }}
            >
              {m.value}
            </div>
            <div
              style={{
                fontFamily: fontMono,
                fontSize: 11,
                fontWeight: 500,
                color: t.textDimmed,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ═══ WORKFLOW SECTION ═══
function WorkflowSection({ workflow }) {
  return (
    <section style={{ background: t.cream, padding: "80px 24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* Section label */}
        <span
          style={{
            fontFamily: fontMono,
            fontSize: 11,
            fontWeight: 600,
            color: t.gold,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            display: "block",
            marginBottom: 12,
          }}
        >
          Process
        </span>
        <h2
          style={{
            fontFamily: fontHeading,
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 700,
            color: t.textPrimary,
            margin: 0,
            marginBottom: 12,
          }}
        >
          {workflow.title}
        </h2>
        <p
          style={{
            fontFamily: fontBody,
            fontSize: 16,
            color: t.textSecondary,
            lineHeight: 1.6,
            maxWidth: 600,
            margin: "0 0 48px 0",
          }}
        >
          Claude didn't replace my design thinking — it let me validate UX decisions faster. The research, the "why," the system mapping — that's me. The rapid prototyping — that's where AI accelerated the process.
        </p>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
          {workflow.steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                background: t.white,
                borderRadius: 12,
                padding: "20px 16px",
                border: `1px solid rgba(212,175,55,0.1)`,
                position: "relative",
                transition: "all 0.2s ease",
              }}
            >
              <span
                style={{
                  fontFamily: fontMono,
                  fontSize: 10,
                  fontWeight: 700,
                  color: t.gold,
                  opacity: 0.5,
                  display: "block",
                  marginBottom: 8,
                }}
              >
                {step.num}
              </span>
              <div
                style={{
                  fontFamily: fontHeading,
                  fontSize: 14,
                  fontWeight: 600,
                  color: t.textPrimary,
                  marginBottom: 4,
                }}
              >
                {step.label}
              </div>
              <div style={{ fontFamily: fontBody, fontSize: 12, color: t.textDimmed, lineHeight: 1.5 }}>
                {step.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══ MOMENT CARD ═══
function MomentSection({ moment, isEven }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      style={{
        background: isEven ? t.white : t.cream,
        padding: "96px 24px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* Moment number + theme */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 16 }}>
          <span
            style={{
              fontFamily: fontMono,
              fontSize: 12,
              fontWeight: 700,
              color: t.gold,
              letterSpacing: "0.05em",
            }}
          >
            MOMENT {moment.number}
          </span>
          <span
            style={{
              fontFamily: fontBody,
              fontSize: 13,
              color: t.textDimmed,
              fontStyle: "italic",
            }}
          >
            {moment.theme}
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: fontHeading,
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 700,
            color: t.textPrimary,
            margin: 0,
            marginBottom: 4,
          }}
        >
          {moment.title}
        </h2>

        {/* Headline */}
        <p
          style={{
            fontFamily: fontBody,
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: t.textSecondary,
            margin: "0 0 32px 0",
            lineHeight: 1.6,
            maxWidth: 640,
          }}
        >
          "{moment.headline}"
        </p>

        {/* Summary */}
        <p
          style={{
            fontFamily: fontBody,
            fontSize: 16,
            color: t.textPrimary,
            lineHeight: 1.7,
            margin: "0 0 40px 0",
            maxWidth: 700,
          }}
        >
          {moment.summary}
        </p>

        {/* Before → After */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 0,
            marginBottom: 40,
            alignItems: "stretch",
          }}
        >
          {/* Before */}
          <div
            style={{
              background: isEven ? t.cream : t.white,
              borderRadius: "12px 0 0 12px",
              padding: 24,
              border: `1px solid rgba(0,0,0,0.06)`,
              borderRight: "none",
            }}
          >
            <div
              style={{
                fontFamily: fontMono,
                fontSize: 10,
                fontWeight: 700,
                color: t.rust,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: 12,
              }}
            >
              Before
            </div>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 14,
                color: t.textSecondary,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {moment.before}
            </p>
          </div>

          {/* Arrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: isEven ? t.cream : t.white,
              padding: "0 16px",
              borderTop: `1px solid rgba(0,0,0,0.06)`,
              borderBottom: `1px solid rgba(0,0,0,0.06)`,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={t.gold} strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>

          {/* After */}
          <div
            style={{
              background: isEven ? t.cream : t.white,
              borderRadius: "0 12px 12px 0",
              padding: 24,
              border: `1px solid rgba(212,175,55,0.15)`,
              borderLeft: "none",
            }}
          >
            <div
              style={{
                fontFamily: fontMono,
                fontSize: 10,
                fontWeight: 700,
                color: t.forest,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: 12,
              }}
            >
              After
            </div>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: 14,
                color: t.textPrimary,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {moment.after}
            </p>
          </div>
        </div>

        {/* Image placeholder */}
        <div
          style={{
            background: isEven ? `linear-gradient(135deg, ${t.cream}, rgba(212,175,55,0.05))` : `linear-gradient(135deg, ${t.white}, rgba(212,175,55,0.05))`,
            borderRadius: 16,
            height: 360,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `1px dashed rgba(212,175,55,0.2)`,
            marginBottom: 32,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke={t.gold}
              strokeWidth="1"
              style={{ opacity: 0.3, marginBottom: 12 }}
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21,15 16,10 5,21" />
            </svg>
            <div style={{ fontFamily: fontMono, fontSize: 11, color: t.textDimmed }}>
              {moment.title} — Figma Screens
            </div>
          </div>
        </div>

        {/* Expand/Collapse details */}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: fontBody,
            fontSize: 14,
            fontWeight: 600,
            color: t.gold,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px 0",
            transition: "all 0.2s ease",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={t.gold}
            strokeWidth="2"
            style={{
              transition: "transform 0.3s ease",
              transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
          {expanded ? "Less detail" : "Deep dive — what I actually did"}
        </button>

        {/* Expandable details */}
        <div
          style={{
            maxHeight: expanded ? 800 : 0,
            overflow: "hidden",
            transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div style={{ paddingTop: 24, paddingBottom: 8 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {moment.details.map((detail, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: t.gold,
                      marginTop: 7,
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: fontBody,
                      fontSize: 15,
                      color: t.textPrimary,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Insight callout */}
            <div
              style={{
                marginTop: 32,
                padding: "20px 24px",
                background: `linear-gradient(135deg, rgba(212,175,55,0.06), rgba(212,175,55,0.02))`,
                borderRadius: 12,
                borderLeft: `3px solid ${t.gold}`,
              }}
            >
              <span
                style={{
                  fontFamily: fontMono,
                  fontSize: 10,
                  fontWeight: 700,
                  color: t.gold,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                What this shows
              </span>
              <p
                style={{
                  fontFamily: fontBody,
                  fontSize: 15,
                  color: t.textPrimary,
                  lineHeight: 1.6,
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                {moment.insight}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══ RESOLUTION SECTION ═══
function ResolutionSection({ resolution }) {
  return (
    <section style={{ background: t.dark, padding: "96px 24px", position: "relative", overflow: "hidden" }}>
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          background: `radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <span
          style={{
            fontFamily: fontMono,
            fontSize: 11,
            fontWeight: 600,
            color: t.gold,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            display: "block",
            marginBottom: 12,
          }}
        >
          Reflection
        </span>

        <h2
          style={{
            fontFamily: fontHeading,
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 700,
            color: t.white,
            margin: "0 0 32px 0",
          }}
        >
          The Growth Arc
        </h2>

        <p
          style={{
            fontFamily: fontBody,
            fontSize: 17,
            color: t.sand,
            lineHeight: 1.8,
            margin: "0 0 24px 0",
          }}
        >
          {resolution.growth}
        </p>

        <p
          style={{
            fontFamily: fontBody,
            fontSize: 17,
            color: t.sand,
            lineHeight: 1.8,
            margin: "0 0 48px 0",
          }}
        >
          {resolution.discovery}
        </p>

        {/* Founder quote */}
        <div
          style={{
            textAlign: "center",
            padding: "40px 0",
            borderTop: `1px solid rgba(212,175,55,0.15)`,
            borderBottom: `1px solid rgba(212,175,55,0.15)`,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              fontFamily: fontHeading,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 600,
              backgroundImage: `linear-gradient(135deg, ${t.gold}, ${t.goldLight})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontStyle: "italic",
              marginBottom: 12,
            }}
          >
            "{resolution.founderQuote}"
          </div>
          <div style={{ fontFamily: fontBody, fontSize: 13, color: t.textDimmed }}>
            — OMOC Founder, said repeatedly throughout the project
          </div>
        </div>

        {/* Advice */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            borderRadius: 16,
            padding: 32,
            border: `1px solid rgba(212,175,55,0.1)`,
          }}
        >
          <span
            style={{
              fontFamily: fontMono,
              fontSize: 10,
              fontWeight: 700,
              color: t.gold,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              display: "block",
              marginBottom: 12,
            }}
          >
            For junior designers navigating growing scope
          </span>
          <p
            style={{
              fontFamily: fontBody,
              fontSize: 16,
              color: t.white,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {resolution.advice}
          </p>
        </div>
      </div>
    </section>
  );
}

// ═══ CTA SECTION ═══
function CTASection() {
  return (
    <section style={{ background: t.cream, padding: "80px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: fontHeading,
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 700,
            color: t.textPrimary,
            margin: "0 0 12px 0",
          }}
        >
          Want the full walkthrough?
        </h2>
        <p
          style={{
            fontFamily: fontBody,
            fontSize: 16,
            color: t.textSecondary,
            margin: "0 0 32px 0",
            lineHeight: 1.6,
          }}
        >
          I can walk you through every screen, every decision, and every pivot.
          The Figma file has 100+ screens worth of stories.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            style={{
              fontFamily: fontBody,
              fontSize: 15,
              fontWeight: 600,
              color: t.dark,
              background: `linear-gradient(135deg, ${t.gold}, ${t.goldLight})`,
              border: "none",
              borderRadius: 999,
              padding: "14px 32px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: t.goldGlow,
            }}
          >
            Let's Talk →
          </button>
          <button
            style={{
              fontFamily: fontBody,
              fontSize: 15,
              fontWeight: 600,
              color: t.gold,
              background: "transparent",
              border: `1.5px solid ${t.gold}`,
              borderRadius: 999,
              padding: "14px 32px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            ← Back to Work
          </button>
        </div>
      </div>
    </section>
  );
}

// ═══ HABESHA DIVIDER ═══
function HabeshaDivider() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <div style={{ height: 2, background: t.forest }} />
      <div style={{ height: 2, background: t.gold }} />
      <div style={{ height: 2, background: t.rust }} />
    </div>
  );
}

// ═══ FOOTER ═══
function Footer() {
  return (
    <footer style={{ background: t.dark, padding: "32px 24px" }}>
      <HabeshaDivider />
      <div
        style={{
          maxWidth: 960,
          margin: "24px auto 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontFamily: fontBody, fontSize: 13, color: t.textDimmed }}>
          © 2025 Zeamanuel. Built with SemEnaWerk.
        </span>
        <span style={{ fontFamily: fontMono, fontSize: 11, color: t.textDimmed }}>
          Addis Ababa, Ethiopia
        </span>
      </div>
    </footer>
  );
}

// ═══ MAIN PAGE COMPONENT ═══
export default function CaseStudyPage() {
  return (
    <div style={{ background: t.cream, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        
        @keyframes bounceDown {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }

        @media (max-width: 640px) {
          section [style*="grid-template-columns: 1fr auto 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <ScrollProgress />
      <BackNav />
      <CaseStudyHero data={caseStudy} />
      <MetricsBar metrics={caseStudy.metrics} />
      <WorkflowSection workflow={caseStudy.workflow} />

      {caseStudy.moments.map((moment, i) => (
        <MomentSection key={moment.id} moment={moment} isEven={i % 2 === 0} />
      ))}

      <ResolutionSection resolution={caseStudy.resolution} />
      <CTASection />
      <Footer />
    </div>
  );
}
