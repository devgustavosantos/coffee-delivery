import { homeBanner } from '@/assets';
import { Badge } from '@/components';
import { useStockContext } from '@/contexts';
import { ProductProvider } from '@/contexts';
import { Wrapper } from '@/styles';

import { benefits } from './Home.data';
import * as S from './Home.styles';
import { Product } from './Product';

export function Home() {
  const { products } = useStockContext();

  return (
    <S.HomeContainer>
      <S.Top>
        <S.BannerWrapper>
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
        </S.BannerWrapper>
      </S.Top>
      <Wrapper>
        <S.Subtitle>Nossos cafés</S.Subtitle>
        <S.ProductsContainer>
          {products.map(({ id, tags }) => (
            <ProductProvider id={id}>
              <Product
                tags={tags}
                key={id}
              />
            </ProductProvider>
          ))}
        </S.ProductsContainer>
      </Wrapper>
    </S.HomeContainer>
  );
}
