// components/SignUp.js
import { useState, FormEvent } from "react";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log('the UserInfo is ', email, password);
      alert("User signed up successfully!");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message); 
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Sign Up</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignUp;