import { useState } from "react";
import SelectTable from "./components/SelectTable";
import AddAirport from "components/AddAirport";
import GrantPilotLicense from "components/GrantPilotLicense";
import AddAirplane from "components/AddAirplane";
import AddPerson from "components/AddPerson";
import OfferFlight from "components/OfferFlight";
import PurchaseTicketAndSeat from "components/PurchaseTicketAndSeat";
import AddUpdateLeg from "components/AddUpdateLeg";
import StartRoute from "components/StartRoute";
import ExtendRoute from "components/ExtendRoute";
import FlightLanding from "components/FlightLanding";
import FlightTakeoff from "components/FlightTakeoff";
import PassengersBoard from "components/PassengersBoard";
import PassengersDisembark from "components/PassengersDisembark";
import AssignPilot from "components/AssignPilot";
import RecycleCrew from "components/RecycleCrew";
import RetireFlight from "components/RetireFlight";
import RemovePassengerRole from "components/RemovePassengerRole";
import RemovePilotRole from "components/RemovePilotRole";

const App = () => {
  const [table, setTable] = useState("airplane");
  const handleTableChange = (event) => setTable(event.target.value);

  return (
    <div className="App">
      <h1>Flight Management</h1>
      <select value={table} onChange={handleTableChange}>
        <optgroup label="Tables">
          <option value="airline">airline</option>
          <option value="airplane">airplane</option>
          <option value="airport">airport</option>
          <option value="flight">flight</option>
          <option value="leg">leg</option>
          <option value="location">location</option>
          <option value="passenger">passenger</option>
          <option value="person">person</option>
          <option value="pilot">pilot</option>
          <option value="pilot_licenses">pilot_licenses</option>
          <option value="route">route</option>
          <option value="route_path">route_path</option>
          <option value="ticket">ticket</option>
          <option value="ticket_seats">ticket_seats</option>
        </optgroup>
        <optgroup label="Views (19-24)">
          <option value="flights_in_the_air">flights_in_the_air</option>
          <option value="flights_on_the_ground">flights_on_the_ground</option>
          <option value="people_in_the_air">people_in_the_air</option>
          <option value="people_on_the_ground">people_on_the_ground</option>
          <option value="route_summary">route_summary</option>
          <option value="alternative_airports">alternative_airports</option>
        </optgroup>
      </select>
      <h3>{table}</h3>
      <SelectTable currentTable={table} key={table} />
      <br />
      {/* <AddAirport />
      <GrantPilotLicense /> */}
      <AddAirplane />
      {/* <AddPerson />
      <OfferFlight />
      <PurchaseTicketAndSeat />
      <AddUpdateLeg />
      <StartRoute />
      <ExtendRoute />
      <FlightLanding />
      <FlightTakeoff />
      <PassengersBoard />
      <PassengersDisembark />
      <AssignPilot />
      <RecycleCrew />
      <RetireFlight />
      <RemovePassengerRole />
      <RemovePilotRole /> */}
    </div>
  );
};

export default App;
