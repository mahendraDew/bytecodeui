// import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props={
    title: string
    link:string
    iconFirst:boolean
}

function ButtonArrowIcon (props: Props) {
  return (
    <Link href={props.link} className=''>
      {/* <p className='flex gap-2 text-sm group'>Archieve Projects <MoveRight className='transition-all translate-x-1' /> </p> */}
      <p className='flex gap-2 text-sm group hover:cursor-pointer'>
        {props.iconFirst && 
        <span aria-hidden="true" className='transition-all transform group-hover:-translate-x-1'>←</span>
        }
        <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-current after:scale-x-0 after:origin-right after:transition-[transform,opacity] after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left">
          {props.title}
        </span>
        {/* <MoveRight className='transition-all transform group-hover:translate-x-1' /> */}
        {!props.iconFirst && 
        <span aria-hidden="true" className='transition-all transform group-hover:translate-x-1'>→</span>
        }

      </p>
    </Link>
  )
}

export default ButtonArrowIcon