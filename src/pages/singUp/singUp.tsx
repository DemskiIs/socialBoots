import React, { FC } from "react";
import RegistrationForm from "../../components/registrationFrom/registrationForm";
import RegistrationHead from "../../components/registrationHead/registrationHead";
import s from "./singUp.module.css"

const SingUp: FC = ({ }) => {
    return (
            <div className={s.formWrapper}>
                <RegistrationHead />
                <RegistrationForm />
                <div className={s.cupon}>Have a coupon?</div>
            </div>
    )
}
export default SingUp