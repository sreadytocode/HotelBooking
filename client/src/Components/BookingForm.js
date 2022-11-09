import React, {useState} from 'react';

    const BookingForm = ({postBookings, addBooking}) => {
        const [formData, setFormData] = useState({
            name: "",
            emailAddress: "",
            checked_in_status: ""
        })


        const onChange = (evt) => {
            formData[evt.target.id] = evt.target.value;
            setFormData(formData)
        }

        const handleSubmit = (evt) => {
            evt.preventDefault();
            postBookings(formData).then((data) => {
                addBooking(data)

        })
    };
    

    return ( 
        <>
            <form onSubmit={handleSubmit} id="booking-form" method="post">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={onChange} value={formData.name} required/>
                </div>
                <div>
                    <label htmlFor="emailAddress">Email address: </label>
                    <input type="text" id="emailAddress" name="emailAddress" onChange={onChange} value={formData.emailAddress} required/>
                </div>
                <div>
                    <label htmlFor="checked_in_status">Checked in</label>
                    <input type="radio" checked={formData.checked_in_status === true} id='checked_in_status' name='checked_in_status' onChange={onChange} value="true"/>
                </div>
                <div>
                    <label htmlFor="checked_in_status">Checked out</label>
                    <input type="radio" checked={formData.checked_in_status === false} id='checked_in_status' name='checked_in_status' onChange={onChange} value="false"/>
                </div>
                <input type="submit" value="Add booking"/>
            </form>
        </>
     );
}
 
export default BookingForm;