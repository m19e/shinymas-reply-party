import type { MetaFunction } from "remix";
import CardImage from "~/statics/images/icon-250x250.png";

import { typedTweets, navs } from "~/consts";
import { Body } from "~/components/BodyContainer";
import { IdolLink } from "~/components/IdolLink";
import { TweetList } from "~/components/TweetList";

export const meta: MetaFunction = () => {
    return {
        title: "#シャニマスリフ゜ハ゜",
        description: "#２８３をひろげよう",
        "og:site_name": "#シャニマスリフ゜ハ゜",
        "og:title": "#シャニマスリフ゜ハ゜",
        "og:description": "#２８３をひろげよう",
        "og:image": "https://shinymas-reply-party.vercel.app" + CardImage,
        "twitter:image": "https://shinymas-reply-party.vercel.app" + CardImage,
        "twitter:card": "summary",
        "twitter:title": "#シャニマスリフ゜ハ゜",
        "twitter:description": "#２８３をひろげよう",
    };
};

const Root = () => {
    return (
        <Body>
            <div className="w-full inline-flex justify-start md:justify-center gap-2 md:gap-3 flex-wrap md:flex-nowrap mb-4">
                {navs.map((nav) => (
                    <IdolLink key={nav} idol={nav} isActive={nav === "all"} />
                ))}
            </div>
            <TweetList tweets={typedTweets} />
        </Body>
    );
};

export default Root;
