import { SignIn } from '@clerk/react'
import Navbar from '../components/Navbar'

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.22),transparent_35%),linear-gradient(135deg,#f8fafc_0%,#eef2ff_100%)] p-4">
        <div className="">
          <SignIn
            routing="hash"
            signUpUrl="/signup"
            fallbackRedirectUrl="/"
            appearance={{
              elements: {
                rootBox: 'w-full',
                cardBox: 'w-full',
                card: 'w-full border-0 shadow-none rounded-[20px]',
                headerTitle: 'text-2xl font-semibold text-slate-800',
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}
