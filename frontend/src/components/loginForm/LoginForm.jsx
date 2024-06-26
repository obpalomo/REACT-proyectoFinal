import { useContext, useState } from "react"
import axios from 'axios'
import { SessionContext } from "../../contexts/SessionContext"
import { useForm} from "react-hook-form"




export default function LoginForm() {

    const {register, handleSubmit, formState:{errors}} = useForm()

    /* const [datos, setDatos] = useState({email: "", password:""}) */
    const {login} = useContext(SessionContext)

    function doLogin(datos){
        axios.post("http://localhost:3000/api/users/login", datos)
        .then((response)=>{
            console.log(response.data)
            login({email: datos.email, token: response.data.token})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-secondary text-white" style={{background:'green'}} >Inicio de Sesión</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(doLogin)}>
                                <form className="form-floating mb-3">
                                    <input type="email" {...register('email',{required:true})} className="form-control" id="floatingInputValue" aria-describedby="emailHelp" />
                                    <label htmlFor="floatingInputValue" className="form-label">Correo Electrónico</label>
                                </form>
                                <br></br>
                                <form className="form-floating mb-3">
                                    <input type="password" {...register('password',{required:true, minLength:8})} className="form-control" id="floatingInputValue" />
                                    <label htmlFor="floatingInputValue" className="form-label">Contraseña</label>
                                    {errors.password?.type === 'required' && <p>La contraseña es obligatoria</p>}
                                    {errors.password?.type === 'minLength' && <p>La contraseña debe tener 8 caracteres como mínimo</p>}
                                </form>
                                <br></br>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Recuérdame</label>
                                </div>
                                <button type="submit" className="btn btn-secondary text-white pointer" style={{alignItems:"center"}}>Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}