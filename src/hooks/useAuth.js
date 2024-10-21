// src/hooks/useAuth.js
import { useState, useEffect } from "react"
import { auth, signInWithGoogle } from "../services/firebase.js" // Import Firebase auth and Google login
import { onAuthStateChanged, signOut } from "firebase/auth"

const useAuth = () => {
    const [user, setUser] = useState(null)

    // Monitor the authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser) // Set the user when authenticated
        })
        return () => unsubscribe()
    }, [])

    // Logout function
    const logout = () => {
        signOut(auth).then(() => setUser(null))
    }

    return { user, loginWithGoogle: signInWithGoogle, logout }
}

export default useAuth
