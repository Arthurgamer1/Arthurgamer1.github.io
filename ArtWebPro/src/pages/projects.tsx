import { useNavigate } from 'react-router-dom';
import Card from '../components/cards';

const navigate = useNavigate();
const Projects = () =>
    <div className="cards">
        <Card
            num="01"
            label="Wordle Game"
            image="/wordle-thumb.png"
            showButton={true}
            onClick={() => navigate('/projects/wordle')}
        />

        <Card
            num="02"
            label="Wordle Game"
            image="/wordle-thumb.png"
            showButton={true}
            onClick={() => navigate('/projects/wordle')}
        />

    </div>;
export default Projects;
