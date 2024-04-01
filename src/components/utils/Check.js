import ExtractFunction from "./ExtractFunction";

const Check = (neighborId, functions, graph) => {
  const weights = functions
    .filter(
      (link) => link.source.id === neighborId || link.target.id === neighborId
    )
    .map((link) => link.weights || [])
    .flat();

  for (const weight of weights) {
    if (ExtractFunction(graph.content[neighborId], weight) === 0) {
      return false;
    }
  }

  return true;
};

export default Check;
