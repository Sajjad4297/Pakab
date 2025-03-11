import React from 'react'
import './Contact.css'
export default function Contact() {
    return (
        <div className='contact'>
            <h1>تماس با ما</h1>
            <form>
                <div className='input-container'>
                    <div>
                        <label htmlFor="">نام</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">ایمیل</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">تلفن</label>
                        <input type="text" />
                    </div>
                </div>
                <div className='text-area-container'>
                    <label htmlFor="">پیام شما</label>
                    <textarea name="" id=""></textarea>
                </div>
                <div className='btn-container'>
                    <button>ارسال پیام</button>
                </div>
            </form>

        </div>
    )
}
