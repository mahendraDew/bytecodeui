import { promises as fs } from 'fs'
import path from 'path'
import { COMPONENTS_LIST } from '@/data/component-list'

// import { CodeBlock } from "@/components/code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import { CodeBlock } from '@/components/ui/code-block'
import CodeHighlight from '@/components/ui/code-hightlighter'

import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal']
})

interface Props {
  params: { slug: string }
}

export async function generateStaticParams () {
  const slug = COMPONENTS_LIST.map(component => ({
    slug: component.slug
  }))

  return slug
}

export default async function ComponentPage ({ params }: Props) {
  const { slug } = params

  const currentComponent = COMPONENTS_LIST.find(
    component => component.slug === slug
  )

  if (!currentComponent) return <div>Can&apos;t find component</div>

  //   const twConfig = JSON.stringify(currentComponent?.twConfig, null, 2)

  const compFilePath = `./components/examples/${currentComponent?.slug}.tsx`
  const demoFilePath = `./components/demos/${currentComponent?.slug}-demo.tsx`

  const comp = await fs.readFile(path.join(process.cwd(), compFilePath), 'utf8')
  const demo = await fs.readFile(path.join(process.cwd(), demoFilePath), 'utf8')

  return (
    <div className='mt-6 w-full flex justify-center items-center pb-32'>
      <div className='max-w-7xl w-full'>
        <h1 className='mb-2 text-2xl font-bold text-gray-400'>
          {currentComponent.name}
        </h1>
        <div className='relative my-12 overflow-hidden rounded-xl border bg-[radial-gradient(#ffffff12_1px,transparent_1px)] bg-[size:16px_16px] p-12 py-10'>
          <div className='flex h-40 w-full items-center justify-center'>
            <currentComponent.component />
          </div>
        </div>
        <Tabs defaultValue='code'>
          <TabsList className=''>
            <TabsTrigger value='code'>Code</TabsTrigger>
            <TabsTrigger value='usage'>Usage</TabsTrigger>
          </TabsList>
          <div className='my-5'>
            <div className='mb-2  text-gray-400'>
              Copy and paste the following code into your project.
            </div>
            <div className=''>
              <span className={`bg-zinc-900 text-slate-300 p-1 rounded-md  px-2 ${manrope.className}`}>components/ui/{currentComponent.slug}.tsx</span>
            </div>
          </div>
          <TabsContent value='code'>
            <CodeHighlight code={comp} />
          </TabsContent>
          <TabsContent value='usage'>
            <CodeHighlight code={demo} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
