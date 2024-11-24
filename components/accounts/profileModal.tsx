import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";
import { useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { fetchLoggedInUser } from "@/lib/features/auth/authSlice";


export const ProfileModal = () => {
  const authState = useAppSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    dispatch(fetchLoggedInUser());
  };

  return (
    <>
      {authState.isAuthenticated ? (
        <div className="relative group">
          <button type="button" className="text-white font-medium cursor-pointer hover:underline" onClick={() => { setIsModalOpen(!isModalOpen); console.log('name clicked') }}>
            {authState.loogedInUser.name}
          </button>
          {isModalOpen && (
            <div className="absolute group-hover:block right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-10">
              <Link
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </Link>
              <button
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link href="/accounts/signIn" className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          SIGN IN
        </Link>
      )}
    </>
  );
}

