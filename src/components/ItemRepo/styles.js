import styled from 'styled-components';

export const ItemContainer = styled.div`
  background:rgb(126, 23, 136);
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;

  h2 {
    margin: 0 0 8px;
  }

  p {
    margin: 0 0 12px;
  }

  a {
    display: inline-block;
    margin-bottom: 12px;
    color:rgb(57, 188, 192);
    text-decoration: line;
    font-weight: bold;
  }

  .remove-btn {
    background: #dc3545;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s ease;
    margin-top: 12px;
    margin-left: 8px;

    &:hover {
      background: #c82333;
    }
  }
`;
