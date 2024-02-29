/**
 * @param { Object } props
 * @param { Array } props.data [{columnName: val, columnName: val}, ..]
 * @param { Boolean } props.rowSelect highlight effect if the table has any user action on itæ
 * @param { Array } props.elementsForAllRows 
 *                      [
                            {
                                title: column name,
                                element: <Element />,
                                columnPosition: column position starting from 1
                            }, ...
                        ],
                    additional columns that have identical row elements for all rows, primarily for row related actions
 */

import { v4 as uuidv4 } from 'uuid';
import './Table.css';

/* TODO: convert to all div for flexible width sizing */
export default function Table(props) {
    const { data, rowHighlight, elementsForAllRows, colSpanArray } = props;
    let tableHeaders = Object.keys(data[0]);

    // if(rowActionColumns && rowActionColumns.length) {
    //     let rowActionHeaders = rowActionColumns.map(actionCol => actionCol.title);
    //     tableHeaders = tableHeaders.concat(rowActionHeaders);
    // } 
    let tableRows = [...data];
    if(elementsForAllRows) {
        /* Add the additional elements to all rows */
        let additionalData = elementsForAllRows.reduce((final, element) => {
            return {
                ...final,
                [element.title]: element.element
            }
        }, {})
        tableRows = tableRows.map(row => ({
            ...row,
            ...additionalData
        }))

        /* Add the additional elements' header title at its correct position */
        elementsForAllRows.forEach(element => {
            tableHeaders.splice(element.columnPosition, 0, element.title);
        })
    }

    return (
        <div className="npav-table">
            <table>
                <thead>
                    <tr>
                        {
                            tableHeaders.map((header, index) => <th colSpan={colSpanArray ? colSpanArray[index] : 1} key={header}>{header}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        tableRows.map(dataObj => {
                            return (
                                <tr className={rowHighlight ? 'row-highlight' : ''}>
                                    {tableHeaders.map((header, index) => <td colSpan={colSpanArray ? colSpanArray[index] : 1} key={uuidv4()}>{dataObj[header]}</td>)}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
