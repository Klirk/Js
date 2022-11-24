import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

export default function Profile() {
    useEffect(async () => {
        await clearAuth();
    });
    const clearAuth = async () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <>
            {<Navigate replace to='/' />}
        </>
    )
}
