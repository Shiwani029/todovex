import Tasks from "@/components/todovex/tasks";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signOutAction } from "@/actions/auth-actions";
import UserProfile from "@/components/nav/user-profile";

export default function LoggedInPage() {
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-6">
      <div className="flex w-full max-w-4xl justify-between items-center">
        <h1 className="text-3xl font-bold">TodoVex Dashboard</h1>
        <form action={signOutAction}>
          <Button variant="destructive">Log out</Button>
        </form>
      </div>

      <div className="w-full max-w-4xl mt-4">
        <UserProfile />
        <Tasks />
      </div>
    </main>
  );
}