import React from "react";
import { Container, Message, Title,Link, Image } from "./error";


const NotFoundPage = () => {
  return (
    <Container>
      <Title>Oops!</Title>
      <Message>We couldn't find the page you're looking for.</Message>
      <Image
        src="/assets/Images/404.svg" 
        alt="Page Not Found"
      />
      <Link href="/">Go back to the homepage</Link>
    </Container>
  );
};

export default NotFoundPage;
