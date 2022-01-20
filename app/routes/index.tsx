import { typedTweets, navs } from "../consts";
import { Header } from "../components/Header";
import { IdolLink } from "../components/IdolLink";
import { TweetList } from "../components/TweetList";

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col" style={{ minWidth: "400px" }}>
            <Header />
            <div className="bg-pattern flex-1 flex flex-col items-center border-t-2 border-slate-400 py-4">
                <div className="w-5/6 max-w-xl md:max-w-2xl 2xl:max-w-3xl flex flex-col items-center">
                    <div className="w-full inline-flex justify-start md:justify-center gap-2 md:gap-3 flex-wrap md:flex-nowrap mb-4">
                        {navs.map((nav) => (
                            <IdolLink key={nav} idol={nav} isActive={nav === "all"} />
                        ))}
                    </div>
                    <TweetList tweets={typedTweets} />
                </div>
            </div>
        </div>
    );
};

export default Root;
