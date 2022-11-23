import { useRef } from 'react';
import { useState } from 'react';
import './style.css'

const DownloadManager =() =>{
    const frame = useRef(null)
    const [fileurl, setFileurl] = useState('')

    const validateURL =(textval)=> {
       
         let s = String(textval)
         .toLowerCase()
         .match(
            /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
         )
 
         if(s) {
             return true
         }
         else {
             return false
         }
    }

    const Download =()=> {
        console.log(fileurl)

        if(validateURL(fileurl)) {
            if(window.confirm(`Сохранить файл ${fileurl}?`)) {
                frame.current.href = fileurl
                frame.current.click()
                return
            }  
        }
        else {
            alert("Неверный url")
        }
    }

    return(
        <div className="card-cont">
           <h3>Введите Url</h3>
           <div className="email-row">
          <input value={fileurl} onChange={(e)=>setFileurl(e.target.value)}  type="text" className="custominput"></input>
          <button onClick={Download} className="custombutton custombutton__email">Скачать</button>
          <a ref={frame} href='' style={{display:'none'}} download>Click to download</a>
          </div>
        </div>
    );
}

export default DownloadManager;