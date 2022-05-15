import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./../../UserContext";
import Home from "../Home";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Product from "../Product";
import Shopping from "../Shopping";
import Payment from "../Payment";

function App() {

    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:idProduct" element={<Product />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/shopping" element={<Shopping />} />
                    <Route path="/payment" element={<Payment />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;