import { Link } from "remix";

const Logo = () => {
    return (
        <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-yellow-400 py-0.5">
            <span className="tracking-tighter">#</span>
            <span className="pr-4" style={{ letterSpacing: -8 }}>
                <span style={{ letterSpacing: -12 }}>シ</span>ャニマ<span style={{ letterSpacing: -13 }}>スリ</span>プパ
            </span>
        </h1>
    );
};

export const Header = () => {
    return (
        <div className="inline-flex items-center w-full h-20 bg-white border-b-2 mb-1 px-4">
            <Link to="/">
                <Logo />
            </Link>
        </div>
    );
};
