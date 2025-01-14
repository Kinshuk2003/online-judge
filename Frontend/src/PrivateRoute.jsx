import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const { token } = useAuth();
    console.log(token);

    return token ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoute;