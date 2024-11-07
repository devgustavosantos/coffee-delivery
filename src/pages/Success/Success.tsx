import { useStateMachine } from 'little-state-machine';

import { deliveryMan } from '@/assets';
import { Badge } from '@/components';
import { updateAction } from '@/utils/updateAction';

import * as S from './Success.styles';
import { formatOrderInfos } from './Success.utils';

export function Success() {
  const { state } = useStateMachine({ updateAction });

  if (!state.data) return null;

  const orderInfosFormatted = formatOrderInfos(state.data);

  return (
    <S.SuccessContainer>
      <S.SuccessWrapper>
        <div>
          <S.Title>Uhu! Pedido confirmado</S.Title>
          <S.Description>
            Agora é só aguardar que logo o café chegará até você
          </S.Description>
          <S.InfosContainer>
            {orderInfosFormatted.map(
              ({ title, content, icon, color, weight }) => (
                <S.InfoItem key={title}>
                  <Badge
                    color={color}
                    icon={icon}
                    weight={weight}
                  />
                  <S.InfoTitle>{title}</S.InfoTitle>
                  <S.InfoContent>{content}</S.InfoContent>
                </S.InfoItem>
              ),
            )}
          </S.InfosContainer>
        </div>
        <S.Image
          src={deliveryMan}
          alt="Imagem de um entregador em cima de uma moto"
        />
      </S.SuccessWrapper>
    </S.SuccessContainer>
  );
}
