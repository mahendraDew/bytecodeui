import Link from 'next/link'
import { Inter } from 'next/font/google'
import Image from 'next/image'
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal', 'italic']
})
type TemplateProps = {
  //   children: React.ReactNode
  slug: string
  title: string
  imageUrl: string
}

export const TemplateContainer = ({ imageUrl, slug, title }: TemplateProps) => (
  //   <Link href={`/template/${slug}`}>
  //     <div className='block group  transition-all duration-300'>

  //     <div> {children}</div>
  //     {/* <p className='mb-2 mt-4 text-xl font-bold text-neutral-700 dark:text-neutral-100 hover:group'> */}
  //     <p className={`text-xl  text-left transition-all duration-300 group-hover:translate-x-2 ${inter.className}`}>

  //       {title}
  //     </p>
  //     {/* <p className="text-muted-foreground mt-2 text-sm font-normal">
  //       {description}
  //       </p> */}
  //       </div>
  //   </Link>

  <Link
    href={`/template/${slug}`}
    rel='noopener noreferrer'
    className='block group  transition-all duration-300'
  >
    <div className=' border rounded-lg overflow-hidden shadow-lg transition-all duration-300'>
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={300}
        className='w-full'
      />
    </div>
    <div className='py-4'>
      <h2
        className={`text-xl  text-left transition-all duration-300 group-hover:translate-x-2 ${inter.className}`}
      >
        {title}
      </h2>
    </div>
  </Link>
)
