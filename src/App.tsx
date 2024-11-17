import { DndProvider } from "react-dnd-multi-backend";

import { HTML5toTouch } from "rdndmb-html5-to-touch";
import { usePreview } from "react-dnd-preview";
import { DraggableEntity } from "./components/dnd/DraggableEntity";

const MyPreview = () => {
  const preview = usePreview();

  if (!preview.display) {
    return null;
  }
  const { style } = preview;

  return (
    <div
      style={{
        ...style,
        // marginLeft: item.preview.left,
        // marginTop: item.preview.top - heightOffset,
        // Hide first render before the offset can be applied
      }}
    >
      <h1>Hello World!</h1>
    </div>
  );
};

export default function App() {
  return (
    <DndProvider options={HTML5toTouch}>
      <div>
        <DraggableEntity>Hello World!</DraggableEntity>
      </div>

      <MyPreview />
    </DndProvider>
  );
}
