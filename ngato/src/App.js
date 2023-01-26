import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import ShopContextProvider from './context/ShopContext';
import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }


  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      console.log ("Something went wrong.")
    }

    return this.props.children; 
  }
}

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
          <Router>

            <Navbar />

            <Routes>
              <Route path='/' element={<Shop/>} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
          </Router>
      </ShopContextProvider>

    </div>
  );
}

export default App;
