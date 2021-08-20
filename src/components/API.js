import React, {useEffect, useState} from 'react';
import axios from 'axios';

function API () {
    const [data , setData ] = useState({});

    useEffect (()=>{
        const fetchData = async ()=> {

            try {
                const response= await axios.get('https://jsonplaceholder.typicode.com/todos/1')
                //axios är ett fetch bibliotek, http get, post, update, delete
                console.log(response.data)
                const res = response.data
                setData(res)
            }
            catch(err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

return (
    <> 
    </>
)

}

export default API;