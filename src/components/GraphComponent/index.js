import axios from "axios";
import * as d3 from "d3";
import React, { useEffect, useRef, useState } from "react";
import { GraphContainer, GraphSVG } from "../../styles/GraphComponentStyles";
import GraphSidebar from "./GraphSidebar";

const GraphComponent = ({ queryParam }) => {
  const svgRef = useRef();
  const [selectedData, setSelectedData] = useState({
    node: null,
    link: null,
    neighbors: [],
  });
  const [graphData, setGraphData] = useState({ nodes: [], links: [] }); // Initialize graphData state
  useEffect(() => {
    const fetchGraphData = async () => {
      try {
        const response = await axios.get(
          `https://gitgraph-bck.onrender.com/fetch-data?userInput=${queryParam}`
        );
        if (response.data) {
          setGraphData(response.data); // Update the state with fetched data
          drawGraph(response.data);
        }
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    };

    fetchGraphData();
  }, [queryParam]);

  useEffect(() => {
    if (graphData.nodes.length > 0 && graphData.links.length > 0) {
      drawGraph(graphData); // Redraw graph when graphData updates
    }
  }, [graphData]);

  const drawGraph = (graphData) => {
    const nodeRadius = 15; // Uniform radius for all nodes
    const width = 960;
    const height = 600;
    const svg = d3.select(svgRef.current);

    svg.selectAll("*").remove(); // Clear SVG

    const g = svg.append("g").attr("cursor", "grab");

    const zoom = d3
      .zoom()
      .scaleExtent([1 / 4, 4])
      .on("zoom", (event) => g.attr("transform", event.transform));
    svg.call(zoom);

    const simulation = d3
      .forceSimulation(graphData.nodes)
      .force(
        "link",
        d3
          .forceLink(graphData.links)
          .id((d) => d.id)
          .distance(50)
      )
      .force("charge", d3.forceManyBody().strength(-50))
      .force("collide", d3.forceCollide(nodeRadius + 2))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = g
      .append("g")
      .attr("stroke", "#999")
      .selectAll("line")
      .data(graphData.links)
      .join("line")
      .attr("stroke-opacity", 0.6);

    const node = g
      .append("g")
      .selectAll(".node")
      .data(graphData.nodes)
      .join("g")
      .attr("class", "node")
      .call(drag(simulation));

    node.append("circle").attr("r", nodeRadius).attr("fill", colorNode);

    node
      .append("text")
      .text((d) => d.id.substring(d.id.lastIndexOf("/") + 1).slice(-7))
      .attr("x", 0)
      .attr("y", 0)
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .style("fill", "#fff")
      .style("font-size", "10px");

    // Improved event handling to reduce flickering
    node
      .on("click", (event, d) => {
        event.stopPropagation(); // Prevent triggering svg's click
        selectNode(d);
      })
      .on("mouseover", (event, d) => {
        svg.attr("cursor", "pointer");
        debouncedSelectNode(d);
      })
      .on("mouseout", () => {
        svg.attr("cursor", "grab");
        // Optionally clear on mouseout
        // debouncedDeselectNode();
      });

    link
      .on("mouseover", (event, d) => {
        // Reduce rapid state updates to mitigate flickering
        debouncedSelectLink(d);
      })
      .on("mouseout", () => {
        svg.attr("cursor", "grab");
        // debouncedDeselectNode();
      });

    svg.on("click", () => {
      setSelectedData({ node: null, link: null, neighbors: [] });
    });

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
    });

    svg.call(zoom).on("dblclick.zoom", null);
  };

  // Debounce function to mitigate rapid state updates
  const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  // Debounced functions
  const debouncedSelectNode = debounce((node) => selectNode(node));
  const debouncedDeselectNode = debounce(() =>
    setSelectedData({ node: null, link: null, neighbors: [] })
  );
  const debouncedSelectLink = debounce((link) =>
    setSelectedData((prev) => ({ ...prev, link: link, node: null }))
  );

  function selectNode(selectedNode) {
    const neighbors = graphData.links.reduce((acc, link) => {
      if (link.source.id === selectedNode.id) acc.push(link.target);
      else if (link.target.id === selectedNode.id) acc.push(link.source);
      return acc;
    }, []);
    const links = graphData.links.filter(
      (link) =>
        link.source.id === selectedNode.id || link.target.id === selectedNode.id
    );
    setSelectedData({ node: selectedNode, links, neighbors });
  }

  function colorNode(d) {
    return d.group ? d3.schemeCategory10[d.group % 10] : "magenta";
  }

  function drag(simulation) {
    function start(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function end(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return d3.drag().on("start", start).on("drag", dragged).on("end", end);
  }

  return (
    <GraphContainer>
      <GraphSVG ref={svgRef} width="960" height="600" />
      <GraphSidebar data={selectedData} />
    </GraphContainer>
  );
};

export default GraphComponent;
