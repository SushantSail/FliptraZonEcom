import React from 'react';
import { Link } from "react-router-dom";

export default function PayoutPage () {
  return (<>
 
<div class=" flex align-item-center justify-center py-5" >
      <div class="p-6  md:mx-auto">
        <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center dark:text-white">Product Order Successfully</h3>
            <p class="text-gray-600 my-2 dark:text-white">Thank you for completing your secure online payment.</p>
            <p class="text-gray-600"> Have a great day!  </p>
            <div class="py-10 text-center">
              <br />
               <Link
                  to="/"
                  class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Return home
                </Link>
            </div>
        </div>
    </div>
  </div>
  </>
  
  )
}
