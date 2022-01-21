import { NavLink } from "remix";

import type { IdolName } from "../types";
import { IdolLinkLavel } from "./IdolLinkLabel";

interface Props {
    idol: IdolName;
}

export const IdolNavLink = ({ idol }: Props) => {
    return (
        <NavLink to={`/idols/${idol}`} className={({ isActive }) => `${idol} ${isActive ? "nav-item__select" : "nav-item__unselect"}`}>
            <IdolLinkLavel idol={idol} />
        </NavLink>
    );
};
