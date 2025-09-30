import { Navigate, Outlet } from "react-router-dom";
import AuthGate from "./AuthGate";

const RequireName = () => {
  const userName = localStorage.getItem("username");

  // If no name → redirect to home to trigger prompt
  if (!userName) {
    return <AuthGate></AuthGate>
  }

  return <Outlet />;
};

export default RequireName;
