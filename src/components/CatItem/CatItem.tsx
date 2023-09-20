import React from 'react'
import cmedia from './catItem.module.css';
import { CatItemType } from '../../types/types';

const CatItem: React.FC<CatItemType> = (props) => {
    return (
        <div className={cmedia.catItem} draggable>

            {props.breeds.length > 0
                ? <h4>{props.breeds[0].name}</h4>
                : <h4>Kitty</h4>
            }
            <img src={props.url} alt="" />
            <div className={cmedia.aboutCat}>
                <div className={cmedia.tags}>
                    <p>tags: {props.categories ?
                        <span>{props.categories.map(cat => {
                            return (<>{cat.name}</>)
                        })}</span>
                        : <span> no tags</span>}</p>

                    {props.breeds.length > 0
                        ? <p >temperament: <span>{props.breeds[0].temperament}</span></p>
                        : <p >temperament: <span>no data</span></p>
                    }
                    {props.breeds.length > 0
                        ? <p >description: <span>{props.breeds[0].description}</span></p>
                        : <p >description: <span>no data</span></p>
                    }
                </div>


            </div>
        </div>
    )
}

export default CatItem