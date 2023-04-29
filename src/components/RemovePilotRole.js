import { useState } from "react";
import api from "./api";

const RemovePilotRole = () => {
  const [formData, setFormData] = useState({
    personID: "",
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
      await api.post("/removePilotRole", formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <fieldset>
        <legend>Remove Pilot Role</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="personID">personID</label>
          <input
            type="text"
            id="personID"
            name="personID"
            value={formData.personID}
            onChange={handleChange}
          />
          <button type="submit">Remove Pilot Role</button>
        </form>
      </fieldset>
    </div>
  );
};

export default RemovePilotRole;
