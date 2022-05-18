import React from 'react'
import AllAnalysis from './Complexity Analysis/AllAnalysis';
import BubbleSortAnalysis from './Complexity Analysis/BubbleSortAnalysis';
import QuickSortAnalysis from "./Complexity Analysis/QuickSortAnalysis";
import MergeSortAnalysis from './Complexity Analysis/MergeSortAnalysis';
import HeapSortAnalysis from './Complexity Analysis/HeapSortAnalysis';
import SelectionSortAnalysis from './Complexity Analysis/SelectionSortAnalysis';
import InsertionSortAnalysis from './Complexity Analysis/InsertionSortAnalysis';


const Analysis=({algorithm})=> {
    console.log(algorithm);
   switch(algorithm){

      case 0:
          return <BubbleSortAnalysis/>
      case 1:
            return <SelectionSortAnalysis/>
      case 2:
            return <InsertionSortAnalysis/>
      case 3:
            return <HeapSortAnalysis/>
   
      case 4:
            return <MergeSortAnalysis/>
   
      case 5:
            return <QuickSortAnalysis/>
      case 6:
            return <AllAnalysis/>
      default:
            return <BubbleSortAnalysis/>

          }

}

export default Analysis;