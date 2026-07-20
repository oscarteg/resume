/* @ds-bundle: {"format":4,"namespace":"RamsDocumentDesignSystem_e0e31b","components":[{"name":"Pipeline","sourcePath":"components/content/Pipeline.jsx"},{"name":"SkillColumn","sourcePath":"components/content/SkillColumn.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"ListRow","sourcePath":"components/core/ListRow.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"RailNav","sourcePath":"components/navigation/RailNav.jsx"},{"name":"HomeScreen","sourcePath":"ui_kits/personal-site/HomeScreen.jsx"}],"sourceHashes":{"components/content/Pipeline.jsx":"b734300eb18e","components/content/SkillColumn.jsx":"7f27f370b8d6","components/core/Button.jsx":"26202bb30e63","components/core/Card.jsx":"1a77dfa8eabb","components/core/Kicker.jsx":"7b3315ff155b","components/core/ListRow.jsx":"4147a5c4f7c6","components/core/SectionHeader.jsx":"355252c6068d","components/core/StatusBadge.jsx":"2c3e97dc48a2","components/navigation/RailNav.jsx":"fb90b22f9fee","shadcn/tailwind.config.js":"9920e5e5e229","ui_kits/personal-site/HomeScreen.jsx":"8780638171e2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RamsDocumentDesignSystem_e0e31b = window.RamsDocumentDesignSystem_e0e31b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Pipeline.jsx
try { (() => {
/** Stepped process pipeline. First (or activeIndex) step is ink-filled. */
function Pipeline({
  steps = [],
  activeIndex = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      font: "var(--text-mono)",
      fontSize: 13
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: i === activeIndex ? {
      padding: "9px 15px",
      background: "var(--ink)",
      color: "var(--on-ink)"
    } : {
      padding: "9px 15px",
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)"
    }
  }, s), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#B9B2A6",
      padding: "0 9px"
    }
  }, "\u2192"))));
}
Object.assign(__ds_scope, { Pipeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Pipeline.jsx", error: String((e && e.message) || e) }); }

// components/content/SkillColumn.jsx
try { (() => {
/** A titled skill/spec column: ruled heading with a square marker + a list. */
function SkillColumn({
  title,
  items = []
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      paddingBottom: 10,
      borderBottom: "2px solid var(--border-strong)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "var(--marker-size)",
      height: "var(--marker-size)",
      background: "var(--marker)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-h3)",
      fontWeight: "var(--weight-semibold)"
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      marginTop: 14
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      font: "var(--text-small)",
      color: "var(--text-body)"
    }
  }, it))));
}
Object.assign(__ds_scope, { SkillColumn });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SkillColumn.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * Text-forward action. Variants: "link" (inline orange, default),
 * "ghost" (hairline box), "solid" (ink fill). Squared corners.
 */
function Button({
  children,
  href,
  onClick,
  variant = "link",
  arrow = false
}) {
  const base = {
    font: "var(--text-small)",
    fontWeight: "var(--weight-medium)",
    textDecoration: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    transition: "color var(--dur) var(--ease), background var(--dur) var(--ease)"
  };
  const variants = {
    link: {
      color: "var(--link)",
      padding: 0,
      background: "none",
      border: "none"
    },
    ghost: {
      color: "var(--ink)",
      padding: "10px 18px",
      background: "transparent",
      border: "1px solid var(--border-strong)"
    },
    solid: {
      color: "var(--on-ink)",
      padding: "10px 18px",
      background: "var(--ink)",
      border: "1px solid var(--ink)"
    }
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2197"));
  if (href) return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: style,
    onClick: onClick
  }, content);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: style,
    onClick: onClick
  }, content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/** Squared surface: raised paper fill + hairline. Optionally a link. */
