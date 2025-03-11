import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
import waterWave from '../assets/images/Water_wave.png'
import logo from '../assets/images/pakab-logo.png'
export default function Footer() {
    return (
        <footer>
            <div className="main-footer">
                <div className="top-footer">
                    <div>
                        <h2>
                            محصولات برتر
                        </h2>
                        <Link to='/products/falle'>آب مقطر فله ای</Link>
                        <Link to='/products/water20'>آب مقطر 20 لیتری</Link>
                        <Link to='/products/water4'>آب مقطر 4 لیتری</Link>
                        <Link to='/products/water1'>آب مقطر 1 لیتری</Link>
                    </div>
                    <div>
                        <div>
                            <h1>آدرس:</h1>
                            <p>استان آذربایجان شرقی - تبریز - جاده خسروشاه به اسکو <br /> روستای کوشن میرزا رحیم </p>
                        </div>
                        <div>
                            <h1>شماره تماس:</h1>
                            <pre>۰۹۱۴۳۹۵۹۵۸۱   -   ۰۴۱۳۲۴۴۱۸۹۴ </pre>
                        </div>

                    </div>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="bottom-footer">
                    <div>
                        <a href='https://instagram.com/' target='_blank'></a>
                        <a href='https://youtube.com' target='_blank'></a>
                    </div>
                    <p>ما را در شبکه های اجتماعی دنبال کنید</p>
                </div>
            </div>
            <div className="site-info">
                <p>تمامی حقوق محفوظ است</p>
                <p id='copy-right' >طراحی سایت: شرکت رویین نرم افزار فاتح گران - 1403</p>
            </div>
        </footer>
    )
}
