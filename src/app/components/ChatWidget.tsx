"use client";
import React, {Suspense, useState} from "react";
import {MessageCircle, X} from "lucide-react";
import {motion} from "framer-motion";
import ChatBox from "./ChatBox";
import {Theme} from "@/types";

interface ChatWidgetProps {
    apiKey: string;
    theme: Theme
}

// TODO: Add api key prop to ChatBox
const ChatWidget = ({theme = Theme.LIGHT}: ChatWidgetProps) => {
    const [openChatBox, setOpenChatBox] = useState(false);
    const themeClasses = theme === Theme.DARK? "bg-gray-900 text-white " : "bg-white text-gray-900 border border-gray-300";

    return (
        <div className="fixed bottom-8 right-8">
            <motion.div
                className={`cursor-pointer p-2 rounded-full w-12 h-12 flex justify-center ${themeClasses} items-center hover:scale-110`}
                onClick={() => setOpenChatBox(!openChatBox)}
                whileTap={{scale: 0.9}}
                whileHover={{scale: 1.15}}
            >
                {!openChatBox ? (
                    <MessageCircle className="" strokeWidth={1}></MessageCircle>
                ) : (
                    <X strokeWidth={1}></X>
                )}
            </motion.div>
            <motion.div initial={{opacity: 0, y: 20, scale: 0.8}}
                        animate={{opacity: openChatBox ? 1 : 0, y: openChatBox ? 0 : 20, scale: openChatBox ? 1 : 0.8}}
                        transition={{duration: 0.2, ease: "easeOut"}}
                        exit={{opacity: 0, y: 20, scale: 0.8}}
                        className={`absolute bottom-16 right-4 w-[300px]`}>
                <Suspense fallback={<div>Loading...</div>}>
                    <ChatBox theme={theme}/>
                </Suspense>
            </motion.div>
        </div>
    );
};

export default ChatWidget;
