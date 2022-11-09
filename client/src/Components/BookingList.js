import React from "react";
import BookingSelect from '../Components/BookingSelect.js'
import Buttons from '../Components/Re-usable/Buttons.js'

const BookingList = ({bookings, deleteBooking}) => {

    const allBookings = bookings.map((booking) => {
        return(
            <div key={booking._id}>
            <BookingSelect booking={booking}/>
                <Buttons text="Delete" clickHandler={()=>deleteBooking(booking._id)}/>
            </div>
        )
    })


    return ( 
        <>
        <ul>{allBookings}</ul>
        </>
     );
}
 
export default BookingList;