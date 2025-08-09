// components/Header.tsx
'use client'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">D</span>
                                    </div>
                                    <span className="ml-2 text-xl font-bold text-gray-900">DocFinder</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-blue-600 hover:text-blue-700 px-3 py-2 text-sm font-medium border-b-2 border-blue-600">
                            Find Doctors
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium hover:border-b-2 hover:border-gray-300 transition-all duration-200">
                            Video Consult
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium hover:border-b-2 hover:border-gray-300 transition-all duration-200">
                            Health Records
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium hover:border-b-2 hover:border-gray-300 transition-all duration-200">
                            For Providers
                        </Link>
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                            Login
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                            Sign up
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-600 hover:text-gray-900">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}