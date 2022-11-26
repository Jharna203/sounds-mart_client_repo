import React, { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";

const BookingModal = ({ bookingModal,setBookingModal }) => {
    const {title, resale_price} = bookingModal;
    const {user} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const location = form.location.value;
        
    
        const booking ={
          name,
          email,
          product_name : title, 
          price : resale_price,
          phone,
          location    
        }

        // fetch(`http://localhost:5000/bookings`,{
        //     method : 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(booking)
        // })
        // .then(res => res.json())
        // .then(data => console.log(data));
        
        console.log(booking);
        setBookingModal(null); 
    }
    
  return (
    <>
      <input type="checkbox" id="bookingModal" className="modal-toggle " />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg ml-6">Booking Conformation :</h3>
          <form onSubmit={handleSubmit} className="m-6">
            <input
              type="text"
              name="name"
              placeholder="name"
              defaultValue={user?.displayName}
              className="input input-bordered w-full my-1  "
              
            />
            
            <input
              type="text"
              name="email"
              placeholder="email"
              defaultValue={user?.email}
              className="input input-bordered w-full my-1  "
              readOnly
            />
            <input
              type="text"
              name="title"
              placeholder="Product Title"
              defaultValue={title}
              className="input input-bordered w-full my-1  "
              readOnly
            />

            <input
              type="text"
              name="price"
              placeholder="price"
              defaultValue={resale_price}
              className="input input-bordered w-full my-1  "
              readOnly
            />

            <input
              type="text"
              name="phone"
              placeholder="phone"
              className="input input-bordered w-full my-1  "
            />

            <input
              type="text"
              name="location"
              placeholder="meeting location"
              className="input input-bordered w-full my-1  "
            />

            <input type="submit" value="SUBMIT" className="btn btn-accent w-full input-bordered" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
