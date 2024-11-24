'use client';

import React from 'react';
import Image from 'next/image';

export const GoogleSignInButton = ({loading}: {loading: boolean}) => {
  const handleGoogleSignIn = () => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const redirectUri = `${window.location.origin}/${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}`;
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20profile%20email`;

    window.location.href = authUrl;
  };

  return (
    <button
      type='button'
      onClick={handleGoogleSignIn}
      disabled={loading}
      className="w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 transition duration-300 flex items-center justify-center"
    >
      {loading ? (
        <span className="loader"></span>
      ) : (
        <>
          <Image src="/social_logos/google.png" alt="Google" width={24} height={24} className="mr-2" />
          Sign In with Google
        </>
      )}
    </button>
  );
};