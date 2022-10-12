import React from "react";
import {  Button, Flex, Link, Spacer } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useConnect

} from 'wagmi';
const NavBar = () => {
    const { isConnected } = useConnect();

 return (
     <div className="navbar">
     <Flex justity="space-around" align="center" padding="12px">
         {/* Left Side - Social Media Icons */}
         <Flex justity="space-around" align="40%" padding="0 75px">
         <Link href="https://twinnytwin.io">
        <ArrowBackIcon  w={8} h={8}/></Link>
        </Flex>
         {/* Right Side - Social Media Icons */}
        <Flex
            justify="space-between"
            align="center"
            width="50%"
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
            onClick= {useConnect} /> </Flex>
        )}
     
     </Flex>
     </div>
 )
}

export default NavBar;