import './App.css';
import EmailValidation from './Components/EmailVal'
import DownloadManager from './Components/DownloadManager'
import { useRef, useState } from 'react';

function App() {
  const mailRef = useRef(null)
  const fileRef = useRef(null)
  const [curbar, setCurbar] = useState("email")

  const [component, setComponent] = useState(<EmailValidation/>)

  const TogleClick =(type)=> {
    switch(type) {
      case "email":
        if(curbar == "email") {
          return
        }
        setComponent(<EmailValidation/>)
        fileRef.current.className="togglebutton"
        mailRef.current.className="togglebutton togglebutton__border"
        setCurbar("email")
        break;
      case "download":
        if(curbar == "download") {
          return;
        }
        setComponent(<DownloadManager/>)
        fileRef.current.className="togglebutton togglebutton__border"
        mailRef.current.className="togglebutton"
        setCurbar("download")
        break;
    }
  }

  return (
    <div className="App">
      <div className="card">
        <h2>Тестовое задание</h2>
        <div className="card-row">
          <div ref={mailRef} onClick={()=>TogleClick("email")} className="togglebutton togglebutton__border">Проверить E-mail</div>
          <div ref={fileRef} onClick={()=>TogleClick("download")} className="togglebutton">Скачать файл</div>
        </div>
        {component}
      </div>
    </div>
  );
}

export default App;
