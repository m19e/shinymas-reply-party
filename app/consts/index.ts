import { TrimmedTweet } from "../types";
import json from "../statics/tweets.json";

export const tweets = json as unknown as TrimmedTweet[];

export const idols = ["all", "meguru", "juri", "chiyuki", "asahi", "madoka", "hinana"];
