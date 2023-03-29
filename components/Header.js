import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

function Header() {
  const { user, logout } = useAuth();

  return (
    <div className="rounded-div flex items-center justify-between h-20 font-bold">
      <Link href={"/"}>
        <h1 className="text-2xl cursor-pointer">Stocks App</h1>
      </Link>

      <div>
        {user ? (
          <div className="flex justify-center align-middle">
            <div className="flex justify-center align-middle px-4 py-2">
              Welcome <span className="px-2"> {user.email}</span>
            </div>
            <Link
              onClick={() => logout()}
              href={"/signin"}
              className="bg-red-400 text-btnText px-5 py-2 ml-2 rounded-xl shadow-lg hover:shadow-xl"
            >
              Logout
            </Link>{" "}
          </div>
        ) : (
          <div>
            <Link href={"/signin"} className="p-4 hover:text-accent">
              Sign In
            </Link>
            <Link
              href={"/signup"}
              className="bg-blue-400 text-btnText px-5 py-2 ml-2 rounded-xl shadow-lg hover:shadow-xl"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
