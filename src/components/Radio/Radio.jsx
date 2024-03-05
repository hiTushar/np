/**
 * 2 ways of providing options has been provided (kinda like Antd radio component)
 * - pass them as props (ease of use, when all you need is text and a select circle next to it)
 * option prop ex. 
 * [
 *  { label: 'asdf', value: 'asdf' },
 *  { label: 'asdf', value: 'asdf' }, . ...
 * ]
 * - pass them as child elements (this allows custom styling and additional elements to be added along side the text)
 * 
 * Here, you can also pass customStyle prop with separate layout styling for container and the option (when options are passed as props)
 * 
 * 
 * NOTE: no direct access to change to radio button select circle itself
 * 
 * @param { Array } props.options
 * @param { String } props.selected unique value to identify the option
 * @param { Object } props.customStyle { container: {}, option: {} } // option obj applicable for the case when options are given as props
 * @param { Function } props.onChange function to set the selected value in the parent component
 * @param { children } props.children when options are passed as children with their custom styling (for the text part). 
 *                                    Note: a 'data-value' prop is needed for every child option to denote a value string for the option
 */

import './Radio.css';
import radio_active from '../../assets/radio_active.svg'; // TODO: replace these with custom svg circle
import radio_inactive from '../../assets/radio_inactive.svg';

const Option = (props) => {
    const { data, selected, onChange, style, children } = props;
    return (
        <div className='npav-radio__option' onClick={() => onChange(data)} style={style ? { ...style } : {}}>
            {
                selected ? (
                    <img src={radio_active} alt={'active option'}  />
                ) : (
                    <img src={radio_inactive} alt={'inactive option'} />
                )
            }
            {
                children ? 
                    children : (
                        <div>
                            {data.label}
                        </div>
                    )
            }
        </div>
    )
}

function Radio(props) {
    const { options, selected, customStyle, onChange, children } = props;
    const { container, option } = customStyle ? customStyle : {};

    return (
        <div className='npav-radio' style={container ? { ...container } : {}}>
            {
                children ? Array.from(children).map(optionElement => (
                        <Option
                            selected={optionElement.props['data-value'] === selected}
                            data={optionElement.props['data-value']}
                            onChange={optionElement.props.onChange}
                            key={optionElement.props['data-value']}
                        >
                            {optionElement}
                        </Option>
                    )) : (
                    options.map(optionData => (
                        <Option
                            selected={optionData.value === selected.value}
                            data={optionData}
                            onChange={onChange}
                            style={option ? { ...option } : {}}
                            key={optionData.value}
                        />))
                )
            }
        </div>
    )
}

export default Radio;
