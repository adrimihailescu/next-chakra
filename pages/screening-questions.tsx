import { Box } from "@chakra-ui/react";
import React from "react";
import CalmlyQuestion from "../components/screening-questions/question/calmly-questions";
import { useRouter } from "next/router";

const ScreeningQuestionsPage = () => {
  const router = useRouter();

  const handleClickButton = () => {
    // e.preventDefault();
    router.push("/");
    console.log("clicked!");
  };
  return (
    <Box>
      <CalmlyQuestion handleClickButton={handleClickButton} />
    </Box>
  );
};

export default ScreeningQuestionsPage;
