'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { HSeparator } from 'components/separator/Separator';
import DefaultAuthLayout from 'layouts/auth/Default';
// Assets
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const textColorBrand = useColorModeValue('brand.500', 'white');

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/signin', {
        email,
        password,
      });

      /* console.log('Response:', response);*/

      if (response.status === 200) {

        localStorage.setItem('auth_token', response.data.token);

        router.push('/admin/default');
      }
    } catch (error) {
      console.error('Sign In failed:', error);
    }
  };

  return (
      <DefaultAuthLayout illustrationBackground={'/img/auth/auth.png'}>
        <Flex
            maxW={{ base: '100%', md: 'max-content' }}
            w="100%"
            mx={{ base: 'auto', lg: '0px' }}
            me="auto"
            h="100%"
            alignItems="start"
            justifyContent="center"
            mb={{ base: '30px', md: '60px' }}
            px={{ base: '25px', md: '0px' }}
            mt={{ base: '40px', md: '14vh' }}
            flexDirection="column"
        >
          <Box me="auto">
            <Heading color={textColor} fontSize="36px" mb="10px">
              Sign In
            </Heading>
            <Text mb="36px" ms="4px" color={textColorSecondary} fontWeight="400" fontSize="md">
              Enter your email and password to sign in!
            </Text>
          </Box>
          <Flex direction="column" w={{ base: '100%', md: '420px' }} maxW="100%">
            <Button
                fontSize="sm"
                me="0px"
                mb="26px"
                py="15px"
                h="50px"
                borderRadius="16px"
                bgColor={useColorModeValue('secondaryGray.300', 'whiteAlpha.200')}
                color={textColor}
                fontWeight="500"
            >
              <Icon as={FcGoogle} w="20px" h="20px" me="10px" />
              Sign in with Google
            </Button>
            <Flex align="center" mb="25px">
              <HSeparator />
              <Text color="gray.400" mx="14px">or</Text>
              <HSeparator />
            </Flex>
            <FormControl>
              <FormLabel display="flex" ms="4px" fontSize="sm" fontWeight="500" color={textColor} mb="8px" htmlFor="email">
                Email<Text color='brand.500'>*</Text>
              </FormLabel>
              <Input
                  id="email"
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  type="email"
                  placeholder="admin@dashboard.com"
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="500" color={textColor} display="flex" htmlFor="password">
                Password<Text color='brand.500'>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                    id="password"
                    isRequired={true}
                    fontSize="sm"
                    placeholder="Enter your password"
                    mb="24px"
                    size="lg"
                    type={show ? 'text' : 'password'}
                    variant="auth"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                      color={textColorSecondary}
                      _hover={{ cursor: 'pointer' }}
                      as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                      onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <Flex justifyContent="space-between" alignItems="center" mb="24px">
                <FormControl display="flex" alignItems="center">
                  <Checkbox id="remember-login" colorScheme='brandScheme' me='10px' />
                  <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal' color={textColor} fontSize='sm'>
                    Keep me logged in
                  </FormLabel>
                </FormControl>
                <Link href="/auth/forgot-password">
                  <Text color={textColorBrand} fontSize='sm' w='124px' fontWeight='500'>
                    Forgot password?
                  </Text>
                </Link>
              </Flex>
              <Button
                  fontSize='sm'
                  variant='brand'
                  fontWeight='500'
                  w='100%'
                  h='50'
                  mb='24px'
                  onClick={handleSignIn} // Call the sign-in function on button click
              >
                Sign In
              </Button>
            </FormControl>
            <Flex flexDirection='column' justifyContent='center' alignItems='start' maxW='100%' mt='0px'>
              <Link href="/auth/sign-up">
                <Text color={textColorSecondary} fontWeight='400' fontSize='14px'>
                  Not registered yet?
                  <Text color={textColorBrand} as='span' ms='5px' fontWeight='500'>
                    Create an Account
                  </Text>
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </DefaultAuthLayout>
  );
}
