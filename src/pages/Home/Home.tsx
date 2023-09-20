import React from 'react'
import cmedia from './home.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CatItemType, GetCatsType } from '../../types/types';
import CatItem from '../../components/CatItem/CatItem';
import Preloader from '../../components/preloader/Preloader';
import { todoAPI } from '../../api/api';
import { useAppDispatch, useTypedSelector } from '../../hooks/hooks';
import { getCatsThunk } from '../../redux/homeReducer';

const Home: React.FC = () => {

    // const [cats, setCats] = useState<any | null>(null);
    const { cats, isLoading } = useTypedSelector(state => state.home);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCatsThunk(1, 12))
    }, [])

    if (!cats) {
        return (<Preloader />)
    }
    console.log(cats)
    return (
        <div className={cmedia.homeWrapper}>
            <div className={cmedia.home}>

                {cats ? cats.map((cat: CatItemType) => {
                    return (<CatItem categories={cat.categories} key={cat.id} id={cat.id} url={cat.url} breeds={cat.breeds} height={cat.height} width={cat.width} />)
                }) : <>no cats</>}
            </div>
        </div>

    )
}

export default Home