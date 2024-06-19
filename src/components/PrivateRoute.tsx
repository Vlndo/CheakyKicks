import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface PrivateRouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = () => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to="/mon-compte" replace state={{ from: location }} />
    );
};

export default PrivateRoute;
