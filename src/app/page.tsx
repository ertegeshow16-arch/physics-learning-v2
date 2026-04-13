export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 px-4">
      <h1 className="text-6xl font-bold text-white">Learn Physics</h1>
      <p className="mt-6 max-w-[600px] text-center text-lg text-slate-400">
        University-level physics, built with AI and learning science.
      </p>
      <button className="mt-8 rounded-lg bg-white px-6 py-3 font-medium text-slate-900 hover:bg-slate-200">
        Start Learning
      </button>
    </div>
  );
}
