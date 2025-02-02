import React from "react";
import ReactDOM from "react-dom";
import ChatWidget from "./src/app/components/ChatWidget";

const initChatWidget = () => {
    const chatWidgetDiv = document.querySelector(".chat-widget");
    if (chatWidgetDiv) {
        ReactDOM.render(<ChatWidget></ChatWidget>, chatWidgetDiv);
    }
};

window.initChatWidget = initChatWidget;
