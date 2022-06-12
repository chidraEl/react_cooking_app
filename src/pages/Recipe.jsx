import { useEffect, useState } from "react";
import styled from 'styled-components'
import { useParams } from "react-router-dom";

function Recipe() {
    let params = useParams()
    const [recipe,SetRecipe] = useState({})

    const fetchRecipe = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information/?apiKey=${process.env.REACT_APP_API_KEY}`)
        const details = await data.json()
        SetRecipe(details)
        console.log(details)
    }

    useEffect( () => {
        fetchRecipe()
    }, [params.name])

    return (
        <div>
            <Wrapper>
                <h3>{recipe.title}</h3>
                <div>
                    <img src={recipe.image} alt={recipe.title} />
                </div>
            </Wrapper>
            <Card>
                <h4>About the recipe</h4>
                <div>
                    <p>Vegetarian :  {recipe.vegetarian ? 'yes' : 'no'}</p>
                    <p>Vegan :  {recipe.veryPopveganular ? 'yes' : 'no'}</p>
                    <p>Popular :  {recipe.veryPopular ? 'yes' : 'no'}</p>
                    <p>Servings :  {recipe.servings ? 'yes' : 'no'}</p>
                    <hr />
                    <p dangerouslySetInnerHTML={ {__html: recipe.summary}}></p>
                </div>
            </Card>
            <Card>
                <h4>Instructions</h4>
                <div>
                    <p dangerouslySetInnerHTML={ {__html: recipe.instructions}}></p>
                </div>
            </Card>
        </div>
    )
}

const Wrapper = styled.div`
    div{
        margin: 2rem 0;
        text-align:center;
        img{
            border-radius:2rem;
            margin-bottom:1rem;
            box-shadow: .5rem .5rem 15px rgba(3,3,3,.3);
            max-width:100%;
        }
    }

    h3{
        font-size:2rem;
        margin:3rem 0;
        font-weight:700;
        text-align:center;
    }
`
const Card = styled.div`
    box-shadow: .2rem .2rem 1rem rgba(3,3,3,.15);
    border-radius:2rem;
    background:#fafafa;
    overflow:hidden;
    margin-bottom:2rem;

    h4{
        padding:1rem 2rem;
        font-family:"Baumans";
        font-size:1.2rem; 
        background:#222;  
        color:#eee;     
    }
    
    div{
        line-height:2rem;
        font-weight:500;
        text-align:left;
        font-size:1rem; 
        padding:1rem 2.5rem;
        font-family:"Baumans";
    }
`
export default Recipe