import { useRef } from 'react';
import { useState } from 'react';
import './style.css'

const EmailValidation =()=> {
    const mesItems = useRef(null)
    const [mes, setMes] = useState(' ')
    const [mail, setMail] = useState('');

    const CorrectMassage = "Введён корректный E-mail"
    const BadMassage = "Введён недопустимый E-mail"

    const validateEmail = (email) => {
        let s = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )

        if(s) {
            return true
        }
        else {
            return false
        }
      }

    const CheckClick = ()=> {
      if(validateEmail(mail)) {
        setMes(CorrectMassage)
        mesItems.current.className="correct"
      }
      else {
        setMes(BadMassage)
        mesItems.current.className="wrong"
      }
    }

    const InputFocus =()=> {
        setMes(" ")
    }

    return(
       <div className="card-cont">
          <h3>Введите E-mail</h3>
          <div className="email-row">
          <input value={mail} onChange={(e)=>setMail(e.target.value)} onFocus={InputFocus} type="text" className="custominput"></input>
          <button onClick={CheckClick} className="custombutton custombutton__email">Проверить</button>
          </div>
          <div ref={mesItems} className="correct">{mes}</div>
       </div>
    );
}

export default EmailValidation