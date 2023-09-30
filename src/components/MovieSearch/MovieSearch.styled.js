import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 8px;
`;

export const SearchFormButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;

  & > svg {
    margin-left: 8px;
    transition: stroke 400ms ease;
    &:hover {
      stroke: red;
    }
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  border: 1px solid #050505;
  padding: 10px;
  border-radius: 8px;

  &::placeholder {
    font-size: 18px;
  }
`;
