'use client'

import { useState, useEffect } from 'react'
import WebsiteCard from '@/components/inspiration/websitecard'
import { INSPIRATION_SITE_LIST } from '@/data/inspiration-site-list'

export default function Gallery() {
  const [filter, setFilter] = useState("all")
  const [siteCategories, setSiteCategories] = useState<string[]>(["all"])

  useEffect(() => {
    const updateSiteCategories = () => {
      const categories = new Set<string>(["all"])
      INSPIRATION_SITE_LIST.forEach(site => {
        categories.add(site.category)
      })
      setSiteCategories(Array.from(categories))
    }
    
    updateSiteCategories()
  }, [])

  const filteredWebsites = INSPIRATION_SITE_LIST.filter(
    website => filter === "all" || website.category === filter
  )

  return (
    <div className="container mx-auto ">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {siteCategories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-1 rounded-md transition-colors ${
                filter === category 
                  ? 'bg-zinc-700 text-white' 
                  : 'bg-zinc-800/40 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWebsites.map(website => (
          <WebsiteCard key={website.id} {...website} />
        )).reverse()}
      </div>
    </div>
  )
}

