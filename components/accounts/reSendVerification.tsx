import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

export const ResendVerification = ({ emailProp }: { emailProp: string}) => {
  const [email, setEmail] = useState(emailProp);
  const handleSendVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('resend button has been clicked');

    return;
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
      await axios.post(`${baseUrl}/api/users/resendVerification/`, {
        email: email,
      });
      toast.success("Verification link sent!");
    } catch (err) {
      toast.error("Failed to send verification");
    }
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(('chane happened'))
    setEmail(event.target.value);
  }

  return (
    <div className="bg-red-500 p-6 text-gray-700 dark:text-white text-center rounded-lg shadow-lg mt-40 mx-auto max-w-md">
      <p className="text-lg font-semibold">
        Your account is not verified. Please verify your account first.
      </p>
      <p> check your mail for the verification link </p>
      or

      <form className="mt-4 flex flex-col items-center">
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={handleChange}
          className="max-w-[350px] p-2 w-full border-b border-stroke !bg-white focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:!bg-black dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
        />
        <button
          type="submit"
          onClick={handleSendVerification}
          className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-blue-500 px-6 py-3 font-medium text-white shadow-md duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Send Verification Link
        </button>
      </form>
    </div>
  )
}