import Button from "../components/Button";
import FormContainer from "../components/FormContainer";
import InfoCentered from "../components/InfoCentered";
import InputText from "../components/InputText";
import Layout from "../components/Layout";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <Layout>
      <div className={styles.container}>
        <InfoCentered>
          <FormContainer title="Contacto">
            <InputText title="Nombre"/>
            <InputText title="Email"/>
            <InputText title="Que quiere decirnos?"/>
            <Button>Enviar</Button>
          </FormContainer>
        </InfoCentered>
      </div>
    </Layout>
  );
}
