'use client'

import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

export default function AdminNavbar() {
  return (
    <header className="border-b bg-background px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold font-headline">GadgetSpot</h1>
        <Button
          variant="ghost"
          size="sm"
          onClick={async () => {
            await signOut({ redirect: false })
            window.location.href = '/auth/signin?callbackUrl=/admin'
          }}
          className="gap-2"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </header>
  )
}