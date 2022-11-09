import React from "react";

const BookingSelect = ({booking}) => {

    return ( 
        <>
            <li key={booking.id}>
                <h3>{booking.name}</h3>
                <h4>{booking.emailAddress}</h4>
                <h5>Guest is checked in: {booking.checked_in_status}</h5>
                
            </li>
        </>
     );
}
 
export default BookingSelect;