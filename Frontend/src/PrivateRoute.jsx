import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoute;