import Link from "next/link";
import { useAppSelector } from "@/configs/redux/hooks";
import { useState } from "react";
import { useAppDispatch } from "@/configs/redux/hooks";
import { fetchLoggedInUser } from "@/configs/redux/auth/authSlice";


interface ProfileModalProps {
  setNavopen: (open: boolean) => void;
  navOpen: boolean;
  className?: string;
  buttonText?: string;
}

export const ProfileModal = ({
  setNavopen,
  navOpen,
  className = "",
  buttonText = "SIGN IN",
}: ProfileModalProps) => {
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
          <button
            type="button"
            className={`cursor-pointer font-medium text-[#757693] hover:underline dark:text-white ${className}`}
            onClick={() => { setIsModalOpen(!isModalOpen);}}
          >
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
                type="button"
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link
          onClick={() => setNavopen(!navOpen)}
          href="/accounts/signin"
          className={`rounded-lg bg-blue-500 px-5 py-2 text-white transition-colors hover:bg-blue-600 ${className}`}
        >
          {buttonText}
        </Link>
      )}
    </>
  );
}

