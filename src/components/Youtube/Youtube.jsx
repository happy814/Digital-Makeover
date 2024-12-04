import React from "react";

const VimeoPlaylist = () => {
  // Step 1: Define your video data array
  const videos = [
    { id: "1035203353", hash: "90af11e4f0", title: "First Video" },
    { id: "1035160924", hash: "68018ea5b4", title: "Second Video" },
    { id: "146770684", hash: "", title: "Bolte Bolte Cholte Cholte" },
    { id: "1006890163", hash: "", title: "Bolte Bolte Cholte Cholte" },
    { id: "1018726110", hash: "", title: "Ami je tomar" },
    { id: "1018726110", hash: "", title: "Ami je tomar" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-4xl font-bold mb-8 text-yellow-200 bg-rose-800 py-10 uppercase">
        Video Playlist
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Step 2: Map through the videos array */}
        {videos.map((video) => (
          <div key={video.id} className=" rounded-lg cursor-pointer">
            <iframe
              className="md:h-96"
              src={`https://player.vimeo.com/video/${video.id}?h=${video.hash}`}
              frameBorder="0"
              width="100%"
              height="200"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Video Title */}
            <div className="p-4 pb-10 bg-rose-800">
              <h2 className="text-lg font-semibold text-yellow-300">
                {video.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VimeoPlaylist;
