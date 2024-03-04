import {useEffect, useState} from "react";

import home from '../../home.module.css';
import {TV} from "../TV/TV";
import {IMovie} from "../../../../interfaces";
import {tvService} from "../../../../services";
import {useThemeContext} from "../../../../hooks";

const TVs = () => {
    const [topTVs, setTopTVs] = useState<IMovie[]>(null);
    const {isDarkMode} = useThemeContext();

    useEffect(() => {
        document.forms.namedItem('form').reset();
        tvService.getTopRated().then(({data}) => setTopTVs(data.results.slice(15)))
            .catch((e) => console.error(e));
    }, []);

    return (
        <div className={`${home.Wrap}  ${!isDarkMode && home.light}`}>
            <h1 className={home.title}>Top TV Serials</h1>
            <div className={home.movies}>
                {topTVs && topTVs.map(tv =>
                    <TV
                        key={tv.id}
                        tv={tv}
                    />
                )}
            </div>
        </div>
    );
};

export {TVs};