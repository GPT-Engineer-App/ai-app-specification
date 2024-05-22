import { useState } from "react";
import { Container, VStack, Heading, Input, Button, Textarea, Text } from "@chakra-ui/react";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleCreateLead = async () => {
    const { data, error } = await supabase
      .from('leads')
      .insert([{ name, email, company }]);

    if (error) {
      setStatus("Error creating lead");
    } else {
      setStatus("Lead created successfully");
    }
  };

  const handleSendEmail = async () => {
    // Placeholder for sending email logic
    setStatus("Email sent successfully");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">CRM Application</Heading>
        <Heading as="h2" size="lg">Create Lead</Heading>
        <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
        <Button colorScheme="blue" onClick={handleCreateLead}>Create Lead</Button>
        <Heading as="h2" size="lg">Send Custom Email</Heading>
        <Input placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
        <Textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button colorScheme="green" onClick={handleSendEmail}>Send Email</Button>
        {status && <Text>{status}</Text>}
      </VStack>
    </Container>
  );
};

export default Index;