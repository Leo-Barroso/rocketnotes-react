import { Routes, Route } from "react-router-dom";
import { Login } from '../pages/Login'
import { Logout } from '../pages/Logout'
export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/register" element={<Logout></Logout>}></Route>
        </Routes>
    )
}