import { useEffect, useRef } from 'react';
import './Card.css';

/**
 * 
 * @param {Object} props 
 * @param {JSX} props.children 
 * @param {Object} props.customStyle 
 * @returns 
 * 
 */

export default function Card(props) {
    const { children, customStyle } = props;
    const cardRef = useRef(null)

    const cutBottomCorner = (card) => {
        /* function to add consistent angled cut at the bottom corner proportional to the current card dimension */
        // TODO: needs to corrected for height > width
        
        const { width, height } = card.getBoundingClientRect();
        let verticalCut = height * .15;
        let horizontalCut = verticalCut;
        let straightWidth = ((width - horizontalCut) / width) * 100;

        card.style.clipPath = `polygon(100% 0, 100% 85%, ${straightWidth}% 100%, 0 100%, 0 0)`;
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
