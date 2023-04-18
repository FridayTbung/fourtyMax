import { Navigate } from "react-router-dom";

const ProtectRoute = ({ isAllowed, children }) => {
  return isAllowed ? children : <Navigate to="/" />;
};

export default ProtectRoute;
