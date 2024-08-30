import homeBanner from '@/assets/home/banner.png';
import { Header, Wrapper } from '@/components';
import { Badge } from '@/components/Badge';

import { benefits } from './Home.data';
import * as S from './Home.styles';

export function Home() {
  return (
    <>
      <Header />
      <main>
        <S.Section>
          <Wrapper stylization={S.bannerWrapperStylization}>
            <S.Contents>
              <S.Title>
                Encontre o café perfeito para qualquer hora do dia
              </S.Title>
              <S.Description>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </S.Description>
            </S.Contents>
            <S.Banner
              src={homeBanner}
              alt="Copo de café"
            />
            <S.BenefitsContainer>
              {benefits.map((benefit) => (
                <S.Benefit key={benefit.content}>
                  <Badge
                    icon={benefit.icon}
                    color={benefit.color}
                  />
                  <p>{benefit.content}</p>
                </S.Benefit>
              ))}
            </S.BenefitsContainer>
          </Wrapper>
        </S.Section>
      </main>
    </>
  );
}
