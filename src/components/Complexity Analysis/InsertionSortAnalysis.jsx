import React from 'react'

export default function InsertionSortAnalysis() {
    return (
        <div>
              <div>

<div>
    <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Complexity Analysis</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Insertion Sort Algorithm
            </p>
          
          </div>
       

          ;<iframe
  src="https://carbon.now.sh/embed?bg=rgba%2895%2C143%2C224%2C1%29&t=blackboard&wt=bw&l=text%2Fx-c%2B%2Bsrc&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=148%25&si=false&es=2x&wm=false&code=Function%2520to%2520implement%2520Insertion%2520Sort%2520in%2520C%252B%252B%250A%250Avoid%2520insertionSort%28int%2520array%255B%255D%252C%2520int%2520size%29%2520%257B%250A%2520%2520for%2520%28int%2520step%2520%253D%25201%253B%2520step%2520%253C%2520size%253B%2520step%252B%252B%29%2520%257B%250A%2520%2520%2520%2520int%2520key%2520%253D%2520array%255Bstep%255D%253B%250A%2520%2520%2520%2520int%2520j%2520%253D%2520step%2520-%25201%253B%250A%250A%2520%2520%2520%2520%252F%252F%2520Compare%2520key%2520with%2520each%2520element%2520on%2520the%2520left%2520of%2520it%2520until%2520an%2520element%2520smaller%2520than%250A%2520%2520%2520%2520%252F%252F%2520it%2520is%2520found.%250A%2520%2520%2520%2520%252F%252F%2520For%2520descending%2520order%252C%2520change%2520key%253Carray%255Bj%255D%2520to%2520key%253Earray%255Bj%255D.%250A%2520%2520%2520%2520while%2520%28key%2520%253C%2520array%255Bj%255D%2520%2526%2526%2520j%2520%253E%253D%25200%29%2520%257B%250A%2520%2520%2520%2520%2520%2520array%255Bj%2520%252B%25201%255D%2520%253D%2520array%255Bj%255D%253B%250A%2520%2520%2520%2520%2520%2520--j%253B%250A%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520array%255Bj%2520%252B%25201%255D%2520%253D%2520key%253B%250A%2520%2520%257D%250A%257D"
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
       Average Case : O(𝑛<sup>2</sup>)
       
      </h1>
      <div className="rounded-lg h-64 overflow-hidden">
        
        <img
          alt="content"
          className=" object-center h-full w-full"
          src="bubblesortworst.gif"
        />
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
        
          <div className="flex flex-col items-center text-center justify-center">
            {/* <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
              Phoebe Caulfield
            </h2> */}
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
            <p className="text-base" style={{backgroundColor:"#DBE6FD"}}>
              
            <pre>
            Number of comparisons: <br></br>(n - 1) + (n - 2) +...+ 1 = <br></br>n(n - 1) / 2 <br></br>nearly equals to n<sup>2</sup>.
        </pre>
            </p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4" style={{fontSize:"1.25rem"}}> 
          It occurs when the elements of an array are in jumbled order (neither ascending nor descending).
          Insertion Sort has a quadratic average-case time complexity, which can be tested using a random list of numbers.
        
        </p>
         
         
        </div>
      </div>
    </div>
  </div>
</section>









































<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium-bold text-green-600">
       Best Case : O(𝑛)
       
      </h1>
        <div className="leading-relaxed">
        <p style={{ fontSize: "1.25rem",fontWeight:"normal" }}>

        When the array is already sorted, the outer loop runs for n number of times whereas the inner loop does not run at all. So, there are only n number of comparisons. Thus, complexity is linear.</p>
        </div>
      </div>
      
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img
        className="object-cover object-center w-full h-full"
        src="bubblesortbest.gif"
        alt="stats"
      />
    </div>
  </div>
</section>




<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium-bold text-red-600">
       Worst Case : O(𝑛<sup>2</sup>)
       
      </h1>
        <div className="leading-relaxed">
        <p style={{ fontSize: "1.25rem",fontWeight:"normal" }}>

        Suppose, an array is in ascending order, and you want to sort it in descending order. In this case, worst case complexity occurs.

Each element has to be compared with each of the other elements so, for every nth element, (n-1) number of comparisons are made.

Thus, the total number of comparisons = n*(n-1) ~ n<sup>2</sup>. Thus, complexity is quadratic.       </p>
        </div>
      </div>
      
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img
        className="object-cover object-center w-full h-full"
        src="bubblesortworst.gif"
        alt="stats"
      />
    </div>
  </div>
</section>




















         
   </div>
   
   
</div>



        </div>
        </div>
    )
}
