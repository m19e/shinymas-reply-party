import { tweets, idols } from "../consts";
import { Header } from "../components/Header";
import { IdolLink } from "../components/IdolLink";
import { TweetList } from "../components/TweetList";

function Index() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
            <h1>Welcome to Remix</h1>
            <ul>
                <li>
                    <a target="_blank" href="https://remix.run/tutorials/blog" rel="noreferrer">
                        15m Quickstart Blog Tutorial
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://remix.run/tutorials/jokes" rel="noreferrer">
                        Deep Dive Jokes App Tutorial
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
                        Remix Docs
                    </a>
                </li>
            </ul>
        </div>
    );
}

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
