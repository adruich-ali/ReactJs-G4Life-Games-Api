import React ,{useEffect}from 'react';
import GameDetail from '../components/GameDetail';
import {useDispatch, useSelector}from 'react-redux';
import {loadGames} from '../actions/gamesAction'
//*Components 
import Game from '../components/game';
//*Styling and Animations 
import styled from 'styled-components';
import{motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import {useLocation} from 'react-router-dom';
const Home = ()=>{
    //Get The Current Location 
    const Location = useLocation();
    const pathId = Location.pathname.split("/")[2];


    //?Fetch Games 
    const dispatch = useDispatch();
    useEffect(()=>{
dispatch(loadGames());  
    }, [dispatch]);
    //?Get The Date From The ReduxStor
const {popular,newGames,upcoming, searched }= useSelector((state) => state.games);

    return(
<GameList>
    <AnimateSharedLayout type="crossfade">
    <AnimatePresence>
    {pathId && <GameDetail pathId={pathId}/> }
    </AnimatePresence>
    {searched.length ? (
    <div className="searched">
    <h2>Searched Games</h2>
    <Games>
        {searched.map( game => (
            <Game name={game.name} released={game.released } id={game.id} 
            image={game.background_image}
            key={game.id}
            />
        ))}
    </Games>
    </div>
    ): ''}
    <h2>UpComing Games</h2>
    <Games>
        {upcoming.map( game => (
            <Game name={game.name} released={game.released } id={game.id} 
            image={game.background_image}
            key={game.id}
            />
        ))}
    </Games>
    <h2>Popular Games</h2>
    <Games>

        {popular.map( game => (
            <Game name={game.name} released={game.released } id={game.id} 
            image={game.background_image}
            key={game.id}
            />
        ))}
    </Games>
    <h2>Mew Games</h2>
    <Games>

        {newGames.map( game => (
            <Game name={game.name} released={game.released } id={game.id} 
            image={game.background_image}
            key={game.id}
            />
        ))}
    </Games>
    </AnimateSharedLayout>
</GameList>
    );
};
const GameList = styled(motion.div)`
padding:0rem 5rem;
padding-bottom:2rem;
h2{
    padding:5rem 0rem;
}
@media only screen and (max-width: 414px){
    padding:0rem 0rem;
    h2{
    text-align:center;
    font-size:1.5rem;
}
}
@media only screen and (max-width:320px){
    padding:0rem 0rem;
    h2{
    text-align:center;
    font-size:1.2rem;
}
}
`;
const Games = styled(motion.div)`
min-height:80vh;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(300px,2fr));
grid-column-gap:2rem;
grid-row-gap:3rem;
`;
export default Home;