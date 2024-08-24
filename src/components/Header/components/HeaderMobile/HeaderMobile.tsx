import logoWithHorizontalText from '@/assets/logo/with-horizontal-text.svg';

import { links, menus } from './HeaderMobile.data';
import { useHeaderMobile } from './HeaderMobile.hook';
import * as S from './HeaderMobile.styles';

export function HeaderMobile() {
  const { isOpen, handleMenu } = useHeaderMobile();

  return (
    <S.HeaderMobileContainer>
      <S.Top>
        <S.Logo
          src={logoWithHorizontalText}
          alt=""
        />
        <S.MenuButton onClick={handleMenu}>
          {menus.map((Menu) => (
            <Menu
              weight="bold"
              isOpen={isOpen}
            />
          ))}
        </S.MenuButton>
      </S.Top>
      <S.Navigation isOpen={isOpen}>
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
    </S.HeaderMobileContainer>
  );
}
