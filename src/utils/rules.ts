import React from "react";

export const rules = {
    required: (message: string) => ({
        required: true,
        message
    }),

    len: (message: string, len: number) => ({
        message,
        len
    })
}