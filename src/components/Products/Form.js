import React, { useState } from 'react';

const isAdmin = true;

function Form() {

    const initialValues = {
        productName: " ",
        price: " ",
        description: " "
    }

    const [formValues, setFormValues] = useState(initialValues)

    function onHandleSubmit(e) {
        e.preventDefault();

        console.log(formValues)
    }

    function onHandleChange(e) {


        setFormValues({ ...formValues, [e.target.name]: e.target.value })

    }

    return (



        <div className="flex justify-center">


            {isAdmin &&

                (<form onSubmit={onHandleSubmit} className="w-full max-w-sm pt-1 md:py-10">

                    <div className="bg-purple-50 bg-opacity-25 productList justify-items-center pb-8 mb-8">
                        <h1 className="title m-3">NAIL BAR ME</h1>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-product-name" type="text">set product name</label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-purple-200" type="text" name="productname" value={formValues.productName} onChange={onHandleChange}></input>
                        </div>
                    </div>


                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-time">set price</label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-purple-200" id="inline-set-price" type="text" name="price" value={formValues.price} onChange={onHandleChange}></input></div>
                    </div>


                    <div className="md:flex md:items-start mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4" htmlFor="inline-description">set description</label>
                        </div>
                        <div className="md:w-max">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-max py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-purple-200" id="inline-set-description" type="text" name="description" value={formValues.description} onChange={onHandleChange}></input>
                        </div>
                    </div>


                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-purple-300 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">  add product </button>
                        </div>
                    </div>
                </form>)}

        </div>

    )
}

export default Form