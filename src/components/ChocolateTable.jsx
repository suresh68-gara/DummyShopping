import React from 'react';
import { useParams } from 'react-router-dom';

const chocolateData = {
  candy: [
    { id: 1, name: "Choco Candy", price: "$1" },
    { id: 2, name: "Nut Candy", price: "$1.5" },
    {id: 2, name: "dry fruit candy", price: "$1.5"}
  ],
  cookie: [
    { id: 1, name: "Chocolate Chip", price: "$2" },
    { id: 2, name: "Double Fudge", price: "$2.5" },
    {id: 2, name: "Nut cookie", price: "$1.5"}
  ],
  icecream: [
    { id: 1, name: "Chocolate Ice Cream", price: "$3" },
    { id: 2, name: "Choco Vanilla", price: "$3.5" },
    { id: 2, name: "Vanilla", price: "$3.5" }
  ],
  drink: [
    { id: 1, name: "Hot Chocolate", price: "$2" },
    { id: 2, name: "Iced Mocha", price: "$2.5" }
  ]
};

function ChocolateTable() {
  const { type } = useParams();
  const data = chocolateData[type] || [];

  return (
    <div>
      <h3>{type.charAt(0).toUpperCase() + type.slice(1)} Menu</h3>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Chocolate Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChocolateTable;
