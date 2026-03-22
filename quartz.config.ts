import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Jacobus Brouwer",
    pageTitleSuffix: " — Yacht & Powercraft Design",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-GB",
    baseUrl: "jacobus-brouwer.github.io/Jacobus-Site",,
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Fraunces",
        body: "DM Sans",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#FFFFFF",
          lightgray: "#E2E2E2",
          gray: "#8E8E8E",
          darkgray: "#2B2B2B",
          dark: "#0D1B2A",
          secondary: "#1B4965",
          tertiary: "#5FA8D3",
          highlight: "rgba(27, 73, 101, 0.08)",
          textHighlight: "#BEE9E8",
        },
        darkMode: {
          light: "#0D1B2A",
          lightgray: "#1B2A3A",
          gray: "#607080",
          darkgray: "#D0D8E0",
          dark: "#E8EEF2",
          secondary: "#5FA8D3",
          tertiary: "#BEE9E8",
          highlight: "rgba(95, 168, 211, 0.12)",
          textHighlight: "#1B4965",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlBlock: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
