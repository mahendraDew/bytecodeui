import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string
  image: string
  tags: string[]
}

export function FeatureCard({ title, image, tags }: FeatureCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Card className="overflow-hidden cursor-pointer bg-black">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full object-cover"
        />
        <CardContent className="p-6">
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

