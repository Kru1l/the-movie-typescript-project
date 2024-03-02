import {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";

import styles from './SearchForm.module.css';
import {IQuery} from "../../../interfaces";

interface IProps {

}

const SearchForm: FC<IProps> = () => {
    const {register, handleSubmit, reset} =
        useForm<IQuery>({
            mode: "onChange",
        });
    const navigate = useNavigate();

    const search: SubmitHandler<IQuery> = ({query}): void => {
        navigate(`/search/${query}`);
    };

    return (
        // Тут використав onSubmit та onChange, оскільки хотів реалізувати запит саме по onChange,
        // але без onSubmit сторінка перезавантажувалась при натисканні на 'Enter'
        <form name={'form'} className={styles.SearchForm}
              onSubmit={handleSubmit(search)}
              onChange={handleSubmit(search)}
        >
            <input type="text" placeholder={'Find Movies'} {...register('query')}/>
        </form>
    );
};

export {SearchForm};