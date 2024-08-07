import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api"
export const AuthContext = createContext({})
function AuthProvider({ children }) {
    const [data, setData] = useState({})
    async function login({ email, password}) {
        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
            localStorage.setItem("@rocketnotes:token", token)
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            setData({ user, token })
        } catch (error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível realizar a autenticação.")
            }
        }
    }
    function logout() {
        localStorage.removeItem("@rocketnotes:user")
        localStorage.removeItem("@rocketnotes:token")   
        setData({})
    }
    async function updateProfile({ user }) {
        console.log(user)
        try {
            await api.put("/users", user)
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
            setData({ user, token: data.token})
            alert("Perfil atualizado com sucesso.")
        }  catch (error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível atualizar o perfil.")
            }
        }
    }
    useEffect(() => {
        const user = localStorage.getItem("@rocketnotes:user")
        const token = localStorage.getItem("@rocketnotes:token")
        if(user && token) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])
    return(
        <AuthContext.Provider value={{
            login, 
            logout, 
            updateProfile, 
            user: data.user
            }}>
            {children}
        </AuthContext.Provider>
    )
}
function useAuth() {
    const context = useContext(AuthContext)
    return context
}
export { AuthProvider, useAuth }
