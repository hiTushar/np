import React from 'react'
import "./protection.scss"
import ProtectionFlowLayout from '../../components/Layout/ProtectionFlowLayout/ProtectionFlowLayout';
import CloudProtection from '../../components/ProtectionFlowComponents/CloudProtection/CloudProtection';
import { useSelector } from 'react-redux';

const Protection = () => {
  const { selected, enabled } = useSelector(state => state.protectionSelReducer.allData);

  const protectionFlowContentComponentsArr = [
    CloudProtection,
    CloudProtection,
    CloudProtection,
    CloudProtection,
    CloudProtection,
    CloudProtection,
    CloudProtection,
    CloudProtection,
    CloudProtection,
    CloudProtection
  ]

  return (
    <ProtectionFlowLayout>
      {protectionFlowContentComponentsArr.map(
        (Component, idx) => <>
          {idx === selected ? <Component key={idx} selected={enabled[selected]}  enabledIdx={idx}/> : ""}</>
      )}
    </ProtectionFlowLayout>
  )
}

export default Protection