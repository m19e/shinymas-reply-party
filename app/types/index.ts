import type { TweetV1 } from "twitter-api-v2";

export type TrimmedTweet = Pick<
    TweetV1,
    | "created_at"
    | "id_str"
    | "full_text"
    | "in_reply_to_status_id_str"
    | "in_reply_to_user_id_str"
    | "in_reply_to_screen_name"
    | "entities"
    | "extended_entities"
>;
