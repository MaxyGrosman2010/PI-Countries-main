import {useDispatch, useSelector} from 'react-redux';
import {nextPage, prevPage} from '../../../redux/actions/actions';
import style from './Paginate.module.css';

export default function Paginate(){

    const dispatch= useDispatch();
    const {numPage, cantPages} = useSelector((state) => state);

    const next = () => dispatch(nextPage());
    const prev = () => dispatch(prevPage());

    return (
        <div className={style.contains} >
            {numPage > 1 ? (<button onClick={prev}>{numPage - 1}</button>) : null}

            <div>{numPage}</div>

            {numPage < cantPages ? ( <button onClick={next}>{numPage + 1}</button> ) : null}
        </div>
    );
};