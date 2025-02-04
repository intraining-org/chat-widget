import React from "react";
import {createRoot} from "react-dom/client";
import ChatWidget from "./src/app/components/ChatWidget";

const initChatWidget = () => {
    const chatWidgetDiv = document.querySelector(".chat-widget");
    if (chatWidgetDiv) {
        const root = createRoot(chatWidgetDiv);
        root.render(<ChatWidget></ChatWidget>, chatWidgetDiv);
    }
};

window.initChatWidget = initChatWidget;
