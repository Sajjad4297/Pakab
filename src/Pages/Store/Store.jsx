import React from 'react'
import './Store.css'
import { products } from "../Product/Products.js";
import { Link } from 'react-router-dom';
export default function Store() {
    return (
        <div className='store'>
            <h1>محصولات</h1>
            <div className='products-container'>
                {Object.values(products).map((item, i) => {
                    return (
                        <Link key={i} to={'/products/' + Object.keys(products)[i]} >
                            <img src={item.image} alt="" />
                            <div>
                                <p>{item.title}</p>
                                <h5>{item.price} تومان</h5>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
