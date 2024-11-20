'use client'


import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from "firebase/auth";
import { auth } from "./firebase"

export const SignIn = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignIn = async (provider: GoogleAuthProvider | FacebookAuthProvider | OAuthProvider) => {
    setLoading(true);
    setError(null);
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User signed in:', result.user);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => handleSignIn(new GoogleAuthProvider());
  const handleFacebookSignIn = () => handleSignIn(new FacebookAuthProvider());
  const handleMicrosoftSignIn = () => handleSignIn(new OAuthProvider('microsoft.com'));

  return (
    <div className="space-y-4 absolute top-10">
      <button
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
      >
        {loading ? 'Signing in with Google...' : 'Sign In with Google'}
      </button>
      <button
        onClick={handleFacebookSignIn}
        disabled={loading}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Signing in with Facebook...' : 'Sign In with Facebook'}
      </button>
      <button
        onClick={handleMicrosoftSignIn}
        disabled={loading}
        className="w-full p-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50"
      >
        {loading ? 'Signing in with Microsoft...' : 'Sign In with Microsoft'}
      </button>
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};