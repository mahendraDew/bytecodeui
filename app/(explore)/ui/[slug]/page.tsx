import { COMPONENTS_LIST } from '@/data/component-list'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import fs from 'fs/promises'
import path from 'path'

import React from 'react'
// import { CodeBlock } from '@/components/ui/code-block'
// import { CodeBlock } from '@/components/ui/code-block'

type prop = {
  params: { slug: string }
}

export default async function page ({ params }: prop) {
  const { slug } = params

  const currentComponent = COMPONENTS_LIST.find(
    component => component.slug === slug
  )

  if (!currentComponent) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        component not found
      </div>
    )
  }

  // const compFilePath = `src/components/examples/${currentComponent?.slug}.tsx`
  // const demoFilePath = `src/components/demos/${currentComponent?.slug}-demo.tsx`
  const compFilePath = `./components/examples/shimmer.tsx`
  const demoFilePath = `./components/demos/shimmer-demo.tsx`

 
  const compAbsPath = path.join(process.cwd(), compFilePath);
  const demoAbsPath = path.join(process.cwd(), demoFilePath);
  
  const compRead = await fs.readFile(compAbsPath, 'utf8')
  const demoRead = await fs.readFile(demoAbsPath, 'utf8')

  return (
    <div className=' w-full h-full mt-5'>
      <h1 className='mb-2 text-2xl font-bold text-gray-400'>
        {currentComponent.name}
      </h1>
      <div className='relative my-12 overflow-hidden rounded-xl border bg-[radial-gradient(#ffffff12_1px,transparent_1px)] bg-[size:16px_16px] p-12 py-10'>
        <div className='h-40 w-full flex justify-center items-center'>
          <currentComponent.component />
        </div>
      </div>
      <div>
        <Tabs defaultValue='code' className='w-full '>
          <TabsList className=' '>
            <TabsTrigger value='code' className='bg-transparent'>
              Code
            </TabsTrigger>
            <TabsTrigger value='usage'>Usage</TabsTrigger>
          </TabsList>
          <TabsContent value='code' className=''>
            {/* <CodeBlock lang='tsx'>{compRead}</CodeBlock> */}
            {/* <div className='bg-zinc-900 p-2'>{compRead}</div> */}
            {"/code - CODE"}
            {compRead}
          </TabsContent>
          <TabsContent value='usage'>
            {/* <CodeBlock lang='tsx'>{demoRead}</CodeBlock> */}
            {/* <div className='bg-zinc-900 p-2'>{demoRead}</div> */}
            {"/code - DEMO"}
            {demoRead}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
