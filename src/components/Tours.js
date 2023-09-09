import Card from "./Card";
import React from "react";

const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      <div>
        <h2>plan with love</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
};
export default Tours;
