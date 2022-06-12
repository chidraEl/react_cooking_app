import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {TbToolsKitchen} from 'react-icons/tb'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'



function Category() {
  return (
    <List>
        <Slink to={'/'}>
            <TbToolsKitchen/>
            <h4>Homepage</h4>
        </Slink>
        <Slink to={'/Cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </Slink>
        <Slink to={'/Cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </Slink>
        <Slink to={'/Cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </Slink>
        <Slink to={'/Cuisine/Chinese'}>
            <GiChopsticks/>
            <h4>Chinese</h4>
        </Slink>
    </List>
  )
}

const List = styled.div`
    display:flex;
    justify-content:center;
    margin:2rem 0rem;
`
const Slink = styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:.6rem;
    padding:10px;
    background:#333;
    color:#eee;
    text-decoration:none;
    width:6rem;
    height:5rem;
    margin:0 .15rem;
    transition:.2s;
    
    svg{
        width:26px;
        height:26px;
        transition:.2s;
    }
    h4{
        margin-top:.4rem;
        font-size:.9rem;
    }
    &.active {
        color:#fff;
        background:#de1c68;
        transition:.2s;

        svg{
            color:#fff;
            transform:scale(1.2);
            transition:.2s;
        }
    }
    &:hover{
        background:#6f1437;
    }
`

export default Category