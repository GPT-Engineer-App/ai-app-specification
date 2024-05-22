import { useState } from "react";
import { Container, VStack, Heading, Text, Box, Button } from "@chakra-ui/react";
import LeadForm from "../components/LeadForm";
import EmailForm from "../components/EmailForm";

const Index = ({ username }) => {
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);

  const addLead = (lead) => {
    setLeads([...leads, lead]);
  };

  const sendEmail = (email) => {
    console.log("Sending email to:", selectedLead.email);
    console.log("Subject:", email.subject);
    console.log("Body:", email.body);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="full">
        <Heading as="h1" size="xl">CRM Application</Heading>
        <Text>Welcome, {username}!</Text>
        <LeadForm onAddLead={addLead} />
        <Box width="full">
          <Heading as="h2" size="lg" mb={4}>Leads</Heading>
          {leads.length === 0 ? (
            <Text>No leads available. Add a lead to get started.</Text>
          ) : (
            leads.map((lead, index) => (
              <Box
                key={index}
                p={4}
                borderWidth={1}
                borderRadius="lg"
                mb={2}
                onClick={() => setSelectedLead(lead)}
                cursor="pointer"
                bg={selectedLead === lead ? "blue.100" : "white"}
              >
                <Text><strong>Name:</strong> {lead.name}</Text>
                <Text><strong>Email:</strong> {lead.email}</Text>
                <Text><strong>Company:</strong> {lead.company}</Text>
              </Box>
            ))
          )}
        </Box>
        {selectedLead && (
          <Box width="full">
            <Heading as="h2" size="lg" mb={4}>Send Email to {selectedLead.name}</Heading>
            <EmailForm onSendEmail={sendEmail} />
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;