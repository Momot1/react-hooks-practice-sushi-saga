import React, {useEffect, useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sendSushiUp, balance}) {
  const [sushiAry, setSushiAry] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`http://localhost:3001/sushis/?_page=${page}&_limit=4`)
      .then(resp => resp.json())
      .then(data => setSushiAry(data))
  }, [page])

  const sushiElements = sushiAry.map(sushi => <Sushi key={sushi.id} name={sushi.name} image={sushi.img_url} price={sushi.price} onSushiClick={handleSushiClick} balance={balance}/>)

  function changePage(){
    setPage(page+1)
  }

  function handleSushiClick(price){
    sendSushiUp(price)
  }

  return (
    <div className="belt">
      {sushiElements}
      <MoreButton onChangePage={changePage}/>
    </div>
  );
}

export default SushiContainer;
