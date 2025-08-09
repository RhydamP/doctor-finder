// components/DoctorCard.tsx
import { Doctor } from "@/types/doctor"

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Doctor Avatar */}
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-lg sm:text-2xl font-bold text-white">
                {doctor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </span>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="flex-1 min-w-0 w-full text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                  Dr. {doctor.name}
                </h2>
                
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {doctor.specialty}
                  </span>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {doctor.location}
                </div>

                <div className="flex items-center space-x-2 sm:space-x-4 text-sm text-gray-600 mb-3 justify-center sm:justify-start flex-wrap">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="whitespace-nowrap">{doctor.experience} years experience</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="whitespace-nowrap">{doctor.rating}</span>
                    <span className="ml-1 text-yellow-400">★</span>
                  </div>
                </div>

                <div className="flex items-center justify-center sm:justify-start text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-0">
                  <span className="text-green-600">₹{doctor.fee}</span>
                  <span className="text-sm text-gray-500 ml-1 font-normal">Consultation fee</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-col space-y-2 w-full sm:w-auto sm:ml-4">
                <div className="flex items-center justify-center sm:justify-start text-sm text-green-600 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Available Today
                </div>
                
                <div className="flex flex-col sm:flex-col space-y-2 w-full sm:w-auto">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap w-full sm:w-auto">
                    Book Clinic Visit
                  </button>
                  
                  <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 sm:px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap w-full sm:w-auto">
                    Contact Clinic
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm space-y-2 sm:space-y-0">
            <div className="flex items-center justify-center sm:justify-start space-x-4 flex-wrap">
              <div className="flex items-center">
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-700">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  97% Satisfaction
                </span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="whitespace-nowrap">159 Patient Stories</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center sm:justify-end text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="whitespace-nowrap">Next: Today 3:30 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}