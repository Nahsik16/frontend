// src/App.js
import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Footer from "./Components/Footer/Footer"
import men_banner from "./Components/assets/banner_mens.png"
import women_banner from "./Components/assets/banner_women.png"
import kid_banner from "./Components/assets/banner_kids.png"
import Chatbot from "./Pages/chat"
import useAuth from "./hooks/useAuth" // Import useAuth

function App() {
    const [showLogin, setShowLogin] = useState(false)
    const { user } = useAuth() // Get user from the useAuth hook

    return (
        <div>
            <BrowserRouter>
                <>
                    {/* {showLogin && !user ? (
                        <LoginSignup setShowLogin={setShowLogin} />
                    ) : (
                        <></>
                    )} */}
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Shop />}></Route>
                        <Route
                            path="/mens"
                            element={
                                <ShopCategory
                                    banner={men_banner}
                                    category="men"
                                />
                            }
                        ></Route>
                        <Route
                            path="/womens"
                            element={
                                <ShopCategory
                                    banner={women_banner}
                                    category="women"
                                />
                            }
                        ></Route>
                        <Route
                            path="/kids"
                            element={
                                <ShopCategory
                                    banner={kid_banner}
                                    category="kid"
                                />
                            }
                        ></Route>
                        <Route path="/product" element={<Product />}>
                            <Route path=":productId" element={<Product />} />
                        </Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="/chat" element={<Chatbot />}></Route>
                    </Routes>
                    <Footer />
                </>
            </BrowserRouter>
        </div>
    )
}

export default App
