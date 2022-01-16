import type { IdolName } from "../types";

interface Props {
    idol: IdolName;
}

export const IdolLinkLavel = ({ idol }: Props) => {
    return <span className="nav-item-label">{idol.toUpperCase()}</span>;
};
