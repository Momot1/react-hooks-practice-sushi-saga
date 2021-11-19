import React, {useState} from "react";

function Sushi({name, price, image, onSushiClick, balance}) {
  const [isEaten, setIsEaten] = useState(false)

  function handleSushiClick(){
    if(balance >= price){
      setIsEaten(true)
      onSushiClick(price)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {/* {isEaten} */}
        {isEaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
