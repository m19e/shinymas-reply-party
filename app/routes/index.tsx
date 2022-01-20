import { tweets, idols } from "../consts";
import { Header } from "../components/Header";
import { IdolLink } from "../components/IdolLink";
import { TweetList } from "../components/TweetList";

const Root = () => {
    return (
        <>
            <Header />
            <div className="bg-pattern border-t-2 border-slate-400 px-8 py-4">
                <div className="inline-flex flex-wrap gap-2 mb-4">
                    {idols.map((idol) => (
                        <IdolLink key={idol} idol={idol} isActive={idol === "all"} />
                    ))}
                </div>
                <TweetList tweets={tweets} />
            </div>
        </>
    );
};

export default Root;
