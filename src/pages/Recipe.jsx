import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  let params = useParams();


  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    console.log(detailData);
    setDetails(detailData);
  };
  
//eslint-disable-next-line

  useEffect(() => {
    fetchDetails();
  }, [params.name]);  

// useEffect(() => {
//     if (wallet) {
//     FetchNfts();      
//     }
//   }, [wallet])

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} style={{borderRadius: '2rem' }} alt="" />
      </div>d
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => { setActiveTab('instructions')}}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => { setActiveTab('ingredients')}}>Ingredients</Button>
        {
          activeTab === 'instructions' && (
            <div>
              <p dangerouslySetInnerHTML={{ __html: details.summary }} style={{ lineHeight: '2rem', fontSize: '1.3rem' }}></p>
              <h3>Cooking Instructions: </h3>
              <p dangerouslySetInnerHTML={{__html: details.instructions}} style={{marginLeft: '2rem'}}></p>
            </div>
          )}
          {activeTab === 'ingredients' && (
            <ul>
          {details.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
          )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  
  .active{
  background: rgb(154, 205, 50);
    color: #1d1d1d;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;

  }
  h2{
    margin-bottom: 2rem;
    font-weight: 600;
    font-family: 'Lobster Two', Cursive;
    font-size: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
`;
const Info = styled.div`
  margin-left: 5rem;
  border-left: 1px dotted #1d1d1d;
  padding-left: 5rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: white;
  background: linear-gradient(to right, #f27121, #e94057);
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  border-radius: 1rem;
  text-shadow: 1px 1px 2px #babbbd;
  border: none;
  cursor: pointer;
  font-weight: 900;
  transition: 0.5s;
  box-shadow: 1px 1px 1px #cbced1, -1px -1px 1px #dfdfdf;

`;

export default Recipe;