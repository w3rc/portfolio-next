import Head from 'next/head';
import { Fragment } from 'react';
import Navbar from '../components/navbar';
import { about } from './api/data';
import { AvatarFrame, HomeBody, HomeContent, SocialIcons } from './home.styled';
import { Avatar } from '@material-ui/core';

import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Rupayan</title>
      </Head>
      <Navbar />
      <HomeBody>
        <AvatarFrame>
          <Avatar src="assets/avatar.jpg" style={{ width: 300, height: 300 }} alt={about.name}>R</Avatar>
        </AvatarFrame>
        <HomeContent>
          <h1>Rupayan Chakraborty</h1>
          <SocialIcons>
            <a href={about.whatsapp} target="_blank"><FaWhatsapp size={30} /></a>
            <a href={about.github} target="_blank"><FaGithub size={30} /></a>
            <a href={about.facebook} target="_blank"><FaFacebook size={30} /></a>
            <a href={about.linkedin} target="_blank"><FaLinkedin size={30} /></a>
          </SocialIcons>
        </HomeContent>
      </HomeBody>
    </Fragment>
  );
}
