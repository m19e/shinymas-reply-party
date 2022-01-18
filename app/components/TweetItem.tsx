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

const createDecoratedHtml = (tweet: TrimmedTweet) => {
    let result = maskTweet(tweet);
    const tags = tweet.entities.hashtags ?? [];
    const medias = tweet.entities.media ?? [];
    if (tags.length) {
        for (const tag of tags) {
            const text = "#" + tag.text;
            result = result.split(text).join(`<span class="whitespace-nowrap text-blue-400">${text}</span>`);
        }
    }
    if (medias.length) {
        for (const media of medias) {
            const { display_url, url } = media;
            result = result
                .split(url)
                .join(`<a class="whitespace-nowrap text-blue-400" href="${url}" target="_blank" rel="noopener noreferrer">${display_url}</a>`);
        }
    }

    return result;
};

const DecoratedText = ({ tweet }: Props) => {
    return <p className="block whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: createDecoratedHtml(tweet) }}></p>;
};

export const TweetItem: FC<Props> = ({ tweet }) => {
    const masked = maskTweet(tweet);
    const time = getDisplayTime(tweet.created_at);

    return (
        <div className="flex flex-col mb-4 px-4 pt-4 bg-white rounded-lg shadow-md border border-gray-500">
            <DecoratedText tweet={tweet} />
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
