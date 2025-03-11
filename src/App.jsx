import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Header/Header'
import './assets/font/fonts.css'
import './assets/font/Web Font/style.css'
import './assets/font/simple-line-icons/simple-line-icons.css'
import Footer from './Footer/Footer'
import Store from './Pages/Store/Store'
import Contact from './Pages/Contact/Contact'
import AboutUs from './Pages/AboutUs/AboutUs'
import Product from './Pages/Product/Product'
import { products } from './Pages/Product/Products.js'
import ScrollToTop from './Components/ScrollTop.jsx'
function App() {

    return (
        <Router>
            <ScrollToTop />
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/store' element={<Store />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/products/:productName' element={<Product products={products} />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}

export default App
