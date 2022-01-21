import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix";
import type { LinksFunction, MetaFunction } from "remix";

import styles from "~/styles/generated.css";
import CardImage from "~/statics/images/icon-250x250.png";

/**
 * The `links` export is a function that returns an array of objects that map to
 * the attributes for an HTML `<link>` element. These will load `<link>` tags on
 * every route in the app, but individual routes can include their own links
 * that are automatically unloaded when a user navigates away from the route.
 *
 * https://remix.run/api/app#links
 */
export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => {
    return {
        title: "#シャニマスリフ゜ハ゜",
        description: "#シャニマスリフ゜ハ゜ #２８３をひろげよう",
        "og:site_name": "#シャニマスリフ゜ハ゜",
        "og:title": "#シャニマスリフ゜ハ゜",
        "og:description": "#シャニマスリフ゜ハ゜ #２８３をひろげよう",
        "og:image": CardImage,
        "twitter:image": CardImage,
        "twitter:card": "summary",
        "twitter:title": "#シャニマスリフ゜ハ゜",
        "twitter:description": "#シャニマスリフ゜ハ゜ #２８３をひろげよう",
    };
};

export default function App() {
    return (
        <html lang="ja">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === "development" && <LiveReload />}
            </body>
        </html>
    );
}
