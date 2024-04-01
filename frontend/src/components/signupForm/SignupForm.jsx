import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import InputValidation from "../shared/InputValidation"
import { useTranslation } from "react-i18next"


export default function SignupForm(){

  const {t} = useTranslation()

  const [datos, setDatos] = useState({email:"", password:"", name:""})
  const navigate = useNavigate()

  function onSignup() {
    axios.post("http://localhost:3000/api/users/signup", datos)
    .then((response) => {
      navigate("/login")
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return(
      <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card">
        <div className="card-header bg-primary text-white">{t('Registro')}</div>
        <div className="card-body">
          <div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">{t('Correo Electrónico')}</label>
              <InputValidation rules={[{text:'el formato de email no es válido', fn:(p) => p.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) !==null}]} value={datos.email} onChange={(e) => setDatos({...datos, email: e.target.value })} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></InputValidation>
              <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
              <InputValidation rules={[{text:'longitud menor que 8', fn:(p) => p.length >= 8}, {text:'no contiene @', fn:(p)=> p.includes("@")}]} type="password" value={datos.password} onChange={(e) => setDatos({...datos, password: e.target.value })}></InputValidation>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">Nombre</label>
              <input value={datos.name} onChange={(e) => setDatos({...datos, name: e.target.value })} type="text" className="form-control" id="exampleInputName"/>
            </div>
            <button onClick={onSignup} type="submit" className="btn btn-primary">Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}