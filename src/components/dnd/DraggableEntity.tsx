import { useDrag } from "react-dnd";
import { PropsWithChildren, useEffect, useRef } from "react";
import clsx from "clsx";
import { getEmptyImage } from "react-dnd-html5-backend";

export const DraggableEntity = ({ children }: PropsWithChildren) => {
  const selfRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ isDragging }, drag, dragPreview] = useDrag(
    () => ({
      type: "A",
      item: () => {
        return {
          move: true,
          preview: {
            top: -(selfRef.current?.getBoundingClientRect().top ?? 0),
            left: -(selfRef.current?.getBoundingClientRect().left ?? 0),
          },
        };
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
      canDrag() {
        return true;
      },
    }),
    [selfRef],
  );

  // this useEffect hides the default preview
  useEffect(() => {
    dragPreview(getEmptyImage(), { captureDraggingState: true });
  }, [dragPreview]);

  useEffect(() => {
    drag(selfRef);
  }, []);

  return (
    <div ref={selfRef} className={clsx("w-full h-full")}>
      {children}
    </div>
  );
};
