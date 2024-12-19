import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check } from 'lucide-react'
import { motion } from "framer-motion";

interface PricingCardProps {
  title: string
  price: number
  description: string
  features: string[]
  featured?: boolean
}

export function PricingCard({
  title,
  price,
  description,
  features,
  featured = false,
}: PricingCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="w-full h-full">
      <Card className={`${
        featured ? 'border-green-500' : 'border-gray-800'
      } bg-black w-full h-full`}>
        <CardHeader className="p-6">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="mt-4">
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-gray-400">/mo</span>
          </div>
          <p className="mt-2 text-sm text-gray-400">{description}</p>
        </CardHeader>
        <CardContent className="p-6">
          <Button className="mb-6 w-full" variant={featured ? "default" : "outline"}>
            Choose {title}
          </Button>
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

