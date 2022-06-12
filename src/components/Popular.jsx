import { useEffect,useState } from "react";
import styled from "styled-components"
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'


function Popular() {

    const [Popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    },[]);

    const getPopular = async () => {

        // Check localstorage
        const check = localStorage.getItem('popular')
        if(check){
            setPopular(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await api.json();
            
            // Store recipes in localstorage
            localStorage.setItem('popular', JSON.stringify(data.recipes));

            setPopular(data.recipes)
        }
    }

  return (
    <div>
        <Wrapper>
            <h3>Popular picks</h3>
            <Splide options={{
                perPage : 4,
                arrows:false,
                pagination:false,
                drag:"free",
                gap: "1rem"
            }}>
            { Popular.map( (recipe)  => {
                return (
                    <SplideSlide key={recipe.id}>
                        <Card>
                            <Link to={ '/recipe/' + recipe.id }>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt="{recipe.title}" />
                                <Gradient/>
                            </Link>
                        </Card>
                    </SplideSlide>
                );
            })}
            </Splide>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem 
`;
const Card = styled.div`
    min-height:10rem;
    border-radius:1rem;
    overflow:hidden;
    position:relative;
    margin:.5rem 0;
    box-shadow:.1rem .1rem .6rem rgba(0,0,0,.4);

    img{
        border-radius:1rem;
        width:100%;
        height:100%;
        left:0;
        object-fit:cover;
        position:absolute;
    }
    p{
        position:absolute;
        z-index:10;
        bottom:10%;
        left:50%;
        width:100%;
        color:white;
        padding:0 5px;
        transform:translate(-50%,0%);
        font-weight:600;
        font-size:.8rem;
        height:40%;
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;

    }
`
const Gradient = styled.div`
    z-index:3;
    position:absolute;
    width:100%;
    height:100%;
    background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8))
`
export default Popular