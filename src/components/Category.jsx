import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiChopsticks } from 'react-icons/gi';
import { TbSoup } from 'react-icons/tb'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <List>
      <SLink className='link' to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink className='link' to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink className='link' to={'/cuisine/African'}>
        <TbSoup />
        <h4>African</h4>
      </SLink>
      <SLink className='link' to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  gap: 2rem;
`
const SLink = styled(NavLink)`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  transition: 0.5s;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;

  h4{
    color: white;
    font-size: 0.8rem;
  }

  svg{
    color: white;
    font-size: 1.5rem;
  }
  &.active{
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4{
      color: white;
    }
  }
`
export default Category;