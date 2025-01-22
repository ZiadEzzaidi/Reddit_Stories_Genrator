import Link from 'next/link'

    export function Navbar() {
      return (
        <nav className="flex items-center justify-between p-4 border-b">
          <div className="text-lg font-semibold">My App</div>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Link href="/features" className="hover:text-primary">
              Features
            </Link>
          </div>
        </nav>
      )
    }
