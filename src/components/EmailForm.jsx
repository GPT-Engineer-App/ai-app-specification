import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react";

const EmailForm = ({ onSendEmail }) => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendEmail({ subject, body });
    setSubject("");
    setBody("");
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="subject" isRequired>
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </FormControl>
          <FormControl id="body" isRequired>
            <FormLabel>Body</FormLabel>
            <Textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Send Email
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default EmailForm;