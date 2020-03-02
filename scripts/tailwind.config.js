const prefixNegativeModifiers = require("tailwindcss/lib/util/prefixNegativeModifiers.js")
  .default;

function alignContent({ addUtilities, variants }) {
  addUtilities(
    {
      ".align-content-start": {
        "align-content": "flex-start"
      },
      ".align-content-end": {
        "align-content": "flex-end"
      },
      ".align-content-center": {
        "align-content": "center"
      },
      ".align-content-between": {
        "align-content": "space-between"
      },
      ".align-content-around": {
        "align-content": "space-around"
      }
    },
    variants("alignContent")
  );
}

function alignItems({ addUtilities, variants }) {
  addUtilities(
    {
      ".align-items-start": {
        "align-items": "flex-start"
      },
      ".align-items-end": {
        "align-items": "flex-end"
      },
      ".align-items-center": {
        "align-items": "center"
      },
      ".align-items-stretch": {
        "align-items": "stretch"
      },
      ".align-items-baseline": {
        "align-items": "baseline"
      }
    },
    variants("alignItems")
  );
}

function alignSelf({ addUtilities, variants }) {
  addUtilities(
    {
      ".align-self-start": {
        "align-self": "flex-start"
      },
      ".align-self-end": {
        "align-self": "flex-end"
      },
      ".align-self-center": {
        "align-self": "center"
      },
      ".align-self-stretch": {
        "align-self": "stretch"
      },
      ".align-self-auto": {
        "align-self": "auto"
      }
    },
    variants("alignSelf")
  );
}

function justifyContent({ addUtilities, variants }) {
  addUtilities(
    {
      ".justify-content-start": {
        "justify-content": "flex-start"
      },
      ".justify-content-end": {
        "justify-content": "flex-end"
      },
      ".justify-content-center": {
        "justify-content": "center"
      },
      ".justify-content-between": {
        "justify-content": "space-between"
      },
      ".justify-content-around": {
        "justify-content": "space-around"
      }
    },
    variants("justifyContent")
  );
}

function justifyItems({ addUtilities, variants }) {
  addUtilities(
    {
      ".justify-items-start": {
        "justify-items": "flex-start"
      },
      ".justify-items-end": {
        "justify-items": "flex-end"
      },
      ".justify-items-center": {
        "justify-items": "center"
      },
      ".justify-items-stretch": {
        "justify-items": "stretch"
      },
      ".justify-items-baseline": {
        "justify-items": "baseline"
      }
    },
    variants("alignItems")
  );
}

function justifySelf({ addUtilities, variants }) {
  addUtilities(
    {
      ".justify-self-start": {
        "justify-self": "flex-start"
      },
      ".justify-self-end": {
        "justify-self": "flex-end"
      },
      ".justify-self-center": {
        "justify-self": "center"
      },
      ".justify-self-stretch": {
        "justify-self": "stretch"
      },
      ".justify-self-auto": {
        "justify-self": "auto"
      }
    },
    variants("alignSelf")
  );
}

function borderRadiusFromSpacing({ addUtilities, e, theme, variants }) {
  let utilities = {};
  function add(key, value) {
    utilities[`.${e(key)}`] = value;
  }

  const spacing = theme("spacing");
  Object.keys(spacing).forEach(key => {
    const value = spacing[key];

    add(`rounded-${key}`, { borderRadius: `${value}` });
    add(`rounded-t-${key}`, {
      borderTopLeftRadius: `${value}`,
      borderTopRightRadius: `${value}`
    });
    add(`rounded-r-${key}`, {
      borderTopRightRadius: `${value}`,
      borderBottomRightRadius: `${value}`
    });
    add(`rounded-b-${key}`, {
      borderBottomRightRadius: `${value}`,
      borderBottomLeftRadius: `${value}`
    });
    add(`rounded-l-${key}`, {
      borderTopLeftRadius: `${value}`,
      borderBottomLeftRadius: `${value}`
    });

    add(`rounded-tl-${key}`, {
      borderTopLeftRadius: `${value}`
    });
    add(`rounded-tr-${key}`, {
      borderTopRightRadius: `${value}`
    });
    add(`rounded-br-${key}`, {
      borderBottomRightRadius: `${value}`
    });
    add(`rounded-bl-${key}`, {
      borderBottomLeftRadius: `${value}`
    });
  });

  addUtilities(utilities, variants("borderRadius"));
}

