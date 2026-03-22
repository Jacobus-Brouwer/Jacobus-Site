import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// @ts-ignore
import DoodleWaves from "./quartz/components/DoodleWaves"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    DoodleWaves(),
    Component.Graph(),
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
  beforeBody: [],
  left: [],
  right: [],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [],
  left: [],
  right: [],
}
