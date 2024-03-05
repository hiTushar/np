import { useRef, useState } from 'react';
import copy from 'copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../../../components/Input/Input';
import './FormPanel.css';
import copyIcon from '../../../assets/copy.svg';
import Radio from '../../../components/Radio/Radio';
import { useDispatch } from 'react-redux';
import formStepChange from '../../../redux/actions/formActions';
import Button from '../../../components/Button/Button';

const KEY_SEPERATOR = ' - ';

const USER_TYPE_DATA = [
    {
        label: 'Single User',
        value: 'single'
    },
    {
        label: 'Multiple PCs with corporate ID',
        value: 'multi'
    }
]

function Step1() {
    const [key, setKey] = useState('');
    const keyRef = useRef(null);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     if(key.length === 1) {
    //         setKey(`${key} - `)
    //     }
    // }, [key])
    const [userType, setUserType] = useState(USER_TYPE_DATA[0])

    const nextPage = () => {
        dispatch(formStepChange({
            currentStep: 2,
            allData: {}
        }));
    }

    const onKeyChange = (keyField) => {
        let keyVal = keyField.target.value;
        if(keyVal.length > key.length) {
            if(!keyVal.includes('-') && keyVal.length >= 2) {
                let temp = keyVal.split('');
                temp.splice(1, 0, KEY_SEPERATOR);
                keyVal = temp.join('');
            }
        }
        else {
            if(keyVal.length === (1 + KEY_SEPERATOR.length)) { // 
                keyVal = keyVal.slice(0, 1);
            }
        }
        setKey(keyVal);
    }

    const onTypeChange = (val) => {
        setUserType(val);
    }

    const copyCode = (text) => {
        copy(text);
        toast.success('Copied!');
    }

    return (
        <>
            <div className="user-formpanel__step1">
                <div className='user-formpanel__step1-body'>
                    <p>Dear customer!</p>

                    <div className='user-formpanel__step1-key'>
                        <p>Please enter key number provided inside the box</p>
                        <Input 
                            ref={keyRef}
                            value={key}
                            placeholder={'X - XXXXXXXXXX'}
                            maxLength={14}
                            type={'text'}
                            onChange={onKeyChange}
                        />
                    </div>
                    <div className='user-formpanel__step1-type'>
                        <p>Select user type</p>
                        <Radio 
                            options={USER_TYPE_DATA}
                            selected={userType}
                            onChange={onTypeChange}
                        />
                    </div>
                    <div className='user-formpanel__step1-code'>
                        <p>Your Installation Code</p>
                        <Input 
                            value={'NN-55697-45887-33441-42095-07498'}
                            readOnly={true}
                            customStyle={{ 
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <img src={copyIcon} className={'user-formpanel__step1-code-copy'} alt={'copy icon'} onClick={() => copyCode('NN-55697-45887-33441-42095-07498')} />
                        </Input>
                        <p>One key can be used on one system only</p>
                    </div>
                </div>
                <div className='user-formpanel__step1-footer'>
                    <Button text={'NEXT'} onClick={nextPage} type={'secondary'} />
                </div>
            </div>
            <ToastContainer 
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default Step1;
