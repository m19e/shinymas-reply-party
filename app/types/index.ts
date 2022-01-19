import type { TweetV1 } from "twitter-api-v2";

export interface TrimmedTweet extends PickedTweetV1 {
    full_text: string;
}

type PickedTweetV1 = Pick<
    TweetV1,
    "created_at" | "id_str" | "in_reply_to_status_id_str" | "in_reply_to_user_id_str" | "in_reply_to_screen_name" | "entities" | "extended_entities"
>;

export type IdolName = "all" | "meguru" | "juri" | "chiyuki" | "asahi" | "madoka" | "hinana";

export type CharacterName = "meguru" | "juri" | "chiyuki" | "asahi" | "madoka" | "hinana" | "hazuki";
