import React from 'react'

export default function HeapSortAnalysis() {
    return (
<div>
    <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Complexity Analysis</h2>
          
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Heap Sort Algorithm
            </p>
          
          </div>
       

          ;<iframe                  
  src="https://carbon.now.sh/embed?bg=rgba%28104%2C153%2C237%2C1%29&t=blackboard&wt=bw&l=text%2Fx-c%2B%2Bsrc&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=148%25&si=false&es=2x&wm=false&code=%252F%252F%2520To%2520heapify%2520a%2520subtree%2520rooted%2520with%2520node%2520i%2520which%2520is%250A%252F%252F%2520an%2520index%2520in%2520arr%255B%255D.%2520n%2520is%2520size%2520of%2520heap%250Avoid%2520heapify%28int%2520arr%255B%255D%252C%2520int%2520n%252C%2520int%2520i%29%250A%257B%250A%2520%2520%2520%2520int%2520largest%2520%253D%2520i%253B%2520%252F%252F%2520Initialize%2520largest%2520as%2520root%250A%2520%2520%2520%2520int%2520l%2520%253D%25202%2520*%2520i%2520%252B%25201%253B%2520%252F%252F%2520left%2520%253D%25202*i%2520%252B%25201%250A%2520%2520%2520%2520int%2520r%2520%253D%25202%2520*%2520i%2520%252B%25202%253B%2520%252F%252F%2520right%2520%253D%25202*i%2520%252B%25202%250A%2520%250A%2520%2520%2520%2520%252F%252F%2520If%2520left%2520child%2520is%2520larger%2520than%2520root%250A%2520%2520%2520%2520if%2520%28l%2520%253C%2520n%2520%2526%2526%2520arr%255Bl%255D%2520%253E%2520arr%255Blargest%255D%29%250A%2520%2520%2520%2520%2520%2520%2520%2520largest%2520%253D%2520l%253B%250A%2520%250A%2520%2520%2520%2520%252F%252F%2520If%2520right%2520child%2520is%2520larger%2520than%2520largest%2520so%2520far%250A%2520%2520%2520%2520if%2520%28r%2520%253C%2520n%2520%2526%2526%2520arr%255Br%255D%2520%253E%2520arr%255Blargest%255D%29%250A%2520%2520%2520%2520%2520%2520%2520%2520largest%2520%253D%2520r%253B%250A%2520%250A%2520%2520%2520%2520%252F%252F%2520If%2520largest%2520is%2520not%2520root%250A%2520%2520%2520%2520if%2520%28largest%2520%21%253D%2520i%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520swap%28arr%255Bi%255D%252C%2520arr%255Blargest%255D%29%253B%250A%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Recursively%2520heapify%2520the%2520affected%2520sub-tree%250A%2520%2520%2520%2520%2520%2520%2520%2520heapify%28arr%252C%2520n%252C%2520largest%29%253B%250A%2520%2520%2520%2520%257D%250A%257D%250A%2520%250A%252F%252F%2520main%2520function%2520to%2520do%2520heap%2520sort%250Avoid%2520heapSort%28int%2520arr%255B%255D%252C%2520int%2520n%29%250A%257B%250A%2520%2520%2520%2520%252F%252F%2520Build%2520heap%2520%28rearrange%2520array%29%250A%2520%2520%2520%2520for%2520%28int%2520i%2520%253D%2520n%2520%252F%25202%2520-%25201%253B%2520i%2520%253E%253D%25200%253B%2520i--%29%250A%2520%2520%2520%2520%2520%2520%2520%2520heapify%28arr%252C%2520n%252C%2520i%29%253B%250A%2520%250A%2520%2520%2520%2520%252F%252F%2520One%2520by%2520one%2520extract%2520an%2520element%2520from%2520heap%250A%2520%2520%2520%2520for%2520%28int%2520i%2520%253D%2520n%2520-%25201%253B%2520i%2520%253E%25200%253B%2520i--%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520Move%2520current%2520root%2520to%2520end%250A%2520%2520%2520%2520%2520%2520%2520%2520swap%28arr%255B0%255D%252C%2520arr%255Bi%255D%29%253B%250A%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520call%2520max%2520heapify%2520on%2520the%2520reduced%2520heap%250A%2520%2520%2520%2520%2520%2520%2520%2520heapify%28arr%252C%2520i%252C%25200%29%253B%250A%2520%2520%2520%2520%257D%250A%257D%250A%2520"

                    style={{
                    width: 1024,
                    height: 473,
                    border: 0,
                    transform: "scale(1)",
                    overflow: "hidden",
                    paddingLeft:"15rem",
                    alignItems: "center"
                    }}
                    sandbox="allow-scripts allow-same-origin"
                    ></iframe>
                    
       
   
   
        </div>



         
         <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium-bold text-indigo-600">
       Average Case : O(𝑛<em>log n</em>)
       
      </h1>
      <div className="rounded-lg h-64 overflow-hidden">
        
        <img
          alt="content"
          className=" object-center h-full w-full"
          src="nlogn.gif"
        />
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
        
          <div className="flex flex-col items-center text-center justify-center">
            {/* <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
              Phoebe Caulfield
            </h2> */}
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
           
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4" style={{fontSize:"1.25rem"}}> 
          Heap Sort has a linearithmic time complexity for most common cases.Heap Sort performs (close to) linear, which is better than linearithmic, in one specific case: when the input list contains (large series of) identical numbers.
        </p>
         
         
        </div>
      </div>
    </div>
  </div>
</section>



















































         
   </div>
   
   
</div>

    )
}
