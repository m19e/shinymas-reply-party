import { Link } from "remix";

import type { IdolName } from "../types";
import { IdolLinkLavel } from "./IdolLinkLabel";

interface Props {
    idol: IdolName;
    isActive: boolean;
}

export const IdolLink = ({ idol, isActive }: Props) => {
    return (
        <Link to={`/idols/${idol}`} className={`${idol} ${isActive ? "nav-item__select" : "nav-item__unselect"}`}>
            <IdolLinkLavel idol={idol} />
        </Link>
    );
};
