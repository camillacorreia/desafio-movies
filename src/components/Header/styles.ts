import styled from 'styled-components';
import { shade } from 'polished';

export const Headline = styled.header `
    background: var(--primary-color);
    width: 100%;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    a {
        color: var(--secundary-color);
        font-size: 40px;
        font-style: 'Lato', sans-serif;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
            color: ${shade(0.1, '#00ede7')};
        }
    }
` 