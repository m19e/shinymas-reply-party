import type { FC } from "react";
import type { TrimmedTweet } from "../types";

interface Props {
    tweet: TrimmedTweet;
}

const maskTweet = (t: TrimmedTweet): string => {
    if (!t.in_reply_to_screen_name) {
        return t.full_text;
    }
    const { in_reply_to_screen_name: sn } = t;
    return t.full_text.split(`@${sn}`).join("").trim();
};
const zeroPadding = (target: number, count: number = 2) => {
    return ("0".repeat(count) + target).slice(-1 * count);
};
const formatDisplayTime = ({
    Y,
    M,
    D,
    h,
    m,
    s,
    separator,
}: {
    Y: string;
    M: string;
    D: string;
    h: string;
    m: string;
    s: string;
    separator: { date: string; span: string; time: string };
}) => {
    return Y + separator.date + M + separator.date + D + separator.span + h + separator.time + m + separator.time + s;
};
const getDisplayTime = (created_at: string) => {
    const t = new Date(created_at);

    const Y = "" + t.getFullYear();
    const M = zeroPadding(t.getMonth() + 1);
    const D = zeroPadding(t.getDate());
    const h = zeroPadding(t.getHours());
    const m = zeroPadding(t.getMinutes());
    const s = zeroPadding(t.getSeconds());

    return formatDisplayTime({ Y, M, D, h, m, s, separator: { date: "-", span: " ", time: ":" } });
};

export const TweetItem: FC<Props> = ({ tweet }) => {
    const masked = maskTweet(tweet);
    const time = getDisplayTime(tweet.created_at);

    return (
        <div className="flex flex-col mb-4 bg-white">
            <span className="text-sm sm:text-base whitespace-pre-wrap">{masked}</span>
            <div className="inline-flex justify-end">
                <a
                    className="text-xs sm:text-sm text-gray-400 hover:text-blue-400"
                    href={`https://twitter.com/imassc_official/status/${tweet.id_str}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {time}
                </a>
            </div>
        </div>
    );
};
