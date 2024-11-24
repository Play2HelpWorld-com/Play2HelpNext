'use client';

import React, { useEffect } from 'react';
import axios from 'axios';
import { useSaveTokens } from '../utils/useSaveTokens';


export const FacebookCallback = () => {
  const SaveTokensToLocal = useSaveTokens();
  useEffect(() => {
    const fetchAccessToken = async (code: string) => {
      const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
      const response = await axios.post(`${baseUrl}/api/users/getFbUsrInfo/`, { code });
      SaveTokensToLocal(response.data);
    };
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      fetchAccessToken(code as string);
    }
  }, [SaveTokensToLocal]);

  return <div>Loading...</div>;
};
