import { tweets, idols } from "../consts";
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
            <div className="inline-flex items-center w-full h-20 bg-white border-b-2 mb-1 px-4">
                <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-yellow-400 py-0.5">
                    <span className="tracking-tighter">#</span>
                    <span className="pr-4" style={{ letterSpacing: -8 }}>
                        <span style={{ letterSpacing: -12 }}>シ</span>ャニマ<span style={{ letterSpacing: -13 }}>スリ</span>プパ
                    </span>
                </h1>
            </div>
            <div className="bg-pattern border-t-2 border-slate-400 px-8 py-4">
                <div className="inline-flex flex-wrap gap-2 mb-4">
                    {idols.map((idol) => (
                        <div className={`${idol} nav-item__${idol === "all" ? "select" : "unselect"}`}>
                            <span className="font-sans font-black text-base 2xl:text-xl tracking-wider nav-item-label">{idol.toUpperCase()}</span>
                        </div>
                    ))}
                </div>
                <TweetList tweets={tweets} />
            </div>
        </>
    );
};

export default Root;
