import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const playlists = [
  {
    id: 'lofi',
    title: 'Lofi Girl - beats to relax and study to',
    curator: 'LofiGirl',
    description: 'A daily selection of chill beats - perfect to help you relax and study',
    imageUrl: '/assets/images/7173825fec4fa417d0dbb3bc5f83a13d00955687.png',
    spotifyUrl: 'https://open.spotify.com/playlist/5HG8uXclGhufvtP0T8A7rQ?si=bdabc7abff714b1c&nd=1&dlsi=8e1799285a10463f',
  },
  {
    id: 'bardcore',
    title: 'bardcore',
    curator: 'bensu',
    description: 'Modern songs in bardic style - get transported to an old tavern',
    imageUrl: '/assets/images/4592c151a3a9797f204c1c91416b3933cf5d1401.png',
    spotifyUrl: 'https://open.spotify.com/playlist/26VWOmdjKM9OtGCo2GNCTT?si=bf09e247352f4c30&nd=1&dlsi=d9ac782eab8c426c',
  },
];

const Playlist = () => {
  return (
    <div className="bg-white h-full">
      <div className="flex justify-end p-4">
        <FontAwesomeIcon icon={faTimes} className="text-dark-blue" />
      </div>
      <div className="px-6 sm:px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-dark-blue">Jam out</h1>
          <p className="text-lg text-dark-beige">
            Even though setup takes just 5 minutes, it can be a chore. Grab one of our playlists to get started.
          </p>
        </div>
        <div className="border-t border-gray-300" />
        <div className="flex flex-col space-y-6 mt-6">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="bg-dark-blue rounded-lg flex items-center p-4">
              <img src={playlist.imageUrl} alt={`${playlist.title} Playlist`} className="w-24 h-24 rounded-md mr-4"/>
              <div>
                <h2 className="text-lg text-white">{playlist.title}</h2>
                <p className="text-base text-beige">By: {playlist.curator}</p>
                <p className="text-base text-beige">{playlist.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;