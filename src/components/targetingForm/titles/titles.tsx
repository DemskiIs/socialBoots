import React, { FC } from "react";
import s from "./titles.module.css"

interface TitlesProps {
    title: string
    text?: string
    backgroundColor?: string
}

const Titles:FC<TitlesProps> = ({title, text, backgroundColor}) => {
    return (
        <div className={s.titles} >
            <div className={s.wrapper}>
                <div 
                className={s.logo}
                style={{background: backgroundColor}}
                >
                </div>
                <div className={s.title}>{title}</div>
            </div>
            <div className={s.text}>{text}</div>
        </div>
    )
}

export default Titles