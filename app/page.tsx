'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Playground from "./components/playground";
import { RiToolsFill } from "react-icons/ri";
import { useState } from "react";

export default function Home() {

    const [state, setState] = useState("image");

    const moveDown = () => {
        document.getElementById("section-2")?.scrollIntoView({
            behavior: "smooth"
        });
    }

    const handleTabClick = () => {
        // const innerBox = document.querySelector('#output-area') as HTMLElement;
        // if(state === "image") {
        //     setState("video");
        //     innerBox.classList.remove('left-0');
        //     innerBox.classList.add('left-[calc(100%-50%)]');
        // }
        // else {
        //     setState("image");
        //     innerBox.classList.remove('left-[calc(100%-50%)]');
        //     innerBox.classList.add('left-0');
        // }
    }

    return (
        <div className="dark relative">
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
                            <Button variant="default" onClick={moveDown}>
                                <p className="text-lg p-4">
                                    Start Crafting 
                                </p>
                                <RiToolsFill className="scale-125" />
                            </Button>
                        </div>
                    </div>

                </motion.div>
            </AuroraBackground>
            <div className="absolute h-screen w-screen z-10 top-[98vh] bg-gradient-to-b from-[#18181B] to-slate-900" id="section-2">
                <div className="flex items-center justify-center pt-[8vh]">
                    <Tabs defaultValue="image" className="w-[400px] flex flex-col">
                        <TabsList>
                            <TabsTrigger value="image" 
                            className="w-[50%]" onClick={handleTabClick}>
                                IMAGE
                            </TabsTrigger>
                            <TabsTrigger value="video" 
                            className="w-[50%]" onClick={handleTabClick}>
                                VIDEO
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="image" className="grid justify-center">
                            <Playground  value={"image"} />
                        </TabsContent>
                        <TabsContent value="video" className="grid justify-center">
                            <Playground value={"video"} />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}