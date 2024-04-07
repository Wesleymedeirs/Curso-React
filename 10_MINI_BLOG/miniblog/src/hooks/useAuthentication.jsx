import {db} from '../firebase/config'

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

        const createUser = async (data) => {
          //Verificar se as funções estão canceladas
          checkIfIsCancelled()

          setLoading(true)
          setError(null)

          try {
            
            const {user} = await createUserWithEmailAndPassword(
              auth,
              data.email,
              data.password
            )

            await updateProfile(user, {
              displayName: data.displayName
            })
            setLoading(false)
            return user

          } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if(error.message.includes('Password')){
              systemErrorMessage = 'A senha precisa conter pelo menos 6 caracteres.'
            }else if(error.message.includes('email-already')){
              systemErrorMessage = 'E-mail já cadastrado.'
            }else{
              systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.'
            }
            setLoading(false)
            setError(systemErrorMessage)
          }

          
        }

        useEffect(() => {
          return () => setCancelled(true)
        }, []) //Array de dependencia vazio pois será executada apenas uma vez

        return{
          auth,
          createUser,
          error,
          loading,
        }

  }