'use client'
import React, { useRef, useEffect, useState } from 'react'

const TextSVG = ({ text }: { text: string }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const textRef = useRef<SVGTextElement>(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [gradientCenter, setGradientCenter] = useState({ cx: '50%', cy: '50%' })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect()
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100
      setGradientCenter({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`
      })
    }
  }, [cursor])

  return (
    <div className=' w-full h-full p-0 my-0'>
      <svg
        ref={svgRef}
        width='100%'
        height='100%'
        viewBox='0 0 300 100'
        xmlns='http://www.w3.org/2000/svg'
        className='text-slate-700 p-0 m-0'
      >
        <defs>
          <radialGradient
            id='multiColorGradient'
            gradientUnits='userSpaceOnUse'
            r='15%'
            cx={gradientCenter.cx}
            cy={gradientCenter.cy}
          >
            {/* // you can edit the stopColor to change the gradient effect */}
            {isHovered && (
              <>
                <stop offset='40%' stopColor='#ffffff' stopOpacity='0.75' />
                <stop offset='60%' stopColor='#ffffff' stopOpacity='0.50' />
                <stop offset='80%' stopColor='#ffffff' stopOpacity='0.25' />
                <stop offset='90%' stopColor='#ffffff' stopOpacity='0.2' />
              </>
            )}
            <stop offset='100%' stopColor='#40404065' stopOpacity='0.75' />
          </radialGradient>
        </defs>
        <text
          ref={textRef}
          x='50%'
          y='50%'
          textAnchor='middle'
          dominantBaseline='middle'
          fontSize='55'
          fill='none'
          stroke='url(#multiColorGradient)'
          strokeWidth='0.5'
          style={{ cursor: 'default' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {text}
        </text>
      </svg>
    </div>
  )
}

export default TextSVG
