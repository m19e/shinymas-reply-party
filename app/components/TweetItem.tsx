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

export const TweetItem: FC<Props> = ({ tweet }) => {
    const masked = maskTweet(tweet);

    return (
        <div className="mb-4">
            <span className="whitespace-pre-wrap">{masked}</span>
        </div>
    );
};
