import React from 'react';
import { SwitchButton, Cont } from './style';

const SwitchBoard = () => {
    const [selected, setSelected] = React.useState('birthday')
    return (
        <Cont>
            <SwitchButton onClick={() => { setSelected('birthday') }} className={(selected == 'birthday') ? 'active' : ""} >Birthday</SwitchButton>
            <SwitchButton onClick={() => { setSelected('novelty') }} className={(selected == 'novelty') ? 'active' : ""} >Novelty</SwitchButton>
            <SwitchButton onClick={() => { setSelected('wedding') }} className={(selected == 'wedding') ? 'active' : ""} >Wedding</SwitchButton>
            <SwitchButton>ALL</SwitchButton>


        </Cont>
    );
}

export default SwitchBoard;
