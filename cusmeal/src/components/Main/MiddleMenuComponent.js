import style from 'styled-components';

const MenuWrap = style.div`
    position: fixed;
    top: 30vw;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    width: 100vw;
    height: 10vw;
    background-color: white;
    box-shadow: 0vw 0vw 7vw 0 rgba(0, 0, 0, 0.3);
`;

const Menu = style.div`
    font-size: 0.9rem;
    font-weight: bold;
    width: 18vw;
    height: 7.5vw;
    margin-top: 2.5vw;
    text-align: center;
    color: ${ props => (
        (props.isClick == props.id) ? 'rgba(48, 119, 86, 1)' : '#000000'
    )};
    border-bottom: ${ props => (
        (props.isClick == props.id) ? '0.1rem solid rgba(249, 210, 86, 1)' : 'none'
    )};
`;

const MiddleMenuCompoent = ({value, HandleMeal, HandleGrad, HandleTool}) => {
    return(
        <>
            <MenuWrap>
                <Menu onClick={HandleMeal} isClick={value} id={0}>밀키트</Menu>
                <Menu onClick={HandleGrad} isClick={value} id={1}>식재료</Menu>
                <Menu onClick={HandleTool} isClick={value} id={2}>조리도구</Menu>
            </MenuWrap>
        </>
    )
}

export default MiddleMenuCompoent;