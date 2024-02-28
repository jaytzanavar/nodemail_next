'use client'
import { sendGTMEvent } from '@next/third-parties/google'

export default function Analytics() {
    return (
        <div>
            <div>
                <button
                    onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })}
                >
                    Send Event
                </button>
            </div>
        </div>
    )
}