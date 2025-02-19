import React from 'react';
import AutoGrowingTextarea from "@/components/ui/autoGrowingTextArea";
import {motion} from "framer-motion";
import {SendHorizonal} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Theme} from "@/types";

interface ChatBoxInputFormProps {
    theme: Theme;
    themeClasses: string;
    setMessageHistory: (message: string) => void;
}

const ChatBoxInputForm = ({themeClasses, setMessageHistory, theme}: ChatBoxInputFormProps) => {
    const [inputMessage, setInputMessage] = React.useState<string>("");
    const buttonThemeClasses = theme === Theme.DARK ? "bg-white text-gray-900 hover:bg-gray-300 hover:text-gray-900" : "bg-gray-900 text-white border border-gray-300";
    return (
        <div className={"flex flex-row gap-2 items-end"}>
            <AutoGrowingTextarea className={`${themeClasses}`}
                                 inputMessage={inputMessage}
                                 setInputMessage={(message) => setInputMessage(message)}
                                 setMessageHistory={setMessageHistory}
            />
            <motion.div whileTap={{scale: 0.9}} whileHover={{scale: 1.05}}>
                <Button variant="default" size="icon" disabled={inputMessage.trim().length == 0}
                        className={`${buttonThemeClasses} border-0`} type={"submit"}
                        onClick={() => {
                            setMessageHistory(inputMessage);
                            setInputMessage("");
                        }}>
                    <SendHorizonal className={"w-5 h-5"}/>
                </Button>
            </motion.div>
        </div>
    );
};

export default ChatBoxInputForm;