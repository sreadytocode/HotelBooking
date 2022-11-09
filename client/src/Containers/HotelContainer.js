import React, {useEffect, useState} from 'react';
import Heading from '../Components/Re-usable/Heading.js';
import BookingForm from '../Components/BookingForm.js';
import BookingList from '../Components/BookingList.js'

const HotelContainer = () => {
    const [bookings, setBookings] = useState([]);
    const [booking, setBooking] = useState([]);
    
    useEffect(() =>{
        fetchBookings();
    
    }, [bookings]);

    const baseUrl = 'http://localhost:9000/api/bookings/'

    async function fetchBookings(){
        const response = await fetch(baseUrl)
        const data = await response.json();
        
        setBookings(data);
}
        function postBookings (data) {
            return fetch(baseUrl, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json'}        
            }) 
            .then(res => res.json())
        }
        
        function deleteBooking (id) {
            return fetch(baseUrl + id, {
                method: 'DELETE'
            })
            }

        const addBooking = (data) => {
            const newBooking = [...bookings, data];
            setBookings(newBooking)
        }

    return ( 
        <>
        <Heading text="Hotel Bookings"/>
        <BookingForm postBookings={postBookings} addBooking={addBooking}/>
        <BookingList bookings={bookings} deleteBooking={deleteBooking}/>
        </>
     );
}
 
export default HotelContainer;