import React from 'react'
import "./Contact.scss"
const Contact = () => {
  return (
    <section id='contact'>
       <div className="container-fluid container-xxl container-sm">
        <h2 className='contactHeader'>СВЯЗАТЬСЯ С НАМИ</h2>
         <form action="">
            <div className="borderedDivMini">
                <h4>Мы с радостью ответим на ваши вопросы и обсудим ваш проект</h4>
            </div>
            <div className="borderedDivMini">
                {/* .empty */}
            </div>
            <div className="borderedDivMini">
                <input type="tel" placeholder='Телефон*' />
            </div>
            <div className="borderedDivMini">
                <input type="email" placeholder='Электронная почта*' />
            </div>
            <div className="borderedDivBig">
                <input type="text" placeholder='Имя*' />
            </div>
            <div className="borderedDivBig">
                <input type="text" placeholder='Сообщение*' />
            </div>
            <div className="formButton">

            <button> отправить запрос</button>
            <div className="border"></div>
            </div>
        </form>
       </div>
    </section>
  )
}

export default Contact
