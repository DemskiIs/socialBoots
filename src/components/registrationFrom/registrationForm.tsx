import { Checkbox, Form, Input, Select } from "antd";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { RouteNames } from "../../router";
import { rules } from "../../utils/rules";
import MyButton from "../Ui/button/myButton";
import s from "./registrationForm.module.css"

const RegistrationForm: FC = () => {

    const [checkLabel, setCheckLabel] = useState(
        <div className={s.checkWrapper}>
            I accept the
            <div className={s.link}>Terms of Service</div>
            and
            <div className={s.link} >Privacy Policy</div>
        </div>
    )
    const [buttonLabel, setButtonLabel] = useState(
        <div>Get started    $199  $249</div>
    )
    const [validateError, setValidateError] = useState('Please enter a valid ')

    const [email, setEmail] = useState({
        isActive: false, normal: 'Email', active: 'Demski.Demi@mail.ru', value: ''
    })
    const [cardholderName, setCardholderName] = useState({
        isActive: false, normal: 'Cardholder Name', active: 'ALEX SMITH', value: ''
    })
    const [cardNumber, setCardNumber] = useState({
        isActive: false, normal: 'Card Number', active: '1234 5678 9101 1213', value: ''
    })
    const [date, setDate] = useState({
        isActive: false, normal: 'Date', active: '13.13.2022', value: ''
    })
    const [cvv, setCvv] = useState({
        isActive: false, normal: 'CVV', active: '123', value: ''
    })
    const [country, setCountry] = useState({
        normal: 'Country', value: '',
        options: [
            { value: 'country1', name: 'Country1' },
            { value: 'country2', name: 'Country2' },
            { value: 'country3', name: 'Country3' },
        ]
    })
    const [zip, setZip] = useState({
        isActive: false, normal: 'Zip', active: '12345', value: ''
    })
    const [discountCode, setDiscountCode] = useState({
        normal: 'Discount Code', value: ''
    })
    const [acceptedAppRules, setAcceptedAppRules] = useState({
        value: false
    })

    const router = useNavigate()
    const { registration } = useActions()

    const submit = () => {
        registration({
            email: email.value,
            cardholderName: cardholderName.value,
            cardNumber: cardNumber.value,
            date: date.value,
            cvv: cvv.value,
            country: country.value,
            zip: zip.value,
            discountCode: discountCode.value,
            acceptedAppRules: acceptedAppRules.value
        })
        router(RouteNames.TARGETING)
    }

    return (
        <Form onFinish={submit} className={s.wrapper} >
            <Form.Item
                name="email"
                rules={[rules.required('required'), { type: 'email', message: validateError + email.normal }]}
            >
                <Input
                    onChange={e => setEmail({ ...email, value: e.target.value })}
                    onClick={() => setEmail({ ...email, isActive: true })}
                    onBlur={() => setEmail({ ...email, isActive: false })}
                    value={email.value}
                    placeholder={email.isActive
                        ? email.active
                        : email.normal}
                />
            </Form.Item>

            <Form.Item
                name="cardholderName"
                rules={[rules.required('required')]}
            >
                <Input
                    onChange={e => setCardholderName({ ...cardholderName, value: e.target.value })}
                    onClick={() => setCardholderName({ ...cardholderName, isActive: true })}
                    onBlur={() => setCardholderName({ ...cardholderName, isActive: false })}
                    value={cardholderName.value}
                    placeholder={cardholderName.isActive
                        ? cardholderName.active
                        : cardholderName.normal}
                />
            </Form.Item>
            <Form.Item
                name="cardNumber"
                rules={[rules.len(validateError + cardNumber.normal, 19), rules.required('required')]}
            >
                <Input
                    onChange={e => setCardNumber({ ...cardNumber, value: e.target.value })}
                    onClick={() => setCardNumber({ ...cardNumber, isActive: true })}
                    onBlur={() => setCardNumber({ ...cardNumber, isActive: false })}
                    value={cardNumber.value}
                    placeholder={cardNumber.isActive
                        ? cardNumber.active
                        : cardNumber.normal}
                />
            </Form.Item>
            <div className={s.formWrapper} >
                <Form.Item
                    className={s.formMediumItem}
                    name="date"
                    rules={[rules.required('required'), { type: 'date', message: validateError + date.normal }]}
                >
                    <Input
                        onChange={e => setDate({ ...date, value: e.target.value })}
                        onClick={() => setDate({ ...date, isActive: true })}
                        onBlur={() => setDate({ ...date, isActive: false })}
                        value={date.value}
                        placeholder={date.isActive
                            ? date.active
                            : date.normal}
                    />
                </Form.Item>
                
                <Form.Item
                    className={s.formSmallItem}
                    name="cvv"
                    rules={[rules.required('required'), rules.len(validateError + cvv.normal, 3)]}
                >
                    <Input
                        onChange={e => setCvv({ ...cvv, value: e.target.value })}
                        onClick={() => setCvv({ ...cvv, isActive: true })}
                        onBlur={() => setCvv({ ...cvv, isActive: false })}
                        value={cvv.value}
                        placeholder={cvv.isActive
                            ? cvv.active
                            : cvv.normal}
                    />
                </Form.Item>
            </div>
            <div className={s.formWrapper} >
                <Form.Item
                    className={s.formMediumItem}
                    name='country'
                    rules={[rules.required(validateError + 'country')]}
                >
                    <Select
                        placeholder={country.normal}
                        onChange={value => setCountry({ ...country, value: value })}
                    >
                        {country.options.map(data =>
                            <Select.Option key={data.value} value={data.value}>{data.name}</Select.Option>
                        )}
                    </Select>
                </Form.Item>

                <Form.Item
                    name="zip"
                    rules={[rules.required('required'), rules.len(validateError + zip.normal, 5)]}
                >
                    <Input
                        onChange={e => setZip({ ...zip, value: e.target.value })}
                        onClick={() => setZip({ ...zip, isActive: true })}
                        onBlur={() => setZip({ ...zip, isActive: false })}
                        value={zip.value}
                        placeholder={zip.isActive
                            ? zip.active
                            : zip.normal}
                    />
                </Form.Item>
            </div>
            <Form.Item
                name="discountCode"
            >
                <Input
                    onChange={e => setDiscountCode({ ...discountCode, value: e.target.value })}
                    value={discountCode.value}
                    placeholder={discountCode.normal}
                />
            </Form.Item>
            <Form.Item
                rules={[rules.required('required')]}
                name="acceptedAppRules" valuePropName="checked" >
                <Checkbox
                    onChange={event => setAcceptedAppRules({ ...acceptedAppRules, value: event.target.value })}
                >
                    {checkLabel}
                </Checkbox>
            </Form.Item>
            <div className={s.buttonWrapper}>
                <Form.Item>
                    <MyButton onClick={() => submit()}>
                        {buttonLabel}
                    </MyButton>
                </Form.Item>
            </div>
        </Form>
    )
}

export default RegistrationForm;