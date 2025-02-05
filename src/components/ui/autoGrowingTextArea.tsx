import React, { useRef } from "react";
import {cn} from "@/lib/utils";

interface AutoGrowingTextareaProps {
    className?: string;
}

const AutoGrowingTextarea = ({className}:AutoGrowingTextareaProps) => {
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
            rows={1}
            className={`${cn(className)} w-full text-sm p-2 border border-gray-300 rounded-md min-h-10 max-h-36 resize-none overflow-y-auto`}
            onInput={adjustHeight}
            placeholder="Type here..."
        />
    );
};

export default AutoGrowingTextarea;