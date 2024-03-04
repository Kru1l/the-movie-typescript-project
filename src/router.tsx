import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {ErrorPage, GenresPage, MovieDetailsPage, MoviesOfGenrePage, MoviesPage, SearchPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'/movies'}/>
            },
            {
                path: '/movies/', element: <MoviesPage/>
            },
            {
                path: '/movies/:id', element: <MovieDetailsPage/>
            },
            {
                path: '/search/:query?', element: <SearchPage/>
            },
            {
                path: '/genres', element: <GenresPage/>, children: [
                    {
                        path: ':id', element: <MoviesOfGenrePage/>
                    }
                ]
            }
        ]
    }
]);

export {router};