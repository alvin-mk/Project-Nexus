import { useRouter } from "next/router";
import Image from "next/image"; // Import the  Image component from next/image
import Header from "@/components/layouts/Header";
import Button from "@/components/commons/Button";

// Type for a movie object
interface Movie {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const Home: React.FC = () => {
  const router = useRouter();

  // Data for featured movies
  const featuredMovies: Movie[] = [
    {
      id: 1,
      title: "Movie Title:- Mufasa: The Lion King ",
      description:
        "A brief description of the movie:🎥 Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.",
      imageUrl: "https://i.pinimg.com/736x/83/cd/bb/83cdbb7803ae4e796865f7cd6587317c.jpg",
      link: "/movie/1",
    },
    {
      id: 2,
      title: "Movie Title:- Captain America: Brave New World ",
      description:
        "A brief description of the movie:📀 After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.",
      imageUrl: "https://i.pinimg.com/736x/5d/29/9b/5d299b293da638039acce5dda26ee239.jpg",
      link: "/movie/2",
    },
    {
      id: 3,
      title: "Movie Title:-Flight Risk",
      description:
        "A brief description of the movie:📽️ A U.S. Marshal escorts a government witness to trial after he's accused of getting involved with a mob boss, only  to discover that the pilot who is transporting them is also a hitman sent to assassinate the informant. After they subdue him, they're forced to fly together after discovering that there are others attempting to eliminate them.",
      imageUrl: "https://i.pinimg.com/736x/88/0d/1f/880d1f843195287157a128ad33be8ec5.jpg",
      link: "/movie/3",
    },
  ];

  return (
    <div className="bg-[#0D1117] text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/736x/c3/07/fd/c307fd7efc3ab32b0340e2820894b7e4.jpg")',
        }}
      >
        <div className="bg-black bg-opacity-60 h-full w-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-8xl font-bold mb-8">
            Discover the Magic of{" "}
            <span className="text-[#37d0de]">Cinema</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl">
            Your ultimate destination for movie recommendations, reviews, and
            exclusive content. Start exploring now!
          </p>
          <Button
            title="Explore Movies"
            action={() => router.push("/movies", undefined, { shallow: false })}
            className="bg-[#37d0de] hover:bg-[#2aa9b8] text-black font-semibold py-3 px-8 rounded-lg"
          />
        </div>
      </section>

      {/* Featured Movies Section */}
      <section className="py-20 px-8 md:px-16 bg-[#121018]">
        <h2 className="text-3xl md:text-5xl font-semibold mb-12 text-center">
          Top Featured Movies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-[#1E1E2F] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Movie Image */}
              <div className="w-full h-64 relative">
                <Image
                  src={movie.imageUrl}
                  alt={movie.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                {/* Movie Title */}
                <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                {/* Movie Description */}
                <p className="text-gray-400">{movie.description}</p>
                {/* Learn More Button */}
                <Button
                  title="Learn More"
                  action={() => router.push("/movies", undefined, { shallow: false })}
                  className="mt-4 bg-[#37d0de] hover:bg-[#2aa9b8] text-black font-semibold py-2 px-6 rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 px-8 md:px-44 bg-[#0D1117] text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8">
          Ready to Join the Adventure?
        </h2>
        <p className="text-lg md:text-2xl mb-12">
          Sign up for <span className="text-[rgb(55,236,58)]">Film<span className="text-[#37d0de]">Verse</span></span> today and
          unlock exclusive access to the latest movies, personalized
          recommendations, and more.
        </p>
        <Button
          title="Get Started"
          action={() => router.push("/signup", undefined, { shallow: false })}
          className="bg-[#dedb37] hover:bg-[#d3e136] text-white font-semibold py-3 px-8 rounded-lg"
        />
      </section>
    </div>
  );
};

export default Home;
