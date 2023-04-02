import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
    border: 2px solid #212121;
    padding: 20px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 20px;
`;

export const Input = styled.input`
    width: 200px;
`;

export const Button = styled.button`
    width: 100px;
    padding: 3px 8px;
    border-radius: 4px;
    color: #000;
    background-color: white;
    :hover {
        background-color: #7ea3e9;
        color: #fff;
    }
`;

export const Messege = styled.span`
    color: red;
    font-size: 10px;
`;
