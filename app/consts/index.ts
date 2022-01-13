import { TrimmedTweet, IdolName } from "../types";
import json from "../statics/tweets.json";

export const tweets = json as unknown as TrimmedTweet[];

export const idols: IdolName[] = ["all", "meguru", "juri", "chiyuki", "asahi", "madoka", "hinana"];
