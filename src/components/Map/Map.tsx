'use client'
import dynamic from 'next/dynamic'

// Leaflet touches `window` at import time, so the map can only load in the
// browser. This wrapper exists because `ssr: false` is not allowed directly
// in server components like Footer.
const LeafletMap = dynamic(() => import('./LeafletMap'), {
    ssr: false,
    loading: () => <p className='text-sm text-white/50'>Map is loading...</p>
})

export default LeafletMap
