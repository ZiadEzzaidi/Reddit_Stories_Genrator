'use client'
    import { Navbar } from '../components/navbar'
    import { useState } from 'react'

    const mockThreads = [
      {
        id: 1,
        title: "The Whispering Walls of My Childhood Home",
        content: `
          When I was a kid, we lived in this old Victorian house. At first, it seemed charming, but soon things got weird. Every night, around 3 AM, I'd hear whispers coming from the walls. It wasn't just one voice—it sounded like a group of people having a conversation, but I could never make out the words.

          I told my parents, but they brushed it off as "the house settling." One night, I decided to record it. I left my phone near the wall and hit record. The next morning, I played it back. The whispers were there, clear as day, but this time I could understand them. They were saying my name.

          I never slept in that room again.
        `
      },
      {
        id: 2,
        title: "The Shadow Figure in My Rearview Mirror",
        content: `
          I've been driving the same route to work for years, but last week something changed. I noticed a shadowy figure in my rearview mirror. At first, I thought it was just a trick of the light, but it kept appearing—always the same distance behind me, no matter how fast or slow I drove.

          I tried changing lanes, taking different routes, even stopping at gas stations, but it was always there. Yesterday, I pulled over and got out of my car to confront it. When I turned around, it was gone. But when I got back in the car, it was in the rearview mirror again, closer this time.

          I don't know what to do. I can't stop driving to work, but I'm terrified of what might happen next.
        `
      },
      {
        id: 3,
        title: "The Never-Ending Basement",
        content: `
          My new apartment has a basement that doesn't make sense. The first time I went down there, I noticed something odd: the stairs just kept going. I counted 50 steps, then 100, then 200. It was like the basement went on forever.

          I tried to turn back, but the stairs behind me had disappeared. I kept walking, hoping to find a way out, but it was just more stairs. Eventually, I found a door. When I opened it, I was back in my apartment. But now, every time I open my front door, I see stairs leading down into the darkness.

          I don't know where they lead, and I'm too scared to find out.
        `
      },
      // ... (other mock threads) ...
    ]

    export default function Features() {
      const [threads, setThreads] = useState([])
      const [selectedThread, setSelectedThread] = useState(null)
      const [transformedStory, setTransformedStory] = useState('')

      const handleScrap = () => {
        console.log('Scrap button clicked') // Debugging
        const randomThreads = mockThreads
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
        console.log('Random threads:', randomThreads) // Debugging
        setThreads(randomThreads)
        setSelectedThread(null)
        setTransformedStory('')
      }

      const handleTransform = async () => {
        if (!selectedThread) return
        
        // Mock AI transformation
        setTransformedStory('Transforming...')
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const transformed = `
          🎥 [TikTok Story Narration]
          🎬 *${selectedThread.title}*
          
          ${selectedThread.content}
          
          🎭 [Dramatic Pause]
          🎙️ "And that's when I realized... something was terribly wrong."
          
          #HorrorStory #TrueScary #TikTokHorror
        `
        
        setTransformedStory(transformed)
      }

      const handleExportScript = () => {
        if (!transformedStory) return

        // Create a Blob with the script content
        const blob = new Blob([transformedStory], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)

        // Create a temporary link to trigger the download
        const link = document.createElement('a')
        link.href = url
        link.download = 'tiktok-script.txt'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      }

      const generateTimeline = () => {
        if (!transformedStory) return []

        return [
          { scene: 'Scene 1', time: '0:00 - 0:05', description: 'Introduction' },
          { scene: 'Scene 2', time: '0:05 - 0:10', description: 'Build suspense' },
          { scene: 'Scene 3', time: '0:10 - 0:15', description: 'Climax' },
        ]
      }

      const generateHashtags = () => {
        return [
          '#HorrorStory',
          '#TrueScary',
          '#TikTokHorror',
          '#CreepyTales',
          '#ScaryStories',
          '#HorrorTok',
        ]
      }

      const generateCaptions = () => {
        return {
          hook: "You won't believe what happened next...",
          callToAction: "Follow for more scary stories!",
          hashtags: generateHashtags().join(' '),
        }
      }

      return (
        <div>
          <Navbar />
          <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-4xl font-bold mb-12">Our Features</h1>
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
              {/* Scrap Data Feature */}
              <div className="flex-1 p-8 border rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
                <button 
                  onClick={handleScrap}
                  className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm"
                >
                  Scrap
                </button>
                <h2 className="text-2xl font-semibold mb-4">Scrap Data</h2>
                <p className="text-gray-600 mb-4">
                  Get random horror subreddit threads for analysis
                </p>
                
                {threads.length > 0 && (
                  <div className="space-y-4">
                    {threads.map(thread => (
                      <div key={thread.id} className="flex items-center space-x-4">
                        <input 
                          type="radio" 
                          id={`thread-${thread.id}`}
                          name="thread"
                          value={thread.id}
                          className="w-4 h-4"
                          onChange={() => setSelectedThread(thread)}
                        />
                        <label htmlFor={`thread-${thread.id}`} className="flex-1">
                          <h3 className="font-medium">{thread.title}</h3>
                          <p className="text-sm text-gray-600 whitespace-pre-wrap">
                            {thread.content}
                          </p>
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Stories Feature */}
              <div className="flex-1 p-8 border rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
                <button 
                  onClick={handleTransform}
                  disabled={!selectedThread}
                  className="absolute top-4 right-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Transform
                </button>
                <h2 className="text-2xl font-semibold mb-4">Stories</h2>
                <p className="text-gray-600 mb-4">
                  Transform selected stories into TikTok-style narrations
                </p>
                
                {transformedStory && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <pre className="whitespace-pre-wrap text-sm">
                      {transformedStory}
                    </pre>
                  </div>
                )}
              </div>

              {/* TikTok Toolkit Feature */}
              <div className="flex-1 p-8 border rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
                <button 
                  onClick={handleExportScript}
                  disabled={!transformedStory}
                  className="absolute top-4 right-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors text-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Export Script
                </button>
                <h2 className="text-2xl font-semibold mb-4">TikTok Toolkit</h2>
                <p className="text-gray-600 mb-4">
                  Tools to make your TikTok short creation easier
                </p>

                {transformedStory && (
                  <div className="space-y-6">
                    {/* Visual Timeline */}
                    <div>
                      <h3 className="font-medium mb-2">Visual Timeline</h3>
                      <div className="space-y-2">
                        {generateTimeline().map((item, index) => (
                          <div key={index} className="p-3 bg-gray-50 rounded-lg">
                            <p className="text-sm font-medium">
                              {item.scene}: {item.time}
                            </p>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hashtag Suggestions */}
                    <div>
                      <h3 className="font-medium mb-2">Hashtag Suggestions</h3>
                      <div className="flex flex-wrap gap-2">
                        {generateHashtags().map((hashtag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 px-2 py-1 rounded-md text-sm"
                          >
                            {hashtag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pre-Formatted Captions */}
                    <div>
                      <h3 className="font-medium mb-2">Pre-Formatted Captions</h3>
                      <div className="space-y-2">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium">Hook:</p>
                          <p className="text-sm text-gray-600">
                            {generateCaptions().hook}
                          </p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium">Call-to-Action:</p>
                          <p className="text-sm text-gray-600">
                            {generateCaptions().callToAction}
                          </p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium">Hashtags:</p>
                          <p className="text-sm text-gray-600">
                            {generateCaptions().hashtags}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      )
    }
