import {ChangeEvent} from "react";
import {useSearchParams} from "react-router-dom";

const usePageQuery = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');

    return {
        page,
        pageChange: (ev: ChangeEvent<unknown>, value: number): void => {
            setQuery(prev => {
                prev.set('page', (value).toString())
                return prev
            });
        }
    };
};

export {usePageQuery};