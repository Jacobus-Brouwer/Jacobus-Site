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
      "LinkedIn": "https://www.linkedin.com/in/jacobus-brouwer-65a503207/",
      "GitHub": "https://github.com/Jacobus-Brouwer",
      "Email": "mailto:henrybrouwer0@gmail.com",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [],
  left: [
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.DesktopOnly(Component.Graph()),
  ],
}
export const defaultListPageLayout: PageLayout = {
  beforeBody: [],
  left: [
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
