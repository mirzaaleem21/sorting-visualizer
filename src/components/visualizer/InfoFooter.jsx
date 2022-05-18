import React from "react";
import styled from "styled-components";

const InfoFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const blueBox=styled.div`
float: left;
width: 20px;
height: 20px;
margin: 5px;
border: 1px solid rgba(0, 0, 0, .2);
background-color:#13b4ff;

`;



export function InfoFooter({ swapCount, comparisionCount,algorithmName, children }) {
  return (
    <InfoFlex>
      <div>Swaps: <strong>{swapCount}</strong></div>
      {/* <div className="foo blue" style={{float:"left",width:"20px",height:"20px",margin:"5px",border:" 1px solid rgba(0, 0, 0, .2)",backgroundColor:"#0CECDD"}}>
        Sorted

      </div> */}
      {/* <div className="foo blue" style={{float:"left",width:"20px",height:"20px",margin:"5px",border:" 1px solid rgba(0, 0, 0, .2)",backgroundColor:"#F7FD04"}}>Comparing</div>
      <div className="foo blue" style={{float:"left",width:"20px",height:"20px",margin:"5px",border:" 1px solid rgba(0, 0, 0, .2)",backgroundColor:"#FF5C58"}}>Swapping</div>

      {algorithmName=="QuickSort" &&       <div className="foo blue" style={{float:"left",width:"20px",height:"20px",margin:"5px",border:" 1px solid rgba(0, 0, 0, .2)",backgroundColor:"#B983FF"}}>Pivot</div> */}


      <div>Comparisions: <strong>{comparisionCount}</strong></div>
    </InfoFlex>
    
  );
}
