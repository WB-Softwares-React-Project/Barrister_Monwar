import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Dashboard from "../Pages/Dashboard/Dashboard";

import Achievements from "../Pages/Achievements/Achievements";
import Awards from "../Pages/Awards/Awards";
import CharitableWork from "../Pages/CharitableWork/CharitableWork";
import Quotes from "../Pages/Quotes/Quotes";
import Videos from "../Pages/Videos/Videos";
import Blogs from "../Pages/Blogs/Blogs";
import BlogDetails from "../Component/BlogDetails/BlogDetails";

import BnPofile from "../Pages/Profile/Bangla/BnPofile";
import EngProfile from "../Pages/Profile/English/EngProfile";
import Gallery from "../Pages/Gallery/Gallery";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            // {
            //     path: "/about",
            //     element: <About/>
            // },
            {
                path: "/achievement",
                element: <Achievements />
            },
            {
                path: "/awards",
                element: <Awards />
            },
            {
                path: "/charitable-work",
                element: <CharitableWork />
            },
            {
                path: "/videos",
                element: <Videos></Videos>
            },
            {
                path: "/quotes",
                element: <Quotes />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/blog-details/:id",
                element: <BlogDetails></BlogDetails>
            },
            {
                path: "/profile-bangla",
                element: <BnPofile />
            },
            {
                path: "/profile-english",
                element: <EngProfile />
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            }
        ]
    }

])

export default Router;