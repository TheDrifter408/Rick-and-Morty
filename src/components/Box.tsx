'use client'
import { animate } from "motion";
import { ReactElement, useEffect, useRef } from "react";

function Box({ children,styles }: {
    children:ReactElement,
    styles:string
}){
    const box = useRef(null)

    //animation
    useEffect(() => {
        if(box.current){
            animate(box.current,
                { opacity: 1, transform: "none" },
                { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
            )
        }
    },[])

    return(
        <div ref={box} className={styles + " relative "}>
            {children}
        </div>
    )
}

export default Box;