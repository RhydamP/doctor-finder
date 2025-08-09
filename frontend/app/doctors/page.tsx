// app/doctors/page.tsx
'use client'

import { Suspense } from 'react'
import DoctorListingContent from '@/components/DoctorListing'

export default function DoctorListingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DoctorListingContent />
    </Suspense>
  )
}
