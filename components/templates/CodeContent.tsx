'use client'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CodeHighlight from '../ui/code-hightlighter'
// type TemplateProps = {
//     id: number,
//     title: string,
//     description: string,
//     imageUrl: string,
//     slug: string,
//     pageDemo: React.ComponentType,
//     category: string
//     components: string[]

// }
type Props = {
  mainPageCode: string
  components: string[]
  componentCodes: string[]
}

export default function CodeContent ({
  components,
  mainPageCode,
  componentCodes
}: Props) {
  const [activeTab, setActiveTab] = useState('page.tsx') // Track active tab

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }
  return (
    <div>
      <Tabs defaultValue='page.tsx' onValueChange={handleTabChange}>
        <TabsList className=''>
          <TabsTrigger value='page.tsx'>page.tsx</TabsTrigger>
          {components.map((component, index) => (
            <TabsTrigger key={index} value={component}>
              {component}
            </TabsTrigger>
          ))}
        </TabsList>
        {/* Dynamic Note */}
        <div className='p-4  border rounded-md mt-4'>
          {activeTab === 'page.tsx' ? (
            <p className='text-sm text-gray-600 italic'>
              Copy the below code into <strong>`{activeTab}`</strong>
            </p>
          ) : (
            <p className='text-sm text-gray-600 italic'>
              Copy the below code into{' '}
              <strong>`./component/{activeTab}`</strong>
            </p>
          )}
        </div>
        <div className='border rounded-md mt-4 p-0'>
          <TabsContent value='page.tsx' className='max-h-screen h-full overflow-auto mt-0'>
            <CodeHighlight code={mainPageCode} />
          </TabsContent>
          {components.map((component, index) => (
            <TabsContent
              key={index}
              value={component}
              className='max-h-screen h-full overflow-auto mt-0'>
              <CodeHighlight code={componentCodes[index]} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  )
}
