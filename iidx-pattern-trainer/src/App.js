import React, { createContext, useContext, useState } from "react";
import "./App.css";

export const KeyContext = createContext({});

function App() {
  const [bufferSize, setBufferSize] = useState(2);
  const keyNums = [];
  for (let i = 1; i < 8; i++) keyNums.push(i.toString());

  const permutationTable = buildPermutationTable();
  console.log(permutationTable);

  return (
    <KeyContext.Provider value={{ keyNums }}>
      <div className="App">
        <header className="App-header">
          <h1>IIDX Pattern Trainer</h1>
          <table>
            <tbody>
              <tr>
                {keyNums.map((num) => (
                  <th key={num} className="tableData">
                    {num}
                  </th>
                ))}
              </tr>
              <Row bufferSize={bufferSize} />
            </tbody>
          </table>
        </header>
      </div>
    </KeyContext.Provider>
  );
}

function Row(props) {
  const keys = useContext(KeyContext);
  const bufferRows = [];
  for (let i = 0; i < props.bufferSize; i++) {
    bufferRows.push(<BufferRow />);
  }
  return (
    <>
      <tr>
        {keys.keyNums.map((num) => (
          <td key={num} className="tableData"></td>
        ))}
      </tr>
      {bufferRows}
    </>
  );
}

function BufferRow(props) {
  const keys = useContext(KeyContext);
  return (
    <tr>
      {keys.keyNums.map((num) => (
        <td className="tableData"></td>
      ))}
    </tr>
  );
}

function buildPermutationTable() {
  let table = {};
  for (let i = 0; i < 7; i++) {}
}

function buildRow(size) {}

export default App;
