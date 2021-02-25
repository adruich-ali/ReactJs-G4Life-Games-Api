import React,{useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from '../imgs/logo.svg';
//redux And routing 
import {fetchSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux'


const Nav = ()=>{
    const dispatch = useDispatch();
    const [textInput , setTextInput]= useState("");
    const inputHandler = (e)=>{
        setTextInput(e.target.value);
    };  
    const submitSearch=(e)=>{
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput("");
    };
    const clearSearched= ()=>{
        dispatch( {type :"CLEAR_SEARCHED"} );
    }
return(
<StyledNav >
<Logo onClick={clearSearched}>  
    <img src={logo} alt="logo"/> 
    <h1>G4Life</h1>
</Logo>
<form className="search">
    <input value={textInput} onChange={inputHandler} type="text"/>
    <button onClick ={submitSearch} type="submit">Search</button>
</form>
</StyledNav>
);
};
const StyledNav = styled(motion.nav)`
padding:3rem 5rem;
text-align:center;
input{
    width:30%;
    font-size:1rem;
    padding:0.5rem;
    border:none;
    margin-top:1rem;
    box-shadow:0px 0px 30px rgba(0,0,0,0.2); 
}
button{
    font-size:1rem;
    border:none;
    padding:0.5rem 2rem;
    cursor: pointer;
    background:#ff7676;
    color:white;
}
@media only screen and (max-width: 414px){
    padding:3rem 2rem;
    margin-right:1.5rem;

    button{
    font-size:1rem;
    border:dark;
    margin-top:1rem;
    padding:0.5rem 1rem;
    cursor: pointer;
    background:#ff7676;
    color:white;}
    margin-left:2rem;
    input{
    width:100%;
    font-size:1rem;
    padding:0.5rem ;
    padding-left:0rem;
    border:1px solid;
    box-shadow:0px 0px 30px rgba(0,0,0,0.2);
     }

}
@media only screen and (max-width:320px){
    margin-left:2rem;
    input{
    width:100%;
    font-size:0.2rem;
    padding:0.5rem ;
    padding-left:5rem;
    border:none;
    box-shadow:0px 0px 30px rgba(0,0,0,0.2);
     }
}
`;
const Logo = styled(motion.div)`
display:flex;
justify-content:center;
cursor:pointer;
img{
    height:2rem;
    width:2rem;
}
`;
export default Nav;