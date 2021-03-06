import type { FC } from "react";
import type { TrimmedTweet } from "../types";

import { TweetIdolLabel } from "./TweetIdolLabel";

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

const createDecoratedHtml = (tweet: TrimmedTweet) => {
    let result = maskTweet(tweet);
    const tags = tweet.entities.hashtags ?? [];
    const medias = tweet.entities.media ?? [];
    if (tags.length) {
        for (const tag of tags) {
            const text = "#" + tag.text;
            const fullwidth = "＃" + tag.text;
            const span = `<span class="whitespace-nowrap text-blue-400">${text}</span>`;
            result = result.split(text).join(span).split(fullwidth).join(span);
        }
    }
    if (medias.length) {
        for (const media of medias) {
            const { display_url, url } = media;
            const link = `<a class="whitespace-nowrap text-blue-400" href="${url}" target="_blank" rel="noopener noreferrer">${display_url}</a>`;
            result = result.split(url).join(link);
        }
    }
    return result;
};
const DecoratedText = ({ tweet }: Props) => {
    return <p className="block whitespace-pre-wrap leading-relaxed" dangerouslySetInnerHTML={{ __html: createDecoratedHtml(tweet) }}></p>;
};

export const TweetItem: FC<Props> = ({ tweet }) => {
    const time = getDisplayTime(tweet.created_at);

    return (
        <div className="flex flex-col bg-white rounded-lg shadow-md border border-gray-500">
            <TweetIdolLabel idol={tweet.idol} />
            <div className="px-4">
                <DecoratedText tweet={tweet} />
            </div>
            {tweet.entities.media && tweet.entities.media.length && (
                <div className="px-2 pt-2">
                    <img src={tweet.entities.media[0].media_url_https} alt="media" />
                </div>
            )}
            <div className="inline-flex justify-end px-2 py-1">
                <a
                    className="text-sm text-gray-400 hover:text-blue-400"
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
