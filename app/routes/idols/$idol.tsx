import { useEffect } from "react";
import { useLoaderData, useNavigate, useParams } from "remix";
import type { LoaderFunction } from "remix";

import type { IdolName } from "../../types";
import { typedTweets, idols } from "../../consts";
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

    useEffect(() => {
        if (data.idol === "all" && params.idol !== "all") {
            navigate("/idols/all");
        }
    }, [data.idol, params.idol]);

    return (
        <div style={{ minWidth: "400px" }}>
            <Header />
            <div className="bg-pattern flex flex-col items-center border-t-2 border-slate-400 py-4">
                <div className="w-5/6 max-w-xl md:max-w-2xl 2xl:max-w-3xl flex flex-col items-center">
                    <div className="w-full inline-flex justify-start md:justify-center gap-2 md:gap-3 flex-wrap md:flex-nowrap mb-4">
                        {idols.map((idol) => (
                            <IdolNavLink key={idol} idol={idol} />
                        ))}
                    </div>
                    <TweetList tweets={typedTweets} />
                </div>
            </div>
        </div>
    );
};

export default Idol;
