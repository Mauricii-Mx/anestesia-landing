/** @type {import('tailwindcss').Config} */
export default {
  "content": [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "inverse-surface": "#2e3039",
        "on-background": "#191b24",
        "on-error": "#ffffff",
        "inverse-on-surface": "#eff0fd",
        "on-primary": "#ffffff",
        "tertiary-fixed-dim": "#ffb59e",
        "surface": "#ffffff",
        "on-secondary-fixed": "#001944",
        "tertiary-fixed": "#ffdbd0",
        "on-secondary": "#ffffff",
        "on-tertiary": "#ffffff",
        "error": "#ba1a1a",
        "outline-variant": "#c3c5d8",
        "surface-dim": "#F9FAFB",
        "on-tertiary-container": "#ffe3db",
        "primary-container": "#005bf5",
        "surface-container-low": "#ffffff",
        "on-tertiary-fixed-variant": "#842500",
        "background": "#ffffff",
        "surface-container-highest": "#e1e1ee",
        "outline": "#737687",
        "primary-fixed-dim": "#b4c5ff",
        "on-primary-fixed-variant": "#003daa",
        "on-surface-variant": "#000000",
        "surface-container-lowest": "#ffffff",
        "primary": "#2760C2",
        "on-primary-container": "#ffffff",
        "on-primary-fixed": "#00174c",
        "secondary": "#39598F",
        "on-error-container": "#93000a",
        "tertiary": "#962a00",
        "surface-container-high": "#e7e7f4",
        "secondary-variant-mid": "#39598f",
        "secondary-fixed": "#d9e2ff",
        "tertiary-container": "#bf3901",
        "on-tertiary-fixed": "#3a0b00",
        "surface-variant": "#e1e1ee",
        "on-secondary-fixed-variant": "#004299",
        "error-container": "#ffdad6",
        "on-surface": "#2760C2",
        "secondary-variant-dark": "#37455c",
        "secondary-container": "#6899fe",
        "inverse-primary": "#b4c5ff",
        "surface-tint": "#0052de",
        "primary-fixed": "#dbe1ff",
        "surface-container": "#ffffff",
        "surface-bright": "#ffffff",
        "on-secondary-container": "#003072",
        "secondary-fixed-dim": "#afc6ff"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "gutter": "24px",
        "container-max": "1200px",
        "margin-desktop": "48px",
        "stack-md": "16px",
        "stack-sm": "8px",
        "margin-mobile": "16px",
        "stack-lg": "32px"
      },
      "fontFamily": {
        "body-lg": [
          "Montserrat"
        ],
        "body-sm": [
          "Montserrat"
        ],
        "headline-md": [
          "Montserrat"
        ],
        "headline-xl": [
          "Montserrat"
        ],
        "label-md": [
          "Montserrat"
        ],
        "headline-lg": [
          "Montserrat"
        ],
        "headline-sm": [
          "Montserrat"
        ],
        "body-md": [
          "Montserrat"
        ]
      },
      "fontSize": {
        "body-lg": [
          "18px",
          {
            "lineHeight": "28px",
            "fontWeight": "400"
          }
        ],
        "body-sm": [
          "14px",
          {
            "lineHeight": "20px",
            "fontWeight": "400"
          }
        ],
        "headline-md": [
          "24px",
          {
            "lineHeight": "32px",
            "fontWeight": "700"
          }
        ],
        "headline-xl": [
          "48px",
          {
            "lineHeight": "56px",
            "letterSpacing": "-0.02em",
            "fontWeight": "800"
          }
        ],
        "label-md": [
          "12px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.05em",
            "fontWeight": "500"
          }
        ],
        "headline-lg": [
          "32px",
          {
            "lineHeight": "40px",
            "fontWeight": "800"
          }
        ],
        "headline-sm": [
          "20px",
          {
            "lineHeight": "28px",
            "fontWeight": "700"
          }
        ],
        "body-md": [
          "16px",
          {
            "lineHeight": "24px",
            "fontWeight": "400"
          }
        ]
      }
    }
  },
  "plugins": []
};