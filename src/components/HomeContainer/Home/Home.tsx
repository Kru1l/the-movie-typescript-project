import {useEffect} from "react";

import {TVs} from "../TopTVContainer";
import {TopMovies} from "../TopRatedContainer";
import {useThemeContext} from "../../../hooks";
import {UpMovies} from "../UpCommingContainer";

const Home = () => {
    const {setIsBackOn} = useThemeContext();

    useEffect(() => {
        setIsBackOn(null);
    }, [setIsBackOn]);

    return (
        <div>
            <UpMovies/>
            <TopMovies/>
            <TVs/>
        </div>
    );
};

export {Home};