import homeBanner from '@/assets/home/banner.png';
import { Wrapper, Badge, Product } from '@/components';

import { benefits } from './Home.data';
import { useHome } from './Home.hook';
import * as S from './Home.styles';

export function Home() {
  const { products } = useHome();

  return (
    <S.HomeContainer>
      <S.Top>
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
      </S.Top>
      <Wrapper>
        <S.Subtitle>Nossos cafés</S.Subtitle>
        <S.ProductsContainer>
          {products.map(({ id, name, description, image, price, tags }) => (
            <Product.Root
              key={id}
              inCardFormat
            >
              <Product.Image
                src={`products/images/${image}.png`}
                alt={`Foto de uma xícara de café do tipo ${name}`}
              />
              <Product.Tags>
                {tags?.map((tag) => (
                  <Product.Tag
                    key={tag.id}
                    name={tag.title}
                  />
                ))}
              </Product.Tags>
              <Product.Name
                content={name}
                emphasized
              />
              <Product.Description content={description} />
              <Product.Footer>
                <Product.Price
                  value={price}
                  emphasized
                />
                <Product.QuantitySelector />
                <Product.AddToCart />
              </Product.Footer>
            </Product.Root>
          ))}
        </S.ProductsContainer>
      </Wrapper>
    </S.HomeContainer>
  );
}
