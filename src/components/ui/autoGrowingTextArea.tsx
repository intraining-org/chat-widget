"use client";
import React, {useRef} from "react";
import {cn} from "@/lib/utils";

interface AutoGrowingTextareaProps {
    inputMessage: string;
    setInputMessage: (message: string) => void;
    className?: string;
    setMessageHistory: (message: string) => void;
}

const AutoGrowingTextarea = ({
                                 className,
                                 inputMessage,
                                 setInputMessage,
                                 setMessageHistory
                             }: AutoGrowingTextareaProps) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = () => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "auto";
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
        }
    };

    return (
        <textarea
            ref={textAreaRef}
            value={inputMessage}
            rows={1}
            className={`${cn(className)} w-full text-sm p-2 border border-gray-300 rounded-md min-h-10 max-h-36 resize-none overflow-y-auto focus:outline-none selection:bg-gray-500 selection:text-white`}
            onInput={adjustHeight}
            onKeyDown={(e) => {
                const formattedText = inputMessage.trim();
                if (e.key === "Enter" && !e.shiftKey && formattedText.length > 0) {
                    e.preventDefault();
                    setMessageHistory(inputMessage);
                    setInputMessage("");
                }
            }
            }
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type here..."
        />
    );
};

export default AutoGrowingTextarea;