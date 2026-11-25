import { PropsWithChildren } from "hono/jsx";

type SceneProps = PropsWithChildren<{
  width?: number;
  height?: number;
}>;

export function Scene({
  children
}: SceneProps) {
  return (
    <div class="scene">
      <div class="artboard">
        {children}
      </div>
    </div>
  )
}
