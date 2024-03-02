import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, MovieDetailsPage, MoviesOfGenrePage, MoviesPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
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