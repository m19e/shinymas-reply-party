import type { FC } from "react";

export const TweetIdolLabel: FC<{ idol: string }> = ({ idol }) => {
    return (
        <div className="w-28 h-8 ml-0.5 mt-0.5 rounded-tl-md overflow-hidden relative">
            <div className={idol + " w-full h-6 rounded-md absolute -left-1 -top-1.5 -skew-x-12"}>
                <div className="skew-x-12">
                    <div className="flex justify-center pl-1 pt-1">
                        <span className="noto-sans-jp font-black text-sm text-white tracking-wider">{idol.toUpperCase()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
