import { useState, useEffect } from "react";
import { useLoaderData, useNavigate, useParams } from "remix";
import type { LoaderFunction } from "remix";

import type { IdolName } from "../../types";
import { typedTweets, navs } from "../../consts";
import { Header } from "../../components/Header";
import { IdolNavLink } from "../../components/IdolNavLink";
import { TweetList } from "../../components/TweetList";

const isIdolName = (name: string | undefined): name is IdolName =>
    name === "all" || name === "meguru" || name === "juri" || name === "chiyuki" || name === "asahi" || name === "madoka" || name === "hinana";

export const loader: LoaderFunction = ({ params }) => {
    if (isIdolName(params.idol)) {
        return { idol: params.idol };
    }
    return { idol: "all" };
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
            setTweets(typedTweets.filter((t) => t.idol === data.idol));
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
                    <TweetList tweets={tweets} />
                </div>
            </div>
        </div>
    );
};

export default Idol;
