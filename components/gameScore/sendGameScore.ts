import { AxiosReqInstance } from "../accounts/utils/axiosInstance";

export const SendGameScore = (score: number) => {
  const protectedRoute = AxiosReqInstance();
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) { 
    const subUri = 'api/games/submitScore/';
    const url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/${subUri}`;
    console.log('the url is:', url);
    protectedRoute.post(url, { score: score });
  }
  else {
    console.error("No access token found in local storage");
    return;
  }
}