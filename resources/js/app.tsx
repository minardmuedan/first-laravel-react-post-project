import "./bootstrap";
import "../css/app.css";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import AppLayout from "./layout/app-layout";
import { JSX } from "react";

createInertiaApp({
    title: (title) => (title ? title : "Mini Post"),
    progress: {
        color: "red",
    },
    resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.tsx", {
            eager: true,
        }) as Record<string, { default: { layout: JSX.Element } }>;

        let page = pages[`./pages/${name}.tsx`];

        page.default.layout =
            page.default.layout ||
            ((page: React.ReactNode) => <AppLayout children={page} />);

        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
