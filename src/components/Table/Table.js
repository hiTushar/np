import { v4 as uuidv4 } from 'uuid';
import './Table.css';

export default function Table(props) {
    const { data } = props;
    const tableHeaders = Object.keys(data[0]);
    return (
        <div className="npav-table">
            <table>
                <thead>
                    <tr>
                        {
                            tableHeaders.map(header => <th key={header}>{header}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(dataObj => {
                            return (
                                <tr>
                                    {tableHeaders.map(header => <td key={uuidv4()}>{dataObj[header]}</td>)}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}