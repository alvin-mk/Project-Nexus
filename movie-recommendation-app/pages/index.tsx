import { useRouter } from "next/router";
import Image from "next/image"; // Import the Image component from next/image
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
