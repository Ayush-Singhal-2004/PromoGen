'use client'

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";

export default function Home() {

    const { theme, setTheme } = useTheme();

    const handleTheme = () => {
        theme == "dark" ? setTheme("light") : setTheme("dark");
    }

    return (
        <AuroraBackground>
            <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            >

                <nav className="py-3 px-8 flex items-center justify-between border-b border-b-gray-300 dark:border-0">
                    <h1 className="text-3xl dark:text-white">PromoGen</h1>
                    <Button variant="default" onClick={handleTheme}>
                        {
                                localStorage.getItem("theme") == "dark" ? <MdDarkMode /> : <MdLightMode />
                        }
                    </Button>
                </nav>
                <div className="flex flex-col pt-[10vh] px-[4vw] gap-[5vh]">
                    <div className="py-5">
                        <h1 className="text-7xl font-semibold mb-2 dark:to-zinc-300 dark:bg-clip-text text-transparent] dark:text-white">
                            Unleash Creativity <br/>
                            with GenAI
                        </h1>
                        <p className="text-gray-700 dark:bg-gradient-to-tr dark:from-gray-50 dark:to-gray-300 dark:bg-clip-text dark:text-transparent tracking-wider">
                            Instant, dynamic banners and videos for every promotion.
                        </p>
                    </div>
                    <div className="h-[35vh] w-[85vw] flex pt-5 gap-8">
                        <Link href={"/generate-image"}>
                            <Button variant="default">
                                <p className="text-lg p-4">
                                    Generate Image
                                </p>
                            </Button>
                        </Link>
                        <Link href={"/generate-video"}>
                            <Button variant="default">
                                <p className="text-lg p-4">
                                    Generate Video
                                </p>
                            </Button>
                        </Link>
                    </div>
                </div>

            </motion.div>
        </AuroraBackground>
    )
}
