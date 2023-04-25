import { useState } from "react";
import api from "./api";

const GrantPilotLicense = () => {
  const [formData, setFormData] = useState({
    personID: "p1",
    licenseID: "prop",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  // when the submit button is pressed, it makes a post request to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/grantPilotLicense", formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <fieldset>
        <legend>Grant Pilot License</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="personID">personID</label>
          <input
            type="text"
            id="personID"
            name="personID"
            value={formData.personID}
            onChange={handleChange}
          />
          <label htmlFor="licenseID">licenseID</label>
          <input
            type="text"
            id="licenseID"
            name="licenseID"
            value={formData.licenseID}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </fieldset>
    </div>
  );
};

export default GrantPilotLicense;
