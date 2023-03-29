import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import Format from "@/layout/format";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

function Signup() {
  const { user, signup } = useAuth();
  //   console.log(user);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <Format>
      <div className="max-w-[400px] mx-auto min-h-[600px] py-20 px-4">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form action="" onSubmit={handleSignup}>
          <div className="my-4">
            <label>Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <AiOutlineMail className="absolute right-2 top-2 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <AiFillLock className="absolute right-2 top-2 text-gray-400" />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-blue-400 text-gray-50 rounded-2xl shadow-xl">
            Sign up
          </button>
        </form>
        <p className="my-4 text-center">
          Already have an account?{" "}
          <Link href={"/signin"} className="text-orange-400">
            Sign in
          </Link>
        </p>
      </div>
    </Format>
  );
}

export default Signup;
