import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import NodeDetailPopup from "./components/NodeDetailPopup";
import GraphCanvas from "./components/GraphCanvas";
import { HIGHLIGHT_COLOR, DEFAULT_COLOR } from "./constants/graphConstants";
import { graphPhysicsOptions } from "./components/Physics";
import { supabase } from "./supabaseClient";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedNode, setSelectedNode] = useState(null);
  const [graphNodes, setGraphNodes] = useState([]);
  const [networkInstance, setNetworkInstance] = useState(null);
  const [edges, setEdges] = useState([]);
  const [clubs, setClubs] = useState([]);

  // Keep track of the previously selected node and its connected edges/nodes for resetting
  const [previousSelection, setPreviousSelection] = useState({
    nodeId: null,
    edgeIds: [],
    connectedNodeIds: [], // New: to store connected node IDs
  });

  useEffect(() => {
    console.log("useEffect triggered");
    const fetchData = async () => {
      setIsLoading(true);
      const { data: clubsData, error: clubsError } = await supabase.from("clubs").select();
      if (clubsError || !clubsData || clubsData.length === 0) {
        console.error("Error fetching clubs or no clubs found:", clubsError);
        setIsLoading(false);
        return;
      }
      setClubs(clubsData);

      const { data: edgesData, error: edgesError } = await supabase.from("edges").select();
      if (edgesError) {
        console.error("Error fetching edges:", edgesError);
        return;
      }
      setEdges(edgesData.map(edge => ({...edge, color: "grey"})));

      const imageNodesData = clubsData.map((club) => ({
        id: club.id,
                image: `${process.env.REACT_APP_SUPABASE_STORAGE_URL}${club.club_abbreviated_name}.jpg`,
        // title: club.club_name,
        shape: "circularImage",
        label: club.club_abbreviated_name,
      }));

      setGraphNodes(imageNodesData);

      const preloadImages = async () => {
        const imagePromises = imageNodesData.map((node) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = node.image;
            img.onload = () => resolve();
            img.onerror = () => resolve();
          });
        });

        await Promise.all(imagePromises);
        setIsLoading(false);
      };

      preloadImages();
    };

    fetchData();
  }, []);

  

  const options = {
    layout: { hierarchical: false },
    edges: {
      color: DEFAULT_COLOR, // Default edge color
      arrows: { to: false },
      font: {
        face: "Inter",
      },
    },
    nodes: {
      borderWidth: 2, // Default border width
      size: 30,
      font: {
        face: "Inter",
      },
      color: {
        border: DEFAULT_COLOR,
        highlight: {
          border: HIGHLIGHT_COLOR,
          background: "white",
        },
        hover: {
          border: DEFAULT_COLOR,
          background: "white",
        },
      },
      borderWidthSelected: 5,
    },
    interaction: { hover: true },
    physics: graphPhysicsOptions,
  };

  const events = {
    select: function (event) {
      const { nodes: selectedNodeIds } = event;

      // Reset previous selection
      if (previousSelection.nodeId !== null) {
        // Reset selected node border width and color
        setGraphNodes((prevNodes) =>
          prevNodes.map((node) =>
            node.id === previousSelection.nodeId
              ? { ...node, borderWidth: 2, color: { border: DEFAULT_COLOR }, size: 30 } // Reset to default border width and color
              : node
          )
        );
        // Reset connected nodes border width and color
        setGraphNodes((prevNodes) =>
          prevNodes.map((node) =>
            previousSelection.connectedNodeIds.includes(node.id) && node.id !== previousSelection.nodeId // Exclude the selected node itself
              ? { ...node, borderWidth: 2, color: { border: DEFAULT_COLOR } } // Reset to default border width and color
              : node
          )
        );
        // Reset edge colors
        setEdges((prevEdges) =>
          prevEdges.map((edge) =>
            previousSelection.edgeIds.includes(edge.id) && edge.id !== undefined
              ? { ...edge, color: "grey" } // Reset to default
              : edge
          )
        );
      }

      if (selectedNodeIds.length > 0) {
        const nodeId = selectedNodeIds[0];
        const nodeInfo = clubs.find((node) => node.id === nodeId);
        setSelectedNode(nodeInfo);

        // Highlight selected node with thicker border and highlight color
        setGraphNodes((prevNodes) =>
          prevNodes.map((node) =>
            node.id === nodeId
              ? { ...node, borderWidth: 5, color: { border: HIGHLIGHT_COLOR }, size: 35 } // Thicker border and highlight color
              : node
          )
        );

        // Get connected nodes and edges
        const connectedEdges = networkInstance.getConnectedEdges(nodeId);
        const connectedNodes = networkInstance.getConnectedNodes(nodeId);

        // Highlight connected nodes (excluding the selected node itself)
        setGraphNodes((prevNodes) =>
          prevNodes.map((node) =>
            connectedNodes.includes(node.id) && node.id !== nodeId
              ? { ...node, borderWidth: 3, color: { border: HIGHLIGHT_COLOR } } // Thicker border and highlight color
              : node
          )
        );

        // Highlight connected edges
        setEdges((prevEdges) =>
          prevEdges.map((edge) =>
            connectedEdges.includes(edge.id) && edge.id !== undefined
              ? { ...edge, color: HIGHLIGHT_COLOR }
              : edge
          )
        );

        setPreviousSelection({ nodeId: nodeId, edgeIds: connectedEdges, connectedNodeIds: connectedNodes });

        // Zoom and position the clicked node
        if (networkInstance) {
          networkInstance.focus(nodeId, {
            scale: 2.8, // Zoom level
            offset: { x: -200, y: 0 }, // Offset to move it left (half of sidebar width)
            animation: {
              duration: 1000,
              easingFunction: "easeInOutQuad",
            },
          });
        }
      } else {
        setSelectedNode(null);
        setPreviousSelection({ nodeId: null, edgeIds: [], connectedNodeIds: [] }); // Clear selection

        // If no node is selected, fit the graph back to view
        if (networkInstance) {
          networkInstance.fit({
            animation: {
              duration: 1000,
              easingFunction: "easeInOutQuad",
            },
          });
        }
      }
    },
  };

  if (isLoading) {
    return <Loader />;
  }

  const graph = {
    nodes: graphNodes,
    edges: edges,
  };

  return (
    <> 
      <Header />
      <GraphCanvas
        graph={graph}
        options={options}
        events={events}
        getNetwork={(network) => {
          setNetworkInstance(network);
        }}
      />

      <NodeDetailPopup selectedNode={selectedNode} onClose={() => setSelectedNode(null)} />
      <Footer />
    </>
  );
}