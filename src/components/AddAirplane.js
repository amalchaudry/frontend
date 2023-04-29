import { useState } from "react";
import api from "./api";

const AddAirplane = () => {
  const [formData, setFormData] = useState({
    airlineID: "",
    tail_num: "",
    seat_capacity: "",
    speed: "",
    locationID: "",
    plane_type: "",
    skids: "",
    propellers: "",
    jet_engines: "",
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
      await api.post("/addAirplane", formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <fieldset>
        <legend>Add Airplane</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="airlineID">airlineID</label>
          <input
            type="text"
            id="airlineID"
            name="airlineID"
            value={formData.airlineID}
            onChange={handleChange}
          />
          <label htmlFor="tail_num">tail_num</label>
          <input
            type="text"
            id="tail_num"
            name="tail_num"
            value={formData.tail_num}
            onChange={handleChange}
          />
          <label htmlFor="seat_capacity">seat_capacity</label>
          <input
            type="text"
            id="seat_capacity"
            name="seat_capacity"
            value={formData.seat_capacity}
            onChange={handleChange}
          />
          <label htmlFor="speed">speed</label>
          <input
            type="text"
            id="speed"
            name="speed"
            value={formData.speed}
            onChange={handleChange}
          />
          <label htmlFor="locationID">locationID (dropdown)</label>
          <input
            type="text"
            id="locationID"
            name="locationID"
            value={formData.locationID}
            onChange={handleChange}
          />
          <label htmlFor="plane_type">plane_type</label>
          <input
            type="text"
            id="plane_type"
            name="plane_type"
            value={formData.plane_type}
            onChange={handleChange}
          />
        <label htmlFor="skids">skids</label>
          <input
            type="text"
            id="skids"
            name="skids"
            value={formData.skids}
            onChange={handleChange}
          />
        <label htmlFor="propellers">propellers</label>
          <input
            type="text"
            id="propellers"
            name="propellers"
            value={formData.propellers}
            onChange={handleChange}
          />
        <label htmlFor="jet_engines">jet_engines</label>
          <input
            type="text"
            id="jet_engines"
            name="jet_engines"
            value={formData.jet_engines}
            onChange={handleChange}
          />

          <button type="submit">Add Airport</button>
        </form>
      </fieldset>
    </div>
  );
};

export default AddAirplane;
