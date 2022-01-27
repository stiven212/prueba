import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { map, size } from "lodash";
import Link from "next/link";
import classNames from "classnames";
import Order from "../../../api/address";
import useAuth from "../../../hooks/useAuth";


export default function AddressShipping(props) {
  const { setAddress } = props;

  const [addresses, setAddresses] = useState(null);

  const [addressActive, setAddressActive] = useState(null);

  const { auth, logout } = useAuth();

  useEffect( () => {

    const getData = async () => {

      try {
        // const response = await Order.addresses();
        const response = await Order.getAddresses(logout);
        console.log(response.data)
        setAddresses(response.data || []);
      } catch (error) {

        console.log(error);
        if(error.response){
          console.log(error.response);
        }
      }
    };
    getData();
  }, []);
  return (
    <div className="address-shipping">
      <div className="title">Direccion de envio</div>
      <div className="data">
        {size(addresses) === 0 ? (
          <h3>
            No hay ninguna direccion creada{" "}
            <Link href="/account">
              <a>añadir direcciones</a>
            </Link>
          </h3>
        ) : (
          <Row>
            {map(addresses, (address) => (
              <Col key={address.id} sm={22} md={11} lg={6} offset={1}>
                <Address
                  address={address}
                  addressActive={addressActive}
                  setAddressActive={setAddressActive}
                  setAddress={setAddress}
                />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

function Address(props) {
  const { address, addressActive, setAddressActive, setAddress } = props;

  const changeAddress = () => {
    setAddressActive(address.id);
    setAddress(address);
  };
  return (
    <div
      className={classNames("address", {
        active: addressActive === address.id,
      })}
      onClick={changeAddress}
    >
      <p>{address.address}</p>
    </div>
  );
}
