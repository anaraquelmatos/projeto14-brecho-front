import styled from 'styled-components';
import { useState } from 'react';

function Sizes(props) {

    const { size, itemInformation, setItemInformation} = props;

    const [sizeAvailable, setSizeAvailable] = useState(true)

    const gold = '#B89E19';

    if(!sizeAvailable) {
        return (
            <Div2 backgroundColor={`#E7E7E7`} borderColor={gold} onClick={() => {
                setSizeAvailable(true)
                setItemInformation({...itemInformation, size: ''})
                }}>
                <p>{size}</p>
            </Div2>
        )   
    } else {
        return (
            <Div backgroundColor={`#FFFFFF`} borderColor={`#000000`} onClick={() => {
                setSizeAvailable(false)
                setItemInformation({...itemInformation, size: size})
                }}>
                <p>{size}</p>
            </Div>
        ) 
    }
    
}

export default Sizes;

const Div = styled.div`
    width: 40px;
    height: 40px;
    margin-top: 30px;
    margin-left: 15px;
    border-radius: 10px;
    color: #000000;
    display: flex; 
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backgroundColor};
    border: 1px solid ${props => props.borderColor};

p {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
}
`

const Div2 = styled.div`
width: 40px;
    height: 40px;
    margin-top: 30px;
    margin-left: 15px;
    border-radius: 10px;
    color: #000000;
    display: flex; 
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backgroundColor};
    border: 3px solid ${props => props.borderColor};

p {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
}
`