const Simulation = () => {
  return (
    <div className="p-6 space-y-3">
      <h1 className="text-3xl font-bold">Simulation</h1>
      <p className="text-muted-foreground">Run sandboxed learning simulations to experiment safely.</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="font-semibold mb-1">Scenario Builder</h2>
          <p className="text-sm text-muted-foreground">Compose datasets, parameters, and targets for practice runs.</p>
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="font-semibold mb-1">Execution Console</h2>
          <p className="text-sm text-muted-foreground">Visualize outcomes and adjust hyperparameters iteratively.</p>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
