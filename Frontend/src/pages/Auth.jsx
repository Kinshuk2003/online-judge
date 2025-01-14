import React, { useState, useEffect} from 'react';
import { Mail, Lock, UserPlus, LogIn, ArrowRight, UserRound } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { loginApi, registerApi } from '../api/auth';
import { useNavigate } from 'react-router-dom';

export default function AuthForm() {
  const Navigator = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setFormData({
      email: form.email.value,
      password: form.password.value,
      username: isLogin ? '' : form.username.value
    });
  };

  const handletoggle = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    const authenticateUser = async () => {
      const responseData = isLogin ? await loginApi(JSON.stringify({email: formData.email, password: formData.password}))  : await registerApi(JSON.stringify({email: formData.email, password: formData.password, username: formData.username}));
      if (responseData) {
        login();
        // Redirect to another page or update state
        Navigator('/');
      } else {
        alert(response.message || 'Something went wrong');
      }
    };

    if (formData.email && formData.password && (isLogin || formData.username)) {
      authenticateUser();
    }
  }, [formData]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Welcome back' : 'Create account'}
            </h1>
            <p className="text-gray-600">
              {isLogin
                ? 'Enter your credentials to access your account'
                : 'Start your journey with us today'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {!isLogin && (
                <div className="relative">
                    <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors"
                    required
                    />
                </div>
            )}
            
            
            
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-colors"
                required
              />
            </div>

            

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              {isLogin ? (
                <>
                  Sign In
                  <LogIn className="h-5 w-5" />
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>

            <div className="text-center mt-4">
              <button
                type="button"
                onClick={handletoggle}
                className="text-gray-600 hover:text-gray-900 font-medium inline-flex items-center gap-2 transition-colors"
              >
                {isLogin ? (
                  <>
                    <UserPlus className="h-5 w-5" />
                    Create an account
                  </>
                ) : (
                  <>
                    <LogIn className="h-5 w-5" />
                    Already have an account?
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}