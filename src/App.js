import { useState } from "react";
import SelectTable from "./components/SelectTable";

const App = () => {
  const [table, setTable] = useState("airplane");
  const handleTableChange = (event) => setTable(event.target.value);
  return (
    <div className="App">
      <select value={table} onChange={handleTableChange}>
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
      </select>
      <h1>{table}</h1>
      <SelectTable currentTable={table} key={table} />
    </div>
  );
};

export default App;
