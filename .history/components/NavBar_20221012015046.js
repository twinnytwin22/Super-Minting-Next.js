import React from "react";
import {  Button, Flex, Link, Spacer, Image } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useConnect

} from 'wagmi';
const logowhite = '/assets/logowhite.png';

const NavBar = () => {
    const { isConnected } = useConnect();
 return (
     <div className="navbar">
     <Flex justity="space-around" align="le" padding="12px">
         {/* Left Side - Social Media Icons */}
         <Flex justity="space-around" align="40%" padding="0 55px">
         <Link href="https://twinnytwin.io/kiku">
        <ArrowBackIcon  w={8} h={8}/></Link>
        <Spacer width='20px'/>
        <Link href="https://twinnytwin.io/">
        <Image minWidth='50px' boxSize='50px' src= {logowhite} alt="twinny-logo"/>
        </Link>
        </Flex>
         {/* Right Side - Social Media Icons */}
        <Flex
            justify="space-between"
            align="center"
            width="40%"
           padding="30px 30px 30px 30px"></Flex>
                           <Spacer />

        {/* Connect */}
        {isConnected ? (
            <></>
        ) : ( 
            
            <Flex justify="space-around" 
            width="20%"
            align="right">
            <ConnectButton
              accountStatus={{
                smallScreen: 'avatar',
                largeScreen: 'full',
              }}
            onClick= {useConnect} /> </Flex>
        )}
     
     </Flex>
     </div>
 )
}

export default NavBar;