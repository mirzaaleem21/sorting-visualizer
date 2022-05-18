import React from 'react'

export default function BubbleSortAnalysis() {
    return (
<div>
    <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Complexity Analysis</h2>
          
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Bubble Sort Algorithm
            </p>
          
          </div>
       

          ;<iframe
                    src="https://carbon.now.sh/embed?bg=rgba%28175%2C188%2C237%2C1%29&t=blackboard&wt=sharp&l=text%2Fx-c%2B%2Bsrc&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=148%25&si=false&es=2x&wm=false&code=%250A%252F%252F%2520A%2520function%2520to%2520implement%2520bubble%2520sort%250Avoid%2520bubbleSort%28int%2520arr%255B%255D%252C%2520int%2520n%29%250A%257B%250A%2520%2520%2520%2520int%2520i%252C%2520j%253B%250A%2520%2520%2520%2520for%2520%28i%2520%253D%25200%253B%2520i%2520%253C%2520n-1%253B%2520i%252B%252B%29%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%252F%252F%2520Last%2520i%2520elements%2520are%2520already%2520in%2520place%250A%2520%2520%2520%2520for%2520%28j%2520%253D%25200%253B%2520j%2520%253C%2520n-i-1%253B%2520j%252B%252B%29%250A%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28arr%255Bj%255D%2520%253E%2520arr%255Bj%252B1%255D%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520swap%28%2526arr%255Bj%255D%252C%2520%2526arr%255Bj%252B1%255D%29%253B%250A%257D%250A%2520%250A"
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
          src="bubblesortaverage.gif"
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
             (n-1) + (n-2) + (n-3) + ... + 3 + 2 + 1<br></br>
            Sum = n(n-1)/2<br></br>
            i.e O(n<sup>2</sup>)
        </pre>
            </p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4" style={{fontSize:"1.25rem"}}> 
          In Bubble Sort, n-1 comparisons will be done in the 1st pass, n-2 in 2nd pass, n-3 in 3rd pass and so on.          
          Hence the time complexity of Bubble Sort is O(n<sup>2</sup>)
        The main advantage of Bubble Sort is the simplicity of the algorithm. 
        Bubble Sort has a quadratic average-case time complexity, which can be tested using a random list of numbers.
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

        Bubble Sort has a linear best-case time complexity, which can be tested using a list of numbers that's already sorted.
</p>
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

        Bubble Sort has a quadratic worst-case time complexity, which can be tested using a reversed list of numbers.
</p>
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

    )
}
