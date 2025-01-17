'use client';

import React, {ChangeEvent, useState} from 'react';
import {
  Box,
  Button,
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
import DefaultAuthLayout from 'layouts/auth/Default';
import Link from 'next/link';
import { RiEyeCloseLine } from 'react-icons/ri';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import useUserStore from 'store/userStore';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {toast} from "react-toastify";

export default function SignUp() {
  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const textColorBrand = useColorModeValue('brand.500', 'white');
  const brandStars = useColorModeValue('brand.500', 'brand.400');

  const [show, setShow] = useState(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const setUser = useUserStore(state => state.setUser);

  const router = useRouter();

  const handleClick = () => setShow(!show);

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/signup', {
        name,
        email,
        password,
      });

      /*console.log('Response:', response);*/

      if (response.status === 201) {
        setUser({
          name: name,
          email: email
        });

        setName('');
        setEmail('');
        setPassword('');

        toast.success(response.data.message);

        setTimeout(() => {
          router.push('/auth/sign-in');
        }, 3000);
      }
    } catch (error) {
      toast.error(error.response.data.error);
      /*console.error('Signup failed:', error);*/
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
              Sign Up
            </Heading>
            <Text mb="36px" ms="4px" color={textColorSecondary} fontWeight="400" fontSize="md">
              Enter your name, email and password to sign up!
            </Text>
          </Box>
          <Flex
              zIndex="2"
              direction="column"
              w={{ base: '100%', md: '420px' }}
              maxW="100%"
              background="transparent"
              borderRadius="15px"
              mx={{ base: 'auto', lg: 'unset' }}
              me="auto"
              mb={{ base: '20px', md: 'auto' }}
          >
            <FormControl>
              <FormLabel display="flex" ms="4px" fontSize="sm" fontWeight="500" color={textColor} mb="8px" htmlFor="name">
                Your FullName<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                  id="name"
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  type="text"
                  placeholder="John Doe"
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement> ): void => setName(e.target.value)}
              />
              <FormLabel display="flex" ms="4px" fontSize="sm" fontWeight="500" color={textColor} mb="8px" htmlFor="email">
                Your Email<Text color={brandStars}>*</Text>
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
                  onChange={(e: ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)}
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="500" color={textColor} display="flex" htmlFor="password">
                Enter Password<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                    id="password"
                    isRequired={true}
                    fontSize="sm"
                    placeholder="Min. 6 characters with 1 digit"
                    mb="24px"
                    size="lg"
                    type={show ? 'text' : 'password'}
                    variant="auth"
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)}
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

              <Button
                  fontSize="sm"
                  variant="brand"
                  fontWeight="500"
                  w="100%"
                  h="50"
                  mb="24px"
                  onClick={handleSignup}
              >
                Sign up
              </Button>
            </FormControl>
            <Flex flexDirection="column" justifyContent="center" alignItems="start" maxW="100%" mt="0px">
              <Link href="/auth/sign-in">
                <Text color={textColorSecondary} fontWeight="400" fontSize="14px">
                  Already have an account?
                  <Text color={textColorBrand} as='span' ms='5px' fontWeight='500'>
                    SignIn
                  </Text>
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </DefaultAuthLayout>
  );
}
