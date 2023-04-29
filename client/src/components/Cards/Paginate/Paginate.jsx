import {useDispatch, useSelector} from 'react-redux';
import {nextPage, prevPage} from '../../redux/actions/actions';

export default function Paginate({cantPages}){

    const dispatch= useDispatch();
    const {numPage} = useSelector((state) => state);

    const next = () => dispatch(nextPage());
    const prev = () => dispatch(prevPage());

    return (
        <div>
            {numPage > 1 ? (<button onClick={prev}>{numPage - 1}</button>) : null}

            <h3>{numPage}</h3>

            {numPage < cantPages ? ( <button onClick={next}>{numPage + 1}</button> ) : null}
        </div>
    )
};