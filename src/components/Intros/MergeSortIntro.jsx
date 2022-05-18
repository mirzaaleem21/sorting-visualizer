import React from 'react'

export default function MergeSortIntro() {
    return (
        <div>
            
        
           
            <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-1/5">Merge Sort</h2>
          <div className="md:w-4/5 md:pl-6">
            <p className="leading-relaxed text-base" style={{fontSize:"1.2rem",}}>


            <a
          href="https://en.wikipedia.org/wiki/Merge_sort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Merge Sort
        </a>{' '}
        is an efficient, stable sorting algorith that makes use of the
        divide and conquer strategy. Conceptually the algorithm works as
        follows:
      </p>
      <ol>
        <li>
          1. Divide the unsorted list into <em>n</em> sublists, each
          containing one element(a list of one element is considered
          sorted)
        </li>
        <li>
          2. Repeatedly merge sublists to produce new sorted sublists until
          there is only one sublist remaining. This will be the sorted
          list.
        </li>
      </ol>


            
         
         
         
         
         
            <div className="flex md:mt-4 mt-6">
              <a className="text-indigo-500 inline-flex items-center ml-4" href="https://www.geeksforgeeks.org/merge-sort/" target='_blank'>Learn More
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
