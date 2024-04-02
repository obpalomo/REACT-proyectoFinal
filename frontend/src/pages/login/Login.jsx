import LoginForm from "../../components/loginForm/LoginForm"
import { useTranslation } from "react-i18next"
import './Login.css';

export default function Login(){

    const { t, i18n} = useTranslation();

    return(
        <>
            <h2>{t('Inicio Sesión')}</h2>
            <LoginForm></LoginForm>
        </>
    )
}