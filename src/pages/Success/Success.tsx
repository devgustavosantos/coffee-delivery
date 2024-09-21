import { deliveryMan } from '@/assets';
import { Badge } from '@/components';

import { deliveryInfos } from './Success.data';
import * as S from './Success.styles';

export function Success() {
  return (
    <S.SuccessContainer>
      <S.SuccessWrapper>
        <div>
          <S.Title>Uhu! Pedido confirmado</S.Title>
          <S.Description>
            Agora é só aguardar que logo o café chegará até você
          </S.Description>
          <S.InfosContainer>
            {deliveryInfos.map(({ title, content, icon, color, weight }) => (
              <S.InfoItem key={title}>
                <Badge
                  color={color}
                  icon={icon}
                  weight={weight}
                />
                <S.InfoTitle>{title}</S.InfoTitle>
                <S.InfoContent>{content}</S.InfoContent>
              </S.InfoItem>
            ))}
          </S.InfosContainer>
        </div>
        <img
          src={deliveryMan}
          alt="Imagem de um entregador em cima de uma moto"
        />
      </S.SuccessWrapper>
    </S.SuccessContainer>
  );
}
