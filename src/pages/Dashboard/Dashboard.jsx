import './Dashboard.css';
import { useSelector } from "react-redux";
import { ReportData } from './ReportData';
import { useEffect, useRef, useState } from 'react';
import CarouselSlide from './CarouselSlide';
import Timeline from './Timeline';


export default function Dashboard({ props }) {
    const upgradeStatus = useSelector(state => state.commonReducer['upgrade_done']);
    const slideClassArray = useRef(null);
    const carouselRef = useRef(null);
    const [allReportPanels, setAllReportPanels] = useState([...ReportData]);

    const quickPass = useRef(false); // when a slide is selected, the respective slide comes up in a one by one manner; but when a new timeline section is selected we jump directly to the first slide of that section

    useEffect(() => {
        let allChildNodes = carouselRef.current.children;
        Array.from(allChildNodes).map((node, index) => {
            switch (index) {
                case 0:
                    node.classList.add('slide__one');
                    break;
                case 1:
                    node.classList.add('slide__two');
                    break;
                case 2:
                    node.classList.add('slide__three');
                    break;
                case 3:
                    node.classList.add('slide__four');
                    break;
                default:
                    node.classList.add('slide__after');
                    break;
            }
        })

        slideClassArray.current = Array.from(allChildNodes).map(node => node.classList.value);
    }, [])

    const selectSlide = (timestampSelected) => {
        let selectedReportIndex = allReportPanels.findIndex(report => report.timestamp === timestampSelected);

        if (selectedReportIndex > -1) {
            let allChildNodes = carouselRef.current.children;
            let currentReportIndex = Array.from(carouselRef.current.children).findIndex(node => node.classList.contains('slide__one'));

            if (currentReportIndex > selectedReportIndex) { // moving slides backwards
                let steps = Math.abs(currentReportIndex - selectedReportIndex);
                for (let i = 0; i < steps; i++) {
                    setTimeout(() => {
                        slideClassArray.current.push('slide__after');
                        if (slideClassArray.current[0] === 'slide__ahead') // so as to not lose the slide specific positioning classes - slide__one, ...
                            slideClassArray.current.shift();
                        applyClassArrayToSlides(slideClassArray.current, allChildNodes);
                        quickPass.current = false;
                    }, quickPass.current ? 400 : 400 * i)
                }
            }
            else if (currentReportIndex < selectedReportIndex) { // moving slides forward
                let steps = Math.abs(currentReportIndex - selectedReportIndex);
                for (let i = 0; i < steps; i++) {
                    setTimeout(() => {
                        slideClassArray.current.unshift('slide__ahead');
                        if (slideClassArray.current[slideClassArray.current.length - 1] === 'slide__after') // so as to not lose the slide specific positioning classes - slide__one, ...
                            slideClassArray.current.pop();
                        applyClassArrayToSlides(slideClassArray.current, allChildNodes);
                        quickPass.current = false;
                    }, quickPass.current ? 400 : 400 * i)
                }
            }
        }
    }

    const applyClassArrayToSlides = (slideClassArray, allChildNodes) => {
        Array.from(allChildNodes).forEach((node, index) => {
            node.classList.value = '';
            node.classList.value = slideClassArray[index];
        })
    }

    return (
        <div className="dashboard">
            <div className='dashboard__carousel' ref={carouselRef}>
                {
                    /* separate component for better debugging */
                    allReportPanels.map((dataPt, index) => (
                        <CarouselSlide key={new Date(dataPt.timestamp)} upgradeStatus={upgradeStatus} dataPt={dataPt} slideIndex={index} />
                    ))
                }
            </div>
            <div className="dashboard__timeline">
                <Timeline data={allReportPanels} selectSlide={(timestamp) => selectSlide(timestamp)} quickPass={quickPass} />
            </div>
        </div>
    )
}
