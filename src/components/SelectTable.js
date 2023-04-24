import { useEffect, useState } from "react";
import api from "./api";
// import css
import "./SelectTable.css";

const SelectTable = (props) => {
  const [selectTable, getSelectTable] = useState([]);

  useEffect(() => {
    api
      // get it from props.setTable
      .get("/" + props.currentTable)
      .then((response) => {
        getSelectTable(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderTableHeaders = () => {
    if (selectTable.length > 0) {
      const keys = Object.keys(selectTable[0]);
      return (
        <tr>
          {keys.map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      );
    }
  };

  const renderTableData = () => {
    return (
      selectTable &&
      selectTable.map((item, index) => {
        const values = Object.values(item);
        return (
          <tr key={index}>
            {values.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        );
      })
    );
  };

  return (
    <table>
      <thead>{renderTableHeaders()}</thead>
      <tbody>{renderTableData()}</tbody>
    </table>
  );
};

export default SelectTable;
