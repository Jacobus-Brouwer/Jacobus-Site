import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// @ts-ignore
import DoodleWaves from "./quartz/components/DoodleWaves"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    DoodleWaves(),
  ],
  footer: Component.Footer({
    links: {
      "LinkedIn": "https://linkedin.com/in/your-profile",
      "GitHub": "https://github.com/your-username",
      "Email": "mailto:your.email@example.com",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
