import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { QuestionProps } from "../../../scr-types/types";

const CalmlyQuestion = ({ handleClickButton }: QuestionProps) => {
  // const handleSignIn = (e: any) => {
  //   e.preventDefault();
  //   router.push("/");
  //   console.log("clicked!");
  // };
  return (
    <Box>
      <Heading>Can Calmly help me?</Heading>
      <Box>
        <Text>Is the amount disputed lower than £20,000?</Text>
        <Text>
          Currently we only deal with disputes under £20,000.We can recommend
          you a good solicitor if your dispute is over that value.
        </Text>
        <HStack>
          <Button onClick={() => handleClickButton()}>Yes</Button>
          <Button onClick={() => handleClickButton()}>No</Button>
        </HStack>
      </Box>
      <Box>
        <Text>Are you in England or Wales?</Text>
        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
        <HStack>
          <Button>Yes</Button>
          <Button>No</Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default CalmlyQuestion;
