import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
  Button,
  Select,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";

const Login = () => {
  return (
    <div>
      <Heading>Welcome to Calmly</Heading>
      <VStack>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="center">
                <FormControl>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field as={Input} type="text" variant="filled" />
                  <FormLabel htmlFor="name">County</FormLabel>

                  <Field as={Select} placeholder="Select option" />
                </FormControl>
                <Button type="submit" colorScheme="teal" width="full">
                  Agree and Continue
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </VStack>
    </div>
  );
};

export default Login;
