import { Navigate } from "react-router-dom";

const ProtectRoute = ({ isAllowed, children }) => {
  console.log(isAllowed);
  return isAllowed ? children : <Navigate to="/" />;
};

export default ProtectRoute;
