import React from 'react'
import './AboutUs.css'
import factory from '../../assets/images/factory.png'
export default function AboutUs() {
    return (
        <div className='about-us'>
            <div className='top-container'>
                <span></span>
                <h1>درباره ما</h1>
                <h2>با افتخار 10 سال کنار شما هستیم</h2>
            </div>
            <div  className='bottom-container'>
                <p>
                اطمینان از کیفیت محصول یکی از اصول اولیه خرید مواد شیمیایی است. پاکاب به عنوان فروشنده انواع آب مقطر در بسته بندی ها و گریدهای مختلف در کنار شماست، تا تجربه جدیدی از خرید آب مقطر را برای شما به ارمغان بیاورد. قیمت های به صرفه، تنوع بالای محصولات، بسته بندی های متنوع، روش های متنوع ارسال، قابلیت استرداد کالا در صورت مغایرت و … تنها بخشی از خدماتی است که پاکاب در اختیار شما عزیزان قرار می دهد.
                </p>
                <img src={factory} alt="" />
            </div>
        </div>
    )
}
