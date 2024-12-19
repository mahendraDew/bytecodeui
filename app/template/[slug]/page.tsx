import { TEMPLATE_LIST } from '@/data/template-list'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

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

  return (
    <div className='mt-6 w-full flex justify-center items-center pb-32'>
      <div className='max-w-7xl w-full'>
        <h1 className='mb-2 text-2xl font-bold text-gray-400'>
          {currentTemplate.title}
        </h1>
        <div className='my-10 bg-zic-300/10 w-full h-full flex justify-center items-center'>
          <div className='border flex justify-center items-center w-fit'>
            {/* <div className='flex w-full items-center justify-center'> */}
            {/* <currentTemplate.component /> */}
            <Image
              src={currentTemplate.imageUrl}
              alt={currentTemplate.title}
              width={1300}
              height={300}
            />
            {/* currentTemplate.imageUrl */}
            {/* </div> */}
          </div>
        </div>
        <div>
          <Link
            href={`/template/live/${slug}`}
            rel='noopener noreferrer'
            className='block group  transition-all duration-300'
          >
            <Button>
              Live Preview
              <ArrowUpRight />
            </Button>
          </Link>
        </div>

       
      </div>
    </div>
  )
}
