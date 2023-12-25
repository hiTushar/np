import { useRef } from 'react';
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

export default function Step1() {
    // const [key, setKey] = useState('');
    const keyRef = useRef(null);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     if(key.length === 1) {
    //         setKey(`${key} - `)
    //     }
    // }, [key])

    const nextPage = () => {
        dispatch(formStepChange({
            currentStep: 2,
            allData: {}
        }));
    }

    const onChange = (val) => {
        console.log(val);
    }

    const copyCode = (text) => {
        copy(text);
        toast.success('Copied!');
    }

    return (
        <div className="user-formpanel__step1">
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
                    customStyle={{}}
                    onChange={onChange}
                />
            </div>
            <div className='user-formpanel__step1-code'>
                <p>Your Installation Code</p>
                <Input 
                    value={'NN-55697-45887-33441-42095-07498'}
                    readOnly={true}
                    customStyle={{ 
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <div>
                        <img src={copyIcon} className={'user-formpanel__step1-code-copy'} alt={'copy icon'} onClick={() => copyCode('NN-55697-45887-33441-42095-07498')} />
                    </div>
                </Input>
                <p>One key can be used on one system only</p>
            </div>
            <div className='user-formpanel__step1-footer'>
                <Button text={'NEXT'} onClick={nextPage} type={'secondary'} />
            </div>
        </div>
    )
}
