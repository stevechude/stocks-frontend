import ProtectedRoute from "@/components/ProtectedRoute";
import { AuthContextProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import { useRouter } from "next/router";
const noAuthRequiredPages = ["/", "/signin", "/signup"];

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      {noAuthRequiredPages.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}