function positionsFromSpacing({ addUtilities, e, theme, variants }) {
  let utilities = {};
  function add(key, value) {
    utilities[`.${e(key)}`] = value;
  }

  const spacing = theme("spacing");
  Object.keys(spacing).forEach(key => {
    const value = spacing[key];
    add(prefixNegativeModifiers("top", key), { top: `${value}` });
    add(prefixNegativeModifiers("right", key), { right: `${value}` });
    add(prefixNegativeModifiers("bottom", key), { bottom: `${value}` });
    add(prefixNegativeModifiers("left", key), { left: `${value}` });
    add(prefixNegativeModifiers("top", "-" + key), { top: `-${value}` });
    add(prefixNegativeModifiers("right", "-" + key), { right: `-${value}` });
    add(prefixNegativeModifiers("bottom", "-" + key), { bottom: `-${value}` });
    add(prefixNegativeModifiers("left", "-" + key), { left: `-${value}` });
  });

  addUtilities(utilities, variants("inset"));
}

function minMaxWidthHeightFromSpacing({ addUtilities, e, theme, variants }) {
  let utilities = {};
  function add(key, value) {
    utilities[`.${e(key)}`] = value;
  }

  const spacing = theme("spacing");
  Object.keys(spacing).forEach(key => {
    const value = spacing[key];
    add(prefixNegativeModifiers("max-w", key), { maxWidth: `${value}` });
    add(prefixNegativeModifiers("max-h", key), { maxHeight: `${value}` });
    add(prefixNegativeModifiers("min-w", key), { minWidth: `${value}` });
    add(prefixNegativeModifiers("min-h", key), { minHeight: `${value}` });
  });

  addUtilities(utilities, variants("inset"));
}

function fontSizeFromSpacing({ addUtilities, e, theme, variants }) {
  let utilities = {};
  function add(key, value) {
    utilities[`.${e(key)}`] = value;
  }

  const spacing = theme("spacing");
  Object.keys(spacing).forEach(key => {
    const value = spacing[key];

    if (value < 0) {
      return;
    }

    add(`font-size-${key}`, { "font-size": `${value}` });
  });

  addUtilities(utilities, variants("fontSize"));
}

function grid({ e: escape, addUtilities, theme, variants }) {
  const newUtils = {
    ".grid": { display: "grid" }
  };

  // bescheuert aber ist so: https://tailwindcss.com/docs/plugins/#referencing-the-users-config
  const spacing = theme("spacing");
  Object.keys(spacing).forEach(key => {
    newUtils[`.${escape(`grid-gap-${key}`)}`] = { gridGap: spacing[key] };
  });

  addUtilities(
    newUtils,
    // nutze die gleichen variants wie bei margin: https://tailwindcss.com/docs/plugins/#referencing-the-users-config
    variants("margin")
  );
}

module.exports = {
  corePlugins: {
    preflight: false,
    alignContent: false,
    alignItems: false,
    alignSelf: false,
    justifyContent: false
  },
  theme: {
    extend: {
      flex: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5"
      },
      spacing: {
        "1px": "1px",
        "2px": "2px",
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "128": "32rem"
      },
      colors: {
        primary: {
          default: "var(--color-primary-500)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
          contrast: "var(--color-primary-contrast)"
        },
        secondary: {
          default: "var(--color-secondary-500)",
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
          800: "var(--color-secondary-800)",
          900: "var(--color-secondary-900)",
          contrast: "var(--color-secondary-contrast)"
        }
      }
    }
  },
  plugins: [
    alignContent,
    alignItems,
    alignSelf,
    justifyContent,
    justifyItems,
    justifySelf,
    borderRadiusFromSpacing,
    positionsFromSpacing,
    minMaxWidthHeightFromSpacing,
    fontSizeFromSpacing,
    grid
  ]
};
