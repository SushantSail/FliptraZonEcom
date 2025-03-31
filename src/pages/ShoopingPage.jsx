
import React, { Fragment ,useState } from "react";
import { CartCard } from "../components/CartCard";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function ShoopingPage() {
  const { total, cartList } = useCart();
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    if (cartList.length === 0) {
      alert("Please add products to your cart before proceeding to checkout.");
    } else {
      navigate("/payout"); 
    }
  };


  return (
    <Fragment>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="my-4text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            {cartList.length === 0 ? (
              <div className="text-center w-full">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Your shopping cart is empty. Add some items to proceed.
                </p>
              </div>
            ) : (
              <div className="mx-auto">
                {/* div 1 */}
                <div>
                  <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                    {/* div 1 */}
                    <div className="space-y-6">
                      {cartList.map((product) => (
                        <CartCard key={product.id} product={product} />
                      ))}

                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* div 2 */}
            <div className="w-full max-w-2xl lg:max-w-4xl mx-auto">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                       {total}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                      ${Math.round(total * 0.10)}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Delivery charges
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ${total === 0 ? 0 : 10}                
                      </dd>
                    </dl>

                    
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                    ${total - Math.round(total * 0.10) + (total === 0 ? 0 : 10)}
                    </dd>
                  </dl>
                </div>

                <button
                 
                  onClick={handleProceedToCheckout}
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Proceed to Checkout
                </button>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {" "}
                    or{" "}
                  </span>
                  <Link
                    to="/product"
                    title=""
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}