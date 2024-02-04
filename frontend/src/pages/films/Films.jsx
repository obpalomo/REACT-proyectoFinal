import {useContext} from "react"
import {SessionContext} from "../../contexts/SessionContext"

export default function Films(){
    const {user} = useContext(SessionContext)
    return(
        <>
            <h2>Películas</h2>
        </>
    )
}