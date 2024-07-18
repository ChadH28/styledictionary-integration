import * as tokens from "../styles/tokens"; // Adjust the path as needed

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className={`bg-secondary text-black p-4`}>
        <h1 className={`text-2xl font-bold`}>Hello Tailwind with Tokens!</h1>
        <p className={`mt-2 text-base`}>
          This uses colors and font sizes from tokens.
        </p>
        <div
          className={`mt-4 p-2 border-[${tokens.ColorsBlack}]-500`}
          // style={{ border: tokens.BordersHeavy }}
        >
          Example border with token-defined style and color.
        </div>
      </div>
    </main>
  );
}
