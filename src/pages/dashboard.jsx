import React from "react";
import { useNavigate } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
  },
  {
    id: 2,
    title: "The Witcher",
    image: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
  },
  {
    id: 3,
    title: "Leo",
    image: "https://m.media-amazon.com/images/M/MV5BODFkZWQwZDAtZDNkYi00MWU1LTkyNmYtM2JjMTM5OTI0ZGQwXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 4,
    title: "Maharaja",
    image: "https://m.media-amazon.com/images/M/MV5BZDJjNzdkNmItZDExMy00NzA3LWE3YzEtM2U3ZGRjMThlMDU2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 5,
    title: "Narcos",
    image: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
  },
  {
    id: 6,
    title: "Retro",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsv-a3psBWnXGKMlmSOujLIonZu-ncVvEKfQ&s",
  },
  {
    id: 7,
    title: "Dark",
    image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
  },
  {
    id: 8,
    title: "When life gives you tangerines",
    image: "https://m.media-amazon.com/images/M/MV5BZTBhZTcwNWUtOTZjMi00ZjI2LWEzMzMtNWJkMWQ2ZDA0NTU3XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 9,
    title: "Squid Game",
    image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
  },
  {
    id: 10,
    title: "Wednesday",
    image: "https://image.tmdb.org/t/p/w500/8uUU2pxm6IYZw8UgnKJyx7Dqwu9.jpg",
  },
  {
    id: 11,
    title: "Amaran",
    image: "https://resizing.flixster.com/mJop3bqlG335DtDfmihaT_GSDNE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y1NWQ3NzllLTg2ODktNDM4MS04ODc0LTU3ZDI1YTg2YzBlMS5qcGc=",
  },
  {
    id: 12,
    title: "Jawan",
    image: "https://resizing.flixster.com/lej1aNFjcromN2hYS5-638hSJ-k=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FiOWE5MWYxLTc0MzctNGNjZi1hMjE0LWNhZmZiMDU2M2RhMS5qcGc=",
  },
  {
    id: 13,
    title: "Rifle Club",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Rifle_Club_Poster.jpg/250px-Rifle_Club_Poster.jpg",
  },
  {
    id: 14,
    title: "Lucifer",
    image: "https://image.tmdb.org/t/p/w500/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
  },
  {
    id: 15,
    title: "Loki",
    image: "https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg",
  },
  {
    id: 16,
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
  },
  {
    id: 17,
    title: "Beast",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOs8HrLJvz4hZPnARoQ8W1NUzvBtoWxcUm0Q&s",
  },
  {
    id: 18,
    title: "Karma",
    image: "https://m.media-amazon.com/images/M/MV5BM2MxOWNmOTUtM2U1MS00MmViLTg5NjgtYmM5YmQxOWM0NjRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
 
];

export default function Dashboard() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/"); 
  };

  return (
    <div className="bg-black min-h-screen text-white px-6 py-10">
      
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Based on your Favourites</h1>
        <button
          onClick={handleSignOut}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-semibold transition"
        >
          Sign Out
        </button>
      </div>

      
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative group bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-[320px] object-cover"
            />

            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-3">
              <h2 className="text-sm font-semibold truncate">{movie.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
