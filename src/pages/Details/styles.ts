import styled from 'styled-components';

export const Container = styled.div `
    display:flex;
    flex-flow: column wrap;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 50px;
    padding: 24px;
`;

export const FullDescription = styled.div `
    align-items: stretch;
    background: #f2f2f2;
    height: 100%;
    margin-bottom: 40px;
`;

export const Header = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #e2e2e2;

    span {
        font-family: 'Abel', sans-serif;
        font-size: 40px;
        color: var(--primary-color);
        padding: 10px 0 0 30px;

        @media (max-width: 850px) {
            font-size: 30px;
            margin-right: 4px;
            margin-bottom: 8px;
        }
    }

    p {
        font-family: "Lato", sans-serif;
        font-size: 20px;
        color: #a5a1a1;
        margin-right: 16px;
        padding: 10px 0 0 40px;

        @media (max-width: 850px) {
            font-size: 16px;
            margin-left: -4px;
            margin-right: 16px;
            margin-bottom: 8px;
        }
    }
`;

export const InforComplementary = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;

    @media (max-width: 723px) {
        display: flex;
        flex-flow: column wrap; 
    }
`;

export const Img = styled.div `
    flex-wrap: wrap;
    width: 30%;
    max-height: 1000px;

    @media (max-width: 955px) {
        width: 50%;
    }

    @media (max-width: 723px) {
        width: 100%;
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

export const DivDetails = styled.div `
    width: 70%;
    display: flex;
    flex-flow: column wrap;

    @media (max-width: 955px) {
        width: 50%;
    }

    @media (max-width: 723px) {
        width: 100%;
    }
`;

export const Sinopse = styled.div `
    margin: 16px;
    flex-wrap: wrap;

    @media (max-width: 320px) {
        text-align: center;
    }

    span {
        font-size: 24px;
        color: #116193;
        margin: 16px;
    }

    hr {
        margin: 4px 16px;
        border: 0;
        border-bottom: 2px solid #48eff8;
    }

    p {
        flex-wrap: wrap;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        line-height: 18.5px;
        color: #6e6a6a;
        margin: 16px;
        margin-bottom: 35px;
    }
`;

export const InforTitle = styled.div `
    margin: 16px;
    flex-wrap: wrap;
    
    @media (max-width: 320px) {
        text-align: center;
    }

    span {
        font-size: 24px;
        color: #116193;
        margin: 16px;
    }

    hr {
        margin: 4px 16px;
        border: 0;
        border-bottom: 2px solid #48eff8;
    }
`;

export const Infor = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: 0px 16px 0px 16px;
    margin-bottom: 60px;

    @media (max-width: 320px) {
        flex-flow: column wrap;
    }

    div {
        display: flex;
        flex-direction: column;
        margin: 0px 12px 12px 12px;
    }

    span.letter {
        font-size: 24px;
        color: #116193;
        margin: 0 auto;
    }

    span.smaller-letter {
        color: #6e6a6a;
        font-size: 16px;
        margin: 0 auto;
    }
`;

export const DivGenre = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin: 16px;
    align-items: baseline;

    @media (max-width: 723px) {
        justify-content: center;
    }
`;

export const Genres = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin-top: -36px;
    margin-left: 16px;

    @media (max-width: 723px) {
        justify-content: center;
    }
`;

export const Type = styled.div`
    background: #fffefe;
    font-size: 16px;
    font-weight: 500;
    color: #116193;
    padding: 5px 11px;
    margin-right: 6px;
    border: 2px solid #116193;
    border-radius: 20px;
    margin-bottom: 16px;
`;

export const DivPercentage = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    position: relative;
    margin-top: 24px;
    top: -30px;
    right: 30px;

    @media (max-width: 723px) {
        justify-content: center;
        top: 0px;
        right: 0px;
        margin-bottom: 24px;
    }
`;

export const Percentage = styled.div`
    display: flex;
    align-items: center;
    background: #116193;
    border: 6px solid #48eff8;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 4px #116193;

    p {
        display: flex;
        margin: 0 auto;
        font-family: "Abel", sans-serif;
        color: #48eff8;
        font-size: 35px;
    }
`;

export const Trailler = styled.section `
    iframe {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        height: 720px;
        margin: 0 auto;
        margin-top: 35px;
    }
`;