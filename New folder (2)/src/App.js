import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import  {Home , Cart , CategoryProduct , Search , ProductSingle} from "./pages/indax"
import Header from "./components/Header/Header"

import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import store from "./store/store"
import { Provider } from "react-redux";


const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
         <Header/>     
         <Sidebar/>
         <Routes>
          {/* home page router */}
         <Route path="/" element={<Home />} />
         {/* Single product Router */}
         <Route path="/product/:id" element={<ProductSingle/>} />
         {/* categories listing router */}
         <Route path="/category/:category" element = {<CategoryProduct/>}/>
         {/* Cart */}
         <Route path="/cart" element={<Cart/>}/>
         {/* searched products */}
         <Route path="/search/:searchTerm" element = {<Search/>}/>

         </Routes>
         {/* <Footer/> */}
      </BrowserRouter>
      
      </Provider>
    </div>
  )
}

export default App