import { useRouter } from "next/router";
import { useState } from "react";
import Button from "@/components/commons/Button";

const Header: React.FC = () => {
  const router = useRouter();
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Handle sign-up logic here (e.g., API call )
    console.log("Signing up with:", { username, email, password });
    // Close the modal after submission
    setIsSignUpModalOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#171D22] bg-opacity-90 backdrop-blur-md py-4 px-8 md:px-16 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[rgb(55,236,58)]">Film<span className="text-[#37d0de]">Verse</span></h1>
        <div className="flex space-x-6">
          <Button
            title="Home"
            action={() => router.push("/")}
            className="text-white hover:text-[#37d0de]"
          />
          <Button
            title="Movies"
            action={() => router.push("/movies", undefined, { shallow: false })}
            className="text-white hover:text-[#37d0de]"
          />
          <Button
            title="Sign Up"
            action={() => setIsSignUpModalOpen(true)} // Open the sign-up modal
            className="bg-[#de37d0] hover:bg-[#c42fb3] text-white font-semibold py-2 px-6 rounded-lg"
          />
        </div>
      </nav>

      {/* Sign Up Modal */}
      {isSignUpModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#1E1E2F] p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSignUp();
              }}
            >
              {/* Username Field */}
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 rounded-lg bg-[#2D2D42] text-white focus:outline-none focus:ring-2 focus:ring-[#37d0de]"
                  placeholder="Enter your username"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded-lg bg-[#2D2D42] text-white focus:outline-none focus:ring-2 focus:ring-[#37d0de]"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 rounded-lg bg-[#2D2D42] text-white focus:outline-none focus:ring-2 focus:ring-[#37d0de]"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                title="Sign Up"
                type="submit"
                className="w-full bg-[#37d0de] hover:bg-[#2aa9b8] text-black font-semibold py-2 px-6 rounded-lg"
              />
            </form>

            {/* Close Button */}
            <Button
              title="Close"
              action={() => setIsSignUpModalOpen(false)}
              className="w-full mt-4 bg-[#de37d0] hover:bg-[#c42fb3] text-white font-semibold py-2 px-6 rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
