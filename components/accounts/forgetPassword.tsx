'use client';
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/users/forgetPassword/`;
    try {
      const response = await axios.post(url, { email: email });
      if (response.status === 200) {
        toast.success("Email sent successfully!");
      }
    } catch (error) {
      console.error("An error occurred while sending email at forgotPassword.tsx", error);
    }
  };
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Forgot Password</h2>
        <p className="text-center text-gray-600">
          Enter your email address below and we’ll send you instructions to reset your password.
        </p>
        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none border-gray-300"
              value={email}
              onChange={HandleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded-lg transition ease-in-out duration-300"
            onClick={HandleSubmit}
          >
            Submit
          </button>
        </form>
        <div className="text-center">
          <a href="/accounts/signin" className="text-blue-600 hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};
