// components/SortDropdown.tsx
'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export default function SortDropdown() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value && value !== 'relevance') {
      params.set('sort', value)
    } else {
      params.delete('sort')
    }
    router.push(`/doctors?${params.toString()}`)
  }

  const currentSort = searchParams.get('sort') || 'relevance'

  return (
    <div className="flex items-center justify-between bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100">
      <div className="flex items-center space-x-2 flex-shrink-0">
        <svg className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
        </svg>
        <span className="text-sm font-medium text-gray-700">Sort:</span>
      </div>
             
      <select
        className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm font-medium text-gray-900 cursor-pointer min-w-0 max-w-[140px] sm:max-w-none truncate ml-2"
        value={currentSort}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="relevance">Relevance</option>
        <option value="experience">Experience</option>
        <option value="rating">Rating</option>
        <option value="fee">Fee</option>
      </select>
    </div>
  )
}