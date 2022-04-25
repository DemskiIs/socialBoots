import React, { FC } from "react";
import s from "./myButton.module.css"

interface MyButtonProps {
    children?: React.ReactChild | React.ReactNode
    onClick?: Function
}

const MyButton:FC <MyButtonProps> = ({ children, onClick }) => {
    return (
        <button {...onClick} className={s.myBtn}>
            <div className={s.text}>
                {children}
            </div>
        </button>
    )
}

export default MyButton;