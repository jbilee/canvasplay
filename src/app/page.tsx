"use client";

import { useState, type FormEvent } from "react";
import { Layer, Stage } from "react-konva";
import Bubble from "~/components/Bubble";

type BubbleProps = {
  text: string;
  id: string;
  x: number;
  y: number;
};

const getRandomValue = (min: number, max: number) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

export default function HomePage() {
  const [input, setInput] = useState("");
  const [bubbles, setBubbles] = useState<BubbleProps[]>([]);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBubbles((prev) => [
      ...prev,
      {
        text: input,
        id: crypto.randomUUID(),
        x: getRandomValue(0, 900),
        y: getRandomValue(0, 500),
      },
    ]);
    setInput("");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="border border-black">
        <Stage width={1200} height={600}>
          <Layer>
            {bubbles.map((elem) => (
              <Bubble key={elem.id} text={elem.text} x={elem.x} y={elem.y} />
            ))}
            {/* <Rect
              cornerRadius={10}
              x={500}
              y={100}
              width={100}
              height={50}
              fill="coral"
              draggable
            />
            <Circle x={200} y={100} radius={50} fill="green" draggable />
            <Text text="hello????l" fontSize={20} draggable /> */}
          </Layer>
        </Stage>
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </main>
  );
}
