import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen ">
      <div className="flex w-full h-full bg-zinc-950">
        <div className="border-2 w-1/2 h-screen border-black">aboba</div>
        <div className="border-2 w-1/2 h-screen border-black">
          <div className="css-typing">
            <p>Typed text 1</p>
            <p>Typed text 2 Longer</p>
            <p>Typed text 3</p>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full  border-black border-2 bg-gradient-to-b from-zinc-950 to-zinc-600">
        a
      </div>
      <div className="flex w-full h-full border-black border-2 bg-gradient-to-b from-zinc-600 to-zinc-200">
        a
      </div>
    </main>
  );
}
