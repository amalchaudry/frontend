import { useState } from "react";
import api from "./api";

const PurchaseTicketAndSeat = () => {
  const [formData, setFormData] = useState({
    ticketID: "",
    cost: "",
    carrier: "",
    customer: "",
    deplane_at: "",
    seat_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/purchaseTicket", formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <fieldset>
        <legend>Purchase Ticket and Seat</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="ticketID">ticketID</label>
          <input
            type="text"
            id="ticketID"
            name="ticketID"
            value={formData.ticketID}
            onChange={handleChange}
          />
          <label htmlFor="cost">cost</label>
          <input
            type="text"
            id="cost"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
          />
          <label htmlFor="carrier">carrier</label>
          <input
            type="text"
            id="carrier"
            name="carrier"
            value={formData.carrier}
            onChange={handleChange}
          />
          <label htmlFor="customer">customer</label>
          <input
            type="text"
            id="customer"
            name="customer"
            value={formData.customer}
            onChange={handleChange}
          />
          <label htmlFor="deplane_at">deplane_at (dropdown)</label>
          <input
            type="text"
            id="deplane_at"
            name="deplane_at"
            value={formData.deplane_at}
            onChange={handleChange}
          />
          <label htmlFor="seat_number">seat_number</label>
          <input
            type="text"
            id="seat_number"
            name="seat_number"
            value={formData.seat_number}
            onChange={handleChange}
          />

          <button type="submit">Purchase Ticket and Seat</button>
        </form>
      </fieldset>
    </div>
  );
};

export default PurchaseTicketAndSeat;
