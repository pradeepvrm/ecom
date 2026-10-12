import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(true);

    function handleSubmit(e) {
        e.preventDefault()
        if (isValid) {
            console.log('email:', email)
            console.log('password:', password)
            console.log('username:', username)
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password || !username) {
            setError('Please fill all the fields')
            setIsValid(false)
            return;
        } else {
            setError('')
            setIsValid(true)
        }

        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address')
            setIsValid(false)
            return;
        } else {
            setError('')
            setIsValid(true)
        }

        if (password.length < 8) {
            setError('Password must be atleast 8 characters long.')
            setIsValid(false)
            return;
        } else {
            setError('')
            setIsValid(true)
        }
    }
    
  return (
      <div>
        <Navbar />
        <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
              <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h1 className="text-2xl font-semibold text-slate-800">Sign Up</h1>
  
                  <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                      <div className="space-y-1.5">
                          <label htmlFor="username" className="block text-sm font-medium text-slate-700">
                              Username
                          </label>
                          <input
                              id="username"
                              name="username"
                              placeholder="Enter your username"
                              type="text"
                              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)} />
                      </div>

                      <div className="space-y-1.5">
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                              Email
                          </label>
                          <input
                              id="email"
                              name="email"
                              placeholder="Enter your email"
                              type="text"
                              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)} />
                      </div>
  
                      <div className="space-y-1.5">
                          <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                              Password
                          </label>
                          <input
                              id="password"
                              name="password"
                              placeholder="Enter your password"
                              type="password"
                              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)} />
                      </div>
  
                      {error && (
                          <p role="alert" className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
                              {error}
                          </p>
                      )}
  
                      <button
                          type="submit"
                          className={`w-full rounded-md px-4 py-2 text-sm font-semibold text-white transition-colors ${
                              isValid ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-red-600 hover:bg-red-700'
                          }`}>
                          Signup
                      </button>
                  </form>
              </div>
          </div>
      </div>
    )
}