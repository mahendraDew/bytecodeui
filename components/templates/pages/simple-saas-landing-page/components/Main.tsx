import React from 'react'
import { Badge } from '../components/badge'
import Link from 'next/link'
// import {ArrowRightIcon} from "@radix-ui/react-icons";
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  ArrowRight,
  CircleCheck,
  Handshake,
  PencilIcon,
  RocketIcon
} from 'lucide-react'
// import {features} from "@/data/features";
// import {pricing} from "@/data/pricing";

const features = [
  {
    title: 'Fast and Reliable',
    description:
      'We provide fast and reliable service to our customers. Our team is always ready to help you with any problem you may have.',
    icon: <RocketIcon className='w-6 h-6' />
  },
  {
    title: 'Customizable',
    description:
      'Our service is highly customizable. You can choose the color scheme, and other options that best suit your needs.',
    icon: <PencilIcon className='w-6 h-6' />
  },
  {
    title: 'User Friendly',
    description:
      'Our service is designed to be user friendly. You can easily navigate through the app and find what you need.',
    icon: <Handshake className='w-6 h-6' />
  }
]

const pricing = [
  {
    title: 'Basic',
    price: '$10',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    description: 'This is a basic plan for beginners.',
    fancy: false
  },
  {
    title: 'Pro',
    price: '$20',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    description: 'This is a pro plan for professionals.',
    fancy: true
  },
  {
    title: 'Enterprise',
    price: '$30',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    description: 'This is an enterprise plan for large organizations.',
    fancy: false
  }
]

export default function Main () {
  return (
    <>
    {/* hero */}
      <main className='container max-w-7xl  mx-auto mb-20'>
        <div className='relative md:mt-24 mx-auto w-full max-w-4xl pt-4 text-center'>
          <div className='justify-center hidden md:flex'>
            <div className='flex flex-row items-center justify-center gap-5 p-1 text-xs bg-card/60 backdrop-blur-lg rounded-md border border-border'>
              <Badge className='font-semibold'>New</Badge>
              <h5>Announce your new feature here</h5>
              <Link href='/' className='flex flex-row items-center'>
                View all features
                <ArrowRight className='w-6 h-6 ml-2' />
              </Link>
            </div>
          </div>
          <h1 className='md:text-7xl my-4 font-extrabold text-4xl md:leading-tight'>
            Create perfect projects with this landing page!
          </h1>
          <p className='mx-auto my-4 text-sm w-full max-w-xl text-center font-medium leading-relaxed tracking-wide'>
            This is a landing page template that you can use to create a
            beautiful website. It is designed to be easy to use and customize.
            You can use this template to create a landing page for your app,
            product, or service. It is built with Next.js, Tailwind CSS, and
            TypeScript.
          </p>
          <div className='flex flex-row justify-center items-center space-x-4 my-8'>
            <Button>Get Started</Button>
            <Button variant='secondary'>Learn More</Button>
          </div>

          <div className='absolute top-0 -z-10 max-h-full max-w-screen-lg w-full h-full blur-2xl'>
            <div className='absolute top-24 left-24 w-56 h-56 bg-violet-600 rounded-full mix-blend-multiply opacity-70 animate-blob filter blur-3xl'></div>
            <div className='absolute hidden md:block bottom-2 right-1/4 w-56 h-56 bg-sky-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-1000 filter blur-3xl'></div>
            <div className='absolute hidden md:block bottom-1/4 left-1/3 w-56 h-56 bg-pink-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-500 filter blur-3xl'></div>
          </div>
        </div>

        <div className='max-w-4xl mx-auto m-8'>
          <Image
            className='w-full'
            src='https://images.unsplash.com/photo-1551288049-bebda4e38f71'
            alt='Dashboard ui design'
            priority
            width={1200}
            height={800}
          />
        </div>
      </main>

      {/* features */}
      <section className='relative max-w-7xl '>
        <div className='container mx-auto text-center'>
          <div className='my-24'>
            <h5 className='text-primary'>WHY CHOOSE US</h5>
            <h2 className='text-4xl font-extrabold my-4'>
              Build better websites with us
            </h2>

            <p className='mx-auto my-4 text-sm w-full max-w-md bg-transparent text-center font-medium leading-relaxed tracking-wide text-muted-foreground'>
              Show off your features or services in a beautiful way. This
              section is perfect for showcasing
            </p>

            <div className='flex flex-col md:flex-row gap-4 mt-12'>
              {features.map(feature => (
                <Card
                  key={feature.title}
                  className='max-w-lg h-96 flex justify-center items-center flex-col mx-auto'
                >
                  <CardHeader>
                    <div className='w-16 h-16 text-primary-foreground flex justify-center items-center border border-border rounded-xl bg-primary mx-auto'>
                      {feature.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className='mt-4'>
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <div className='absolute top-0 -z-10 max-h-full w-full h-full blur-2xl'>
          <div className='absolute bottom-0 left-0 w-1/2 h-56 bg-violet-600 rounded-full mix-blend-multiply opacity-70 animate-blob filter blur-3xl'></div>
          <div className='absolute bottom-0 right-0 w-1/2 h-56 bg-sky-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-1000 filter blur-3xl'></div>
        </div>
      </section>

      {/* Pricing */}

      <section className=' max-w-7xl  '>
        <div className='container mx-auto text-center'>
          <div className='py-14'>
            <h2 className='text-4xl font-extrabold my-4 text-foreground'>
              Pricing Plans
            </h2>

            <p className='mx-auto my-4 text-sm w-full max-w-md bg-transparent text-center font-medium leading-relaxed tracking-wide text-muted-foreground'>
              Choose a plan that works best for you. You can always upgrade or
              downgrade your plan later.
            </p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {pricing.map(plan => (
                <Card
                  key={plan.title}
                  className='w-full mx-auto max-w-xl text-left relative'
                >
                  {plan.fancy && (
                    <Badge className='absolute top-4 right-4'>Popular</Badge>
                  )}
                  <CardHeader>
                    <CardTitle className='text-2xl'>{plan.title}</CardTitle>
                    <CardDescription className='mt-4'>
                      {plan.description}
                    </CardDescription>
                    <h5 className='text-2xl font-bold'>{plan.price}</h5>
                  </CardHeader>
                  <CardContent>
                    <Button
                      className='w-full'
                      variant={plan.fancy ? 'default' : 'secondary'}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                  <CardFooter>
                    <ul className='mt-4'>
                      {plan.features.map(feature => (
                        <li key={feature} className='flex items-center gap-2'>
                          <CircleCheck className='w-4 h-4 text-green-500' />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
