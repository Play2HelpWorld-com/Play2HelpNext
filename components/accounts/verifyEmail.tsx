'use client' 
import { useEffect } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export const VerifyEmail = ({token}:{token: string}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const verifyEmail = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/users/verifyEmail/`, {
        token: token
      });
      if (response.status === 200) {
        setIsLoading(false);
        toast.success("Email verified successfully!");
        router.push('/accounts/signin');
      } else {
        setIsLoading(false);
        toast.error("Failed to verify email.");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("An error occurred while verifying email.");
    }
  };

  useEffect(() => {
    if (token) {
      verifyEmail();
    }
  }, [token]);

  return (
    <div>
      {isLoading ? (
        <h1 className="text-black mt-40">Loading...</h1>
      ) : (
        <h1 className="text-black mt-40">Verify Email</h1>
      )}
    </div>
  );
}
