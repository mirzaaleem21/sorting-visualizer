import React from 'react'
import { BubbleSort } from '../sortFunctions/BubbleSort'
import { InsertionSort } from '../sortFunctions/InsertionSort';
import { MergeSort } from '../sortFunctions/MergeSort';
import BubbleSortIntro from './Intros/BubbleSortIntro';
import InsertionSortIntro from './Intros/InsertionSortIntro';
import SelectionSortIntro from './Intros/SelectionSortIntro';
import QuickSortIntro from './Intros/QuickSortIntro';
import HeapSortIntro from './Intros/HeapSortIntro';
import MergeSortIntro from './Intros/MergeSortIntro';
import AllIntro from './Intros/AllIntro';


export default function Description({changer}) {

   
    if(changer==0){
        return <BubbleSortIntro />;
    }
    else if(changer==1){
        return <SelectionSortIntro />;
    }
    else if(changer==2){
        return <InsertionSortIntro />;
    }
    else if(changer==3){
        return <HeapSortIntro />;
    }
    else if(changer==4){
        return <MergeSortIntro />;
    }
    else if(changer==5){
        return <QuickSortIntro />;
    }
    else if(changer==6){
        return <AllIntro />;
    }
   
}
