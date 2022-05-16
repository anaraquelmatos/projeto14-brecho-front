import styled from 'styled-components';
import { useState } from 'react';

function Color(props) {

    const { color, itemInformation, setItemInformation } = props;

    const [colorAvailable, setColorAvailable] = useState(true)

    const gold = '#B89E19';

    if(!colorAvailable) {
        return (
            <Div2 borderColor={gold} color={color} onClick={() => {
                setColorAvailable(true)
                setItemInformation({...itemInformation, color: ''})
                }}>
            </Div2>
        )
    } else {
        return (
            <Div borderColor={color} color={color} onClick={() => {
                setColorAvailable(false)
                setItemInformation({...itemInformation, color: color,})
                }}>
            </Div>
        )
    }

}

export default Color;

const Div = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 5px;
    margin-left: 15px;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.borderColor};
`

const Div2 = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 5px;
    margin-left: 15px;
    background-color: ${props => props.color};
    border: 3px solid ${props => props.borderColor};
`