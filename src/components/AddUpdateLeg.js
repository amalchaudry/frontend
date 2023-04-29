import { useState } from "react";
import api from "./api";

const AddUpdateLeg = () => {
  const [formData, setFormData] = useState({
    legID: "",
    distance: "",
    departure: "",
    arrival: "",
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
      await api.post("/addupdateLeg", formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <fieldset>
        <legend>Add or Update Leg</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="legID">legID</label>
          <input
            type="text"
            id="legID"
            name="legID"
            value={formData.legID}
            onChange={handleChange}
          />
          <label htmlFor="distance">distance</label>
          <input
            type="text"
            id="distance"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
          />
          <label htmlFor="departure">departure</label>
          <input
            type="text"
            id="departure"
            name="departure"
            value={formData.departure}
            onChange={handleChange}
          />
          <label htmlFor="arrival">arrival</label>
          <input
            type="text"
            id="arrival"
            name="arrival"
            value={formData.arrival}
            onChange={handleChange}
          />

          <button type="submit">Add or Update Leg</button>
        </form>
      </fieldset>
    </div>
  );
};

export default AddUpdateLeg;
