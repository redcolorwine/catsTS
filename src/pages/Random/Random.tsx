import React from 'react'
import cmedia from './random.module.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { CatItemType } from '../../types/types';
import CatItem from '../../components/CatItem/CatItem';
import Preloader from '../../components/preloader/Preloader';
import { useAppDispatch, useTypedSelector } from '../../hooks/hooks';
import { getRandomCatThunk } from '../../redux/homeReducer';


const Random: React.FC = (props) => {

    const { randomCat, isLoading } = useTypedSelector(state => state.home);
    const dispatch = useAppDispatch();

    const onRefresh = () => {
        window.location.reload();
    }

    useEffect(() => {
        dispatch(getRandomCatThunk());
    }, [])

    if (!randomCat) {
        return (<Preloader />)
    }
    console.log(randomCat)
    return (
        <div className={cmedia.random}>
            <h1>Random Cat</h1>
            <CatItem categories={randomCat[0].categories} breeds={randomCat[0].breeds} height={randomCat[0].height} id={randomCat[0].id} width={randomCat[0].width} key={randomCat[0].id} url={randomCat[0].url} />
            <button onClick={() => onRefresh()}>refresh</button>
        </div>
    )
}

export default Random