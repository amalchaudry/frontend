import { useState } from "react";
import api from "./api";

const PassengersDisembark = () => {
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
      await api.post("/passengersDisembark", formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <fieldset>
        <legend>Passengers Disembark</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="flightID">flightID</label>
          <input
            type="text"
            id="flightID"
            name="flightID"
            value={formData.flightID}
            onChange={handleChange}
          />
          <button type="submit">Passengers Disembark</button>
        </form>
      </fieldset>
    </div>
  );
};

export default PassengersDisembark;
