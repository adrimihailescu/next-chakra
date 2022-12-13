import { Box, Button, Text } from "@chakra-ui/react";
import CreationSuccess from "../common/components/success-page-template";
import { useRouter } from "next/router";
import { InlineLink } from "../common/components/inline-link";

const Test = () => {
  const router = useRouter();
  return (
    <Box>
      <CreationSuccess
        image={{
          src: "/images/success.png",
          alt: "Image of a thumbs up",
        }}
        headingText="Yes! It’s a perfect match"
        text="We can help you calmly resolve your disagreement. The next step is
        to share your issue with the community of law students and pick
        someone to lead your support team."
      >
        {" "}
        {
          <Button
            variant="calmlyBlue"
            size="lg"
            width={{ base: "100%", md: "359px" }}
            onClick={() => router.push("/case")}
          >
            Post your issue
          </Button>
        }
      </CreationSuccess>
      <CreationSuccess
        image={{
          src: "/images/all-done.png",
          alt: "All done thumbs up",
        }}
        headingText="All done"
        text="Check your inbox and click the link to log in"
      >
        {
          <Text textStyle="B2" color="calmlyGrey.500">
            I haven&apos;t received an email.{" "}
            <InlineLink href="/auth/signup-login">Try again</InlineLink>
          </Text>
        }
      </CreationSuccess>
    </Box>
  );
};
Test.pageLayoutOptions = {
  centered: true,
};

export default Test;
