'use client';

import React, { useEffect } from 'react';
import axios from 'axios';
import { useSaveTokens } from '../utils/useSaveTokens';


const MicrosoftCallback = () => {
  const saveTokens = useSaveTokens();
  useEffect(() => {
    const fetchAccessToken = async (code: string) => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
        const response = await axios.post(`${baseUrl}/api/users/getMsUsrInfo/`, { code });

        saveTokens(response.data);

      } catch (error) {
        console.error('Failed to sign in with Microsoft', error);
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      fetchAccessToken(code as string);
    }
  }, [saveTokens]);

  return <div>Loading...</div>;
};

export default MicrosoftCallback;