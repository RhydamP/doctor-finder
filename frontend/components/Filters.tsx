// components/Filters.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

type FiltersResponse = {
  locations?: string[]
  specialties?: string[]
}

export default function Filters({ onApply }: { onApply?: () => void }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // initialises from current URL but changes are local until "Apply"
  const [gender, setGender] = useState<string>(searchParams.get('gender') ?? '')
  const [location, setLocation] = useState<string>(searchParams.get('location') ?? '')
  const [specialty, setSpecialty] = useState<string>(searchParams.get('specialty') ?? '')
  const [minExp, setMinExp] = useState<string>(searchParams.get('minExp') ?? '')
  const [keepQuery, setKeepQuery] = useState<boolean>(false) // if you want to preserve `q`

  const [locationsList, setLocationsList] = useState<string[]>([])
  const [specialtiesList, setSpecialtiesList] = useState<string[]>([])

  useEffect(() => {
    let mounted = true
    const fetchFilters = async () => {
      try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL 
        const res = await fetch(`${backendUrl}api/doctors/filters`)
        const data = (await res.json()) as FiltersResponse
        if (!mounted) return
        setLocationsList(data.locations ?? [])
        setSpecialtiesList(data.specialties ?? [])
      } catch (err) {
        // ignore — keep lists empty
      }
    }
    fetchFilters()
    return () => {
      mounted = false
    }
  }, [])

  const applyFilters = () => {
    // Build query string only from selected values
    const params = new URLSearchParams()
    if (gender) params.set('gender', gender) // NOTE: use the exact values your backend expects (Male/Female/Mixed)
    if (location) params.set('location', location)
    if (specialty) params.set('specialty', specialty)
    if (minExp) params.set('minExp', minExp)

    // Add text-search q only if user explicitly wants to keep it
    if (keepQuery) {
      const q = searchParams.get('q')
      if (q) params.set('q', q)
    }

    const qs = params.toString()
    router.push(qs ? `/doctors?${qs}` : '/doctors')
    
    // Call onApply if provided (for mobile dropdown)
    if (onApply) onApply()
  }

  const clearFilters = () => {
    setGender('')
    setLocation('')
    setSpecialty('')
    setMinExp('')
    setKeepQuery(false)
    router.push('/doctors')
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button 
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Clear all
        </button>
      </div>

      <div className="space-y-6">
        {/* Gender Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none bg-gray-50 focus:bg-white transition-colors duration-200"
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Mixed">Mixed</option>
          </select>
        </div>

        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none bg-gray-50 focus:bg-white transition-colors duration-200"
          >
            <option value="">All locations</option>
            {locationsList.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Specialty Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none bg-gray-50 focus:bg-white transition-colors duration-200"
          >
            <option value="">All specialties</option>
            {specialtiesList.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Experience Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum experience (years)
          </label>
          <input
            type="number"
            min={0}
            value={minExp}
            onChange={(e) => setMinExp(e.target.value)}
            placeholder="e.g. 2"
            className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none bg-gray-50 focus:bg-white transition-colors duration-200"
          />
        </div>

        {/* Keep Search Query */}
        <div>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={keepQuery}
              onChange={(e) => setKeepQuery(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-sm text-gray-700">Keep text search</span>
          </label>
        </div>

        {/* Apply Button */}
        <button 
          onClick={applyFilters} 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          Apply Filters
        </button>
      </div>

      {/* Active filters indicator */}
      {(gender || location || specialty || minExp) && (
        <div className="mt-6 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600 mb-2">Active filters:</p>
          <div className="flex flex-wrap gap-2">
            {gender && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Gender: {gender}
              </span>
            )}
            {location && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {location}
              </span>
            )}
            {specialty && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {specialty}
              </span>
            )}
            {minExp && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {minExp}+ years
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}