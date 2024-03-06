import { useEffect, useRef } from 'react';
import './Card.css';

/**
 * 
 * @param {Object} props 
 * @param {JSX} props.children 
 * @param {Object} props.customStyle 
 * @param {Number} props.cutLength (in percent) to determine the length of the corner cut from the initial corner  
 * @returns 
 * 
 */

export default function Card(props) {
    const { children, customStyle, cutLength } = props;
    const cardRef = useRef(null)

    const cutBottomCorner = (card) => {
        /* function to add consistent angled cut at the bottom corner proportional to the current card dimension */
        let cut = cutLength ? cutLength : 15; 
        const { width, height } = card.getBoundingClientRect();
        const shorterSide = Math.min(width, height);
        let verticalCut = shorterSide * cut / 100;
        let horizontalCut = verticalCut;
        let verticalStraight = ((height - verticalCut) / height) * 100;
        let horizontalStraight = ((width - horizontalCut) / width) * 100;

        card.style.clipPath = `polygon(100% 0, 100% ${verticalStraight}%, ${horizontalStraight}% 100%, 0 100%, 0 0)`;
    }

    useEffect(() => {
        cutBottomCorner(cardRef.current);
    }, [])

    return (
        <div className="npav-card"  ref={cardRef}>
            <div className="card__body" style={{ ...customStyle }}>
                {children}
            </div>
        </div>
    )
}
