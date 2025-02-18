"use client";
import React, {useEffect, useRef} from "react";
import {HeadsetIcon} from "lucide-react";
import ChatBubble from "@/app/components/ChatBubble";
import {MessageType, PersonType, Theme} from "@/types";
import ChatBoxInputForm from "@/app/components/ChatBoxInputForm";
import MessageLoading from "@/app/components/MessageLoading";

interface ChatBoxProps {
    theme: Theme
}

const ChatBox = ({theme}: ChatBoxProps) => {
    const lastMessageRef = useRef<HTMLDivElement>(null);
    const [supportTyping, setSupportTyping] = React.useState<boolean>(false);
    const [messageHistory, setMessageHistory] = React.useState<MessageType[]>([{
        message: ["Hi, how can I help you?"],
        person: PersonType.SUPPORT,
        time: new Date(Date.now())
    }]);
    useEffect(() => {
        if (messageHistory[messageHistory.length - 1].person === PersonType.USER) {
            setSupportTyping(true);
            setTimeout(() => {
                setMessageHistory([...messageHistory, {
                    message: ["Hello, how can I help you?"],
                    person: PersonType.SUPPORT,
                    time: new Date(Date.now())
                }]);
                setSupportTyping(false);
                // play a sound
            }, 2000);
        }
    }, [messageHistory]);
    useEffect(() => {
        if (messageHistory[messageHistory.length - 1].person === PersonType.SUPPORT) {
            new Audio("/chat-receive.mp3").play().then();
        } else {
            new Audio("/chat-send.mp3").play().then();
        }
        lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
    }, [messageHistory]);

    const themeClasses = theme === Theme.DARK ? "bg-gray-900 text-white" : "bg-white text-gray-900 border border-gray-300";

    return (
        <div
            className={`flex flex-col justify-between rounded-xl absolute bottom-0 right-0 ${themeClasses}`}
            style={{width: '400px', height: '700px'}}
        >
            <div className={"overflow-y-auto w-full"}>
                <div className="flex flex-col bg-gray-100 items-center justify-around gap-2 p-4">
                    <div className={"rounded-full p-2 bg-gray-800"}>
                        <HeadsetIcon className="text-white" strokeWidth={1}></HeadsetIcon>
                    </div>
                    <h3 className="text-base">How can we help you?</h3>
                </div>
                <div className={"p-4"}>
                    <div className={"flex flex-col gap-2 justify-end py-8"}>
                        {
                            messageHistory.map((message, index) => {
                                const isLastMessage = index === messageHistory.length - 1;
                                return (
                                    <div key={index} ref={isLastMessage ? lastMessageRef : null}>
                                        <ChatBubble key={index} message={message} theme={theme}
                                                    previousSender={index > 0 ? messageHistory[index - 1].person : null}/>
                                    </div>
                                );
                            })
                        }
                        {
                            supportTyping ? <MessageLoading theme={theme}/> : null
                        }
                    </div>
                </div>
            </div>
            <div className={`p-4 ${themeClasses} border-r-0 border-b-0 border-l-0 rounded-b-2xl sticky bottom-0`}>
                <ChatBoxInputForm themeClasses={themeClasses} theme={theme}
                                  setMessageHistory={(message: string) => setMessageHistory([...messageHistory, {
                                      message: [message],
                                      person: PersonType.USER,
                                      time: new Date(Date.now())
                                  }])}/>
            </div>
        </div>
    );
};

export default ChatBox;