function Card({
  children,
  href,
  padding = 22
}) {
  const style = {
    display: "block",
    background: "var(--surface-card)",
    border: "1px solid var(--border-hairline)",
    borderRadius: "var(--radius)",
    padding,
    color: "var(--text-heading)",
    textDecoration: "none"
  };
  if (href) return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: style
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
/** Uppercase monospace label — the recurring kicker/eyebrow voice. */
function Kicker({
  children,
  color = "var(--text-muted)",
  accent = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-kicker)",
      letterSpacing: "var(--track-kicker)",
      textTransform: "uppercase",
      color: accent ? "var(--accent-fg)" : color
    }
  }, children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/core/ListRow.jsx
try { (() => {
/**
 * A top-ruled record row: optional left column (year/label), a title
 * block, and right-aligned mono meta. Used for experience, posts, contact.
 */
function ListRow({
  left,
  title,
  subtitle,
  meta,
  href,
  lastBorder = false
}) {
  const style = {
    display: "grid",
    gridTemplateColumns: left ? "150px 1fr auto" : "1fr auto",
    gap: 24,
    alignItems: "baseline",
    padding: "15px 0",
    borderTop: "1px solid var(--border-hairline)",
    borderBottom: lastBorder ? "1px solid var(--border-hairline)" : "none",
    color: "var(--text-heading)",
    textDecoration: "none"
  };
  const body = /*#__PURE__*/React.createElement(React.Fragment, null, left && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-mono)",
      color: "var(--accent-fg)"
    }
  }, left), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-h3)",
      fontWeight: "var(--weight-semibold)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      font: "var(--text-small)",
      color: "var(--text-muted)",
      marginTop: 3
    }
  }, subtitle)), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-mono-sm)",
      color: "var(--text-meta)",
      whiteSpace: "nowrap"
    }
  }, meta));
  if (href) return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: style
  }, body);
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, body);
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
/**
 * The signature section divider: a mono index number, an uppercase
 * mono label, a hairline rule that fills the remaining width, and an
 * optional trailing action link.
 */
function SectionHeader({
  number,
  label,
  action,
  marginBottom = 20
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom
    }
  }, number != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-mono)",
      color: "var(--accent-fg)"
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-kicker)",
      letterSpacing: "var(--track-kicker)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--border-hairline)"
    }
  }), action && /*#__PURE__*/React.createElement("a", {
    href: action.href || "#",
    style: {
      font: "var(--text-mono-sm)",
      color: "var(--link)",
      textDecoration: "none"
    }
  }, action.label));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
/** Halo dot + uppercase mono label. Signals availability / live status. */
function StatusBadge({
  label = "Available",
  showDot = true
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      font: "var(--text-mono-sm)",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, showDot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--accent)",
      boxShadow: "0 0 0 4px var(--accent-tint)"
    }
  }), label);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/navigation/RailNav.jsx
