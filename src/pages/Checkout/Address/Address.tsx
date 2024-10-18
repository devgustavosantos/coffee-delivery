import { useFormContext } from '@/contexts';

import * as CS from '../Checkout.styles';
import { addressInfos, states } from './Address.data';
import * as S from './Address.styles';

export function Address() {
  const { register } = useFormContext();

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
        {addressInfos.map(({ name, placeholder, type, isOptional }) => (
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
        ))}
        <S.InputContainer>
          <S.Select
            required
            {...register('state')}
          >
            {states.map(({ value, disabled, selected }) => (
              <option
                key={value}
                value={value}
                {...(disabled && { disabled })}
                {...(selected && { selected })}
              >
                {value}
              </option>
            ))}
          </S.Select>
        </S.InputContainer>
      </S.AddressInputs>
    </S.AddressContainer>
  );
}
