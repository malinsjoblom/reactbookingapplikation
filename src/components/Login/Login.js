import React, {useState, useEffect} from 'react';
import {Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function Login() {

    
    const initialValues = {
        email: "",
        password: ""
    }

    const [formValues, setFormValues] = useState(initialValues)
    const [error, setError]= useState("")
    const [getJwt, setJwt] = useState("")
    const history= useHistory("")
    

    

    function handleOnChange(e) {
        setFormValues({ ...formValues, [e.target.name]:e.target.value})
    }

    useEffect(()=> {
    const JWT = localStorage.getItem("jwt")
    setJwt(JWT);

    console.log(getJwt)

    }, [getJwt])


    function handleOnSubmit(e) {
        console.log(e.target.elements.password.value)
        e.preventDefault(); 

        axios
        .post('https://nail-bar.herokuapp.com/auth/local', {
            identifier: formValues.email,
            password: formValues.password,
        })
        .then(response => {

            console.log('User profile', response.data.user)
            console.log('User token', response.data.jwt)

            localStorage.setItem('jwt', response.data.jwt)
            localStorage.setItem('userId', response.data.user.id)
            localStorage.setItem('username', response.data.user.username)
            localStorage.setItem('email', response.data.user.email)
            localStorage.setItem('role', response.data.user.role.name)

            history.push('/products/product')
            window.location.reload();
        
        })
        .catch( (err)=>{
            console.log(err);

            setError('Your username or password is incorrect, are you a member? If not please Register')
        })
        console.log(error)
    }




    return (
        <div>
            {/* <!--  Root element for center items -->*/}
            <div className="flex flex-col md:h-screen bg-purple-100">
                {/* <!--  Auth Card Container -->*/}
                <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                    {/* <!--  Auth Card -->*/}
                    <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
                        {/* <!--  Card Title -->*/}
                        <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                            Login </h2>

                        <form className="mt-10" onSubmit={handleOnSubmit} method="POST">
                            {/* <!--  Email Input -->*/}
                            <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                            <input id="email" value={formValues.email} onChange={handleOnChange} type="email" name="email" placeholder="e-mail address" autoComplete="email"
                                className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                required />

                            {/* <!--  Password Input -->*/}
                            <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                            <input id="password" value={formValues.password} onChange={handleOnChange} type="password" name="password" placeholder="password" autoComplete="current-password"
                                className="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                required />

                            {/* <!--  Auth Buttton -->*/}
                            <Link to="./">
                            <button type="submit"
                                className="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">
                                LOGIN
                                </button>
                                </Link>

                            {/* <!--  Another Auth Routes -->*/}
                            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                                {<a href="https://nail-bar.herokuapp.com/ForgotPassword" className="flex-2 underline">
                                    Forgot password? </a> }

                                <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                                    or </p>

                                <a href="https://nail-bar.herokuapp.com/Register" className="flex-2 underline">
                                    Create an Account </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
