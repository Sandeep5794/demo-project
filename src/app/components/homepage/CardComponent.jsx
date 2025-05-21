import React from "react";
import Card from "../ui/Card";
import Container from "../ui/Container";

const CardComponent = () => {
  return (
    <>
      <section className="card-component py-4 xl:py-8">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <Card data="Card"/>
            <Card data="Card"/>
            <Card data="Card"/>
            <Card data="Card"/>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CardComponent;
