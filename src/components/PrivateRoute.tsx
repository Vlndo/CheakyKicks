import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
    isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            alert("You are not authenticated");
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? <Outlet /> : null;
};

export default PrivateRoute;
