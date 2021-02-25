import React from 'react' ; 
//Styling and Animations 
import styled from 'styled-components';
import{motion} from 'framer-motion';
//Redux
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {smallImage} from '../util';
//Images
import playstation from '../imgs/playstation.svg';
import steam from '../imgs/steam.svg';
import xbox from '../imgs/xbox.svg';
import nintendo from '../imgs/nintendo.svg';
import apple from '../imgs/apple.svg';
import gamepad from '../imgs/gamepad.svg';
import starEmpty from '../imgs/star-empty.png';
import starFull from '../imgs/star-full.png';

const GameDetail = ({pathId})=>{
    
    const History = useHistory();
    //Exit Detail
    const exiteDetailHandler = (e)=>{
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow='auto';
            History.push('/');
        }
    }
    //converting platforms images
    const GetPlatforms = (platform)=>{
        switch(platform){
            case"PlayStation 4":
            return playstation;
            case "Xbox One" :
            return xbox;
            case "PC" :
            return steam;
            case "Nintendo Switch" :
            return nintendo;
            case "IOS" :
            return apple;
            default :
            return gamepad;
            
        }
    }
//Get Stars
const getStars =()=>{
    const stars =[];
    const rating = Math.floor(game.rating);
    for(let i =1 ;i <= 5; i++ ){
       if( i <= rating ){
           stars.push(<img alt="star" key={i} src={starFull}></img>);
       }else{
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);

       }
    };
    return stars;
}
    //Data 
    const {screen ,game,isLoading} = useSelector((state) => state.detail);
    return(
        <>
        {!isLoading && (
        <CardShadow className="shadow" onClick={exiteDetailHandler}>
            <Detail layoutId={pathId}>
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                        <p>Rating:{game.rating}</p>
                        {getStars(game.rating)}
                    </div>
                    <Info>
                        <h3> Platforms </h3>
                    <PlatForms> 
                    {game.platforms.map(data => (
                        <img key={data.platform.id}
                        src={GetPlatforms(data.platform.name)} > 
                        
                        </img>
                    ))}
                    </PlatForms>
                    </Info>
                </Stats>
                <Media>
                    <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image,1280)} alt="Game" />
                </Media>
                <Description>
                        <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results.map(screen => (
                        <img src={smallImage(screen.image,1280)} key={screen.id} alt="Game"/>
                    ))}
                </div>
            </Detail>
        </CardShadow>
        )}
        </>
    );
};
const CardShadow =styled(motion.div)`
width:100%;
min-height:100vh;
overflow-y:scroll;
background: rgba(0,0,0,0.5);
position:fixed;
top:0;
left:0;
z-index:5;
&::-webkit-scrollbar{
width:0.5rem;
}
&::-webkit-scrollbar-thumb{
background-color:#ff7676;
}
&::-webkit-scrollbar-track{
background:white;
}

`;
const Detail = styled(motion.div)`
width:80%;
border-radius:1rem;
padding:2rem 5rem;
background:white;
position:absolute;
left:10%;
color:black;
z-index:10;
img{
    width:100%;
}
@media only screen and (max-width: 414px){
    width:85%;
    padding:2rem 1rem;
}
@media only screen and (max-width:320px){

}
`;
const Stats = styled(motion.div)`
display:flex;
align-items:center;
justify-content:space-between;
img{
    width:1.5rem;
    height:1.5rem;
    display:inline;
}
}
@media only screen and (max-width: 414px){
display:block;
img{
    width:.8rem;
    height:.8rem;
    display:inline;
}
}

@media only screen and (max-width:320px){
    display:block;
}
`;
const Info =styled(motion.div)`
text-align:center;

`;
const  PlatForms = styled(motion.div)`
display: flex;
justify-content:space-evenly;
img{
    margin-left:1rem;
}
@media only screen and (max-width: 414px){
    img{
    margin-left:0;
}
}

@media only screen and (max-width:320px){
    img{
    margin-left:0;
}
}
`;
const  Media = styled(motion.div)`
margin-top:5rem;
img{
    width:100%;
}
`;
const Description = styled(motion.div)`
margin:5rem 0rem ;
`;
export default GameDetail ;