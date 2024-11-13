import { homeBanner } from '@/assets';
import { Badge } from '@/components';
import { useStockContext } from '@/contexts';
import { ProductProvider } from '@/contexts';
import { Wrapper } from '@/styles';

import { benefits } from './Home.data';
import { HOME_INFOS } from './Home.infos';
import * as S from './Home.styles';
import { Product } from './Product';

const { TITLE, DESCRIPTION, BANNER, SUBTITLE } = HOME_INFOS;

export function Home() {
  const { products } = useStockContext();

  return (
    <S.HomeContainer>
      <S.Top>
        <S.BannerWrapper>
          <S.Contents>
            <S.Title>{TITLE}</S.Title>
            <S.Description>{DESCRIPTION}</S.Description>
          </S.Contents>
          <S.Banner
            src={homeBanner}
            alt={BANNER}
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
        </S.BannerWrapper>
      </S.Top>
      <Wrapper>
        <S.Subtitle>{SUBTITLE}</S.Subtitle>
        <S.ProductsContainer>
          {products.map(({ id, tags }) => (
            <ProductProvider
              id={id}
              key={id}
            >
              <Product tags={tags} />
            </ProductProvider>
          ))}
        </S.ProductsContainer>
      </Wrapper>
    </S.HomeContainer>
  );
}
