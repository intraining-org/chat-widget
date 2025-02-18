export enum Theme {
    DARK = "dark", LIGHT = "light"
}

export enum PersonType {
    USER, SUPPORT
}

export interface MessageType {
    message: string[];
    person: PersonType
    time: Date;
}
