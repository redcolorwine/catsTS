import React, { useEffect, useState } from 'react'
import cmedia from './breeds.module.css';
import { useAppDispatch, useTypedSelector } from '../../hooks/hooks';
import { getCatsByBreed } from '../../redux/breedsReducer';
import Preloader from '../../components/preloader/Preloader';

const Breeds: React.FC = () => {

    const { breedsCats, isLoading } = useTypedSelector(state => state.breeds);
    const dispatch = useAppDispatch();
    const [curBreed, setCurBreed] = useState('abys')



    const selectBreed = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setCurBreed(e.target.value);

    }

    useEffect(() => {
        dispatch(getCatsByBreed(curBreed))
    }, [curBreed])

    if (!breedsCats) {
        return (
            <Preloader />
        )
    }

    return (
        <div className={cmedia.breeds}>
            <div className={cmedia.nav}>
                <select name="" id="" onChange={(e) => selectBreed(e)}>
                    <option value="abys">Abyssinian</option>
                    <option value="aege">Aegean</option>
                    <option value="acur">American Curl</option>
                    <option value="asho">American Shorthair</option>
                    <option value="amau">Arabian Mau</option>
                    <option value="bali">Balinese</option>
                    <option value="amis">Australian</option>
                    <option value="bamb">Bambino</option>
                    <option value="beng">Bengal</option>
                    <option value="birm">Birman</option>
                    <option value="bomb">Bombay</option>
                    <option value="bslo">British Longhair</option>
                    <option value="bsho">British Shorthair</option>
                    <option value="bure">Burmese</option>
                    <option value="buri">Burmilla</option>
                    <option value="cspa">California Spangled</option>
                    <option value="ctif">Chantilly-Tiffany</option>
                    <option value="char">Chartreux</option>
                    <option value="chau">Chausie</option>
                    <option value="csho">Colorpoint Shorthair</option>
                    <option value="crex">Cornish Rex</option>
                    <option value="chee">Cheetoh</option>
                    <option value="crex">Cornish Rex</option>
                    <option value="cymr">Cymric</option>
                    <option value="cypr">Cyprus</option>
                    <option value="siam">Siamese</option>
                    <option value="pers">Persian</option>
                    <option value="rblu">Russian Blue</option>
                    <option value="sibe">Siberian</option>

                </select>
                <div className={cmedia.cat}>
                    {breedsCats ? breedsCats.map(cat => {
                        return (<><img src={cat.url} alt="" /></>)
                    }) : <>Нет кошек</>}
                </div>

            </div>
        </div>
    )
}

export default Breeds