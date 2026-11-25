import { JSX, PropsWithChildren } from "hono/jsx";

export function Viewport({ children }: PropsWithChildren) {
  return (
    <div class="viewport">
      {children}
    </div>
  )
}
