import React, { useState, useEffect, useCallback } from 'react'


function useWinSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    })

    const Resize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', Resize)
        return () => {
            window.removeEventListener('resize', Resize)
        }
    }, [Resize])

    return size
}

function Demo() {
    const size = useWinSize()
    return (
        <>
            页面: {size.width} x {size.height}
        </>
    )
}

export default Demo