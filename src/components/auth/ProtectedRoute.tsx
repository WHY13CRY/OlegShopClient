import { JSX } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";


type ProtectedRouteProps = {
  children: JSX.Element
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
  const { isLoggedIn } = useAuth()
  return isLoggedIn ? children : <Navigate to="/signIn" replace/> 
}
 
export default ProtectedRoute;