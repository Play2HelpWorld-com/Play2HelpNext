'use client'
import React, { useState } from "react";
import axios from "axios";
import { useSaveTokens } from "./utils/useSaveTokens";
import { GoogleSignInButton } from "./googleSignIn";
import { FacebookSignInButton } from "./facebookSignIn";
import { MicrosoftSignInButton } from "./microsoftSignIn";


export const SignIn = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const saveTokensToLocal = useSaveTokens();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
      const Tokens = await axios.post(`${baseUrl}/api/users/signin/`, {
        email: formData.email,
        password: formData.password
      })
      saveTokensToLocal(Tokens.data);
    } catch (err) {
      if (err instanceof Error) {
        if (axios.isAxiosError(err) && err.response) {
          setError(err.response.data.error);
          console.log('the error is', err);
        } else {
          setError('An unexpected error occurred');
          console.log(err);
        }
      } else {
        setError('An unexpected error occurred');
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50 py-12">
      <div className="bg-white p-8 rounded-lg shadow-2xl relative w-full max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
        <div className="space-y-4">
  
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleEmailSignIn}
              >
                Sign In
              </button>
            </div>
          </form>
          
          <GoogleSignInButton />
          <FacebookSignInButton loading={loading}/>
          <MicrosoftSignInButton loading={loading}/>


          <div className="text-center mt-4">
            <p className="text-gray-700">
              Don&apos;t have an account?{" "}
              <a href="/accounts/signUp" className="text-blue-500 hover:text-blue-700">
                Sign Up
              </a>
            </p>
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center mt-4">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};