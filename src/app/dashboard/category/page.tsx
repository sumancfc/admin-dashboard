'use client';

import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import CategoryTable from 'views/admin/category/CategoryTable';
import CategoryData from 'views/admin/category/CategoryData';

export default function Category() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid columns={{ sm: 1 }}>
        <CategoryTable categoryData={CategoryData} />
      </SimpleGrid>
    </Box>
  );
}
