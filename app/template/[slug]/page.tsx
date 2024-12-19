import { promises as fs } from 'fs'
import { TEMPLATE_LIST } from '@/data/template-list'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import path from 'path'
import CodeContent from '@/components/templates/CodeContent'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams () {
  const slug = TEMPLATE_LIST.map(template => ({
    slug: template.slug
  }))

  return slug
}

export default async function TemplatePage ({ params }: Props) {
  const { slug } = params

  const currentTemplate = TEMPLATE_LIST.find(template => template.slug === slug)

  if (!currentTemplate) return <div>Can&apos;t find component</div>

  const mainPagePath = `./components/templates/pages/${currentTemplate.slug}/${currentTemplate.slug}.tsx`
  const mainPageCode = await fs.readFile(
    path.join(process.cwd(), mainPagePath),
    'utf8'
  )

  const componentCodes = await Promise.all(
    currentTemplate.components.map(async component => {
      const code = await fs.readFile(
        path.join(
          process.cwd(),
          `./components/templates/pages/${currentTemplate.slug}/components/${component}`
        ),
        'utf8'
      )
      return code
    })
  )

  return (
    <div className='mt-6 w-full flex justify-center items-center pb-32'>
      <div className='max-w-7xl w-full'>
        <h1 className='mb-2 text-2xl font-bold text-gray-400'>
          {currentTemplate.title}
        </h1>
        <p className='text-zinc-600 text-sm md:text-lg italic'>
          {currentTemplate.description}
        </p>
        <div className='my-10 bg-zic-300/10 w-full h-full flex justify-center items-center'>
          <div className='border flex justify-center items-center w-fit'>
            
            <Image
              src={currentTemplate.imageUrl}
              alt={currentTemplate.title}
              width={1300}
              height={300}
            />
           
          </div>
        </div>
        <div className='flex justify-between'>
          <Link
            href={`/template/live/${slug}`}
            target='_blank'
            rel='noopener noreferrer'
            className='block group  transition-all duration-300'
          >
            <Button>
              Live Preview
              <ArrowUpRight />
            </Button>
          </Link>
          <div>
            <p className='text-zinc-600 text-sm md:text-lg italic'>
              {currentTemplate.category}
            </p>
          </div>
        </div>
        <div className='w-full h-full mt-10'>
          <CodeContent components={currentTemplate.components} mainPageCode={mainPageCode} componentCodes={componentCodes}/>
        </div>
      </div>
    </div>
  )
}
