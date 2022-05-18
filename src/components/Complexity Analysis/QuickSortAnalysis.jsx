import React from 'react'

export default function QuickSort() {
    return (
        <div>
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Complexity Analysis</h2>
              
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Quick Sort Algorithm
                </p>
              
              </div>
           

            

    
              ;<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28104%2C153%2C237%2C1%29&t=blackboard&wt=bw&l=text%2Fx-c%2B%2Bsrc&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=148%25&si=false&es=2x&wm=false&code=int%2520partition%28int%2520a%255B%255D%252C%2520int%2520beg%252C%2520int%2520end%29%2520%2520%250A%257B%2520%2520%250A%2520%2520%2520%2520int%2520left%252C%2520right%252C%2520temp%252C%2520loc%252C%2520flag%253B%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520loc%2520%253D%2520left%2520%253D%2520beg%253B%2520%2520%250A%2520%2520%2520%2520right%2520%253D%2520end%253B%2520%2520%250A%2520%2520%2520%2520flag%2520%253D%25200%253B%2520%2520%250A%2520%2520%2520%2520while%28flag%2520%21%253D%25201%29%2520%2520%250A%2520%2520%2520%2520%257B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520while%28%28a%255Bloc%255D%2520%253C%253D%2520a%255Bright%255D%29%2520%2526%2526%2520%28loc%21%253Dright%29%29%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520right--%253B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28loc%253D%253Dright%29%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520flag%2520%253D1%253B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520else%2520if%28a%255Bloc%255D%253Ea%255Bright%255D%29%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520temp%2520%253D%2520a%255Bloc%255D%253B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520a%255Bloc%255D%2520%253D%2520a%255Bright%255D%253B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520a%255Bright%255D%2520%253D%2520temp%253B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520loc%2520%253D%2520right%253B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28flag%21%253D1%29%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520while%28%28a%255Bloc%255D%2520%253E%253D%2520a%255Bleft%255D%29%2520%2526%2526%2520%28loc%21%253Dleft%29%29%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520left%252B%252B%253B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520if%28loc%253D%253Dleft%29%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520flag%2520%253D1%253B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520else%2520if%28a%255Bloc%255D%2520%253C%2520a%255Bleft%255D%29%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520temp%2520%253D%2520a%255Bloc%255D%253B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520a%255Bloc%255D%2520%253D%2520a%255Bleft%255D%253B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520a%255Bleft%255D%2520%253D%2520temp%253B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520loc%2520%253D%2520left%253B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%2520%2520%250A%2520%2520%2520%2520%257D%2520%2520%250A%2520%2520%2520%2520return%2520loc%253B%2520%2520%250A%257D%2520%2520%250Avoid%2520quickSort%28int%2520a%255B%255D%252C%2520int%2520beg%252C%2520int%2520end%29%2520%2520%250A%257B%2520%2520%250A%2520%2520%2520%2520int%2520loc%253B%2520%2520%250A%2520%2520%2520%2520if%28beg%253Cend%29%2520%2520%250A%2520%2520%2520%2520%257B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520loc%2520%253D%2520partition%28a%252C%2520beg%252C%2520end%29%253B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520quickSort%28a%252C%2520beg%252C%2520loc-1%29%253B%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520quickSort%28a%252C%2520loc%252B1%252C%2520end%29%253B%2520%2520%250A%2520%2520%2520%2520%257D%2520%2520%250A%257D%2520%2520"
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
           Average Case : O(<em>nlogn</em>)
           
          </h1>
          <div className="rounded-lg h-64 overflow-hidden">
            
            <img
              alt="content"
              className=" object-center h-full w-full"
              src="nlogn.gif"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
          
            <div className="sm:w sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4" style={{fontSize:"1.25rem"}}> 
              Quick Sort has a linearithmic best and average-case time complexity, which can be tested using a random list of numbers.
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
           Best Case : O(<em>nlogn</em>)
           
          </h1>
            <div className="leading-relaxed">
            <p style={{ fontSize: "1.25rem",fontWeight:"normal" }}>
    
            The best case occurs when the partition process always picks the middle element as pivot. Following is recurrence for best case. 
    </p>
            </div>
          </div>
          
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full"
            src="nlogn.gif"
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
    
            The worst case occurs when the partition process always picks greatest or smallest element as pivot. If we consider above partition strategy where last element is always picked as pivot, the worst case would occur when the array is already sorted in increasing or decreasing order. 
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
