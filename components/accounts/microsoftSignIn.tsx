'use client';

import React from 'react';
import Image from 'next/image';

export const MicrosoftSignInButton = ({loading} : {loading: boolean}) => {
  const handleMicrosoftSignIn = () => {
    const clientId = process.env.NEXT_PUBLIC_MICROSOFT_CLIENT_ID;
    const redirectUri = encodeURIComponent(`${window.location.origin}/${process.env.NEXT_PUBLIC_MICROSOFT_REDIRECT_URI}`);
    const scopes = encodeURIComponent('User.Read openid profile email');

    const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?` +
      `client_id=${clientId}` +
      `&response_type=code` +
      `&redirect_uri=${redirectUri}` +
      `&response_mode=query` +
      `&scope=${scopes}`;

    window.location.href = authUrl;
  };

  return (
    <button
      type='button'
      onClick={handleMicrosoftSignIn}
      disabled={loading}
      className="w-full p-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 transition duration-300 flex items-center justify-center"
    >
      {loading ? (
        <span className="loader"></span>
      ) : (
        <>
          <Image src="/social_logos/microsoft.png" alt="Microsoft" width={24} height={24} className="mr-2" />
          Sign In with Microsoft
        </>
      )}
    </button>
  );
};