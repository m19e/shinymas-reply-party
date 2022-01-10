import type { FC } from "react";
import type { TrimmedTweet } from "../types";
import { TweetItem } from "./TweetItem";

interface Props {
    tweets: TrimmedTweet[];
}

export const TweetList: FC<Props> = ({ tweets }) => {
    return (
        <div className="flex-col">
            {tweets.map((t) => (
                <TweetItem key={t.id_str} tweet={t} />
            ))}
        </div>
    );
};
