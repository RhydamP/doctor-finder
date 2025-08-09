// components/SearchBar.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { fetchSuggestions } from '../lib/api';

export default function SearchBar({
  value,
  onChange
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      fetchSuggestions('name', value || '') // empty -> fetch defaults
        .then(data => setSuggestions(data.suggestions))
        .catch(() => setSuggestions([]));
    }, 300);
  }, [value]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 focus:outline-none placeholder-gray-500 text-gray-700 bg-gray-50 focus:bg-white transition-all duration-200"
        placeholder="Search doctors, clinics, hospitals, etc."
        value={value}
        onChange={e => {
          onChange(e.target.value);
          setShowDropdown(true);
        }}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
      />

      {showDropdown && suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-xl max-h-48 overflow-y-auto z-20 mt-2">
          {suggestions.map((s, i) => (
            <li
              key={i}
              className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-gray-700 border-b border-gray-100 last:border-b-0 transition-colors duration-150"
              onClick={() => {
                onChange(s);
                setShowDropdown(false);
              }}
            >
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {s}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}