"use client";
import { useParams } from "next/navigation";

export default function Page() {
    const { clanName } = useParams();

    return (
        <main className="h-[calc(100vh-7rem)] bg-[#001] flex items-center justify-center">
            <div className="flex items-center gap-2">
                <h1 className="text-3xl opacity-55">clan/ </h1>
                <h1 className="text-3xl">#{clanName}</h1>
                <img
                    className="h-6"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png" alt="verified"
                    title="verified" />
            </div>
        </main>
    )
}