'use client';

import React from 'react';
import Image from 'next/image';

export const FacebookSignInButton = ({loading}: {loading:boolean}) => {
  const handleFacebookSignIn = () => {
    const appId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
    const redirectUri = `${window.location.origin}/${process.env.NEXT_PUBLIC_FACEBOOK_REDIRECT_URI}`;
    const authUrl = `https://www.facebook.com/v10.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}&scope=email`;

    window.location.href = authUrl;
  };

  return (
    <button
      type='button'
      onClick={handleFacebookSignIn}
      disabled={loading}
      className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 transition duration-300 flex items-center justify-center"
    >
      {loading ? (
        <span className="loader"></span>
      ) : (
        <>
          <Image src="/social_logos/facebook.png" alt="Facebook" width={24} height={24} className="mr-2" />
          Sign In with Facebook
        </>
      )}
    </button>
  );
};