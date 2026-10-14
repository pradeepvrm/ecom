import { SignUp } from '@clerk/react'
import Navbar from '../components/Navbar'

export default function Signup() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
          <div className="">
            <SignUp
              routing="hash"
              signInUrl="/login"
              fallbackRedirectUrl="/"
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  cardBox: 'w-full',
                  card: 'w-full border-0 shadow-none',
                  headerTitle: 'text-2xl font-semibold text-slate-800',
                },
              }}
            />
          </div>
      </div>
    </div>
  )
}
