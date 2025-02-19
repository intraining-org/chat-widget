import React from 'react';
import {motion} from "framer-motion";
import {formatDistanceToNow} from "date-fns";
import {MessageType, PersonType, Theme} from "@/types";

interface ChatBubbleProps {
    key: number,
    theme: string,
    message: MessageType,
    previousSender: PersonType | null,
}

const ChatBubble = ({key, theme, message, previousSender}: ChatBubbleProps) => {
    const userChatThemeClasses = theme === Theme.DARK ? "bg-neutral-200 text-gray-900" : "bg-gray-700 text-neutral-100";
    const supportChatThemeClasses = theme === Theme.DARK ? "bg-gray-700 text-neutral-100" : "bg-gray-100 text-gray-900 border border-gray-300";
    return (
        <div
            className={`flex flex-col gap-1 ${message.person == PersonType.USER ? "items-end" : "items-start"}`}>
            {
                key == 0 || previousSender != message.person ?
                    <p className="text-xs">{message.person == PersonType.USER ? "You" : "Support"}</p> : null
            }
            <div className={"flex flex-col gap-1 items-end"}>
                {
                    message.message.map((msg, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={message.person == PersonType.USER ? {
                                    opacity: 0,
                                    x: 12, scale: 1
                                } : {opacity: 0, x: -12, scale: 1}}
                                animate={message.person == PersonType.USER ? {
                                    opacity: 1,
                                    x: 0, scale: 1
                                } : {
                                    opacity: 1,
                                    x: 0, scale: 1
                                }}
                                transition={{duration: 0.2, ease: "easeOut"}}>
                                <div
                                    className={`text-sm w-fit selection:bg-gray-500 selection:text-white p-2 ${message.person == PersonType.USER ? userChatThemeClasses : supportChatThemeClasses} max-w-xs break-words rounded-lg`}>{msg}</div>
                            </motion.div>
                        );
                    })
                }
                <p className={`text-xs ${theme == Theme.LIGHT ? "text-foreground" : "text-background"} opacity-40 ${message.person == PersonType.SUPPORT ? "self-start" : "self-end"}`}>{formatDistanceToNow(message.time, {addSuffix: true})}</p>
            </div>
        </div>
    );
};

export default ChatBubble;