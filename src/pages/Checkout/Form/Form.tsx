import * as CS from '../Checkout.styles';
import { addressInfos, postalCode, states } from './Form.data';
import * as S from './Form.styles';

export function Form() {
  return (
    <S.FormContainer>
      <CS.SectionTop>
        <S.MapPinLineCustom />
        <CS.SectionTitle>Endereço de Entrega</CS.SectionTitle>
        <CS.SectionDescription>
          Informe o endereço onde deseja receber seu pedido
        </CS.SectionDescription>
      </CS.SectionTop>
      <S.Form>
        <S.InputContainer>
          <S.CustomIMaskInput
            type={postalCode.type}
            required={postalCode.required}
            placeholder={postalCode.placeholder}
            mask={postalCode.mask}
          />
        </S.InputContainer>
        {addressInfos.map(({ name, isOptional }) => (
          <S.InputContainer key={name}>
            <S.Input
              required={!isOptional}
              placeholder={name}
            />
            {isOptional && <S.Optional>Opcional</S.Optional>}
          </S.InputContainer>
        ))}
        <S.InputContainer>
          <S.Select required>
            {states.map(({ value, disabled, selected }) => (
              <option
                key={value}
                value={value}
                {...(disabled && { disabled: disabled })}
                {...(selected && { selected: selected })}
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
