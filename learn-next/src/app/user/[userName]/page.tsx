"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type User = {
    nam: String,
    isVerified: Boolean,
    friends: number
}

export default function Page() {
    const { userName } = useParams();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        async function fetchUser() {
            const response = await fetch('http://localhost:4000/user');
            const data = await response.json();
            const currentUser = await data.find((user: { name: string }) => user.name === userName);
            setUser(currentUser);
        }
        fetchUser()
    }, []);

    // console.log(user);

    return (
        <main className="h-[calc(100vh-7rem)] bg-[#001] flex items-center justify-center">
            <div className="flex items-center gap-2">
                <h1 className="text-3xl opacity-50">user/</h1>
                <h1 className="text-3xl">@{userName}</h1>
                {
                    user?.isVerified &&
                    (
                        <img
                            className="h-6"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png" alt="verified"
                            title="verified" />
                    )
                }
            </div>
        </main>
    );
}
