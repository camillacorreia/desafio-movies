import styled from 'styled-components';

import { shade } from 'polished';

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 60px;
    width: 250px;
    height: 50px;
`;

export const Pag = styled.div`
    margin: 0 8px;

    .enable {
        display: flex;
        justify-content: center;
        background: var(--primary-color);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-top: -10px;
        border: 2px solid var(--secundary-color);
        box-shadow: 0px 0px 0px 1.6px var(--primary-color);
        transition: color 0.2s;
        color: var(--secundary-color);
        font-size: 24px;
        font-weight: bold;
        align-items: center;
        cursor: pointer;

        &:hover {
            color: ${shade(0.2, '#48eff8')};
        }
    }

    .disable {
        display: flex;
        align-items: center;
        font-size: 20px;
        color: var(--primary-color);
        cursor: pointer;
    }
`;