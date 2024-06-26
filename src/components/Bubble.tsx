import { Group, Rect, Text } from "react-konva";

type BubblePropp = {
  text: string;
  x: number;
  y: number;
};

export default function Bubble({ text, x, y }: BubblePropp) {
  return (
    <Group draggable>
      <Rect
        cornerRadius={10}
        x={x}
        y={y}
        width={100}
        height={100}
        fill="blue"
      />
      <Text
        text={text}
        fill="white"
        x={x}
        y={y}
        width={100}
        height={100}
        align="center"
        padding={5}
      />
    </Group>
  );
}
