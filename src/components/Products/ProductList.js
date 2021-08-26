import React, {useState, useEffect} from 'react';
import Product from './Product';
import axios from "axios";
import './Product.css';
import server from "../config"


function ProductList() {

    const [products, setProducts] = useState([]);
    const [loadPage, setLoadPage]= useState(2);

    useEffect(()=>{
        //console.log("from useEffect" , loadPage)

        const fetchProducts= async()=>{
        const response = await axios.get(`${server}products?_limit=${loadPage}`)

            console.log(response)
            setProducts(response.data) 
        }
        fetchProducts() 
        
    }, [loadPage]  )

    function loadMore() {

        console.log("length of product array" , products.length)
        let dynamicPage = loadPage + 2;
        console.log("load more", loadPage)
        setLoadPage(dynamicPage)
        console.log(loadPage)
    }

    function showLess() {
        setLoadPage(2)
    }




    return (
        <div className="flex justify-center pt-2 bg-purple-50">
        <div className="bg-purple-100 md:rounded-md  bg-purple-50 bg-opacity-25 grid justify-items-center pb-14 mb-14">
            <h1 className="title m-8">NAIL BAR MENU</h1>

            <div className="text-center px-30 tracking-wider my-10 leading-7 text-base">
                Welcome to NAIL BAR ME, book your appointment on our website. This is our nail bar menu. <br/>
                We are specialists at professional nail care, our ambition is to always give you services of the highest quality possible. <br/>
                We only work with quaranteed products and services. <br />
                Our services are carefully customised to suit your individual needs around your busy schedule. <br />
                We are passionate about wellbeing - <br />
                So we have created a place where our clients
                can recover, <br />
                relax and be pampered with our wide range of customized nail treatments.
            </div>

            {products.map((product)=>{
                return (

                    <Product key={product.id} productId={product.id} image={product.image} productName={product.name} price={product.price} description={product.description}/>
                )
            }) }

            { (products.length >loadPage || products.length === loadPage)   ?

            <button onClick={loadMore} className="rounded-full py-3 px-12 uppercase text-xs font-bold cursor-pointer tracking-wider text-white-500 border-gray-800 border-2 ml-6 hover:bg-black hover:text-white transition ease-out duration-300">Show more ⬇</button>
            :
            <button onClick={showLess} className="rounded-full py-3 px-12 uppercase text-xs font-bold cursor-pointer tracking-wider text-white-500 border-gray-800 border-2 ml-6 hover:bg-black hover:text-white transition ease-out duration-300">Show less ⬆</button> }
        </div>
        </div>
    )
}

export default ProductList
