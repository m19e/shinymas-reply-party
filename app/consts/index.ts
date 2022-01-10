import { TrimmedTweet } from "../types";
import json from "../statics/tweets.json";

export const tweets = json as unknown as TrimmedTweet[];
