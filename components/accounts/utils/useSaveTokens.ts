
import { useRouter } from "next/navigation";
import { useAppDispatch } from '@/lib/hooks';
import { fetchLoggedInUser } from '@/lib/features/auth/authSlice';


interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export const useSaveTokens = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const SaveTokensToLocal = (Tokens: Tokens): void => {
    const HandleFetchUser = (): void => {
      dispatch(fetchLoggedInUser());
    }
    console.log('Tokens:', Tokens);
    localStorage.setItem('accessToken', Tokens.accessToken);
    const cookieName = "refreshToken";
    const cookieValue = Tokens.refreshToken;
    const expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1);
    document.cookie = `${cookieName}=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/; SameSite=strict`;
    HandleFetchUser();
    router.push('/');
  }
  return SaveTokensToLocal;
}
