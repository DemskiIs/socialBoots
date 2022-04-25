import React, { FC, ReactElement } from "react"; 

import s from "./myModal.module.css"

interface MyModalProps {
    visible: boolean
    setVisible: Function
    children: React.ReactChildren | React.ReactNode
}

const MyModal:FC<MyModalProps> = ({children, visible, setVisible}) => {

    const rootClasses = [s.myModal]

    if (visible) {
        rootClasses.push(s.active)
    }
    
    return <div onClick={ () => setVisible(false)} className={rootClasses.join(' ')}>
        <div onClick={ (e) => e.stopPropagation() } className={s.myModalContent}>
            {children}
        </div>
    </div>
}

export default MyModal;