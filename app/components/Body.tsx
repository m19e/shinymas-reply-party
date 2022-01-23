import type { FC } from "react";
import { Header } from "./Header";

export const Body: FC = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col" style={{ minWidth: "440px" }}>
            <Header />
            <div className="bg-pattern flex-1 flex flex-col items-center border-t-2 border-slate-400 py-4">
                <div className="w-full max-w-xl md:max-w-2xl 2xl:max-w-3xl flex flex-col items-center px-4">{children}</div>
            </div>
        </div>
    );
};
