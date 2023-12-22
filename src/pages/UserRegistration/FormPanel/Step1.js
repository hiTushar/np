import { useRef } from 'react';
import Input from '../../../components/Input/Input';
import './FormPanel.css';
import copy from '../../../assets/copy.svg';
import Radio from '../../../components/Radio/Radio';

export default function Step1() {
    // const [key, setKey] = useState('');
    const keyRef = useRef(null);
    // useEffect(() => {
    //     if(key.length === 1) {
    //         setKey(`${key} - `)
    //     }
    // }, [key])

    const onChange = (val) => {
        console.log(val);
    }

    return (
        <div className="user-formpanel__step1">
            <p>Dear customer!</p>

            <div className='user-formpanel__step1-key'>
                <p>Please enter key number provided inside the box</p>
                <Input 
                    ref={keyRef}
                    // value={key}
                    placeholder={'X - XXXXXXXXXX'}
                    maxLength={11}
                    type={'text'}
                    onChange={onChange}
                />
            </div>
            <div className='user-formpanel__step1-type'>
                <p>Select user type</p>
                <Radio 
                    options={[
                        {
                            name: 'Single User',
                            value: 'single'
                        },
                        {
                            name: 'Multiple PCs with corporate ID',
                            value: 'multi'
                        }
                    ]}
                    defaultValue={{
                        name: 'Single User',
                        value: 'single'
                    }}
                    customStyling={{}}
                    onChange={onChange}
                />
            </div>
            <div className='user-formpanel__step1-code'>
                <p>Your Installation Code</p>
                <Input 
                    value={'NN-55697-45887-33441-42095-07498'}
                    disabled={true}
                    customStyle={{ 
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <img src={copy} alt={'copy icon'} />
                </Input>
                <p>One key can be used on one system only</p>
            </div>
            <div className='user-formpanel__step1-footer'>
                <button>NEXT</button>
            </div>
        </div>
    )
}
