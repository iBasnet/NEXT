"use client";
import { usePathname } from "next/navigation"

export default function page() {

    const pathname = usePathname()
    const keyword = pathname.slice(1);

    return (
        <main className="h-max flex items-center justify-center">
            <h1 className="text-3xl">Discover {keyword}s.</h1>
        </main>
    )
}
