import { useRef } from "react";
import Input from "../../../components/Input/Input";
import Radio from "../../../components/Radio/Radio";
import { useDispatch } from "react-redux";
import formStepChange from "../../../redux/actions/formActions";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Button from "../../../components/Button/Button";

export default function Step2() {
    const nameRef = useRef(null);
    const dealerRef = useRef(null);
    const locationRef = useRef(null);

    const dispatch = useDispatch();

    const nextPage = () => {
        dispatch(formStepChange({
            currentStep: 3,
            allData: {}
        }));
    }

    const selectLocation = (data) => {
        console.log({ data });
    }

    return (
        <div className="user-formpanel__step2">
            <p>Contact Person</p>
            <div className="user-formpanel__step2-name">
                <p>Enter name<span>*</span></p>
                <Input
                    ref={nameRef}
                    placeholder={'Enter username here'}
                    maxLength={50}
                    type={'text'}
                    onChange={() => {}}
                />
            </div>
            <div className="user-formpanel__step2-type">
                <p>Select user type</p>
                <Radio
                    options={[
                        {
                            name: 'Home use',
                            value: 'home'
                        },
                        {
                            name: 'Office use',
                            value: 'office'
                        }
                    ]}
                    defaultValue={{
                        name: 'Home use',
                        value: 'home'
                    }}
                    customStyle={{
                        container: {
                            display: 'flex',
                            gap: '3px'
                        },
                        option: {
                            flex: 1
                        }
                    }}
                    onChange={() => {}}
                />
            </div>
            <div className="user-formpanel__step2-address">
                <div>
                    <p>Country</p>
                    <Dropdown 
                        options={[]}
                        placeholder={'Choose country'}
                        onChange={selectLocation}
                    />
                </div>
                <div>
                    <p>State</p>
                    <Dropdown 
                        options={[]}
                        placeholder={'Choose state'}
                        onChange={selectLocation}
                    />
                </div>
                <div>
                    <p>City</p>
                    <Dropdown 
                        options={[]}
                        placeholder={'Choose city'}
                        onChange={selectLocation}
                    />
                </div>
            </div>
            <div className="user-formpanel_step2-dealer">
                <div className="user-formpanel__step2-dealer-detail">
                    <p>Dealer Code</p>
                    <Input
                        ref={dealerRef}
                        placeholder={'Enter dealer code'}
                        maxLength={50}
                        type={'text'}
                        onChange={() => {}}
                    />
                </div>
                <div className="user-formpanel__step2-dealer-detail">
                    <p>Dealer Contact</p>
                    <Input
                        ref={dealerRef}
                        placeholder={'Enter number here'}
                        maxLength={50}
                        type={'text'}
                        onChange={() => {}}
                    />
                </div>
            </div>
            <div className='user-formpanel__step2-footer'>
                <Button text={'NEXT'} onClick={nextPage} type={'secondary'} />
            </div>
        </div>
    )
}
