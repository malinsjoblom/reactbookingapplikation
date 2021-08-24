import axios from 'axios';
import React, { useState } from 'react';

function AddToProduct() {

    const initialValues = {
        name: "",
        description: "",
        price: 0
    }

    const [formValues, setFormValues] = useState(initialValues)
    const [fileData, setFileData] = useState();



    function handleOnChange(e) {
        setFormValues({ ...formValues, [e.target.name]:e.target.value})
    }

    function handleOnchangePic(e) {
        setFileData(e.target.files[0])
    }

    function onHandleSubmit(e) {
        e.preventDefault();
  

    axios.post('https://strapi2022.herokuapp.com/products', {
        name: formValues.name,
        description: formValues.description,
        price: formValues.price
    }).then((res) => {
        console.log(res.data)

        const data = new FormData();
        data.append("files", fileData)
        data.append("ref", "product")
        
        data.append("refId", res.data.id)

        data.append("field", "image") 

        axios.post("https://strapi2022.herokuapp.com/upload", data)
            .then((image) => console.log(image))
            .catch((error) => console.log(error))


    }).catch( (err) => {
        console.log(err)
    })

}

    return (
        <div className="flex justify-center pt-2 bg-purple-50">
            <div className=" w-1/2 bg-purple-100 md:rounded-md border-4 border-black bg-opacity-25 productList grid justify-items-center pb-14 mb-14">

            <form method="post" onSubmit={onHandleSubmit} className="w-full max-w-sm pt-1 md:py-10">

                <div className="bg-purple-50 bg-opacity-25 productList justify-items-center pb-8 mb-8">
                    <h1 className="title m-3">NAIL BAR ME</h1>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-product-name" type="text">set product name</label>
                    </div>
                    <div className="md:w-2/3">
                        <input id="email-address" value={formValues.name} onChange={handleOnChange} name="name" type="text" required className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-purple-200"></input>
                    </div>
                </div>


                <div className="md:flex md:items-start mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4" htmlFor="inline-description">set description</label>
                    </div>
                    <div className="md:w-max">
                        <input value={formValues.description} onChange={handleOnChange} name="description" type="text" required className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-max py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-purple-200" id="inline-set-description"></input>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-time">set price</label>
                    </div>
                    <div className="md:w-2/3">
                        <input value={formValues.price} onChange={handleOnChange} name="price" type="number" required className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-purple-200" id="inline-set-price"></input></div>
                </div>

                <input type="file" name="file" id="" onChange={handleOnchangePic}/>


                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-purple-300 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">  add product </button>
                    </div>
                </div>
            </form>
            </div>

        </div>

    )
}

export default AddToProduct