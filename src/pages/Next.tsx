const Next = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Recommended Next</h1>
      <p className="text-muted-foreground">Based on your recent activity, here are curated next steps to keep momentum.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border p-4 bg-white/50">
          <h2 className="font-semibold">Continue ML Introduction</h2>
          <p className="text-sm text-muted-foreground">Pick up from where you left off.</p>
          <a className="mt-2 inline-block text-sm px-3 py-1.5 rounded-md bg-primary text-primary-foreground" href="/ml-introduction">Resume</a>
        </div>
        <div className="rounded-lg border p-4 bg-white/50">
          <h2 className="font-semibold">Practice: Fundamentals</h2>
          <p className="text-sm text-muted-foreground">10 questions • ~8 min</p>
          <a className="mt-2 inline-block text-sm px-3 py-1.5 rounded-md bg-primary text-primary-foreground" href="/practice">Start Practice</a>
        </div>
        <div className="rounded-lg border p-4 bg-white/50">
          <h2 className="font-semibold">Roadmap: Supervised Learning</h2>
          <p className="text-sm text-muted-foreground">Explore classification and regression paths.</p>
          <a className="mt-2 inline-block text-sm px-3 py-1.5 rounded-md bg-primary text-primary-foreground" href="/roadmap">Open Roadmap</a>
        </div>
      </div>
    </div>
  );
};

export default Next;
