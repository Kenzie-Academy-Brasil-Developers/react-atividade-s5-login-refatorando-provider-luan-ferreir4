import { UseAuth } from "../../Providers/Auth";

export const Logout = () => {
  const { signOut } = UseAuth();
  const handleLogout  = () => {
    signOut();
  }

  return <button onClick={handleLogout}>Sair</button>
};
