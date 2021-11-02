import { createContext, useEffect, useState } from "react";
import { auth, firebase } from "../../services/firebase";
import { AuthContextPropsType, AuthContextProviderPropsType, UserPropsType } from "./types";

export const AuthContext = createContext({} as AuthContextPropsType);

export const AuthContextProvider = (props: AuthContextProviderPropsType) => {
  const [user, setUser] = useState<UserPropsType>();

  const authentication = (user: firebase.User | null) => {
    if (user) {
      const { displayName, photoURL, uid } = user
      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      })
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      authentication(user);
    });
    return () => {
      unsubscribe();
    }
  }, []);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    authentication(result.user);
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  )
}