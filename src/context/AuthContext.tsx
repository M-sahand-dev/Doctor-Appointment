import {
  createContext,
  useContext,
  useState,
  useEffect,
  type JSX,
} from "react";
import { Outlet } from "react-router-dom";

type AuthContextType = {
  session: unknown;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [session, setSession] = useState<unknown>(undefined);
  return (
    <AuthContext.Provider value={{ session }}>
      {children} <Outlet />
    </AuthContext.Provider>
  );
};

export const UserAuth = (): AuthContextType | undefined => {
  return useContext(AuthContext);
};
