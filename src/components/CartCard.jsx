import React,{useState ,useEffect} from 'react'
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const CartCard = ({product}) => {
    const { removeFromCart ,updateTotal , cartList } = useCart();
    const { images,title,price } = product;
    const defaultImg ="https://www.ikea.com/in/en/images/products/droena-box-blue__1255878_pe924757_s5.jpg?f=xl";
  const itemImage = product?.images?.length > 0 ? product.images : defaultImg;
    const [count, setCount] = useState(1);


    function addCount() {
      setCount(count + 1);
    }
    function subCount() {
      if (count > 1) setCount(count - 1);
    }

    
  return (

    <div class="mb-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
    <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
      <a href="#" class="shrink-0 md:order-1">
        <img
          class="h-20 w-20 dark:hidden"
             src={itemImage}
            alt="product image"
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultImg;
              }}
        />
        <img
          class="hidden h-20 w-20 dark:block"
          src={itemImage}
            alt="product image"
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultImg;
              }}
        />
      </a>

      <label for="counter-input" class="sr-only">
        Choose quantity:
      </label>
      <div class="flex items-center justify-between md:order-3 md:justify-end">
             {/* <div class="flex items-center justify-center">
                  <button
                    type="button"
                    onClick={subCount}
                    id="decrement-button"
                    data-input-counter-decrement="counter-input"
                    class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokewidth="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  
                  <h2 class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">
                    {count }
                  </h2>
                  <button
                    type="button"
                    onClick={addCount}
                    id="increment-button"
                    data-input-counter-increment="counter-input"
                    class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokewidth="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>  */}
        <div class="text-end md:order-4 md:w-32">
          <p class="text-base font-bold text-gray-900 dark:text-white">
           $ {price}
          </p>
        </div>
        <div class="text-end md:order-4 md:w-32">
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
           Total : ${price * count}
          </p>
        </div>
      </div>

      <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
        <a
          href="#"
          class="text-base font-medium text-gray-900 hover:underline dark:text-white"
        >{title}
        </a>

        <div class="flex items-center gap-4 justify-end mt-2">
          <button
            type="button"
            onClick={() =>removeFromCart(product)}
            class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
          >
            <svg
              class="me-1.5 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>





  )
}