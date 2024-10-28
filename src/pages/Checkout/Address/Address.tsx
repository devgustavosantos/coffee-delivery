import { Controller } from 'react-hook-form';

import { useFormContext } from '@/contexts';

import * as CS from '../Checkout.styles';
import { addressInfos, postalCode, states } from './Address.data';
import * as S from './Address.styles';

export function Address() {
  const { register, control, errors } = useFormContext();

  return (
    <S.AddressContainer>
      <CS.SectionTop>
        <S.MapPinLineCustom />
        <CS.SectionTitle>Endereço de Entrega</CS.SectionTitle>
        <CS.SectionDescription>
          Informe o endereço onde deseja receber seu pedido
        </CS.SectionDescription>
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
                required={!isOptional}
                placeholder={placeholder}
                {...(type && { type })}
                {...register(name, {
                  valueAsNumber: !!type,
                })}
              />
              {isOptional && <S.Optional>Opcional</S.Optional>}
            </S.InputContainer>
            {errors[name] && (
              <S.CustomError>{errors[name].message}</S.CustomError>
            )}
          </S.InputWrapper>
        ))}
        <S.Select
          required
          {...register('state')}
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
