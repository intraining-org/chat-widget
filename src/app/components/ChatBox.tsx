import React from "react";
import { MessageType } from "./Message";
import {HeadsetIcon, SendHorizonal} from "lucide-react";
import {Button} from "@/components/ui/button";
import AutoGrowingTextarea from "@/components/ui/autoGrowingTextArea";
import { motion } from "framer-motion";

const data: MessageType[] = [
    {
        message: ["Hi, How can I help you?"],
        person: "support",
        time: "24 Nov 2024",
    },
    {
        message: ["I need help about booking the flight."],
        person: "user",
        time: "24 Nov 2024",
    },
    {
        message: [
            "Alright! What kinds of help do you need right now?",
            "Could you tell me in details please.",
        ],
        person: "support",
        time: "24 Nov 2024",
    },
];

interface ChatBoxProps{
    theme: "dark" | "light";
}

const ChatBox = ({theme}:ChatBoxProps) => {
    const themeClasses = theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900 border border-gray-300";
    const buttonThemeClasses = theme === "dark" ? "bg-white text-gray-900 hover:bg-gray-300 hover:text-gray-900" : "bg-gray-900 text-white border border-gray-300";
    return (
        <div
            className={`flex flex-col justify-between p-4 rounded-xl absolute bottom-0 right-0 ${themeClasses}`} style={{width: '300px', height: '500px'}}
        >
            <div className="flex flex-col items-center justify-around gap-2">
                <HeadsetIcon className="" strokeWidth={1}></HeadsetIcon>
                <h3 className="text-base">How can we help you?</h3>
            </div>
            <div className={"flex flex-row gap-2 items-end"}>
                <AutoGrowingTextarea className={`${themeClasses}`}/>
                <motion.div whileTap={{scale: 0.9}} whileHover={{scale: 1.05}}>
                    <Button variant="default" size="icon" className={`${buttonThemeClasses}`} type={"submit"}>
                        <SendHorizonal className={"w-5 h-5"}/>
                    </Button>
                </motion.div>

            </div>
        </div>
    );
};

export default ChatBox;
