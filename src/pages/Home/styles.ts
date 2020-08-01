  
import styled, { css } from 'styled-components';

interface FormProps {
    hasError: boolean;
}

export const Form = styled.form<FormProps> `
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        width: 1000px;
        height: 38px;
        background: var(--auxiliary-color);
        border: 1px solid #fff;
        border-radius: 20px;
        
        font-size: 16px;
        color: #a9c6d3;
        padding: 0 35px 0 10px;
        margin: 30px;
        font-family: 'Abel', sans-serif;

        @media (max-width: 338px) {
            font-size: 14px;
        }

        ${(props) =>
            props.hasError &&
            css`
                border-color: #C53030;
        `}
        
        ::-moz-placeholder {
            color: #a9c6d3;
            opacity:  1;    
            font-weight: 550;
        }
        ::-moz-placeholder {
            color: #a9c6d3;
            opacity:  1;
            font-weight: 550;
        }
        :-ms-input-placeholder {
            color: #a9c6d3;
            font-weight: 550;
        }
        ::-ms-input-placeholder {
            color: #a9c6d3;
            font-weight: 550;
        }
        ::placeholder {
            color: #a9c6d3;
            font-weight: 550;
        }
    }
`;

export const Error = styled.span `
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C53030;
    margin: 0 auto;
    margin-bottom: 24px;
`;

export const Listing = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: center;
    max-width: 1000px;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 44px;

    @media (max-width: 687px) {
        display: flex;
        flex-direction: column-reverse; 
    }
`;

export const Img = styled.img `
    width: 30%;
    height: 500px;

    @media (max-width: 768px) {
        width: 40%; 
    }

    @media (max-width: 687px) {
        width: 95%;
        margin: 0 auto;
        max-height: 100%;
    }
`;

export const FullDescription = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 70%;
    height: 500px;

    @media (max-width: 768px) {
        width: 60%; 
    }

    @media (max-width: 687px) {
        width: 95%;
        margin: 0 auto;
        height: 100%;
    }
`;

export const MovieHeader = styled.div `
    display: flex;
    flex-wrap: wrap;
    background: var(--primary-color);
    max-height: 100px;
    box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(107, 106, 106, 0.25);

  p {
    display: flex;
    flex-flow: row wrap;
    margin: 10px 10px 10px 100px;
    font-family: 'Abel', sans-serif;
    color: var(--secundary-color);
    font-size: 28px;

    @media (max-width: 800px) {
        font-size: 20px;
    }

    @media (max-width: 375px) {
        font-size: 16px;
    }
  }
`;

export const MovieDescription = styled.div `
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: stretch;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: var(--auxiliary-color);
    padding: 24px;

    @media (min-width: 1035px) and (max-width:3000px){
        height: 469px;
    }
`;

export const Percentage = styled.div`
    display: flex;
    align-items: center;
    background: var(--primary-color);
    border: 3px solid var(--secundary-color);
    box-shadow: 0px 0px 0px 3px var(--primary-color);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    position: relative;
    top: -56px;

    p {
        font-size: 20px;
        font-family: "Abel", sans-serif;
        margin: 0 auto;
        color: var(--secundary-color);
    }
`;

export const Date = styled.div `
    display: flex;
    justify-content: flex-start;
    padding: 10px;

    span {
        flex-wrap: wrap;
        font-size: 20px;
        font-family: "Lato", sans-serif;
        color: #a5a1a1;
        margin: -80px 0px 0px 69px;

        @media (max-width: 320px) {
            font-size: 16px;
        }
    }
`;

export const Sinopse = styled.div `
    font-family: 'Lato', sans-serif;
    justify-content: flex-start;
    padding-right: 12px;
    font-size: 16px;
    line-height: 20px;
    color: var(--text-color);
    margin-top: -52px;
    margin-bottom: 30px;

    @media (max-width: 687px) {
        text-align: center;
    }
`;

export const Genre = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;

    @media (max-width: 687px) {
        justify-content: center;
    }
`;

export const Type = styled.div`
    background: #fff;
    border: 2px solid var(--primary-color);
    border-radius: 20px;
    padding: 5px 11px;
    font-size: 16px;
    color: var(--primary-color);
    margin-right: 6px;
    margin-bottom: 12px;
`;