import React, { useState, useEffect } from "react";
import { Row, Col, Input, Image ,Grid } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";


const { Search } = Input;

export default function TopBar() {
  return (
    <Row className="top-bar" justify="center">
      <Col lg={{ span: 8 }} md={{ span: 8 }} sm={{span:8}} xs={{span:20}} className="top-bar__left" justify="center">
        <Logo />
      </Col>
      <Col
        lg={{ span: 8 }}
        md={{ span: 8 }}
        sm={{ span: 16, offset: 2 }}
        xs={{ span: 16, offset: 0 }}
        className="top-bar__right"
      >
        <Searchc />
      </Col>
    </Row>
  );
}

function Logo() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();



  return (
    <Link href="/" >
      {screens.xs  ? (

          <a style={{margin:"auto"}}>
        <Image preview={false} src="/insignia.png" alt="INSIGNIA" />
        </a>
        ) : (
        <a>
        <Image preview={false} src="/insignia.png" alt="INSIGNIA" />
        </a>
        )}
    </Link>
  );
}

function Searchc() {
  const [load, setLoad] = useState(false);
  const [searchStr, setSearchStr] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (load) {
      router.push(`search?query=${searchStr}`);
    }
    setLoad(true);
  }, [searchStr]);


  const data = (value) => {
    setSearchStr(value.target.value);
  };
  return (
    <Search
      placeholder="Buscar producto"
      value={router.query.query}
      allowClear
      style={{ width: 220 }}
      onChange={data}
      id="search-product"
    />
  );
}
