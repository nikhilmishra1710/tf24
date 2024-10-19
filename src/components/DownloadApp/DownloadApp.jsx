import { Check, Download } from 'lucide-react';
import React from 'react';

const DownloadApp = () => {
    const [started, setStarted] = React.useState(false);

    const handleDownload = () => {
        setStarted(true);
        setTimeout(() => {
            setStarted(false);
        }
            , 3000);
    };

    return (
        <div


        >
            <a
                className="gap-2 fixed bottom-4 right-4 h-auto w-auto flex items-center justify-center bg-slate-800 text-white border-2 px-4 p-2 rounded-full shadow-lg cursor-pointer"
                onClick={handleDownload}
                download href="./Tantrafiesta_Official.apk">
                {
                    started ? <> <span>Download started...</span> <Check /></> :
                        <>
                            <span className='hidden md:block'>Get the App</span> <Download />
                        </>
                }
            </a>

        </div>
    );
};

import styled from "styled-components";

const Tooltip = () => {
    return (
        <StyledWrapper>
            <div className="tooltip-container">
                <span className="tooltip">Discover</span>
                <span className="text">
                    <div className="borde-back">
                        <div className="icon">
                            <Download />
                        </div>
                    </div>
                </span>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  /* This is an example, feel free to delete this code */
.tooltip-container {
  position: relative;
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  );
  cursor: pointer;
  transition: all 0.2s;
  font-size: 17px;
  /*padding: 0.7em 1.8em;*/
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 25px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.tooltip-container .borde-back {
  width: 60px;
  height: 60px;
  background-color: #232428;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: none;
}

.tooltip-container .icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background-color: #5865f2;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  top: -2;
  left: -45px; /* Altere a posição inicial para a esquerda, fora da tela */
  transform: translateX(
    -32%
  ); /* Usando translateX para controlar a transição da esquerda para a direita */
  width: 160px;
  height: 52px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.6s;
  border-radius: 50px;
  background-color: #5865f2;
  background-image: linear-gradient(
    -90deg,
    #ff73fa 0%,
    #5865f2 75%,
    #5865f2 100%
  );
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 16px;
  color: #fff;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}

.tooltip::before {
  position: absolute;
  content: "";
  height: 0.6em;
  width: 0.6em;
  right: -0.2em; /* Mude para a direita */
  top: 50%; /* Altere o topo para o meio da tooltip */
  transform: translateY(-50%) rotate(45deg); /* Use translateY para centralizar verticalmente */
  background: var(--background);
}

.tooltip-container:hover .tooltip {
  left: 100%; /* Altere para a posição desejada (a direita) */
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  z-index: -10;
}
.tooltip-container:hover {
  transform: translateX(-50px);
  transition: 0.5s linear;
}

`;

export default DownloadApp;
