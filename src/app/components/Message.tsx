import React from "react";

export interface MessageType {
    message: string[];
    person: "user" | "support";
    time: string;
}

const Message = ({ message, person }: MessageType) => {
    return <div>{message}</div>;
};

export default Message;
