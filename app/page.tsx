import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signInAction } from "@/actions/auth-actions";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Todovex</h1>
      <Button>Hi</Button>
      <form action={signInAction}>
        <Button>Log in</Button>
      </form>
    </main>
  );
}