"use client";
import { usePathname } from "next/navigation";

export default function page() {

    const pathname = usePathname()
    const keyword = pathname.slice(1);

    return (
        <main className="h-max flex items-center justify-center">
            <div className="flex items-center gap-2">
                <h1 className="text-3xl">Discover {keyword}s.</h1>
                <img
                    className="h-6"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png" alt="verified"
                    title="verified" />
            </div>
        </main>
    )
}
