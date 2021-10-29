import ProvidersTypeProps from "../Interfaces/ProvidersProps";
import { AuthProvider } from "./Auth";
const Providers = ({ children }: ProvidersTypeProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
