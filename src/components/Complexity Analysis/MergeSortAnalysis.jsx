import React from 'react'

export default function MergeSortAnalysis() {
    return (
        <div>
<div>
    <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Complexity Analysis</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Merge Sort Algorithm
            </p>
          
          </div>

          ;<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28104%2C153%2C237%2C1%29&t=blackboard&wt=bw&l=text%2Fx-c%2B%2Bsrc&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=148%25&si=false&es=2x&wm=false&code=void%2520mergeSort%28int%2520a%255B%255D%252C%2520int%2520p%252C%2520int%2520r%29%250A%257B%250A%2520%2520%2520%2520int%2520q%253B%250A%2520%2520%2520%2520if%28p%2520%253C%2520r%29%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520q%2520%253D%2520%28p%2520%252B%2520r%29%2520%252F%25202%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520mergeSort%28a%252C%2520p%252C%2520q%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520mergeSort%28a%252C%2520q%252B1%252C%2520r%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520merge%28a%252C%2520p%252C%2520q%252C%2520r%29%253B%250A%2520%2520%2520%2520%257D%250A%257D%250A%250A%252F%252F%2520function%2520to%2520merge%2520the%2520subarrays%250Avoid%2520merge%28int%2520a%255B%255D%252C%2520int%2520p%252C%2520int%2520q%252C%2520int%2520r%29%250A%257B%250A%2520%2520%2520%2520int%2520b%255B5%255D%253B%2520%2520%2520%252F%252Fsame%2520size%2520of%2520a%255B%255D%250A%2520%2520%2520%2520int%2520i%252C%2520j%252C%2520k%253B%250A%2520%2520%2520%2520k%2520%253D%25200%253B%250A%2520%2520%2520%2520i%2520%253D%2520p%253B%250A%2520%2520%2520%2520j%2520%253D%2520q%2520%252B%25201%253B%250A%2520%2520%2520%2520while%28i%2520%253C%253D%2520q%2520%2526%2526%2520j%2520%253C%253D%2520r%29%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28a%255Bi%255D%2520%253C%2520a%255Bj%255D%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520b%255Bk%252B%252B%255D%2520%253D%2520a%255Bi%252B%252B%255D%253B%2520%2520%2520%2520%252F%252F%2520same%2520as%2520b%255Bk%255D%253Da%255Bi%255D%253B%2520k%252B%252B%253B%2520i%252B%252B%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520else%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520b%255Bk%252B%252B%255D%2520%253D%2520a%255Bj%252B%252B%255D%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%250A%2520%2520%250A%2520%2520%2520%2520while%28i%2520%253C%253D%2520q%29%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520b%255Bk%252B%252B%255D%2520%253D%2520a%255Bi%252B%252B%255D%253B%250A%2520%2520%2520%2520%257D%250A%2520%2520%250A%2520%2520%2520%2520while%28j%2520%253C%253D%2520r%29%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520b%255Bk%252B%252B%255D%2520%253D%2520a%255Bj%252B%252B%255D%253B%250A%2520%2520%2520%2520%257D%250A%2520%2520%250A%2520%2520%2520%2520for%28i%253Dr%253B%2520i%2520%253E%253D%2520p%253B%2520i--%29%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520a%255Bi%255D%2520%253D%2520b%255B--k%255D%253B%2520%2520%252F%252F%2520copying%2520back%2520the%2520sorted%2520list%2520to%2520a%255B%255D%250A%2520%2520%2520%2520%257D%2520%250A%257D"
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
     
        <div className="sm:w-3/ sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4" style={{fontSize:"1.25rem"}}> 
          Merge Sort is quite fast, and has a time complexity of <code style={{color:"red"}}> O(n*log n)</code>. It is also a stable sort, which means the "equal" elements are ordered in the same order in the sorted list.

In this section we will understand why the running time for merge sort is <code style={{color:"red"}}> O(n*log n)</code>.

As we have already learned in Binary Search that whenever we divide a number into half in every step, it can be represented using a logarithmic function, which is log n and the number of steps can be represented by log n + 1(at most)

Also, we perform a single step operation to find out the middle of any subarray, i.e. <code style={{color:"red"}}> O(1)</code>.

And to merge the subarrays, made by dividing the original array of n elements, a running time of O(n) will be required.

Hence the total time for mergeSort function will become <code style={{color:"red"}}> n*log (n+1)</code>, which gives us a time complexity of <code style={{color:"red"}}> O(n*log n)</code>.
<br></br><bold></bold>Merge Sort has a linearithmic time complexity for all possible cases.
        </p>
         
         
        </div>
      </div>
    </div>
  </div>
</section>






















































         
   </div>
   
   
</div>        </div>
    )
}
