import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
    <h1>Lost at sea?</h1>
    <p>The page you're looking for doesn't exist — it may have been moved, renamed, or swept away by the tide.</p>
    <p style="margin-top: 1.5rem; font-weight: 600;">Here's where you can go instead:</p>
    <ul style="list-style: none; padding: 0; margin-top: 0.8rem; line-height: 2.2;">
    <li><a href={baseDir}>⚓ Back to the home page</a></li>
    <li><a href={`${baseDir}portfolio`}>📐 View my portfolio</a></li>
    <li><a href={`${baseDir}blog`}>✏️ Read the blog</a></li>
    <li><a href={`${baseDir}contact`}>💬 Get in touch</a></li>
    </ul>
    <blockquote style="margin-top: 2rem; border-left: 3px solid #5FA8D3; padding: 0.8rem 1.2rem; font-style: italic; opacity: 0.8;">
    "Not all who wander are lost — but this URL definitely is."
    </blockquote>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
