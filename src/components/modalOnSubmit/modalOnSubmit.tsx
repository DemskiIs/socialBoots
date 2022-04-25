import React, { FC } from "react";
import MyButton from "../Ui/button/myButton";
import s from "./modalOnSubmit.module.css"
const ModalOnSubmit: FC = () => {
    return (
        <div className={s.wrapper}>
            <div>
                <img className={s.logo} />
            </div>
            <div className={s.title}>
                Thanks for completing this form!
            </div>
            <div className={s.title2} >
                Contact your personal manager
            </div>
            <div className={s.text}>
            Our 24/7 Onboarding Team are connecting your account now.
             Please check your Email for the next 15 mins.
            </div>
            <MyButton>
            Contact Campaign manager
            </MyButton>
        </div>
    )
}

export default ModalOnSubmit