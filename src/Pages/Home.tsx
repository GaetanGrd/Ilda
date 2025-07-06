import { useNavigate } from "react-router-dom";
import {WebtoonList} from "../components/WebtoonList";

export function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold mb-4">Welcome to Ilda</h1>
            <p className="mb-4">Your favorite webtoon reader</p>
            <button className="btn btn-soft" onClick={() => navigate("/dzqdqz")}>try 404</button>
            <WebtoonList />
        </div>
    );
}