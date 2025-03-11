import React from 'react'
import './Product.css'
import tanker from '../../assets/images/Tanker-768x768.png'
import { Link, useParams } from 'react-router-dom'
export default function Product({ products }) {
    const { productName } = useParams()
    const currentProduct = products[productName]
    const { [productName]: name, ...otherProducts } = products
    return (
        <div className='product-container'>
            <div className='product-image'>
                <img src={currentProduct.image} alt="" />
            </div>
            <div className='product-about'>
                <h1>{currentProduct.title}</h1>
                <h3>{currentProduct.price} تومان</h3>
                <p>{currentProduct.about}</p>
            </div>
            <div className='other-products'>
                <h2>محصولات دیگر</h2>
                {Object.values(otherProducts).map((item,i) => {
                    return (
                        <Link to={'/products/' + Object.keys(otherProducts)[i]} key={i} >
                            <img src={item.image} alt="" />
                            <div>
                                <p>{item.title}</p>
                                <h5>{item.price} </h5>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className='product-description' >
                <h1>
                    توضیحات
                </h1>
                <p>
                    {currentProduct.description}
                </p>
            </div>
        </div>
    )
}
