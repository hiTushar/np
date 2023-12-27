import './ProgressBar.css';

/**
 * 
 * @param { Object } props
 * @param { number } props.length - amount of progress made in percentage 
 * @returns 
 */
export default function Progress(props) {
    const { length } = props;
    return (
        <div className="npav-progress">
            <span style={{ width: `${length}%` }}></span>
        </div>
    )    
}
