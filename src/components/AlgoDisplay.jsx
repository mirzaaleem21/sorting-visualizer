import React, { useEffect } from "react";
import styled from "styled-components";
import { sortingAlgorithms } from "../common/config";
import { useControls, useData } from "../common/store";
import shallow from "zustand/shallow";
import { SortManager } from "./visualizer/SortManager";
import Analysis from "./Analysis";

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;
  padding-top:4rem;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;

const flexCenter = { display: "flex", justifyContent: "center",  paddingTop:"4rem",};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      style={{ maxWidth: "100%" }}
    >
      {value === index && children}
    </div>
  );
}

export function AlgoDisplay() {
  const resetSorting = useControls((state) => state.resetSorting);

  const [sortingArray, algorithm] = useData(
    (state) => [state.sortingArray, state.algorithm],
    shallow
  );

  useEffect(() => {
    resetSorting();
  }, [algorithm]);

  const algoID=algorithm;
  console.log(algoID);

  if (sortingArray.length === 0)
    return (
      <h3 style={flexCenter}>
        Please enter input array or use generate button
      </h3>
    );

  return (
    <div>
    <div style={flexCenter}>
      {sortingAlgorithms.map((algoInfo, idx) => (
        <TabPanel value={algorithm} index={idx} key={algoInfo.name}>
          <SortManager
            array={sortingArray}
            sortFunction={algoInfo.component}
            sortingAlgorithmName={algoInfo.name}
          />
        </TabPanel>
      ))}
      <TabPanel value={algorithm} index={sortingAlgorithms.length}>
        <FlexWrap>
          {sortingAlgorithms.map((algoInfo) => (
            <SortManager
              array={sortingArray}
              sortFunction={algoInfo.component}
              sortingAlgorithmName={algoInfo.name}
              key={algoInfo.name}
            />
          ))}
        </FlexWrap>
      </TabPanel>
    </div>    




    <div style={{ textAlign: "center",paddingTop:"25px" }}>
  
  <span
    className="dot"
    style={{
      height: 20,
      width: 20,
      backgroundColor: "#0CECDD",
      borderRadius: "40%",
      display: "inline-block",
      
    }}
  /> Sorted
  
  <span
    className="dot"
    style={{
      height: 20,
      width: 20,
      backgroundColor: "#F7FD04",
      borderRadius: "40%",
      display: "inline-block",
      marginLeft:"15px"
    }}
  />Comparing
  
  <span
    className="dot"
    style={{
      height: 20,
      width: 20,
      backgroundColor: "#FF5C58",
      borderRadius: "40%",
      display: "inline-block",
      marginLeft:"15px"
    }}
  />
  Swapping

</div>




         <Analysis algorithm={algoID} />

    </div>
  );
}
