import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const AuthContext = React.createContext({});

export function AuthProvider({ children }: Props) {
  const [auth, setAuth] = React.useState({ user: null });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);
