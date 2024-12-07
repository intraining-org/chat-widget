import React from "react";
import { MessageType } from "./Message";
import { HeadsetIcon } from "lucide-react";

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

interface ChatBoxType {
    display: boolean;
}

const ChatBox = ({ display }: ChatBoxType) => {
    return (
        <div
            className={`${
                display ? "block" : "hidden"
            } w-[300px] h-[500px] p-4 rounded-xl bg-neutral-900 fixed bottom-24 right-8`}
        >
            <div className="flex flex-col items-center justify-center gap-2">
                <HeadsetIcon className="" strokeWidth={1}></HeadsetIcon>
                <h3 className="text-base">How can we help you?</h3>
            </div>
        </div>
    );
};

export default ChatBox;
