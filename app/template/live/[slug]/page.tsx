import CustomLayout from '@/components/CustomLayout'
import { TEMPLATE_LIST } from '@/data/template-list'
interface Props {
  params: { slug: string }
}

export async function generateStaticParams () {
  const slug = TEMPLATE_LIST.map(template => ({
    slug: template.slug
  }))

  return slug
}

export default async function LiveTemplatePage ({ params }: Props) {
  const { slug } = params

  const currentTemplate = TEMPLATE_LIST.find(template => template.slug === slug)

  //   if (!currentTemplate) return <div className='w-full h-screen flex justify-center items-center'>Can&apos;t find template</div>
  if (!currentTemplate)
    return <CustomLayout><div className='w-full h-screen flex justify-center items-center'>Can&apos;t find template</div></CustomLayout>
  return <currentTemplate.component />
}
