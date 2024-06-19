import dynamic from "next/dynamic";

const KonvaCanvas = dynamic(() => import("~/components/Canvas"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <KonvaCanvas />
    </main>
  );
}
