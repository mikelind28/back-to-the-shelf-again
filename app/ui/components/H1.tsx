import { ReactNode } from "react";

type H1Type = {
    children: ReactNode;
}

export default function H1({ children }: H1Type) {
    return (
        <h1 className="text-2xl">{children}</h1>
    );
}