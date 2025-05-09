"use client"

import { useAnimationFrame } from "motion/react"
import { useRef } from "react"

export default function UseAnimationFrame() {
    const ref = useRef<HTMLDivElement>(null)

    useAnimationFrame((t) => {
        if (!ref.current) return

        const rotate = Math.sin(t / 10000) * 100
        const y = (1 + Math.sin(t / 1000)) * -10
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
    })

    return (
        <div className="flex justify-center items-center">
            <div className="cube" ref={ref}>
                <div className="side front" />
                <div className="side left" />
                <div className="side right" />
                <div className="side top" />
                <div className="side bottom" />
                <div className="side back" />
            </div>
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>{`
            
        .container {
            perspective: 800px;
            width: 200px;
            height: 200px;
        }

        .cube {
            width: 100px;
            height: 100px;
            position: relative;
            transform-style: preserve-3d;
        }

        .side {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: red;
            opacity: 0.8;
        }

        .front {
            transform: rotateY(0deg) translateZ(50px);
            background-color: var(red);
        }
        .right {
            transform: rotateY(90deg) translateZ(50px);
            background-color: var(red);
        }
        .back {
            transform: rotateY(180deg) translateZ(50px);
            background-color: var(red);
        }
        .left {
            transform: rotateY(-90deg) translateZ(50px);
            background-color: var(red);
        }
        .top {
            transform: rotateX(90deg) translateZ(50px);
            background-color: var(--hue-3-transparent);
        }
        .bottom {
            transform: rotateX(-90deg) translateZ(50px);
            background-color: var(--hue-6-transparent);
        }

    `}</style>
    )
}
