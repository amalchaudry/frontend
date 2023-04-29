import { useState } from "react";
import api from "./api";

const FlightTakeoff = () => {
  const [formData, setFormData] = useState({
    flightID: "",
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
      await api.post("/flightTakeoff", formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <fieldset>
        <legend>Flight Takeoff</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="flightID">flightID</label>
          <input
            type="text"
            id="flightID"
            name="flightID"
            value={formData.flightID}
            onChange={handleChange}
          />
          <button type="submit">Flight Takeoff</button>
        </form>
      </fieldset>
    </div>
  );
};

export default FlightTakeoff;
