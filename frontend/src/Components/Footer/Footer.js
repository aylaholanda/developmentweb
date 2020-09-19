import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>Mechanical Keyboard © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://www.instagram.com/aylaholanda/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                'https://www.youtube.com/channel/UC5Wdr6UO-kqZfxGRhZKpNsA/videos?view_as=subscriber'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='https://github.com/aylaholanda/' target='_blank' aria-label='GitHub'>
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink href='https://www.linkedin.com/in/ayla-holanda-monteiro-70a9a416b/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
