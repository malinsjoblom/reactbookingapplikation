import React, { useState } from 'react';
import './Product.css';
import Modal from 'react-modal';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



function Product({ productName, price, description, image, appointment }) {

    const customStyles = {
        content: {
            background: "#D2D2FF",
            heigth: "500px",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    const initialValues = {
        name: " ",
        timeToAppointment: " ",
        mobile: " ",
        appointment: " ",
        price: " "

    }

    const [modalIsOpen, setIsOpen] = useState(false);
    const [formValues, setFormValues] = useState(initialValues)
    const [userId] = useState(localStorage.getItem("userId"))


    const [username] = useState(localStorage.getItem("username"))
    const [token] = useState(localStorage.getItem("jwt"));

    const history = useHistory();


    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }



    function onHandleChange(e) {

        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    async function onHandleSubmit(e) {
        e.preventDefault();


        try {

            const response = await axios.post('http://localhost:1337/user-bookings', {
                name: username,
                timeToAppointment: formValues.timeToAppointment,
                mobile: Number(formValues.mobile),
                appointment: productName,
                price: price,
                users_permissions_permission: userId
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            )

            history.push('/Checkout')

            console.log(response)
        }
        catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <div className=" flex justify-start grid justify-items-center p-8">
                <div className="w-1/2 bg-cover border-4 border-purple-200 rounded border-opacity-75">
                    <img src={`http://localhost:1337${image.formats.medium.url}`} alt=" nail designs from database " /> </div>
                <div className="pr0"> - {productName} - </div>
                <div className="pr1"> - {description} - </div>
                <div className="pr2B max-h-10 flex rounded-lg space-x-3">
                    <div className="pr2 pt-2"> -  {price}kr - </div>
                    <div className="btn-book">
                        <div className="rounded-lg space-x-3">
                            <button onClick={openModal} className="duration-700 bg-purple-200 px-20 py-2 text-base font-semibold tracking-wider text-white rounded-full hover:bg-purple-300 shadow-inner" >BOOK</button>
                        </div>

                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            ariaHideApp={false}
                            contentLabel="Modal"
                        >

                            <div className="flex flex-col bg-purple-200 h-61 w-full">
                                <div className="flex grid mx-5 my-20 sm:my-auto">
                                    {/* <!--  Auth Card -->*/}
                                    <div className=" w-full p-12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
                                        <h1 className="text-center font-semibold text-xl lg:text-s text-gray-800">Choose wished Time and Date below, <br /> enter your mobile and number</h1>
                                        <form onSubmit={onHandleSubmit} className="mt-10 w-full max-w-sm pt-1">

                                            <label htmlFor="appointment" name="appointment" className=" pb-5 block mt-2 text-s font-semibold text-gray-600 uppercase">Choosed appointment : {productName}, {price}kr </label>

                                            <label htmlFor="name" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Name</label>
                                            <input type="text" name="name" value={username} onChange={onHandleChange} className="block w-full py-3 px-1 mt-2  text-gray-800 appearance-none  border-b-2 border-gray-200 focus:text-gray-500 focus:outline-none focus:border-gray-400" />

                                            <label htmlFor="dateTime" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Date & Time (MM/DD -YYYY 00:00)</label>
                                            <input type="text" name="timeToAppointment" value={formValues.timeToAppointment} onChange={onHandleChange} className="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-400" />

                                            <label htmlFor="mobile" className="block text-xs font-semibold text-gray-600 uppercase ">mobile</label>
                                            <input type="number" name="mobile" value={formValues.mobile} onChange={onHandleChange} className="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-400"/>

                                            <button type="submit" className="h-8 w-full shadow bg-gray-400 hover:bg-purple-300 focus:shadow-outline focus:outline-none text-white font-bold  m-2 rounded">SEND BOOKING REQUEST</button>
                                            <button onClick={closeModal} className="h-8 w-full shadow bg-gray-400 hover:bg-purple-300 focus:shadow-outline focus:outline-none text-white font-bold  m-2 rounded" type="button">CLOSE</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Modal>




                    </div>
                </div>
            </div>
        </>
    )
}


export default Product
