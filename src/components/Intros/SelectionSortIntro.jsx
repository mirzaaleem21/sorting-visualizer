import React from 'react'

export default function SelectionSortIntro() {
    return (
        <div>
            
        
           
            <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-1/5">Selection Sort</h2>
          <div className="md:w-4/5 md:pl-6">
            <p className="leading-relaxed text-base" style={{fontSize:"1.2rem",}}>

          Selection Sort is an in-place comparison sorting algorithm that divides the input
      list into two parts: the sublist of items already sorted, which is
      built up from left to right at the front (left) of the list, and
      the sublist of items remaining to be sorted that occupy the rest
      of the list. Initially, the sorted sublist is empty and the
      unsorted sublist is the entire input list. The algorithm proceeds
      by finding the smallest element in the unsorted sublist,
      exchanging (swapping) it with the leftmost unsorted element
      (putting it in sorted order), and moving the sublist boundaries
      one element to the right.




            </p>
            <div className="flex md:mt-4 mt-6">
              <a className="text-indigo-500 inline-flex items-center ml-4" href="https://www.geeksforgeeks.org/selection-sort/" target='_blank'>Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>










    
    </div>
    )
}
