'use client'
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <button 
          onClick={() => {
            sendGAEvent('event', 'buttonClickasas', { value: '12' })
            sendGTMEvent({ event: 'buttonClicke1212d', value: 'xyz' })
          }}
        >
          asdasd
        </button>
      </main>
    </div>
  );
}
