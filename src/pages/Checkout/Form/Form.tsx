import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import * as CS from '../Checkout.styles';
import { addressInfos, states, AddressSchema } from './Form.data';
import * as S from './Form.styles';
import { AddressType } from './Form.types';

export function Form() {
  const { register, handleSubmit } = useForm<AddressType>({
    resolver: zodResolver(AddressSchema),
  });

  const onSubmit = async (data: AddressType) => {
    console.log('>>> data', data);
  };

  return (
    <S.FormContainer>
      <CS.SectionTop>
        <S.MapPinLineCustom />
        <CS.SectionTitle>Endereço de Entrega</CS.SectionTitle>
        <CS.SectionDescription>
          Informe o endereço onde deseja receber seu pedido
        </CS.SectionDescription>
      </CS.SectionTop>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
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
      </S.Form>
    </S.FormContainer>
  );
}
