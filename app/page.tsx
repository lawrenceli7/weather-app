"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center m-2 text-4xl text-white">Find the weather in any city!</h1>
        <p className="text-center m-2 text-lg text-white">Enter a city name below to get the current weather.</p>
        <input className="p-1 border border-white w-1/2 block mx-10 my-auto text-center text-black" type="text" value={city} placeholder="City name" onChange={(e) => setCity(e.target.value)} />
        <Link className="p-1 border border-[#ddd] no-underline text-white w-1/2 block mx-0 my-auto text-center mt-5" href={`/${city}`}>Get Weather</Link>
      </div>
    </main>
  );
}
