import { promises as fs } from 'fs'
import path from 'path'
import { COMPONENTS_LIST } from '@/data/component-list'

// import { CodeBlock } from "@/components/code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import { CodeBlock } from '@/components/ui/code-block'
import CodeHighlight from '@/components/ui/code-hightlighter'

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
          <TabsContent value='code'>
            {/* {comp} */}
            {/* <CodeBlock lang='tsx'>
            {comp}
            </CodeBlock> */}

            <CodeHighlight code={comp} />

            {/* <CodeBlock code={comp} lang="tsx" />
          {Boolean(twConfig) && (
            <div className="my-10">
            <div className="mb-2">
            <span className="text-xl text-gray-400">
                  tailwind.config.js
                  </span>
                  </div>
                  <CodeBlock
                  code={twConfig}
                  lang="tsx"
                  fileName="tailwind.config.js"
                  />
                  </div>
                  )} */}
          </TabsContent>
          <TabsContent value='usage'>
            {/* <CodeBlock code={demo} lang="tsx" /> */}
            {/* {demo} */}
            {/* <CodeBlock lang='tsx'>
            {demo}
            </CodeBlock> */}
            <CodeHighlight code={demo} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
