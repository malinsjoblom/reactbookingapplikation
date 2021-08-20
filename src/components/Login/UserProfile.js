import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Modal from 'react-modal';
import axios from 'axios';



function UserProfile() {


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

    const modalInitialValues= {
        username: "",
        email: "",
        role: ""
    }

    const [modalIsOpen, setIsOpen] = useState(false);
    const [updateFormValues, setUpdateFormValues] = useState(modalInitialValues);
    const userId = localStorage.getItem("userId")
    const username = localStorage.getItem("username")
    const email = localStorage.getItem("email")
    const role = localStorage.getItem("role")
    const token = localStorage.getItem("jwt")


    console.log("username", {username})

    const history = useHistory();


    function openModal() {
        setIsOpen(true)
    }


    function closeModal() {
        setIsOpen(false)
    }


    function deleteProfile() {
        try {
            const deleteUser = axios.delete(`http://localhost:1337/users/${userId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            console.log("user deleted", deleteUser)
            history.push("/Register");
        }
        catch (error) {
            console.log("Your profile was not deleted, please try again or contact support", error.data)
        }
    }



    function onHandleChange(e) {
        setUpdateFormValues({ ...updateFormValues, [e.target.name]:e.target.value})
    }



    function onHandleSubmit(e) {
        e.preventDefault();
        axios.get('http://localhost:1337/users', {
            username: updateFormValues.username,
            email: updateFormValues.description,
            role: updateFormValues.role
        }).then((res) => {
            console.log(res.data)
            const data = new FormData( );
            data.append("ref", "user")
            data.append("refId", res.data.id)
        }). catch((err) => {
            console.log(err)
        })
    }



 return (
    <>
        <div>
            <div
                className="flex justify-center">

                <form method="post" onSubmit={onHandleSubmit}
                    className="w-full max-w-sm pt-1 md:py-10">

                    <div
                        className="bg-purple-50 bg-opacity-25 productList justify-items-center pb-8 mb-8">
                        <h1
                            className="title m-3">
                            NAIL BAR ME</h1>
                    </div>

                    <div
                        className="md:flex md:items-center mb-6">
                        <div
                            className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="inline-username" type="text">
                                username
                                </label>
                        </div>
                        <div
                            className="md:w-2/3">
                            - {username}
                        </div>
                    </div>


                    <div
                        className="md:flex md:items-center mb-6">
                        <div
                            className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="inline-email">
                                email
                                </label>
                        </div>
                        <div
                            className="md:w-2/3">
                            - {email}
                        </div>
                    </div>


                    <div
                        className="md:flex md:items-start mb-6">
                        <div
                            className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="inline-role">
                                role
                                </label>
                        </div>
                        <div
                            className="md:w-2/3">
                            - {role}
                        </div>
                    </div>


                    <div
                        className="md:flex md:items-center">
                        <div
                            className="md:w-1/3">

                        </div>
                        <div
                            className="md:w-2/3">
                            <button
                                className="shadow bg-purple-300 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit"
                                onClick={openModal}>
                                update profile
                                  </button>


                        </div>
                        <div
                            className="md:w-2/3">
                            <button
                                className="shadow bg-purple-300 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit"
                                onClick={deleteProfile}>
                                delete profile
                                  </button>
                        </div>
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
                                    <div 
                                    className=" w-full p-12 px-6 py-10 sm:px-10 
                                    sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
                                        <h1 
                                        className="text-center font-semibold text-xl 
                                        lg:text-s text-gray-800">
                                            change your username or emailadress?
                                            </h1>

                                        <form 
                                        onSubmit={onHandleSubmit} method="POST"
                                        className="mt-10 w-full max-w-sm pt-1">

                                            <label 
                                            htmlFor="username" 
                                            name="username" className=" 
                                            pb-5 block mt-2 text-s font-semibold text-gray-600 uppercase">
                                                username : {username} <br/>
                                                email : {email}
                                                </label>


                                                <label 
                                            htmlFor="username" 
                                            className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                                                New username :
                                                </label>

                                            <input 
                                            type="text" 
                                            name="username" 
                                            value={updateFormValues.username} 
                                            onChange={onHandleChange} 
                                            className="block w-full py-3 px-1 mt-2  text-gray-800 appearance-none  
                                            border-b-2 border-gray-200 focus:text-gray-500 focus:outline-none focus:border-gray-400" />



                                            <label 
                                            htmlFor="email" 
                                            className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                                                new email address :
                                                </label>

                                            <input type="text" 
                                            name="email" 
                                            value={updateFormValues.email} 
                                            onChange={onHandleChange} 
                                            className="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none 
                                            border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-400" />

                    
                                            <button 
                                            type="submit" 
                                            className="h-8 w-full shadow bg-gray-400 hover:bg-purple-300 focus:shadow-outline 
                                            focus:outline-none text-white font-bold  m-2 rounded">
                                              Confirm Changes  
                                                </button>
                                            <button 
                                            onClick={closeModal} 
                                            className="h-8 w-full shadow bg-gray-400 hover:bg-purple-300 focus:shadow-outline focus:outline-none text-white font-bold  m-2 rounded"
                                            type="button">
                                                Cancel
                                                </button>
                                        </form>
                                    </div>
                                </div>
                            </div>


                    </Modal>
                </form>

            </div>
        </div>
    </>
)
}

export default UserProfile
