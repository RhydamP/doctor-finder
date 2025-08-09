// app/doctors/page.tsx
'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import DoctorCard from '@/components/DoctorCard'
import Filters from '@/components/Filters'
import SortDropdown from '@/components/SortDropdown'
import Header from '@/components/Header'
import { Doctor } from '@/types/doctor'

export default function DoctorListing() {
  const searchParams = useSearchParams()
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [showFilters, setShowFilters] = useState(false)
  const BACKENDURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const fetchDoctors = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${BACKENDURL}/api/doctors?${searchParams.toString()}`)
      const data = await res.json()
      setDoctors(data)
    } catch (error) {
      console.error('Error fetching doctors:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDoctors()
  }, [searchParams])

  const query = searchParams.get('q')
  const location = searchParams.get('location')

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Search summary */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              {doctors.length} {query || 'Doctors'} available{location && ` in ${location}`}
            </h1>
            <p className="text-gray-600 mt-1 flex items-center text-sm sm:text-base">
              <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Book appointments with minimum wait-time & verified doctor details
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          {/* Mobile filters button and sort */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707v4.586l-4-4V10.414a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6V4z" />
              </svg>
              <span>Filters</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="flex-shrink-0">
              <SortDropdown />
            </div>
          </div>

          {/* Mobile filters dropdown */}
          {showFilters && (
            <div className="lg:hidden mb-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <Filters onApply={() => setShowFilters(false)} />
              </div>
            </div>
          )}

          <div className="flex gap-6">
            {/* Desktop Filters Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <Filters />
            </div>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Desktop sort dropdown */}
              <div className="hidden lg:block mb-6">
                <SortDropdown />
              </div>

              {/* Doctor cards */}
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm animate-pulse">
                      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-xl flex-shrink-0"></div>
                        <div className="flex-1 w-full">
                          <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : doctors.length > 0 ? (
                <div className="space-y-4">
                  {doctors.map((doc: Doctor) => (
                    <DoctorCard key={doc._id} doctor={doc} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.034 0-3.9.785-5.291 2.065M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No doctors found</h3>
                  <p className="mt-1 text-sm text-gray-500">Try adjusting your search criteria or filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}