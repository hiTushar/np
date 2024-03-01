import { useRef, useState } from "react";
import Input from "../../../components/Input/Input";
import Radio from "../../../components/Radio/Radio";
import { useDispatch } from "react-redux";
import formStepChange from "../../../redux/actions/formActions";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Button from "../../../components/Button/Button";
import { useQuery } from "react-query";

// TODO: Move API calls to separate files
const fetchCoutries = async () => {
    const myHeaders = new Headers();
    myHeaders.append("X-CSCAPI-KEY", "Z1N0TDAzYVdRM1hGckRZRU42SGI1S3A4MWZ5OW1VOFZROTk4Yk0zRA==");
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: "GET",
        headers: myHeaders
    };

    let res = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions);
    res = await res.json();
    return res;
}

const fetchStates = async (country) => {
    const myHeaders = new Headers();
    myHeaders.append("X-CSCAPI-KEY", "Z1N0TDAzYVdRM1hGckRZRU42SGI1S3A4MWZ5OW1VOFZROTk4Yk0zRA==");
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: "GET",
        headers: myHeaders
    };

    let res = await fetch(`https://api.countrystatecity.in/v1/countries/${country.value}/states`, requestOptions);
    res = await res.json();
    return res;
}

const fetchCities = async (country, state) => {
    const myHeaders = new Headers();
    myHeaders.append("X-CSCAPI-KEY", "Z1N0TDAzYVdRM1hGckRZRU42SGI1S3A4MWZ5OW1VOFZROTk4Yk0zRA==");
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: "GET",
        headers: myHeaders
    };

    let res = await fetch(`https://api.countrystatecity.in/v1/countries/${country.value}/states/${state.value}/cities`, requestOptions);
    res = await res.json();
    return res;
}

const USAGE_TYPE_DATA = [
    {
        label: 'Home use',
        value: 'home'
    },
    {
        label: 'Office use',
        value: 'office'
    }
]

export default function Step2() {
    const nameRef = useRef(null);
    const dealerRef = useRef(null);

    const dispatch = useDispatch();

    const [location, setLocation] = useState({
        country: null,
        state: null,
        city: null
    })

    const [usageType, setUsageType] = useState(USAGE_TYPE_DATA[0])

    const { data: countryData, status: countryStatus } = useQuery('country', fetchCoutries);
    const { data: stateData, status: stateStatus } = useQuery(['state', location], () => fetchStates(location.country));
    const { data: cityData, status: cityStatus } = useQuery(['city', location], () => fetchCities(location.country, location.state));

    const nextPage = () => {
        dispatch(formStepChange({
            currentStep: 3,
            allData: {}
        }));
    }

    const prevPage = () => {
        dispatch(formStepChange({
            currentStep: 1,
            allData: {}
        }))
    }

    const selectLocation = (locationType, optionSelected) => {
        setLocation(prev => {
            /* resetting to null when a previous parent selection is changed */
            if(locationType === 'country') {
                return {
                    country: optionSelected,
                    state: null,
                    city: null
                }
            }
            else if(locationType === 'state') {
                return {
                    country: prev.country,
                    state: optionSelected,
                    city: null
                }
            }
            else if(locationType === 'city') {
                return {
                    country: prev.country,
                    state: prev.state,
                    city: optionSelected
                }
            }

        })
    }

    const onTypeChange = (val) => setUsageType(val);

    return (
        <div className="user-formpanel__step2">
            <div className="user-formpanel__step2-body">
                <p>Contact Person</p>
                <div className="user-formpanel__step2-name">
                    <p>Enter name<span>*</span></p>
                    <Input
                        ref={nameRef}
                        placeholder={'Enter username here'}
                        maxLength={50}
                        type={'text'}
                        onChange={() => { }}
                    />
                </div>
                <div className="user-formpanel__step2-type">
                    <p>Select usage type</p>
                    <Radio
                        options={USAGE_TYPE_DATA}
                        selected={usageType}
                        customStyle={{
                            container: {
                                display: 'flex',
                                gap: '3px'
                            },
                            option: {
                                flex: 1
                            }
                        }}
                        onChange={onTypeChange}
                    />
                </div>
                <div className="user-formpanel__step2-address">
                    <div>
                        <p>Country</p>
                        <Dropdown
                            loading={countryStatus === 'loading'}
                            value={location.country}
                            options={
                                countryStatus === 'loading' 
                                    ? [] 
                                    : countryData.map(country => ({ ...country, value: country.iso2 }))
                            }
                            placeholder={'Choose country'}
                            selectOption={(optionSelected) => selectLocation('country', optionSelected)}
                        />
                    </div>
                    <div>
                        <p>State</p>
                        <Dropdown
                            loading={stateStatus === 'loading'}
                            value={location.state}
                            options={
                                stateStatus !== 'success'
                                    ? []
                                    : stateData.map(state => ({ ...state, value: state.iso2 }))
                            }
                            placeholder={'Choose state'}
                            selectOption={(optionSelected) => selectLocation('state', optionSelected)}
                        />
                    </div>
                    <div>
                        <p>City</p>
                        <Dropdown
                            loading={cityStatus === 'loading'}
                            value={location.city}
                            options={
                                cityStatus !== 'success' 
                                    ? [] 
                                    : cityData.map(city => ({ ...city, value: city.name }))
                            }
                            placeholder={'Choose city'}
                            selectOption={(optionSelected) => selectLocation('city', optionSelected)}
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
                            onChange={() => { }}
                        />
                    </div>
                    <div className="user-formpanel__step2-dealer-detail">
                        <p>Dealer Contact</p>
                        <Input
                            ref={dealerRef}
                            placeholder={'Enter number here'}
                            maxLength={50}
                            type={'text'}
                            onChange={() => { }}
                        />
                    </div>
                </div>
            </div>
            <div className='user-formpanel__step2-footer'>
                <Button text={'BACK'} onClick={prevPage} type={'secondary'} />
                <Button text={'NEXT'} onClick={nextPage} type={'secondary'} />
            </div>
        </div>
    )
}
