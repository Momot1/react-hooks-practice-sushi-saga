import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

// const API = "http://localhost:3001/sushis";

function App() {
  const [balance, setBalance] = useState(100)
  const [plates, setPlates] = useState([])

  console.log(balance)
  function setNewBalance(price){
    setBalance(balance-price)
    setPlates([...plates, price])
  }

  return (
    <div className="app">
      <SushiContainer sendSushiUp={setNewBalance} balance={balance}/>
      <Table balance = {balance} plates={plates}/>
    </div>
  );
}

export default App;
