import { useState, useEffect } from "react";
import { useLoaderData, useNavigate, useParams } from "remix";
import type { LoaderFunction, MetaFunction } from "remix";

import CardImage from "~/statics/images/icon-250x250.png";
import type { IdolName } from "../../types";
import { typedTweets, navs, idols } from "../../consts";
import { Header } from "../../components/Header";
import { IdolNavLink } from "../../components/IdolNavLink";
import { TweetList } from "../../components/TweetList";
import { TweetIdolLabel } from "~/components/TweetIdolLabel";

const isIdolName = (name: string | undefined): name is IdolName =>
    name === "all" || name === "meguru" || name === "juri" || name === "chiyuki" || name === "asahi" || name === "madoka" || name === "hinana";

export const loader: LoaderFunction = ({ params }) => {
    if (isIdolName(params.idol)) {
        return { idol: params.idol };
    }
    return { idol: "all" };
};

export const meta: MetaFunction = ({ params }) => {
    let title: string;
    if (isIdolName(params.idol)) {
        title = params.idol.toUpperCase() + " | #シャニマスリフ゜ハ゜";
    } else {
        title = "#シャニマスリフ゜ハ゜";
    }
    return {
        title,
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

const TweetSkeleton = ({ idol }: { idol: string }) => {
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-md border border-gray-500">
            <TweetIdolLabel idol={idol} />
            <div className="animate-pulse">
                <div className="flex-1 space-y-4 px-4 py-3">
                    <div className="grid grid-cols-2">
                        <div className="h-3 bg-slate-200 rounded-md col-span-1"></div>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-md"></div>
                    <div className="space-y-8">
                        <div className="grid grid-cols-6 gap-4">
                            <div className="h-3 bg-slate-200 rounded-md col-span-2"></div>
                            <div className="h-3 bg-slate-200 rounded-md col-span-2"></div>
                        </div>
                        <div className="space-y-4">
                            <div className="grid grid-cols-12">
                                <div className="h-3 bg-blue-200 rounded-md col-span-2"></div>
                            </div>
                            <div className="grid grid-cols-12">
                                <div className="h-3 bg-blue-200 rounded-md col-span-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="h-3 bg-slate-200 rounded-md col-span-3 col-start-10"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const TweetSkeletonList = () => {
    return (
        <div className="w-full flex flex-col gap-4">
            {idols.map((idol) => (
                <TweetSkeleton key={idol} idol={idol} />
            ))}
        </div>
    );
};

const Idol = () => {
    const data = useLoaderData<{ idol: IdolName }>();
    const params = useParams();
    const navigate = useNavigate();

    const [tweets, setTweets] = useState<typeof typedTweets>([]);

    useEffect(() => {
        if (data.idol === "all") {
            setTweets(typedTweets);
            if (params.idol !== "all") {
                navigate("/idols/all");
            }
        } else {
            if (tweets.length) {
                setTweets(typedTweets.filter((t) => t.idol === data.idol));
            } else {
                setTimeout(() => {
                    setTweets(typedTweets.filter((t) => t.idol === data.idol));
                }, 1600);
            }
        }
    }, [data.idol, params.idol]);

    return (
        <div className="min-h-screen flex flex-col" style={{ minWidth: "400px" }}>
            <Header />
            <div className="bg-pattern flex-1 flex flex-col items-center border-t-2 border-slate-400 py-4">
                <div className="w-5/6 max-w-xl md:max-w-2xl 2xl:max-w-3xl flex flex-col items-center">
                    <div className="w-full inline-flex justify-start md:justify-center gap-2 md:gap-3 flex-wrap md:flex-nowrap mb-4">
                        {navs.map((nav) => (
                            <IdolNavLink key={nav} idol={nav} />
                        ))}
                    </div>
                    {tweets.length ? <TweetList tweets={tweets} /> : <TweetSkeletonList />}
                </div>
            </div>
        </div>
    );
};

export default Idol;
