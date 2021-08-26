import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Checkout from './CheckoutCard'
import server from "../config"


function MyBooking() {

    const [bookings, setBookings] = useState([]);
    const [userId /*,setUserId*/] = useState(localStorage.getItem('userId'))
    const [token /*,setToken*/] = useState(localStorage.getItem('jwt'))



    useEffect(() => {
        console.log("userId", "products")

        const fetchData = async () => {
            const res = await axios.get
                (`${server}user-bookings?users_permissions_permission.id=${userId}`
                    , {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    })
                
            setBookings(res.data);
        }

        fetchData()
    }, );



    return (
        <div>
            <div className="grid justify-items-center pt-2 bg-purple-50 shadow-xl">
                <div><h1 className="title m-3 ">NAIL BAR ME</h1>
                </div>
                
                <div className="w-1/2 bg-purple-100 w-3/4">
                    <div className="w-full md:py-6 justify-items-center">
                        <p className="text-center text-3xl">YOU'RE ALMOST DONE WITH YOUR BOOKING</p>
                        <h1 className="text-l p-10 text-left">please check if the information is correct and then confirm your booking. If you need to change time/date or 
                        if you want to cancel (not possible 24h before your appointment time, you'll be charged for your time)</h1>
                        </div>
                        </div>
            </div>
            {bookings.map((booking) => {

                return (
                    <Checkout key={booking.id} price={booking.price} name={booking.name} time={booking.timeToAppointment} mobile={booking.mobile} appointment={booking.appointment} />
                )
            })
            }


        </div>
    )
}

export default MyBooking
