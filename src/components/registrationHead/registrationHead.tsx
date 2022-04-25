import React, { FC } from "react";
import s from "./registrationHead.module.css"

const RegistrationHead: FC = ({ }) => {
    return (
        <div className={s.wrapper}>
            <div>
                <div className={s.premium}>Premium</div>
                <div className={s.singUpWith} >Faster Instagram Growth</div>
            </div>
            <div className={s.priceWrapper} >
                <div className={s.price} >$199</div>
                <div className={s.time} >/month</div>
            </div>        
        </div>
    )
}

export default RegistrationHead