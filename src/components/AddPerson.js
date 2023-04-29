import { useState } from "react";
import api from "./api";

const AddPerson = () => {
  const [formData, setFormData] = useState({
    personID: "",
    first_name: "",
    last_name: "",
    taxID: "",
    locationID: "",
    experience: "",
    flying_airline: "",
    flying_tail: "",
    miles: "",
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
      await api.post("/addPerson", formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <fieldset>
        <legend>Add Person</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="personID">personID</label>
          <input
            type="text"
            id="personID"
            name="personID"
            value={formData.personID}
            onChange={handleChange}
          />
          <label htmlFor="first_name">first_name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <label htmlFor="last_name">last_name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
          <label htmlFor="taxID">taxID</label>
          <input
            type="text"
            id="taxID"
            name="taxID"
            value={formData.taxID}
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
          <label htmlFor="experience">experience</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        <label htmlFor="flying_airline">flying_airline</label>
          <input
            type="text"
            id="flying_airline"
            name="flying_airline"
            value={formData.flying_airline}
            onChange={handleChange}
          />
        <label htmlFor="flying_tail">flying_tail</label>
          <input
            type="text"
            id="flying_tail"
            name="flying_tail"
            value={formData.flying_tail}
            onChange={handleChange}
          />
        <label htmlFor="miles">miles</label>
          <input
            type="text"
            id="miles"
            name="miles"
            value={formData.miles}
            onChange={handleChange}
          />

          <button type="submit">Add Person</button>
        </form>
      </fieldset>
    </div>
  );
};

export default AddPerson;
