"use client";
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import ChatBox from "./ChatBox";
// TODO: Add api key prop to ChatBox
const ChatWidget = () => {
    const [openChatBox, setOpenChatBox] = useState(false);
    return (
        <div className="fixed bottom-8 right-8">
            <div
                className="transform duration-200 cursor-pointer p-2 bg-neutral-900 rounded-full w-12 h-12 flex justify-center items-center hover:scale-125"
                onClick={() => setOpenChatBox(!openChatBox)}
            >
                {!openChatBox ? (
                    <MessageCircle className="" strokeWidth={1}></MessageCircle>
                ) : (
                    <X strokeWidth={1}></X>
                )}
            </div>
            <div>
                <ChatBox display={openChatBox}></ChatBox>
            </div>
        </div>
    );
};

export default ChatWidget;
