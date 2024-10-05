import * as CS from '../Checkout.styles';
import { inputs } from './Form.data';
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
        {inputs.map(({ name, type, isRequired, options }) => (
          <S.InputContainer key={name}>
            {type === 'select' && options?.length ? (
              <S.Select
                required
                key={name}
              >
                <option
                  value=""
                  disabled
                  selected
                >
                  UF
                </option>
                {options.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </S.Select>
            ) : (
              <S.Input
                type={type}
                required={isRequired}
                placeholder={name}
              />
            )}

            {!isRequired && <S.Optional>Opcional</S.Optional>}
          </S.InputContainer>
        ))}
      </S.Form>
    </S.FormContainer>
  );
}
