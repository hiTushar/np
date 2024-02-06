import { useEffect, useRef } from 'react';
import './Card.css';
import pattern from './card-pattern-2.png';

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
        <div className="npav-card">
            <img className="card__pattern" src={pattern} alt={'pattern'} />
            <div className="card__body" style={{ ...customStyle }} ref={cardRef}>
                {children}
            </div>
        </div>
    )
}