import React, { useState } from "react";
import { Layout, Row, Col, Menu, Modal } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

export default function Top() {
  return (
    <div className="top">
      <Layout>
        <Row className="top" justify="center">
          <Col lg={{ span: 8 }} md={{ span: 8 }} className="top__left">
            <Network />
          </Col>
          <Col
            lg={{ span: 8, offset: 2 }}
            md={{ span: 10 }}
            sm={{ span: 21 }}
            xs={{ span: 20 }}
            className="top__right"
          >
            <Policies />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

function Network() {
  return (
    <ul>
      <li>
        <a href="https://www.facebook.com/insigniaestampados" target="_blank"  rel="noreferrer">
          <FacebookOutlined style={{ fontSize: "26px", color: "#fff" }} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/insignia_estampados" target="_blank"  rel="noreferrer">
          <InstagramOutlined style={{ fontSize: "26px", color: "#fff" }} />
        </a>
      </li>
      <li>
        <a
          href="https://api.whatsapp.com/send?phone=593960032952&app=facebook&entry_point=page_cta"
          target="_blank" 
          rel="noreferrer"
        >
          <WhatsAppOutlined style={{ fontSize: "26px", color: "#fff" }} />
        </a>
      </li>
    </ul>
  );
}

function Policies() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModal1 = () => {
    setIsModalVisible1(true);
  };
  const showModal2 = () => {
    setIsModalVisible2(true);
  };
  const showModal3 = () => {
    setIsModalVisible3(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOk1 = () => {
    setIsModalVisible1(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };
  const handleOk2 = () => {
    setIsModalVisible2(false);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };
  const handleOk3 = () => {
    setIsModalVisible3(false);
  };

  const handleCancel3 = () => {
    setIsModalVisible3(false);
  };

  return (
    <Layout>
      <Row>
        <Col
          lg={{ span: 10 }}
          md={{ span: 10 }}
          sm={{ span: 11, offset: 4 }}
          xs={{ span: 11, offset: 4 }}
          onClick={showModal}
        >
          <h3>T??rminos y condiciones</h3>
        </Col>
        <Modal
          title="T??rminos y condiciones"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer=""
          bodyStyle={{ height: "30em", overflow: "scroll" }}
          width={1000}
        >
          <h2>
            <strong>T??rminos y Condiciones de Uso</strong>
          </h2>
          <p>&nbsp;</p>
          <p>
            <strong>INFORMACI??N RELEVANTE</strong>
          </p>
          <p>
            Es requisito necesario para la adquisici??n de los productos que se
            ofrecen en este sitio, que lea y acepte los siguientes T??rminos y
            Condiciones que a continuaci??n se redactan. El uso de nuestros
            servicios as?? como la compra de nuestros productos implicar?? que
            usted ha le??do y aceptado los T??rminos y Condiciones de Uso en el
            presente documento. Todas los productos &nbsp;que son ofrecidos por
            nuestro sitio web pudieran ser creadas, cobradas, enviadas o
            presentadas por una p??gina web tercera y en tal caso estar??an
            sujetas a sus propios T??rminos y Condiciones. En algunos casos, para
            adquirir un producto, ser?? necesario el registro por parte del
            usuario, con ingreso de datos personales fidedignos y definici??n de
            una contrase??a.
          </p>
          <p>
            El usuario puede elegir y cambiar la clave para su acceso de
            administraci??n de la cuenta en cualquier momento, en caso de que se
            haya registrado y que sea necesario para la compra de alguno de
            nuestros productos. insignia.com no asume la responsabilidad en caso
            de que entregue dicha clave a terceros.
          </p>
          <p>
            Todas las compras y transacciones que se lleven a cabo por medio de
            este sitio web, est??n sujetas a un proceso de confirmaci??n y
            verificaci??n, el cual podr??a incluir la verificaci??n del stock y
            disponibilidad de producto, validaci??n de la forma de pago,
            validaci??n de la factura (en caso de existir) y el cumplimiento de
            las condiciones requeridas por el medio de pago seleccionado. En
            algunos casos puede que se requiera una verificaci??n por medio de
            correo electr??nico.
          </p>
          <p>
            Los precios de los productos ofrecidos en esta Tienda Online es
            v??lido solamente en las compras realizadas en este sitio web.
          </p>
          <p>
            <strong>LICENCIA</strong>
          </p>
          <p>
            Insignia&nbsp; a trav??s de su sitio web concede una licencia para
            que los usuarios utilicen&nbsp; los productos que son vendidos en
            este sitio web de acuerdo a los T??rminos y Condiciones que se
            describen en este documento.
          </p>
          <p>
            <strong>USO NO AUTORIZADO</strong>
          </p>
          <p>
            En caso de que aplique (para venta de software, templetes, u otro
            producto de dise??o y programaci??n) usted no puede colocar uno de
            nuestros productos, modificado o sin modificar, en un CD, sitio web
            o ning??n otro medio y ofrecerlos para la redistribuci??n o la reventa
            de ning??n tipo.
          </p>
        </Modal>
        <Col
          lg={{ span: 10 }}
          md={{ span: 10, offset: 0 }}
          sm={{ span: 10, offset: 4 }}
          xs={{ span: 11, offset: 4 }}
          onClick={showModal1}
        >
          <h3> Acerca de Nosotros</h3>
        </Col>
        <Modal
          title="Acerca de Nosotros"
          visible={isModalVisible1}
          onOk={handleOk1}
          onCancel={handleCancel1}
          footer=""
        >
          <p>
            <strong>PROPIEDAD</strong>
          </p>
          <p>
            Usted no puede declarar propiedad intelectual o exclusiva a ninguno
            de nuestros productos, modificado o sin modificar. Todos los
            productos son propiedad &nbsp;de los proveedores del contenido. En
            caso de que no se especifique lo contrario, nuestros productos se
            proporcionan&nbsp; sin ning??n tipo de garant??a, expresa o impl??cita.
            En ning??n esta compa????a ser?? &nbsp;responsables de ning??n da??o
            incluyendo, pero no limitado a, da??os directos, indirectos,
            especiales, fortuitos o consecuentes u otras p??rdidas resultantes
            del uso o de la imposibilidad de utilizar nuestros productos.
          </p>
        </Modal>
      </Row>
      <Row>
        <Col
          lg={{ span: 10, offset: 4 }}
          md={{ span: 12 }}
          sm={{ span: 10, offset: 2 }}
          xs={{ span: 11, offset: 4 }}
          onClick={showModal3}

        >
          <h3>Contactanos</h3>
        </Col>
        <Modal
          title="Contactanos"
          visible={isModalVisible3}
          onOk={handleOk3}
          onCancel={handleCancel3}
          footer=""
        >
          <p>
            <strong>Numeros disponibles</strong>
          </p>
          <p>
              <ul>
                <li>+593 96 003 2952</li>
                <li>+593 99 381 8915</li>
              </ul>
          </p>
          <p>
            <strong>Direcci??n</strong>
          </p>
          <p>
         
          <a href="https://www.google.com/maps/place/2%C2%B013'06.6%22S+79%C2%B054'46.9%22W/@-2.218488,-79.9135712,19z/data=!3m1!4b1!4m9!1m2!2m1!1sCalle+A+1818+y+2Do+Callej%C3%B3n+11!3m5!1s0x0:0x2c6907496115d44e!7e2!8m2!3d-2.2184882!4d-79.9130241?hl=es" target="_blank" rel="noreferrer"> Calle A 1818 y 2Do Callej??n 11</a>
          </p>
        </Modal>
        <Col
          lg={{ span: 10 }}
          md={{ span: 10, offset: 0 }}
          sm={{ span: 10, offset: 3 }}
          xs={{ span: 11, offset: 4 }}
          onClick={showModal2}
        >
          <h3>Politicas de uso</h3>
        </Col>
        <Modal
          title="Politicas de uso"
          visible={isModalVisible2}
          onOk={handleOk2}
          onCancel={handleCancel2}
          footer=""
        >
          <p>
            <strong>POL??TICA DE REEMBOLSO Y GARANT??A</strong>
          </p>
          <p>
            En el caso de productos que sean&nbsp; mercanc??as irrevocables
            no-tangibles, no realizamos reembolsos despu??s de que se env??e el
            producto, usted tiene la responsabilidad de entender antes de
            comprarlo. &nbsp;Le pedimos que lea cuidadosamente antes de
            comprarlo. Hacemos solamente excepciones con esta regla cuando la
            descripci??n no se ajusta al producto. Hay algunos productos que
            pudieran tener garant??a y posibilidad de reembolso pero este ser??
            especificado al comprar el producto. En tales casos la garant??a solo
            cubrir?? fallas de f??brica y s??lo se har?? efectiva cuando el producto
            se haya usado correctamente. La garant??a no cubre aver??as o da??os
            ocasionados por uso indebido. Los t??rminos de la garant??a est??n
            asociados a fallas de fabricaci??n y funcionamiento en condiciones
            normales de los productos y s??lo se har??n efectivos estos t??rminos
            si el equipo ha sido usado correctamente.
          </p>
        </Modal>
      </Row>
    </Layout>
  );
}
