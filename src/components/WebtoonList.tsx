import { invoke } from "@tauri-apps/api/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Webtoon = {
  id: number;
  title: string;
  author: string;
  description: string;
  image_url: string;
};

async function fetchWebtoons() {
  const data: Webtoon[] = await invoke("get_list_of_webtoons");
  return data;
}

export function WebtoonList() {
  const [webtoons, setWebtoons] = useState<Webtoon[]>([]);
  const navigate = useNavigate(); // ✅ ICI, hors du .map()

  useEffect(() => {
    const loadWebtoons = async () => {
      try {
        const webtoonsData = await fetchWebtoons();
        setWebtoons(webtoonsData);
      } catch (error) {
        console.error("Failed to fetch webtoons:", error);
      }
    };
    loadWebtoons();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Webtoon List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {webtoons.map((webtoon) => (
          <div
            key={webtoon.id}
            className="card bg-base-100 shadow-xl cursor-pointer"
            onClick={() => navigate(`/reader/${webtoon.id}`)} // ✅ OK ici
          >
            <figure>
              <img src={webtoon.image_url} alt={webtoon.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{webtoon.title}</h2>
              <p>{webtoon.description}</p>
              <p className="text-sm text-gray-500">by {webtoon.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
