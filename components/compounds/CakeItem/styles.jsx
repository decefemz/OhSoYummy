import styled from "styled-components"

export const Wrapper = styled.div`
    width:200px;
    padding:10px;
    background-color:#383838;
    border-radius:8px;
    margin-inline:20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    `
export const Title = styled.h3`
    font-size:var(--fontsize3);
    color:#eee;
    margin-bottom:0;
    text-align: center;
    `
export const Descr = styled.h4`
    font-size:var(--fontsizwe4);
    color:#eee;
    font-weight: 400;
    height:100px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    ::after{
        content: "";
        width: 100%;
        height: 40px;
        position: absolute;
        bottom:0;
        background-image:linear-gradient(0deg, #383838, #38383800)
        /* transform: translateY(-40px); */
    }
    `