import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { sortingAlgorithms } from "../common/config";
import { useData } from "../common/store";
import shallow from "zustand/shallow";
import { AiFillGithub } from "react-icons/ai";
import Description from "./Description";


function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export function NavBar() {
  const classes = useStyles();

  const [algorithm, setAlgorithm] = useData(
    (state) => [state.algorithm, state.setAlgorithm],
    shallow
  );

  // console.log(algorithm);
  
  var changer=algorithm;
  // console.log(changer);

  return (

    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor:"#ffff",
          fontSize:"2rem",
          textAlign:"center",paddingLeft:"20px",paddingBottom:"10px",paddingTop:"10px",
          

        }}
      >
        <h3 style={{textAlign:"center",paddingLeft:"20px",paddingBottom:"10px",paddingTop:"10px",color:"#6E3CBC"}}> Sorting Algorithms Visualizer & Analysis</h3>
      </div>
      <AppBar position="static" color="#FFBC97">
        <Tabs
          value={algorithm}
          onChange={(event, id) => {setAlgorithm(id);}}
          indicatorColor="primary"
          textColor="#FFFF"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          style={{backgroundColor:"#FFFF",fontSize:"0.8rem",fontWeight:"bold"}}
        >
          {sortingAlgorithms.map((algorithm) => (
            <Tab
              label={algorithm.title}
              {...a11yProps(0)}
              key={algorithm.title}
            />
          ))}
          <Tab label="All" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <Description changer={changer} />
    </div>
  
  );
}
