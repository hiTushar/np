import { useEffect } from 'react';
import './FoldedPanel.css';

export default function FoldedPanel({ SidePanelComponent, MainPanelComponent }) {

    // const getVerticalShift = (x0, x1, x2, x3, endX, endY) => {
    //     let coordArr = [];

    //     for(let i = 0; i < endX; i++) {
    //         let y = Math.pow((1 - i), 3) * x0 + Math.pow((1 - i), 2) * 3 * i * x1 + (1 - i) * 3 * Math.pow(i, 2) * x2 + Math.pow(i, 3) * x3;
    //         coordArr.push([i, y]);
    //     }

    //     console.debug(coordArr);
    // }

    const addFold = () => {
        /* to keep the slope of the fold fixed, irrespective of the size of the panel, as the depth of fold has been fixed by 10px height difference of main panel */
        const sidePanelElement = document.querySelector('.folded-panel__side');
        const mainPanelElement = document.querySelector('.folded-panel__main');
        
        const { height: heightSidePanel, width: widthSidePanel } = sidePanelElement.getBoundingClientRect();
        const { height: heightMainPanel } = mainPanelElement.getBoundingClientRect();

        let verticalGap = (heightSidePanel - heightMainPanel) / 2;
        let foldSlopeLength = 3.5 * verticalGap;
        let foldSlopeStartPt = widthSidePanel - foldSlopeLength; 

        // TODO: make all hardcoded values a function of the height diff/depth value (10px)
        sidePanelElement.style.clipPath = `
        polygon(0% 0%, ${foldSlopeStartPt}px 0%, ${foldSlopeStartPt + 2}px 0.5px, ${foldSlopeStartPt + 4}px 1px, ${foldSlopeStartPt + 6}px 1.5px, calc(100% - 4px) ${verticalGap - 0.5}px, calc(100% - 2px) ${verticalGap - 0.1}px, 100% ${verticalGap}px, 
        100% ${verticalGap + heightMainPanel}px, calc(100% - 2px) ${verticalGap  + heightMainPanel + 0.1}px, calc(100% - 4px) ${verticalGap + heightMainPanel + 0.5}px, ${foldSlopeStartPt + 6}px ${verticalGap + heightMainPanel + verticalGap - 1.5}px, ${foldSlopeStartPt + 4}px ${verticalGap + heightMainPanel + verticalGap - 1}px, ${foldSlopeStartPt + 2}px ${verticalGap + heightMainPanel + verticalGap - 0.5}px, ${foldSlopeStartPt}px 100%, 0% 100%)`;
        // sidePanelElement.style.clipPath = `polygon(0% 0%, ${getVerticalShift(0, 0.34, 1, 0.66, 5, foldSlopeLength)}, 100% ${verticalGap + heightMainPanel}px, ${foldSlopeStartPt}px 100%, 0% 100%)`;
    }

    useEffect(() => {
        addFold();
    })

    return (
        <div className="folded-panel">
            <div className="folded-panel__side">
                {/* <svg  xmlns="http://www.w3.org/2000/svg" style={{position:'absolute'}}>
                    <defs>
                        <clipPath id="mask"  clipPathUnits="objectBoundingBox">
                            <path d="M0,0 C0.387,0.008,0.61,0.987,1,1" style={{ fill: 'none' }}/>
                        </clipPath>
                    </defs>
                </svg> */}
                <SidePanelComponent />
            </div>
            <div className="folded-panel__main">
                <MainPanelComponent />
            </div>
        </div>
    )
}
