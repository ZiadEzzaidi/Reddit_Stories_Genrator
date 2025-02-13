import { Navbar } from './components/navbar'

    export default function Home() {
      return (
        <div>
          <Navbar />
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">Welcome to Our Landing Page</h1>
            <p className="text-lg text-center">
              Discover amazing features and services we offer
            </p>
          </main>
        </div>
      )
    }
