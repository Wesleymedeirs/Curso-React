import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
  } from "firebase/auth";

  import { useState, useEffect } from "react";

  export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    //cleanep - Zerar as funções já realizadas anteriomente
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth()

    // Função par ao cleanup evitar vazamento de memoria
    function checkIfIsCancelled() {
        if (cancelled) {
          return;
        }
      }


  }