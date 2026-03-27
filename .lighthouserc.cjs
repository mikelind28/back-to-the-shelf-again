module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      url: ["http://localhost:3000"],
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        // Accessibility — error on real issues, these matter for users
        "categories:accessibility": ["warn", { minScore: 0.8 }],
        "color-contrast": ["warn", { minScore: 0 }],
        "link-name": ["warn", { minScore: 0 }],

        // Performance — warn only, CI machines are slow and skew results
        "categories:performance": ["warn", { minScore: 0.5 }],

        // Best practices & SEO — warn only while in development
        "categories:best-practices": ["warn", { minScore: 0.7 }],
        "categories:seo": ["warn", { minScore: 0.7 }],

        // Turn off assertions that are unreliable in CI environments
        "bf-cache": "off",
        redirects: "off",
        "document-latency-insight": "off",
        "lcp-discovery-insight": "off",
        "prioritize-lcp-image": "off",
        "image-delivery-insight": "off",
        "legacy-javascript-insight": "off",
        "errors-in-console": "off",
        "total-byte-weight": "off",
        "unused-css-rules": "off",
        "unused-javascript": "off",
        "render-blocking-resources": "off",
        "render-blocking-insight": "off",
        interactive: "off",
        "largest-contentful-paint": "off",
        "max-potential-fid": "off",
        "legacy-javascript": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
