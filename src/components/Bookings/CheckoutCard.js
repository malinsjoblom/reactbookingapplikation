import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ix6NwEgvU6BV5dzng6Dv0aXEXyM0sjQaxnqdQXOtyuCGul4G3koxyjkkvXkL5KI60iMuxBLOKq8OVoWeX8GoLey00CusHYteK');




function Checkout({ name, price, time, appointment, mobile }) {

    const handleClick = async (event) => {
        // Get Stripe.js instance
        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        const response = await axios.post('https://strapi2022.herokuapp.com/create-checkout-session', {name:name, price:price});

        const session = response.data.id;

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session,
        });

        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }
    };


    return (
        <>

            <div className="flex justify-center bg-purple-50">
                <div className="bg-purple-100 pb-8 w-3/4">
                    <div className="md:p-6 w-10/12 justify-content-center justify-items-center">
                        <div className="md:flex md:items-center mb-4">
                            <div className="md:w-1/2">
                                <h1 className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1 w-12/12" htmlFor="name">your name : </h1>
                            </div>
                            <div className="md:w-1/2">
                                <div className="mx-2">
                                    {name}
                                </div>
                            </div>
                        </div>

                        <div className="md:flex md:items-start mb-4">
                            <div className="md:w-1/2">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1 w-12/12" htmlFor="appointment" type="text">appointment : </label>
                            </div>
                            <div className="md:w-1/2">
                                <div className="mx-2">
                                    {appointment}
                                </div>
                            </div>
                        </div>


                        <div className="md:flex md:items-center mb-4">
                            <div className="md:w-1/2">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1 w-12/12" htmlFor="dateTime">time : </label>
                            </div>
                            <div className="md:w-1/2">
                                <div className="mx-2">
                                    {time}
                                </div>
                            </div>
                        </div>


                        <div className="md:flex md:items-center mb-4">
                            <div className="md:w-1/2">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1 w-12/12" htmlFor="price">price : </label>
                            </div>
                            <div className="md:w-1/2">
                                <div className="mx-2">
                                    {price}
                                </div>
                            </div>
                        </div>


                        <div className="md:flex md:items-start mb-4">
                            <div className="md:w-1/2">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1 w-12/12" htmlFor="mobile">phone : </label>
                            </div>
                            <div className="md:w-1/2">
                                <div className="mx-2 ">
                                    {mobile}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex md:flex-col md:items-center">
                        <div className="">
                            <button className="h-8 w-80 shadow bg-purple-300 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold m-2 rounded" type="button">
                                change
                                </button>
                        </div>
                        <div className="px-4">
                            <button className="h-8 w-80 shadow bg-purple-300 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold  m-2 rounded" type="button">
                                cancel
                            </button>
                        </div>

                        <div className="px-4">
                            <button role="link" onClick={handleClick} className="h-8 w-80 shadow bg-purple-300 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold  m-2 rounded" type="button">
                                confirm booking
                            </button>
                        </div>

                    </div>

                </div>
            </div>


        </>

    )
}

export default Checkout
