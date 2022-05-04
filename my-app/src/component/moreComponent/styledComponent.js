import { Link } from 'react-router-dom'
import styled from 'styled-components'

 
export const HomeDiv=styled.div`
display: flex;
`

export const NavDiv=styled(HomeDiv)`
display:flex;
width:85%;
margin-left:5%;
justify-content: space-between;
position: absolute;
margin-top: -10%;
background: white;
padding-top: 1.2%;
padding-bottom: 1%;
`

export const CatDiv=styled(HomeDiv)`
display: flex;
height: 40px;
//background: green;
width:90%;
margin-left:5%;
margin-top: 10%;
`
export const PLPDiv=styled(HomeDiv)`
display: flex;
flex-wrap: wrap;
height: 1000px;
//background: blue;
width:90%;
margin-left:5%
`
export const AttribDiv=styled(HomeDiv)`
display:flex;
//background:gray;
width:90%;
margin-left:5%;
margin-top: 5%;
align-items: stretch;
height: 500px;
`

export const NavButton=styled.button`
border:none;
font-size:1.2em;
background:white;
padding-top:7.5%;
padding-bottom: 7.5%;
box-sizing: border-box;
padding-left: 10%;
height: 100%;
font-size: large;
`

export const NavSpan=styled.div`
display: inline-flex;
width: ${props => props.breadth ? "none" : "20%"};
justify-content:${props => props.endContent ? "space-between" : "none"};
`
export const BOX=styled.div`
display: flex;
flex-direction: column;
position: absolute;
width:8%;
top:45px;
right:2%;
box-shadow: 5px 8px 7px -6px rgba(0,0,0,0.11);
z-index: 7;

`
export const Lspan=styled.span`
display: inline-flex;
`

export const CatSpan =styled.div`
display:flex;
display: row;
width:100%;
font-size:xx-large
`
export const StyledBox=styled.div`
display:inline-flex;
justify-content:center;
align-items:center;
 width:29%;
 height:450px;
 margin:3% 1% 1% 2.5% ;
 text-decoration:none;
color:black
`

export const GenDIV=styled.div`
width: 100%;
height: 100%;
position:relative;
z-index: 1;
background: gray;
`

export const StyledLink=styled(Link)`
display:inline-flex;
justify-content: center;
align-items: center;
 width:100%;
 height:100%;
 text-decoration:none;
color:black;
flex-direction: column;
`  

export const StyledLink2=styled.div`
display:inline-flex;
justify-content: center;
align-items: center;
 width:100%;
 height:100%;
 text-decoration:none;
color:black;
flex-direction: column;
opacity: 50%;
`  

export const InnerBox=styled.div`
height:90%;
width:90%;

`

export const InnBox=styled.div`
height:70%;
width:100%;
`

export const RPanel=styled.div`
display: flex;
flex: 1;
margin-right: 10%;
margin-left: 3%;
flex-direction: column;
`

export const LPanel=styled.div`
display: flex;
flex: 3;
margin-left: 3%;
`

export const LImgDIV=styled.div`
flex: 5;
`
export const SImgDIV=styled.div`
flex: 1;
`

export const ImgDIV=styled.div`
margin-right: 15%;
margin-top: 5%;
`

export const DescDiv=styled.div`
   display: flex;
   flex-direction: column;
`

export const AttribButton=styled.button`
 border-width:thin;
 //background-color: white;
 height: ${props => props.swatch ? "2.5em" : "40px"};
width: ${props => props.swatch ? "2.5em" : "50px"};
font-size: x-small;
`
export const AttribButton2=styled.button`
 border-width:thin;
 background-color: black;
 height: ${props => props.swatch ? "2.5em" : "40px"};
width: ${props => props.swatch ? "2.5em" : "50px"};
font-size: x-small;
color: white;
`

export const AttribButton3=styled.button`
 border-width:thin;
 //background-color: white;
 height: ${props => props.swatch ? "1.5em" : "20px"};
width: ${props => props.swatch ? "1.5em" : "35px"};
font-size: xx-small;
text-justify: auto;
`

export const AttribButton4=styled.button`
 border-width:thin;
 //background-color: white;
 height: ${props => props.swatch ? "1.5em" : "20px"};
width: ${props => props.swatch ? "1.5em" : "25px"};
font-size: xx-small;
text-justify: auto;
`

export const AttribFlex=styled.div`
display: flex;
flex-direction:row;

`

export const AttribFlex2=styled.div`
display: flex;
flex-direction:row;

`

export const FWrap=styled.div`
margin-bottom: 8%;
font-size: larger;
`

export const SWrap=styled.div`
margin-bottom: 5%;
`

export const TWrap=styled.div`
margin-top: 5%;
`
export const CartBtn=styled(Link)`
background: #67e48c;
 color: white;
 border:none;
 height: 35px;
 text-decoration: none;
 text-align: center;
 
 
`

export const Swatch=styled.div`
display: inline-block;
margin-right: 3%;

`

export const CartDIV=styled.div`
display:flex;
margin-left: 7%;
width:85%;
flex-direction: column;
`

export const CartAttribDIV=styled.div`
display: flex;
justify-content: space-between;
`

export const CartWrapDIV=styled.div`
display: flex;
width:100%;
flex-direction: column;
`
export const WrapDIV=styled.div`
display: flex;
flex-direction: column;
justify-content:space-between
`

export const IMGSDIV=styled.div`
display: flex;
width:10em;
height: 12em;
margin-top: 1%;
`

export const IMGSDIV2=styled.div`
display: flex;
width:6em;
height: 8em;
margin-top: 1%;
`
export const WrapDIVS=styled.div`
display: flex;
justify-content:space-between;
width:100%;
padding-bottom: 1em;
`
export const WRAPDIVS=styled.div`
display: flex;
`

export const CaroBtn=styled.button`
position: relative;
  z-index: 1;
  right:40%;
  top:83%;
  margin-right: 5%;
  height: 20px;
  width: 20px;
  background: black;
  opacity: 70%;
  color: white;
  
`

export const OrderBtn=styled.button`
width: 40%;
margin-top: 1%;
height: 2.7em;
font-size: small;
background: white;
color: black;
border: 1px solid black;
`

export const OrderBtn3=styled.button`
width: 18%;
margin-top: 1%;
height: 2.7em;
font-size: small;
background: #67e48c;
color:white;
border: none;
`

export const OrderBtn2=styled(Link)`
display: flex;
width: 40%;
margin-top: 1%;
font-size: small;
background: #67e48c;
color: aliceblue;
border: none;
text-decoration: none;
justify-content: center;
align-items: center;
margin-right: 10%;
`

export const OrderDiv=styled.div`
margin-top: 0.5%;
`

export const OrderDiv2=styled.div`
position: relative;
top:20px ;
order: -1;
`
export const MiniCartDiv=styled.div`
width: 25%;
position:absolute;
z-index: 6;
background:white;
left: calc(100% - 300px);
padding-left: 1%;
padding-right: 0.5%;
padding-bottom: 3%;
height: auto;
display: flex;
flex-direction: column;
flex-wrap: wrap;
margin-top: -6%;
`
export const FlexSpan=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const NavLinkSpan=styled(Link)`
text-decoration: none;
padding-left: 10%;
margin-left: 3%;
box-sizing: border-box;
`
export const Overlay=styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
height: auto;
background: black;
opacity: 30%;
z-index: 1;
`