import { useState } from "react";
import api from "./api";

const ExtendRoute = () => {
  const [formData, setFormData] = useState({
    routeID: "",
    legID: "",
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
      await api.post("/extendRoute", formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <fieldset>
        <legend>Extend Route</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="routeID">routeID</label>
          <input
            type="text"
            id="routeID"
            name="routeID"
            value={formData.routeID}
            onChange={handleChange}
          />
          <label htmlFor="legID">legID</label>
          <input
            type="text"
            id="legID"
            name="legID"
            value={formData.legID}
            onChange={handleChange}
          />
          <button type="submit">Extend Route</button>
        </form>
      </fieldset>
    </div>
  );
};

export default ExtendRoute;
