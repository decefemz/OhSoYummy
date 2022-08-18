import styled from "styled-components"

export const Wrapper = styled.section`
    width: 100%;
    /* background-color:#fff; */

    /* border-top: 5px dashed var(--pink) !important; */
    padding-top:10px;
    `
export const Cont = styled.div`
    width: 100%;
    background-color:var(--darkgrey);
    padding-top:60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom:60px;

    flex-direction: column;
    `
export const Title = styled.h2`
    color:#eee;
    font-family: Montserrat;
font-size: var(--fontsize2);
padding:10px;
font-weight: 400;
margin-bottom:20px;
text-align: center;
& b{
    color:var(--pink);
    font-weight: 700;
}
    `
export const SliderCont = styled.div`
    max-width: var(--minWidth);
width:100%;
    ` 