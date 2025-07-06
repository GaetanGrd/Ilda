import { useNavigate, useParams } from "react-router-dom";


export function Reader() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold mb-4">Reading page</h1>
            <p>Tu lis la série ID : {id}</p>
            <button className="btn btn-soft" onClick={() => navigate("/")}>Go Home</button>
            <button className="btn btn-soft" onClick={() => navigate("/dzqdqz")}>Go 404</button>
        </div>
    );
}