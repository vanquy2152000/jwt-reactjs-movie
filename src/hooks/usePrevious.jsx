import { useEffect, useRef } from "react";

const usePrevious = (value) => {
    const ref = useRef()

    // khi nhan vao vi tri da ref thi se = value nhap vao va dong thoi re-render
    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}

export default usePrevious