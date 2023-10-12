import { Meta } from '@storybook/react';
import React, { useState } from 'react';

import { CountrySelectorStyleProps } from '../components/CountrySelector/CountrySelector';
import { PhoneInput } from '../components/PhoneInput/PhoneInput';
import { defaultCountries } from '../data/countryData';
import {
  getCountry,
  guessCountryByPartialPhoneNumber,
  parseCountry,
  removeDialCode,
} from '../index';
import { MuiPhone } from './UiLibsExample/components/MuiPhone';

export default {
  title: 'Dev',
  includeStories: [], // Comment this line to show stories
} as Meta;

const Title: React.FC<{
  children: string;
  marginBottom?: React.CSSProperties['marginBottom'];
}> = ({ children, marginBottom }) => {
  return (
    <div
      style={{
        color: '#111',
        fontSize: '13px',
        marginBottom: marginBottom ?? '8px',
      }}
    >
      {children}
    </div>
  );
};

const PhoneWrapper: React.FC = ({ children }) => {
  return <div style={{ marginBottom: '20px' }}>{children}</div>;
};

export const Demo = () => {
  const [phone, setPhone] = useState('+1');
  const [phone2, setPhone2] = useState('+372');
  const [muiPhone, setMuiPhone] = useState('+380');

  const countrySelectorStyleProps: CountrySelectorStyleProps = {
    dropdownStyleProps: {
      style: {
        // to avoid overlap with mui label
        zIndex: 2,
      },
    },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Title>Default</Title>
      <PhoneWrapper>
        <PhoneInput
          defaultCountry="us"
          value={phone}
          onChange={setPhone}
          countrySelectorStyleProps={countrySelectorStyleProps}
        />
      </PhoneWrapper>
      <Title>Forced dial code + filtered countries</Title>
      <PhoneWrapper>
        <PhoneInput
          defaultCountry="ee"
          value={phone2}
          onChange={setPhone2}
          forceDialCode
          countries={defaultCountries.filter((c) =>
            ['lt', 'lv', 'ee'].includes(parseCountry(c).iso2),
          )}
          countrySelectorStyleProps={countrySelectorStyleProps}
        />
      </PhoneWrapper>
      <Title marginBottom="20px">Material UI + validation</Title>
      <PhoneWrapper>
        <MuiPhone value={muiPhone} onChange={setMuiPhone} />
      </PhoneWrapper>
    </div>
  );
};

export const RerenderTest = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [phone, setPhone] = useState('+1234567');

  if (!isVisible) {
    return <button onClick={() => setIsVisible(true)}>Show</button>;
  }

  return (
    <div>
      <PhoneInput
        value={phone}
        onChange={setPhone}
        defaultCountry="nl"
        placeholder="Test Placeholder"
        inputProps={{ autoFocus: true }}
      />
      <button onClick={() => setIsVisible(false)}>Hide</button>
    </div>
  );
};

export const ControlledInputTest = () => {
  const [phone, setPhone] = useState('+1 ');

  return <PhoneInput value={phone} onChange={setPhone} defaultCountry="ca" />;
};

export const TwoInputsTest = () => {
  const [phone, setPhone] = useState('+1 ');

  return (
    <div>
      <p style={{ color: 'black' }}>Phone: {phone}</p>
      <PhoneInput
        value={phone}
        onChange={setPhone}
        defaultCountry="us"
        inputProps={{ id: 'top' }}
      />

      <PhoneInput
        value={phone}
        onChange={setPhone}
        defaultCountry="us"
        inputProps={{ id: 'bottom' }}
      />
    </div>
  );
};

export const WrongDefaultCountryCode = () => {
  const [phone, setPhone] = useState('');

  return (
    <PhoneInput
      value={phone}
      onChange={setPhone}
      defaultCountry="not-valid-code"
    />
  );
};

export const WithoutDialCode = () => {
  const initialPhone = '+14045555555';

  const [country, setCountry] = useState(() => {
    // guessing country of inital phone
    return guessCountryByPartialPhoneNumber({ phone: initialPhone }).country;
  });

  const [phone, setPhone] = useState(
    // removing dial code for inital phone
    // '+14045555555' -> '4045555555'
    removeDialCode({
      phone: initialPhone,
      dialCode: country?.dialCode || '',
    }),
  );

  // constructing E164 format from country and phone value
  const e164Phone = country
    ? `+${country.dialCode}${phone.replace(/\D/g, '')}`
    : '';

  return (
    <div style={{ color: 'black', fontSize: '13px' }}>
      <span>E164 phone: {e164Phone}</span>
      <PhoneInput
        value={phone}
        onChange={(phone, country) => {
          setPhone(phone);
          // save country to get ability to construct E164
          setCountry(getCountry({ field: 'iso2', value: country }));
        }}
        // passing country as "defaultCountry"
        defaultCountry={country?.iso2}
        disableDialCodeAndPrefix
      />
    </div>
  );
};
