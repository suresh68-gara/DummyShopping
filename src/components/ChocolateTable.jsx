
// add title on window bar

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const chocolateData = {
  candy: [
    { id: 1, name: "Choco Candy", price: 1, image: "https://elavegan.com/wp-content/uploads/2023/01/homemade-chocolate-bars.jpg" },
    { id: 2, name: "Airheads", price: 1.5, image: "https://www.listchallenges.com/f/items/406cf877-5307-41e8-ac16-2cd6569d94d6.jpg" },
    { id: 3, name: "Candy Corn", price: 1.5, image: "https://www.listchallenges.com/f/items/e91ff7d8-06e5-4da1-8f04-d96be0827147.jpg" },
    { id: 4, name: "Gumdrops", price: 1.25, image: "https://www.listchallenges.com/f/items/6806328a-545b-421d-b0e1-1156bf31dd42.jpg" },
    { id: 5, name: "Swedish Fish", price: 1.25, image: "https://www.listchallenges.com/f/items/e5cd54fe-88ed-429c-9f51-29e95e852f75.jpg" },
    { id: 6, name: "Warheads", price: 1.2, image: "https://www.listchallenges.com/f/items/b4a43810-867a-4a0b-ae9b-5f34214d3f1b.jpg" },
    { id: 7, name: "Whistle pop", price: 1.1, image: "https://www.listchallenges.com/f/items/4707658a-f9f0-4c30-8c38-d3c189df2a0e.jpg" }
  ],
  cookie: [
    { id: 8, name: "Macarons", price: 2, image: "https://cdn.pixabay.com/photo/2023/01/13/17/30/macarons-7716584_1280.jpg" },
    { id: 9, name: "Decorating Icing", price: 2.5, image: "https://cdn.pixabay.com/photo/2020/12/06/16/11/ornamentation-5809248_1280.jpg" },
    { id: 10, name: "Macarons", price: 1.5, image: "https://cdn.pixabay.com/photo/2023/03/13/21/43/macarons-7850852_1280.jpg" },
    { id: 11, name: "Heart treat", price: 1.8, image: "https://cdn.pixabay.com/photo/2021/02/13/16/34/cookies-6012078_1280.jpg" },
    { id: 12, name: "Milk Sweet", price: 2.2, image: "https://cdn.pixabay.com/photo/2020/11/01/23/13/cookies-5705161_1280.jpg" },
    { id: 13, name: "Cake Chocolate", price: 2.3, image: "https://cdn.pixabay.com/photo/2017/08/29/22/19/chocolate-cake-2695084_1280.jpg" }
  ],
  icecream: [
    { id: 14, name: "Ice Cream Chocolate", price: 3, image: "https://cdn.pixabay.com/photo/2017/11/30/08/56/ice-cream-2987955_1280.jpg" },
    { id: 15, name: "Ice Cream Flavour", price: 3.5, image: "https://cdn.pixabay.com/photo/2019/08/12/13/45/ice-cream-4401300_1280.jpg" },
    { id: 16, name: "Strawberry", price: 3.5, image: "https://cdn.pixabay.com/photo/2017/04/18/15/10/strawberry-ice-cream-2239377_1280.jpg" },
    { id: 17, name: "Bowl Chocolate", price: 3.75, image: "https://cdn.pixabay.com/photo/2016/12/26/16/09/bowl-1932375_1280.jpg" },
    { id: 18, name: "Waffle Candy", price: 4, image: "https://cdn.pixabay.com/photo/2019/11/07/13/05/waffle-4608843_1280.jpg" },
    { id: 19, name: "Mint Ice Cream", price: 3.8, image: "https://cdn.pixabay.com/photo/2020/08/15/04/22/mint-ice-cream-rolls-5489580_1280.jpg" }
  ],
  drink: [
    { id: 20, name: "Hot Chocolate Coco Drink", price: 2, image: "https://tse4.mm.bing.net/th/id/OIP._gkZiZUYT5xN3wLXgWAs8gHaLH?pid=Api&P=0&h=220" },
    { id: 21, name: "Bitter Chocolate", price: 2.5, image: "https://tse2.mm.bing.net/th/id/OIP.8FIBnDSEnYXYJzl8sXGXxwHaEK?pid=Api&P=0&h=220" },
    { id: 22, name: "Caramelised White Chocolate", price: 3.5, image: "https://tse3.mm.bing.net/th/id/OIP.slRQV9hTmmAf4ebQvIQLTAHaJl?pid=Api&P=0&h=220" },
    { id: 23, name: "Choco Frappe", price: 3.25, image: "https://tse1.mm.bing.net/th/id/OIP.ziTcwu_mTiVLGkXn6zCSJAHaLG?pid=Api&P=0&h=220" },
    { id: 24, name: "White Chocolate", price: 3, image: "https://tse1.mm.bing.net/th/id/OIP.Rl2CXIb_PSpRVP8HqF5WawHaLH?pid=Api&P=0&h=220" },
    { id: 25, name: "Choco Smoothie", price: 3.75, image: "https://tse2.mm.bing.net/th/id/OIP.NpxMF3-A1JmFSKzAm_NLIQHaEV?pid=Api&P=0&h=220" }
  ]
};

function ChocolateTable() {
  const { type } = useParams();
  const data = chocolateData[type] || [];
  const [toasts, setToasts] = useState([]);

  // Set document title based on chocolate type
  useEffect(() => {
    const titles = {
      candy: 'Candy Menu',
      cookie: 'Cookie Menu',
      icecream: 'Ice Cream Menu',
      drink: 'Chocolate Menu'
    };
    
    if (type && titles[type]) {
      document.title = `${titles[type]}`;
    } else {
      document.title = 'Chocolate Menu';
    }
  }, [type]);

  // Auto-remove toasts after 3 seconds
  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts(prev => prev.slice(1));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(i => i.id === item.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ 
        ...item, 
        quantity: 1
      });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    showToast(`${item.name} added to cart!`);
  };

  const showToast = (message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
  };

  return (
    <div style={{ padding: '20px', position: 'relative' }}>
      {/* Toast Container */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
      }}>
        {toasts.map(toast => (
          <div 
            key={toast.id}
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '12px 20px',
              borderRadius: '4px',
              marginBottom: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              animation: 'slideIn 0.3s, fadeOut 0.5s 2.5s',
              opacity: 1,
              transform: 'translateX(0)'
            }}
          >
            {toast.message}
          </div>
        ))}
      </div>

      {/* Global Animation Styles */}
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }
        `}
      </style>

      <h3 style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        color: '#4a2c2a',
        borderBottom: '2px solid chocolate',
        paddingBottom: '10px'
      }}>
        {type.charAt(0).toUpperCase() + type.slice(1)} Menu
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '25px',
        justifyContent: 'center'
      }}>
        {data.map((item) => (
          <div key={item.id} style={{
            border: '1px solid #e0e0e0',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s',
            backgroundColor: 'white',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <img 
              src={item.image} 
              alt={item.name} 
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
                borderBottom: '1px solid #eee'
              }} 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/250x180?text=Image+Not+Found";
              }}
            />
            <div style={{ padding: '15px' }}>
              <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>{item.name}</h4>
              <p style={{ 
                fontSize: '18px', 
                fontWeight: 'bold',
                color: '#c77905',
                margin: '5px 0 15px 0'
              }}>
                ${item.price.toFixed(2)}
              </p>
              <button
                onClick={() => addToCart(item)}
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  transition: 'background-color 0.2s',
                  ':hover': {
                    backgroundColor: '#45a049'
                  }
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChocolateTable;