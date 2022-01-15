import type { IdolName } from "../types";

interface Props {
    idol: IdolName;
}

export const IdolLinkLavel = ({ idol }: Props) => {
    return <span className="font-sans font-black text-base 2xl:text-xl tracking-wider nav-item-label">{idol.toUpperCase()}</span>;
};
