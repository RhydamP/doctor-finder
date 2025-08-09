// utils/api.ts
export async function fetchSuggestions(field: 'name' | 'location', q: string = '') {
    const BackendUrl =
      process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
  const res = await fetch(
    `${BackendUrl}api/doctors/suggestions?field=${field}&q=${encodeURIComponent(q)}`,
    { cache: 'no-store' }
  );
  if (!res.ok) throw new Error('Failed to fetch suggestions');
  return res.json();
}
