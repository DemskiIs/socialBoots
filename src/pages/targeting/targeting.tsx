import { Modal } from "antd";
import React, { FC, useState } from "react";
import ModalOnSubmit from "../../components/modalOnSubmit/modalOnSubmit";
import TargetingForm from "../../components/targetingForm/targetingForm";
import TargetingHead from "../../components/targetingHead/targetingHead";
import MyModal from "../../components/Ui/modal/myModal";
import s from "./targeting.module.css"
const Targeting: FC = ({ }) => {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <div className={s.wrapper}>
            <TargetingHead />
            <TargetingForm setModalVisible={setModalVisible} />
            <MyModal visible={modalVisible} setVisible={setModalVisible} >
                <ModalOnSubmit />
            </MyModal>
        </div >
    )
}

export default Targeting;