try { (() => {
/**
 * The vertical identity-rail menu: a 2px ink top rule, then rows with a
 * label and a mono index/glyph, divided by hairlines. Active row is orange.
 */
function RailNav({
  items = []
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      borderTop: "2px solid var(--border-strong)"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: it.href || "#",
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 0",
      borderBottom: "1px solid var(--border-hairline)",
      font: "var(--text-body)",
      fontWeight: it.active ? "var(--weight-semibold)" : "var(--weight-regular)",
      color: it.active ? "var(--link)" : "var(--text-heading)",
      textDecoration: "none"
    }
  }, it.label, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-mono-sm)",
      color: it.active ? "var(--accent-fg)" : "var(--text-meta)"
    }
  }, it.index))));
}
Object.assign(__ds_scope, { RailNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/RailNav.jsx", error: String((e && e.message) || e) }); }

// shadcn/tailwind.config.js
try { (() => {
/** @type {import('tailwindcss').Config} */
// Rams Document — shadcn/ui Tailwind config.
// Standard shadcn color mapping (hsl(var(--token))) + this system's
// square corners (radius 0) and Archivo / Space Mono font stacks.
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1240px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))"
        }
      },
      // The system is square. radius tokens resolve to 0 by default.
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      fontFamily: {
        sans: ["'Helvetica Neue'", "Helvetica", "'Archivo'", "system-ui", "sans-serif"],
        mono: ["'Space Mono'", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      letterSpacing: {
        tightest: "-0.025em",
        // large display
        kicker: "0.14em" // uppercase mono labels
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "shadcn/tailwind.config.js", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/HomeScreen.jsx
try { (() => {
/**
 * Personal-site home screen, composed from system primitives:
 * a sticky identity rail (name + status + RailNav) beside a
 * document column of numbered sections.
 */
function HomeScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      color: "var(--ink)",
      fontFamily: "var(--font-sans)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "var(--rail-width) 1fr",
      gap: "var(--rail-gap)",
      padding: "var(--page-pad) 48px 96px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "sticky",
      top: "var(--page-pad)",
      alignSelf: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-h1)",
      letterSpacing: "var(--track-tight)",
      lineHeight: 1.02
    }
  }, "Oscar", /*#__PURE__*/React.createElement("br", null), "te Giffel"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      font: "var(--text-small)",
      color: "var(--text-muted)",
      lineHeight: 1.5
    }
  }, "Senior Fullstack Engineer", /*#__PURE__*/React.createElement("br", null), "Freelance \xB7 Amersfoort, NL"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.RailNav, {
    items: [{
      label: "Home",
      index: "01",
      active: true
    }, {
      label: "Writing",
      index: "02"
    }, {
      label: "Principles",
      index: "03"
    }, {
      label: "Uses",
      index: "04"
    }, {
      label: "Résumé",
      index: "↗"
    }]
  }))), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: "var(--content-max)"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: 52
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeader, {
    number: "01",
    label: "Introduction"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--text-lead)",
      letterSpacing: "-0.015em",
      maxWidth: "24ch"
    }
  }, "Hi there! I'm Oscar, a Senior Fullstack Engineer who loves creating amazing web experiences.")), /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: 52
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeader, {
    number: "02",
    label: "Selected work",
    action: {
      label: "All ↗",
      href: "#"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-h3)"
    }
  }, "JustWhisk"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-mono-sm)",
      color: "var(--accent)"
    }
  }, "IN DEV \u2197")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 14px",
      font: "var(--text-body)",
      color: "var(--ink-soft)"
    }
  }, "Online recipes, minus the blog stories."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-mono-sm)",
      color: "var(--text-meta)"
    }
  }, "REACT \xB7 CONVEX \xB7 TS")), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-h3)"
    }
  }, "Blackjack Learner"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-mono-sm)",
      color: "var(--accent)"
    }
  }, "IN DEV \u2197")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 14px",
      font: "var(--text-body)",
      color: "var(--ink-soft)"
    }
  }, "Learn basic strategy and card counting."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-mono-sm)",
      color: "var(--text-meta)"
    }
  }, "SOLIDJS \xB7 TS")))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(__ds_scope.SectionHeader, {
    number: "03",
    label: "Expertise"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SkillColumn, {
    title: "Frontend",
    items: ["React & Next.js", "TypeScript", "Design systems", "Accessibility"]
  }), /*#__PURE__*/React.createElement(__ds_scope.SkillColumn, {
    title: "Backend",
    items: ["Node · NestJS", "GraphQL & APIs", "Rust · Go · Kotlin", "Databases"]
  }), /*#__PURE__*/React.createElement(__ds_scope.SkillColumn, {
    title: "Craft",
    items: ["Architecture · DDD", "Team alignment", "Mentoring", "Process"]
  }))))));
}
Object.assign(__ds_scope, { HomeScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Pipeline = __ds_scope.Pipeline;

__ds_ns.SkillColumn = __ds_scope.SkillColumn;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.RailNav = __ds_scope.RailNav;

__ds_ns.HomeScreen = __ds_scope.HomeScreen;

})();
