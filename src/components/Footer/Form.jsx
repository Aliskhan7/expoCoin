import React, { Component, useState } from 'react'
import Logo from '../../assets/img/contacts-logo.svg'
import InputMask from 'react-input-mask'
import { FormattedMessage, IntlProvider } from 'react-intl'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal'

const messages = {
  ru: {
    title: 'Контакты',
    number: 'Номер телефона',
    loc: 'Местонахождение',
    locText: 'г. Грозный, пр-кт Кадырова, 216',
    mail: 'Электронный адрес',
    text: `Оставьте ваш номер и мы перезвоним вам в течение
        нескольких минут`,
    btnText: 'Заказать звонок',
  },
  en: {
    title: 'Contacts',
    number: 'Phone number',
    loc: 'Location',
    locText: 'Grozny, Kadyrov avenue, 216',
    mail: 'Email address',
    text: 'Leave your number and we will call you back within a few minutes',
    btnText: 'Request a call',
  },
}
// const Form = ({ locale, setEmailData, setShowModal }) => {
//   const [formData, setFormData] = useState({ email: '', phone: '' })
//
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//
//     const { data } = await axios.post(
//       '/smart.php',
//       formData,
//     )
//
//     setEmailData(data)
//
//     console.log(data)
//
//     setShowModal(true)
//
//     if(formData){
//       return <Modal/>
//     }
//
//     setFormData({ email: '', phone: '' })
//   }
//   return(
//     <div className="formBlock" onSubmit={handleSubmit}>
//                <form className="footer-form form">
//                  <img
//                    src={Logo}
//                    alt="logo"
//                    className="footer-form__logo"
//                  />
//                  <div className="form-control">
//                    <InputMask
//                      type="email"
//                      name="email"
//                      className="form-control__input"
//                      onChange={handleChange}
//                     value={formData.email}
//                      placeholder='Email'
//                    />
//
//                    <InputMask
//                      type="tel"
//                      name="phone"
//                      className="form-control__input"
//                      mask="+7\ (999) 999 99 99"
//                      onChange={handleChange}
//                      value={formData.phone}
//                      placeholder='+7 (____) ___-__-__'
//                    />
//                  </div>
//
//                  <div className="form-bottom">
//                    <p className="form-bottom__text">
//                      <IntlProvider
//                        locale={locale}
//                        messages={messages[locale]}
//                      >
//                        <FormattedMessage
//                          id="text"
//                          value={locale}
//                        />
//                      </IntlProvider>
//                    </p>
//                    <button type="submit" className="form-bottom__btn" value="Submit">
//                      <IntlProvider
//                     locale={locale}
//                        messages={messages[locale]}
//                      >
//                        <FormattedMessage
//                          id="btnText"
//                          value={locale}
//                        />
//                      </IntlProvider>
//                    </button>
//                  </div>
//                </form>
//             </div>
//   )
// }

class Form extends Component {
  state = {
    email: '',
    phone: '',
    emailStatus: ''
  };

  // handle the value
  handleChange = InputMask => e => {
    this.setState({[InputMask]: e.target.value});
  }


  // when submit btn is clicked
  submitForm = (e) => {
    const {email, phone} = this.state;
    e.preventDefault();




    // create a new XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the response state and the step

      this.setState ({
        emailStatus: xhr.responseText,
      });

    });

    // open the request with the verb and the url
   xhr.open('GET', 'https://expovision.io/api.expo/index.php?sendto=' + email +
      '&phone=' + phone);
    // send the request
    xhr.send();

    // if(email === true && phone === true){
    //   ('.mes').css('display', 'block')
    // }else{
    //   ('.mes').css('display', 'none')
    // }



    // reset the fields
    this.setState({
      email: '',
      phone: '',
      emailStatus: ''
    });



  }

  render(){
    const {email, phone, emailStatus} = this.state;
    return(
      <div className="formBlock" onSubmit={this.submitForm}>

        {emailStatus ? emailStatus : null}
        <form className="footer-form form">
          <img
            src={Logo}
            alt="logo"
            className="footer-form__logo"
          />
          <div className="form-control">
            <div className="mes">
              сообщение отправлено
            </div>
            <InputMask
              type="email"
              name="email"
              className="form-control__input"
              onChange={this.handleChange('email')}
              value={email}
              placeholder='Email'
            />

            <InputMask
              type="tel"
              name="phone"
              className="form-control__input"
              mask="+7\ (999) 999 99 99"
              onChange={this.handleChange('phone')}
              value={phone}
              placeholder='+7 (____) ___-__-__'
            />
          </div>

          <div className="form-bottom">
            <p className="form-bottom__text">
              <IntlProvider
                locale={this.props.locale}
                messages={messages[this.props.locale]}
              >
                <FormattedMessage
                  id="text"
                  value={this.props.locale}
                />
              </IntlProvider>
            </p>
            <button type="submit" className="form-bottom__btn" value="Submit">
              <IntlProvider
                locale={this.props.locale}
                messages={messages[this.props.locale]}
              >
                <FormattedMessage
                  id="btnText"
                  value={this.props.locale}
                />
              </IntlProvider>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;