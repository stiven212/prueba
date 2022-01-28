import React, { useState } from "react";
import { Form, Button, Input, message } from "antd";
import User from "../../../api/user";

export default function ForgotForm(props) {
  const { showLoginForm } = props;
  // const [result, setResult] = useState(" ");
  const [loading, setLoading] = useState(false);


  const onFinish = async (formData) => {
    setLoading(true);

    try {
      // setResult("");
      const userData = {
        ...formData,
      };

      message.info("Se acaba de enviar un mensaje a tu correo electronico!!", 8)
      // setResult("Verifica tu correo");
      setLoading(false);

      const response = await User.forgot(userData);
      // console.log(response)
      
    } catch (e) {
      // console.log("error", e);
      // message.info("error", 8)

      // setResult("Ocurrio un error");
    }
  };
  return (
    <Form labelCol={{ span: 8 }} className="login-form" onFinish={onFinish}>
      <Form.Item
        name="email"
        label="Correo Electronico"
        rules={[
          {
            required: true,
            message: "Ingresa tu correo",
            type: "email",
            message: "Correo no valido",
          },
        ]}
      >
        <Input placeholder="Correo electronico" />
      </Form.Item>

      <Form.Item>
        <div className="actions">
          <Button type="ghost" onClick={showLoginForm} loading={loading}>
            Ingresar
          </Button>
          <div>
            <Button htmlType="submit" className="submit">
              Restablecer Contraseña
            </Button>
          </div>
        </div>
      </Form.Item>

    </Form>
  );
}
