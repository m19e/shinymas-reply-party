import { tweets } from "../consts";

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
        <div className="bg-pattern">
            <div className="flex-col p-8">
                {tweets.map((t) => (
                    <div key={t.id_str} className="mb-4">
                        <span className="whitespace-pre-wrap">{t.full_text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Root;
