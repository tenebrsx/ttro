/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        "source-serif": ["Source Serif Pro", "serif"],
        dancing: ["Dancing Script", "cursive"],
        cormorant: ["Cormorant Garamond", "serif"],
        karla: ["Karla", "sans-serif"],
      },
      colors: {
        // Primary brand colors - elegant and warm
        "dusty-rose": "#D4A5A5",
        "warm-blush": "#E8C4C4",
        "soft-rose": "#F0D7D7",

        // Neutral base colors
        cream: "#F6F4F1",
        "creamy-beige": "#F8F5F0",
        "warm-ivory": "#FBF9F6",

        // Rich accent colors
        mocha: "#836A5D",
        "dark-cocoa": "#5C4439",
        "coffee-bean": "#4A3529",

        // Supporting warm tones
        "soft-gold": "#E6D7C3",
        "warm-taupe": "#C8B5A6",
        pearl: "#F2F0ED",

        // Muted complementary tones (replacing the green)
        "warm-grey": "#B8AFA8",
        stone: "#A69B94",
        "sage-alternative": "#B8AFA8", // A warm grey instead of green
        sage: "#B4C3BC", // Sage green color
        clay: "#C8A882", // Clay brown color
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        "gentle-bounce": "gentleBounce 2s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "scale-hover": "scaleHover 0.3s ease-in-out",
        typewriter: "typewriter 3s steps(40, end)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gentleBounce: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        scaleHover: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "texture-subtle":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000' fill-opacity='0.02' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
