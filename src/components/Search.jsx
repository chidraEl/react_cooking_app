import styled from 'styled-components'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Search() {

    const [input, setInput] = useState("")

    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/search/'+input)
    }

  return (
    <FormStyle onSubmit={submitHandler}>
        <FaSearch/>
        <input  type="text" 
                placeholder='Search recipe ...'
                value={input}
                onChange={(e) => setInput(e.target.value)}/>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin:1rem auto;
    position:relative;
    width:80%;
    min-width:15rem;
    max-width:30rem;
    display:flex;
    justify-content:center;
    flex-direction:center;
    border:1px solid #bbb;
    border-radius:5rem;
    padding:.5rem;
    input{
        padding:.3rem;
        border:none;
        outline:none;
        padding-left:2rem;
        width:100%;
    }
    svg{
        position:absolute;
        top:50%;
        left:0%;
        transform:translate(100%,-50%);
        color:#aaa;
    }
`

export default Search