// types/doctor.ts

export type Doctor = {
  _id: string
  name: string
  specialty: string
  experience: number
  location: string
  fee: number
  rating: number
  stories?: string[]
  available: boolean
  gender: string
}

export type DoctorSuggestion = Pick<Doctor, 'name'>


export interface LocationSuggestion {
  location: string
}
// types/index.ts
export interface SuggestionSearchProps {
  value: string;
  onChange: (value: string) => void;
  getSuggestions: (query: string) => Promise<string[]>;
}
export interface LocationSearchProps {
  value: string;
  onChange: (value: string) => void;
  getSuggestions: (query: string) => Promise<string[]>;
} 