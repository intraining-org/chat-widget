import React from "react";
import {createRoot} from "react-dom/client";
import ChatWidget from "./src/app/components/ChatWidget";
import {Theme} from "./src/types";

const injectStyles = () => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
    document.head.appendChild(link);
};
const initChatWidget = () => {
    injectStyles();
    const chatWidgetDiv = document.getElementById("chat-widget");
    if (chatWidgetDiv) {
        console.log("Found chat-widget div");
        const apiKey = chatWidgetDiv.getAttribute("data-api-key") || "";
        const themeString = chatWidgetDiv.getAttribute("data-theme") || "dark";
        const theme = themeString === "light" ? Theme.LIGHT : Theme.DARK;
        const root = createRoot(chatWidgetDiv);
        root.render(<ChatWidget apiKey={apiKey} theme={theme}/>);
    } else {
        console.error("Could not find chat-widget div");
    }
};

initChatWidget();
