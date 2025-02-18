import React from 'react';
import {motion} from "framer-motion";
import {Theme} from "@/types";

interface MessageLoadingProps {
    theme?: Theme
}

const MessageLoading = ({theme}: MessageLoadingProps) => {
    return (
        <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className={`w-2 h-2 rounded-full ${theme == Theme.LIGHT ? "bg-gray-800" : "bg-gray-200"}`}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.2,
                    }}
                />
            ))}
        </div>
    );
};

export default MessageLoading;