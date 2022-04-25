import { Form, Input, Select } from "antd";
import React, { FC, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { rules } from "../../utils/rules";
import MyButton from "../Ui/button/myButton";
import s from "./targetingForm.module.css"
import Titles from "./titles/titles";

interface TargetingFormProps {
    setModalVisible: Function
}

const TargetingForm: FC<TargetingFormProps> = ({ setModalVisible }) => {

    const [targetAudience, setTargetAudience] = useState({
        value: '',
        title: 'Target Audience',
        text: 'Please describe the niche and interests of the  audience. Our Marketing team will use this information to attract targeted followers',
        backgroundColor: '#D5D3F5',

    })
    const [targetNiche, setTargetNiche] = useState({
        value: '',
        title: 'Target Niche',
        backgroundColor: '#FFE9AF',
        placeholder: 'Select your Target Niche',
        options: [
            { value: 'health', name: 'Health' },
            { value: 'fitness', name: 'Fitness' },
            { value: 'tech', name: 'Tech' },
        ]
    })
    const [nickname, setNickname] = useState({
        value: '',
        placeholder: 'Enter your Niche Name'
    })
    const [targetLokation, setTargetLokation] = useState({
        value: '',
        title: 'Target Lokation',
        backgroundColor: '#FFC7C7',
        placeholder: 'Example: London',
    })
    const [targetProfileType, seTargetProfileType] = useState({
        value: '',
        placeholder: 'Select your Profile Type',
        title: 'Target Profile Type',
        backgroundColor: '#DFC7F0',
        options: [
            { value: 'allProfiles', name: 'All Profiles' },
            { value: 'maleFemaleprofiles', name: 'Male & Female Profiles' },
            { value: 'businessProfiles', name: 'Business Profiles' },
        ]
    })

    const [validateError, setValidateError] = useState('Please choose your ')
    const { email } = useTypedSelector(state => state.auth.user)
    const {setTarget} = useActions()

    const submit = () => {
        setTarget({
            targetAudience: targetAudience.value,
            targetNiche: targetNiche.value,
            nickname: nickname.value,
            targetLokation: targetLokation.value,
            targetProfileType: targetProfileType.value,
            userEmail: email
        });
        setModalVisible(true);
    }
    const { TextArea } = Input;
    
    return (
        <Form onFinish={submit}  >
            <Titles
                title={targetAudience.title}
                text={targetAudience.text}
                backgroundColor={targetAudience.backgroundColor}
            />
            <Form.Item className={s.border} >
                <TextArea
                    onChange={e => setTargetAudience({ ...targetAudience, value: e.target.value })}
                    value={targetAudience.value}
                />
            </Form.Item>
            <Titles
                title={targetNiche.title}
                backgroundColor={targetNiche.backgroundColor}
            />
            <div className={s.formWrapper} >
                <Form.Item
                    className={s.formMediumItem}
                    name='targetNiche'
                    rules={[rules.required(validateError + 'Target Niche')]}
                >
                    <Select
                        placeholder={targetNiche.placeholder}
                        onChange={value => setTargetNiche({ ...targetNiche, value: value })}
                    >
                        {targetNiche.options.map(data =>
                            <Select.Option value={data.value}>{data.name}</Select.Option>
                        )}
                    </Select>
                </Form.Item>

                <Form.Item name='nickname'>
                    <Input
                        className={s.formMediumItem}
                        value={nickname.value}
                        onChange={e => setNickname({ ...nickname, value: e.target.value })}
                        placeholder={nickname.placeholder}
                    />
                </Form.Item>
            </div>
            <Titles
                title={targetLokation.title}
                backgroundColor={targetLokation.backgroundColor}
            />
            <Form.Item
                name='targetLokation'
            >
                <Input
                    className={s.formLokationItem}
                    value={targetLokation.value}
                    onChange={e => setTargetLokation({ ...targetLokation, value: e.target.value })}
                    placeholder={targetLokation.placeholder}
                />
            </Form.Item>

            <Titles
                title={targetProfileType.title}
                backgroundColor={targetProfileType.backgroundColor}
            />
            <Form.Item
                name='targetProfileType'
                rules={[rules.required(validateError + 'Profile Type')]}
            >
                <Select
                    onChange={value => seTargetProfileType({ ...targetProfileType, value: value })}
                    placeholder={targetProfileType.placeholder}
                >
                    {targetProfileType.options.map(data =>
                        <Select.Option value={data.value}>{data.name}</Select.Option>
                    )}
                </Select>
            </Form.Item>

            <Form.Item>
                <MyButton onClick={() => submit()}>
                    <div>continiue</div>
                </MyButton>
            </Form.Item>
        </Form>
    )
}

export default TargetingForm;
