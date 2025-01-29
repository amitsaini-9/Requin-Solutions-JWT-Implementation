import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        Welcome to My Assesment App for JWT Implementation Check
      </h1>
      <div className="flex justify-center gap-4 mt-4 text-lg font-bold">
        <Link href="/register">
          <Button>Register</Button>
        </Link>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
}
