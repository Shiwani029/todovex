import Providers from "../providers";
import { auth } from "@/auth";
import SideBar from "@/components/nav/side-bar";
import MobileNav from "@/components/nav/mobile-nav";

export default async function LoggedInLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();
    return (
        <Providers session={session}>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <SideBar />
                <div className="flex flex-col">
                    <MobileNav />
                    {children}
                </div>
            </div>
        </Providers>
    );
}