import React from 'react'
import cmedia from './categories.module.css';
import { useEffect, useState } from 'react'
import { useAppDispatch, useTypedSelector } from '../../hooks/hooks';
import { getCategoryCatsThunk } from '../../redux/categoryReducer';
const Categories: React.FC = () => {

    const [category, setCategory] = useState('1');

    const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setCategory(e.target.value)
    }

    const { categoryCats, isLoading } = useTypedSelector(state => state.categories);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCategoryCatsThunk(category))
    }, [category])

    return (
        <div className={cmedia.categories}>
            <div className={cmedia.nav}>
                <select name="" id="" onChange={(e) => selectCategory(e)}>
                    <option value="1">Hats</option>
                    <option value="2">Space</option>
                    <option value="3">Funny</option>
                    <option value="4">Sunglasses</option>
                    <option value="5">Boxes</option>
                    <option value="6">Caturday</option>
                    <option value="7">Ties</option>
                    <option value="9">Dream</option>
                    <option value="10">Kittens</option>
                    <option value="14">Sinks</option>

                </select>
                <div className={cmedia.cat}>
                    {categoryCats ? categoryCats.map(cat => {
                        return (<><img src={cat.url} alt="" /></>)
                    }) : <>Нет кошек</>}
                </div>

            </div>
        </div>
    )
}

export default Categories