import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import Menu from './pages/Menu/Menu';
import ProductDetails from './pages/ProductDetails/ProductDetails';

const App = () => {
  const [comboDishes, setComboDishes] = useState([]);
  const [pizzaDishes, setPizzaDishes] = useState([]);
  const [chickenDishes, setChickenDishes] = useState([]);
  const [appetizerDishes, setAppetizerDishes] = useState([]);
  const [pastaDishes, setPastaDishes] = useState([]);
  const [saladDishes, setSaladDishes] = useState([]);
  const [drinkDishes, setDrinkDishes] = useState([]);

  useEffect(() => {
    // Gọi API Combo
    fetch('https://6469c33a03bb12ac20922ba6.mockapi.io/api/pizza/product')
      .then(response => response.json())
      .then(data => setComboDishes(data));

    // Gọi API Pizza
    fetch('https://6469caf903bb12ac2092bad9.mockapi.io/product-my-y')
      .then(response => response.json())
      .then(data => setPizzaDishes(data));

    // Gọi API Gà Giòn
    fetch('https://6469c33a03bb12ac20922ba6.mockapi.io/api/pizza/product')
      .then(response => response.json())
      .then(data => setChickenDishes(data));

    // Gọi API Khai vị
    fetch('https://6469c33a03bb12ac20922ba6.mockapi.io/api/pizza/product')
      .then(response => response.json())
      .then(data => setAppetizerDishes(data));

    // Gọi API Mỳ ý
    fetch('https://6469c33a03bb12ac20922ba6.mockapi.io/api/pizza/product')
      .then(response => response.json())
      .then(data => setPastaDishes(data));

    // Gọi API Salad
    fetch('https://645e646812e0a87ac0ef326a.mockapi.io/FoodApp/api/v1/salad')
      .then(response => response.json())
      .then(data => setSaladDishes(data));

    // Gọi API Thức uống
    fetch('https://645e646812e0a87ac0ef326a.mockapi.io/FoodApp/api/v1/drinks')
      .then(response => response.json())
      .then(data => setDrinkDishes(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/menu"
          element={<Menu
            comboDishes={comboDishes}
            pizzaDishes={pizzaDishes}
            chickenDishes={chickenDishes}
            appetizerDishes={appetizerDishes}
            pastaDishes={pastaDishes}
            saladDishes={saladDishes}
            drinkDishes={drinkDishes}
          />}
        />
        <Route
          path="/dish-details/:id"
          element={<ProductDetails
            comboDishes={comboDishes}
            pizzaDishes={pizzaDishes}
            chickenDishes={chickenDishes}
            appetizerDishes={appetizerDishes}
            pastaDishes={pastaDishes}
            saladDishes={saladDishes}
            drinkDishes={drinkDishes}
          />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

       
          

