import { useNavigate } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold mb-4">404 not found LOOOOOOOOOOL</h1>
            <button className="btn btn-soft" onClick={() => navigate("/")}>Go Home</button>
        </div>
    );
}