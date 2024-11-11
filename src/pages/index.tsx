//access to env process.env.NEXT_PUBLIC_HOST_URL
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setInterval(() => {
      router.push("/login/login");
    }, 3000);
  }, [router]);

  return (
    <>
      <div className="flex align-center justify-center mt-10">
        <p className="mx-auto">Hello</p>
      </div>
    </>
  );
}
