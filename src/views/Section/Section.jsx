import React from "react";
import PropTypes from "prop-types";
import { Title } from "./Section.styled";
import { Form } from "../../components/Form/Form";
import Filter from "../../components/Filter/Filter";
import { Contacts } from "../../components/Contacts/Contacts";

function Section({ title }) {
  return (
    <section>
      {title && <Title>Phonebook</Title>}
      <Form />
      <Filter />
      <Contacts />
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
