import Button from "@/components/commons/Button";
import Loading from "@/components/commons/Loading";
import MovieCard from "@/components/commons/MovieCard";
import { MoviesProps } from "@/interfaces";
import { useCallback, useEffect, useState } from "react";

const Movies: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [year, setYear] = useState<number | null>(null);
  const [genre, setGenre] = useState<string>("All");
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [favorites, setFavorites] = useState<MoviesProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/fetch-movies", {
        method: "POST",
        body: JSON.stringify({
          page,
          year,
          genre: genre === "All" ? "" : genre,
        }),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      if (!response.ok) {
        throw new Error("Something went wrong try again later");
      }

      const data = await response.json();
      setMovies(data.movies);
    } catch (err: unknown) {
      console.error("Fetch error:", err);
      if (err instanceof Error) {
        setError(err.message || "Something went wrong while fetching movies.");
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  }, [page, year, genre]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteMovies");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (movie: MoviesProps) => {
    const isFavorite = favorites.some((fav) => fav.id === movie.id);
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
  };

  const isFavorite = (movie: MoviesProps) => {
    return favorites.some((fav) => fav.id === movie.id);
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <div className="sticky top-0 z-50 bg-[#0D1117] py-4 shadow-lg">
        <div className="container mx-auto px-4 md:px-10 lg:px-44">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Search for a movie...🔍"
              className="w-full md:w-96 border-2 border-[#37ec3a] bg-transparent px-4 py-2 rounded-full text-white placeholder-gray-400 outline-none focus:border-[#2aa9b8] transition-all"
            />

            <select
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                setYear(Number(event.target.value))
              }
              className="w-full md:w-auto border-2 border-[#37ec3a] bg-[#0D1117] px-4 py-2 rounded-full text-white outline-none focus:border-[#2aa9b8] transition-all"
            >
              <option value="">Select Year</option>
              {[2025, 2024, 2023, 2022, 2021, 2020, 2019].map((year) => (
                <option value={year} key={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start space-x-2 mt-4">
            {["All", "Animation", "Comedy", "Fantasy"].map((genreItem, key) => (
              <Button
                key={key}
                title={genreItem}
                action={() => setGenre(genreItem)}
                className={`${
                  genre === genreItem
                    ? "bg-[#37d0de] text-black"
                    : "bg-[#1E1E2F] text-white"
                } hover:bg-[#2aa9b8] transition-all`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-10 lg:px-44 py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-8">
          {year || "All Years"} {genre} Movies
        </h1>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded border border-red-400">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies?.map((movie, index) => (
            <div key={index} className="relative">
              <MovieCard
                title={movie?.titleText.text}
                posterImage={movie?.primaryImage?.url}
                releaseYear={movie?.releaseYear.year}
              />
              <Button
                title={isFavorite(movie) ? "Remove from Favorites" : "Add to Favorites"}
                action={() => toggleFavorite(movie)}
                className="absolute bottom-2 left-2 right-2 text-sm bg-[#1E1E2F] text-white hover:bg-[#2aa9b8] px-2 py-1 rounded"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-10">
          <Button
            title="Previous"
            action={() => setPage((prev) => (prev > 1 ? prev - 1 : 1))}
            className="bg-[#37d0de] hover:bg-[#2aa9b8] text-black font-semibold py-2 px-6 rounded-lg"
          />
          <Button
            title="Next"
            action={() => setPage(page + 1)}
            className="bg-[#37d0de] hover:bg-[#2aa9b8] text-black font-semibold py-2 px-6 rounded-lg"
          />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Your Favorites</h2>
          {favorites.length === 0 ? (
            <p className="text-gray-400">No favorite movies yet.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {favorites.map((movie, index) => (
                <MovieCard
                  key={index}
                  title={movie?.titleText.text}
                  posterImage={movie?.primaryImage?.url}
                  releaseYear={movie?.releaseYear.year}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default Movies;
