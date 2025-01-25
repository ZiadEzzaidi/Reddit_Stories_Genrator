"use client";

import { useState } from "react";
import { Navbar } from "../components/navbar";

export default function Features() {
  const [threads, setThreads] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);
  const [transformedStory, setTransformedStory] = useState("");
  const [expandedThreadId, setExpandedThreadId] = useState(null);

  const handleScrap = async () => {
    console.log("Scrap button clicked"); // Debugging
    try {
      const response = await fetch("http://127.0.0.1:5000/api/posts"); // Adjust the URL if needed
      const data = await response.json();
      console.log("Fetched threads:", data); // Debugging
      setThreads(data);
      setSelectedThread(null);
      setTransformedStory("");
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleTransform = async () => {
    if (!selectedThread) return;

    // Mock AI transformation
    setTransformedStory("Transforming...");
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const transformed = `
      🎥 [TikTok Story Narration]
      🎬 *${selectedThread.title}*
      
      ${selectedThread.content}
      
      🎭 [Dramatic Pause]
      🎙️ "And that's when I realized... something was terribly wrong."
      
      #HorrorStory #TrueScary #TikTokHorror
    `;

    setTransformedStory(transformed);
  };

  const handleExportScript = () => {
    if (!transformedStory) return;

    // Create a Blob with the script content
    const blob = new Blob([transformedStory], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    // Create a temporary link to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "tiktok-script.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const generateTimeline = () => {
    if (!transformedStory) return [];

    return [
      { scene: "Scene 1", time: "0:00 - 0:05", description: "Introduction" },
      { scene: "Scene 2", time: "0:05 - 0:10", description: "Build suspense" },
      { scene: "Scene 3", time: "0:10 - 0:15", description: "Climax" },
    ];
  };

  const generateHashtags = () => {
    return [
      "#HorrorStory",
      "#TrueScary",
      "#TikTokHorror",
      "#CreepyTales",
      "#ScaryStories",
      "#HorrorTok",
    ];
  };

  const generateCaptions = () => {
    return {
      hook: "You won't believe what happened next...",
      callToAction: "Follow for more scary stories!",
      hashtags: generateHashtags().join(" "),
    };
  };

  const generateVisualSuggestions = () => {
    return [
      {
        scene: "Scene 1",
        suggestion: "Use a dark, eerie background with flickering lights.",
        source: "Pexels: https://www.pexels.com/search/horror/",
      },
      {
        scene: "Scene 2",
        suggestion: "Add a shadowy figure in the background.",
        source: "Pixabay: https://pixabay.com/images/search/horror/",
      },
      {
        scene: "Scene 3",
        suggestion: "Use a close-up of a terrified face.",
        source: "Unsplash: https://unsplash.com/s/photos/horror",
      },
    ];
  };

  const generateSoundRecommendations = () => {
    return [
      {
        scene: "Scene 1",
        suggestion: "Add eerie background music with subtle whispers.",
        source: "FreeSound: https://freesound.org/search/?q=horror",
      },
      {
        scene: "Scene 2",
        suggestion: "Use suspenseful music with a slow build-up.",
        source: "Zapsplat: https://www.zapsplat.com/music/horror/",
      },
      {
        scene: "Scene 3",
        suggestion: "Add a sudden loud noise for a jump scare effect.",
        source: "AudioJungle: https://audiojungle.net/search/horror",
      },
    ];
  };

  const toggleExpand = (threadId) => {
    setExpandedThreadId(expandedThreadId === threadId ? null : threadId);
  };

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
              Get the top 5 horror subreddit threads for analysis
            </p>

            {threads.length > 0 && (
              <div className="space-y-4">
                {threads.map((thread) => (
                  <div key={thread.id} className="flex flex-col space-y-2">
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
                        {expandedThreadId === thread.id
                          ? thread.content
                          : `${thread.content.substring(0, 100)}...`}
                      </p>
                      <button
                        onClick={() => toggleExpand(thread.id)}
                        className="text-blue-500 hover:underline text-sm"
                      >
                        {expandedThreadId === thread.id
                          ? "Read less"
                          : "Read more"}
                      </button>
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

                {/* Visual Element Suggestions */}
                <div>
                  <h3 className="font-medium mb-2">
                    Visual Element Suggestions
                  </h3>
                  <div className="space-y-2">
                    {generateVisualSuggestions().map((item, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium">
                          {item.scene}: {item.suggestion}
                        </p>
                        <p className="text-sm text-gray-600">
                          Source:{" "}
                          <a
                            href={item.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {item.source}
                          </a>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sound Recommendations */}
                <div>
                  <h3 className="font-medium mb-2">Sound Recommendations</h3>
                  <div className="space-y-2">
                    {generateSoundRecommendations().map((item, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium">
                          {item.scene}: {item.suggestion}
                        </p>
                        <p className="text-sm text-gray-600">
                          Source:{" "}
                          <a
                            href={item.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {item.source}
                          </a>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
