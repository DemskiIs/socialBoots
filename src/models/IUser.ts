import React from "react";

export interface IUser {
    email: string
    cardholderName: string
    cardNumber: string
    date: string
    cvv: string
    country: string
    zip: string
    discountCode: string
    acceptedAppRules: boolean
}

export interface ITarget {
    userEmail: string
    targetAudience: string
    targetNiche: string
    nickname: string
    targetLokation: string
    targetProfileType: string
}