import React, {useState} from 'react';
import axios from 'axios';


function ForgotPassword() {

    function resetRequest() {
        axios
            .post('http://localhost:1337/auth/forgot-password', {
                email: 'malin.sjoblom@medieinstitutet.se', // user's email
            })
            .then(response => {
                console.log('Your user received an email', response);
            })
            .catch(error => {
                console.log('An error occurred:', error.response);
            });
    }

    const initialValues = {
        email: ""
    }

    const [formValues, setFormValues] = useState(initialValues)

    function handleOnChange(e) {
        setFormValues({...formValues, [e.target.name]:e.target.value})
    }

    function handleOnSubmit(e) {
        e.preventDefault();

        axios
        .post('http://localhost:1337/auth/local', {
            identifier: formValues.email,
        })
        .then(response => {
            console.log('User profile', response.data.user);
        })
    }



    return (
        <div>
            {/* <!--  Root element for center items -->*/}
            <div className="flex flex-col h-screen bg-purple-100">
                {/* <!--  Auth Card Container -->*/}
                <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                    {/* <!--  Auth Card -->*/}
                    <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">

                        {/* <!--  Card Title -->*/}
                        <h2 className="text-center font-semibold text-3xl lg:text-2xl text-gray-800 md:py-6">
                            Did you forget your password? <br/> (THIS FUNCTION IS NOT AVALIBLE YET)</h2>
                            <h3 className="text-center font-semibold text-xs lg:text-xs text-gray-800 md:py-1"> Enter the email you registered and we will send you a link to reset your password </h3>

                        <form className="mt-5" onSubmit={handleOnSubmit} method="POST">
                            {/* <!--  Email Input -->*/}
                            <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                            <input id="email" value={formValues.email} onChange={handleOnChange} type="email" name="email" placeholder="e-mail address" autoComplete="email"
                                className="block w-full md:py-2 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-300"
                                required />
                        
                        <div className="flex md:py-7">
                            <div className="md:flex-auto md:items-center">
                                <div className="md:w-3/3"></div>
                                <div className="md:w-2/3"></div>
                                <button onClick={resetRequest} className="shadow bg-purple-300 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold md:py-4 md:px-20 rounded" type="submit" > GET A NEW PASSWORD </button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

export default ForgotPassword
