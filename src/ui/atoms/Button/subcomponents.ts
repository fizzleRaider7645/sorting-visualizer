import styled from "styled-components";

export const ButtonBase = styled.button`
    margin: 5px 20px 5px 0px;
    padding: 15px 24px;
    background-color: transparent;
    border: 2px solid #e74c3c;
    border-radius: 5px;
    color: #e74c3c;
    cursor: pointer;
    font-size: 15px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Press Start 2P', cursive;
    font-weight: 700;
    outline: none;
    :hover {
        background-color: #e74c3c;
        border-radius: 10px;
        text-shadow: 2px 2px #000000;
        color: #ffffff;
        border: 3px solid #000000;
        animation: shake 0.5s;
        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
          }
      }
`