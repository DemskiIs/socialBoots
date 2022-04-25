import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../router";
import s from "./navBar.module.css"

const NavBar: FC = () => {
    const params = useParams()
    const router = useNavigate()
    console.log(params + 'ეს არ გამოვიდა')
    return (
        <div className={s.wrapper}>
            <div className={s.navItem}>
                <div
                    className={s.link}
                    onClick={() => router(RouteNames.SINGUP)}
                >
                    <div className={s.point}></div>
                    <div className={s.title}>Sing Up</div>
                </div>
                <div className={s.line} />
                <div
                    className={s.link}
                    onClick={() => router(RouteNames.TARGETING)}
                >
                    <div className={s.point}></div>
                    <div className={s.title}>Targeting</div>
                </div>
            </div>
        </div>
    )
}

export default NavBar; 