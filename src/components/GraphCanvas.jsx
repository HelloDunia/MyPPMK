import React, { useEffect } from "react";
import Graph from "react-vis-network-graph";

export default function GraphCanvas({ graph, options, events, getNetwork }) {
  useEffect(() => {
    const handleResize = () => {
      window.location.reload();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={getNetwork}
    />
  );
}
