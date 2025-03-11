import React from 'react'
import './Home.css'
import slideIcon from '../../assets/images/backGround-removebg-preview.png'
import waterImg from '../../assets/images/water600x600.png'
import laboratory from '../../assets/images/laboratory.jpg'
import usage1 from '../../assets/images/usage1.png'
import usage2 from '../../assets/images/usage2.png'
import { products } from "../Product/Products.js";
export default function Home() {

    return (
        <div className="home">
            <div className='slide-container'>
                <div>
                    <h1>شرکت فرداد صنعت کیمیاکاران تبریز</h1>
                    <p>ارسال به سراسر ایران</p>
                </div>
                <div>
                    <img src={slideIcon} alt="" />
                </div>
            </div>
            <div className="water-img">
                <img src={waterImg} alt="" />
            </div>
            <div className="products">
                <h1>مجموعه محصولات پاکاب</h1>
                <div>
                    {Object.values(products).map((item, i) =>
                        <div>
                            <img key={i} src={item.image} alt="" />
                            <p>{item.title}</p>
                        </div>
                    )}
                    {/*
                    <img src={galon5} alt="" />
                    <img src={bottle} alt="" />
                    <img src={galon20} alt="" />
                    <img src={tanker} alt="" />
                    */}
                </div>
            </div>
            <div className='usage'>
                <h1>کاربردهای آب مقطر</h1>
                <img src={laboratory} alt="" />
                <div>
                    <img src={usage1} alt="" />
                    <img src={usage2} alt="" />
                </div>
            </div>
        </div>
    )
}
