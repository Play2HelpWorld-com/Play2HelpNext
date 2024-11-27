"use client";
import React, { useState } from "react";
import axios from "axios";
import { useSaveTokens } from "@/utils/accounts/useSaveTokens";
import { GoogleSignInButton } from "./googleSignIn";
import { FacebookSignInButton } from "./facebookSignIn";
import { MicrosoftSignInButton } from "./microsoftSignIn";

export const SignIn = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const saveTokensToLocal = useSaveTokens();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
      const Tokens = await axios.post(`${baseUrl}/api/users/signin/`, {
        email: formData.email,
        password: formData.password,
      });
      saveTokensToLocal(Tokens.data);
    } catch (err) {
      if (err instanceof Error) {
        if (axios.isAxiosError(err) && err.response) {
          setError(err.response.data.error);
          console.log("the error is", err);
        } else {
          setError("An unexpected error occurred");
          console.log(err);
        }
      } else {
        setError("An unexpected error occurred");
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 py-12">
      <div className="relative mx-auto w-full max-w-md rounded-lg bg-white p-8 shadow-2xl">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Sign In
        </h2>
        <div className="space-y-4">
          <form>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                id="password"
                className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                onClick={handleEmailSignIn}
              >
                Sign In
              </button>
            </div>
          </form>

          <GoogleSignInButton loading={loading} />
          <FacebookSignInButton loading={loading} />
          <MicrosoftSignInButton loading={loading} />

          <div className="mt-4 text-center">
            <p className="text-gray-700">
              Don&apos;t have an account?{" "}
              <a
                href="/accounts/signup"
                className="text-blue-500 hover:text-blue-700"
              >
                Sign Up
              </a>
            </p>
          </div>
          {error && (
            <p className="mt-4 text-center text-sm text-red-500">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};
