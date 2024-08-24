import logoWithHorizontalText from '@/assets/logo/with-horizontal-text.svg';

import { links } from './data';
import * as S from './HeaderMobile.styles';

export function HeaderMobile() {
  const isOpen = true;

  return (
    <S.HeaderMobileContainer>
      <S.Top>
        <S.Logo
          src={logoWithHorizontalText}
          alt=""
        />
        <S.MenuButton>
          {isOpen ? (
            <S.XCustom weight="bold" />
          ) : (
            <S.ListCustom weight="bold" />
          )}
        </S.MenuButton>
      </S.Top>
      {isOpen && (
        <S.Navigation>
          <S.UnorderedList>
            {links.map(({ name, url, icon: Icon }) => (
              <li key={name}>
                <S.ListLink href={url}>
                  <Icon weight="fill" />
                  <S.ListText>{name}</S.ListText>
                </S.ListLink>
              </li>
            ))}
          </S.UnorderedList>
        </S.Navigation>
      )}
    </S.HeaderMobileContainer>
  );
}
