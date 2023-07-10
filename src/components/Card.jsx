import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
import { BiSolidLike } from "react-icons/bi";

export default function Card({ result }) {
  return (
    <div className="my-[20px] cursor-pointer sm:p3 sm:hover:shadow-gray-400 dark:sm:hover:shadow-slate-600 sm:shadow-md rounded-lg border-[1.2px] border-gray-300 dark:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link className="" href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            // result.poster_path
            result.backdrop_path
          }`}
          width={500}
          height={100}
          className=" rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt={result.title}
        ></Image>
        <div className="py-2 px-3 flex flex-col justify-between">
          <h2 className="truncate text-lg md:text-xl font-bold h-[40px] ">
            {result.title || result.name}
          </h2>
          <p className="line-clamp-3 text-base leading-6 sm:leading-tight md:text-base tracking-tighter leaing-3">
            {result.overview}
          </p>
          <div className="flex items-center justify-between mt-4">
            <p>{result.release_date || result.first_air_date}</p>
            <span className="flex items-center justify-end">
              <BiSolidLike className="h-5 mr-1 ml-3 text-amber-600" />
              {result.vote_count}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
