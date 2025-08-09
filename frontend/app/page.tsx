// app/page.tsx
'use client'
import SearchBar from '@/components/SearchBar'
import LocationSearch from '@/components/LocationSearch'
import Header from '@/components/Header'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (location) params.set('location', location)
    router.push(`/doctors?${params.toString()}`)
  }

  const popularSearches = [
    'Dermatologist', 'Pediatrician', 'Gynecologist/Obstetrician', 'General Physician', 
    'Dentist', 'Orthopedist', 'Cardiologist', 'Neurologist'
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-8">
          {/* Main content */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your home for <span className="text-yellow-400">health</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Find and book appointments with verified doctors in your area
            </p>
          </div>

          {/* Search section */}
          <div className="w-full max-w-4xl">
            <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find and Book</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <LocationSearch value={location} onChange={setLocation} />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <SearchBar value={query} onChange={setQuery} />
                </div>
              </div>

              <button
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                onClick={handleSearch}
              >
                Search Doctors
              </button>

              {/* Popular searches */}
              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-3">Popular searches:</p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setQuery(search)
                        handleSearch()
                      }}
                      className="bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-200 hover:border-blue-300 transition-colors duration-200"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features section */}
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900   mb-2">Book Appointments</h3>
                <p className="text-blue-900">Easy online booking with verified doctors</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Verified Doctors</h3>
                <p className="text-blue-800">All doctors are verified with authentic credentials</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="w-16 h-16 bg-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">24/7 Support</h3>
                <p className="text-blue-800">Get help whenever you need it</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  )
}