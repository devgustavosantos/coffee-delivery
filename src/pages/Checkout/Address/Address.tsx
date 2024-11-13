import { useStateMachine } from 'little-state-machine';
import { Controller } from 'react-hook-form';

import { useFormContext } from '@/contexts';
import { updateAction } from '@/utils/updateAction';

import * as CS from '../Checkout.styles';
import { addressInfos, postalCode, states } from './Address.data';
import { ADDRESS_INFOS } from './Address.infos';
import * as S from './Address.styles';

const { TITLE, DESCRIPTION, OPTIONAL } = ADDRESS_INFOS;

export function Address() {
  const { register, control, errors } = useFormContext();

  const { state } = useStateMachine({ updateAction });

  return (
    <S.AddressContainer>
      <CS.SectionTop>
        <S.MapPinLineCustom />
        <CS.SectionTitle>{TITLE}</CS.SectionTitle>
        <CS.SectionDescription>{DESCRIPTION}</CS.SectionDescription>
      </CS.SectionTop>
      <S.AddressInputs>
        <S.InputWrapper>
          <S.InputContainer>
            <Controller
              name="postalCode"
              control={control}
              render={({ field }) => (
                <S.CustomIMaskInput
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  required
                  mask={postalCode.mask}
                  placeholder={postalCode.placeholder}
                  {...(state.data && { defaultValue: state.data.postalCode })}
                />
              )}
            />
          </S.InputContainer>
          {errors.postalCode && (
            <S.CustomError>{errors.postalCode.message}</S.CustomError>
          )}
        </S.InputWrapper>
        {addressInfos.map(({ name, placeholder, type, isOptional }) => (
          <S.InputWrapper>
            <S.InputContainer key={name}>
              <S.Input
                {...(state.data && { defaultValue: state.data[name] })}
                required={!isOptional}
                placeholder={placeholder}
                {...(type && { type })}
                {...register(name, {
                  valueAsNumber: !!type,
                })}
              />
              {isOptional && <S.Optional>{OPTIONAL}</S.Optional>}
            </S.InputContainer>
            {errors[name] && (
              <S.CustomError>{errors[name].message}</S.CustomError>
            )}
          </S.InputWrapper>
        ))}
        <S.Select
          required
          {...register('state')}
          {...(state.data && { defaultValue: state.data?.state })}
        >
          {states.map(({ value, disabled, selected }) => (
            <S.Option
              key={value}
              {...(!disabled ? { value } : { value: '' })}
              {...(disabled && { disabled })}
              {...(selected && { selected })}
            >
              {value}
            </S.Option>
          ))}
        </S.Select>
      </S.AddressInputs>
    </S.AddressContainer>
  );
}
