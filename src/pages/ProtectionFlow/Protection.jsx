import React from 'react'
import "./protection.scss"
import ProtectionFlowLayout from '../../components/Layout/ProtectionFlowLayout/ProtectionFlowLayout';
import CloudProtection from '../../components/ProtectionFlowComponents/CloudProtection/CloudProtection';
import { useSelector } from 'react-redux';
import DataProtection from '../../components/ProtectionFlowComponents/CloudProtection/DataProtection';

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
    DataProtection,
  ]

  return (
    <ProtectionFlowLayout>
      {protectionFlowContentComponentsArr.map(
        (Component, idx) => {
          let propsObj = { selected: enabled[selected], enabledIdx: idx };
          if (idx === protectionFlowContentComponentsArr.length - 1) {
            propsObj["width"] = "12%"
          }

          return (<>
            {idx === selected ? <Component key={idx} {...propsObj} /> : ""}</>)
        }
      )}
    </ProtectionFlowLayout>
  )
}

export default Protection