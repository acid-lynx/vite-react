import { createBrowserRouter } from "react-router";

import { App } from "@/app/App";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ErrorPage } from "@/pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <ErrorPage/>,
        children: [
            { index: true, element: <HomePage/> },
            { path: "about", element: <AboutPage/> },
            // {
            //     path: "users/:id",
            //     element: <UserPage />,
            //     loader: async ({ params }) => {
            //         const res = await fetch(`/api/users/${params.id}`);
            //         return res.json();
            //     }
            // }
        ]
    }
]);

export default router;