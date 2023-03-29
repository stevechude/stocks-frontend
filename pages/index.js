import Format from "@/layout/format";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Format>
        <div>
          <h1 className="text-6xl text-center py-20">
            WELCOME TO STOCKS APPLICATION
          </h1>
          <div className="flex justify-center rounded-sm border-slate-600">
            <button
              onClick={() => router.push("/dashboard")}
              className="bg-orange-400 px-20 py-3 rounded-full text-gray-50 text-xl"
            >
              Dashboard
            </button>
          </div>
          <p className="text-3xl text-center py-15 my-10">
            To view the dashboard you must{" "}
            <Link href={"/signup"} className="text-blue-400">
              Sign Up
            </Link>
          </p>
        </div>
      </Format>
    </>
  );
}
