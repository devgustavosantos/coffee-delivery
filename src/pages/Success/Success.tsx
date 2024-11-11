import { useStateMachine } from 'little-state-machine';

import { deliveryMan } from '@/assets';
import { Badge } from '@/components';
import { updateAction } from '@/utils/updateAction';

import { SUCCESS_INFOS } from './Success.infos';
import * as S from './Success.styles';
import { formatOrderInfos } from './Success.utils';

const { TITLE, DESCRIPTION, IMAGE } = SUCCESS_INFOS;

export function Success() {
  const { state } = useStateMachine({ updateAction });

  if (!state.data) return null;

  const orderInfosFormatted = formatOrderInfos(state.data);

  return (
    <S.SuccessContainer>
      <S.SuccessWrapper>
        <div>
          <S.Title>{TITLE}</S.Title>
          <S.Description>{DESCRIPTION}</S.Description>
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
          alt={IMAGE}
        />
      </S.SuccessWrapper>
    </S.SuccessContainer>
  );
}
