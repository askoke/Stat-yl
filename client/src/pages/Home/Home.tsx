import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
    const handlePlay = () => {
        navigate('/questionaire');
    };

    return (
        <div>
            <h1>Linnade viktoriin</h1>
            <button onClick={handlePlay}>
                Alusta
            </button>
        </div>
    )
}
