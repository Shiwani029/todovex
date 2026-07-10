"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

export default function UserProfile() {
    const session = useSession();
    const imageUrl = session?.data?.user?.image;
    const userName = session?.data?.user?.name;

    if (!imageUrl) {
        return (
            <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-semibold text-gray-700 dark:text-gray-200">
                {userName?.[0]?.toUpperCase() || "?"}
            </div>
        );
    }

    return (
        <div>
            <Image
                src={imageUrl}
                width={24}
                height={24}
                alt="user profile picture"
                className="rounded-full"
            />
        </div>
    );
}