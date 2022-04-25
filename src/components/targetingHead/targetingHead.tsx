import React, { FC } from "react";
import s from "./targetingHead.module.css"

const TargetingHead: FC = ({ }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title} >Targeting</div>
            <div className={s.text}>
                We just need a bit of information about the type of followers you 
                 would like to receive so we can deliver the best results
            </div>
        </div>
    )
}

export default TargetingHead;