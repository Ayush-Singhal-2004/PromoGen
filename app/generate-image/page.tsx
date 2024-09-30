"use client";

import Link from "next/link"
import { useTheme } from "next-themes"

export default function GenerateImagePage() {

    const { theme, setTheme } = useTheme();

    return (
        <div>
            <nav className="py-5 px-8 flex items-center justify-between border-b border-b-gray-300 dark:border-0">
                    <h1 className="text-3xl dark:text-white">PromoGen</h1>
                    <div className="flex items-center gap-8 pr-10">
                        <Link href={"/"} className="text-white">Home</Link>
                        <Link href={"/generate-image"} className="text-white">Image</Link>
                        <Link href={"/generate-video"} className="text-white">Video</Link>
                    </div>
            </nav>
        </div>
    )
}