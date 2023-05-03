/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// reactstrap components
import Chart from "chart.js";
// react plugin used to create charts
import { React, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  Badge,
  Card,
  CardHeader,
  Col,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Container,
  Row,
  CardBody,
  Button,
} from "reactstrap";

import { chartOptions, parseOptions } from "variables/charts.js";
// core components
import Header from "components/Headers/Header.js";
const SSh = () => {
  const [server, setServer] = useState("Select Server");
  const [showSSH, setShowSSH] = useState(false);
  const [value, setValue] = useState("CSD 0");
  const [buttonColors, setButtonColors] = useState([
    "success",
    "success",
    "success",
    "success",
    "success",
    "success",
    "success",
    "success",
  ]);
  const toggleButtonColor = (buttonName) => {
    const index = parseInt(buttonName.split(" ")[1]) - 1; // 버튼 이름에서 index 추출
    const newButtonColors = [...buttonColors];
    newButtonColors[index] =
      buttonColors[index] === "success" ? "danger" : "success";
    setButtonColors(newButtonColors);
  };

  const connctSSH = (e) => {
    setShowSSH(true);
    e.currentTarget.disabled = true;
  };
  const handleButtonClick = (e) => {
    let { value: buttonName } = e.target;
    if (buttonName === undefined) {
      buttonName = e.target.name;
    }
    setValue(buttonName);
    toggleButtonColor(buttonName);
  };
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  const handleDropdownClick = (e) => {
    setServer(e.target.getAttribute("value"));
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <h1 className="col mb-0 text-primary">CSD Information</h1>
                </Row>
                <hr className="mt-3 mb-0" />
              </CardHeader>
              <CardBody className="mt-0">
                <Row>
                  <div className="col-2 align-items-center text-right">
                    <UncontrolledDropdown nav>
                      <DropdownToggle className="pr-0" nav>
                        Select Server &nbsp;
                        <i className="ni ni-bold-down" />
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-arrow" right>
                        {Array.from({ length: 8 }, (_, i) => i).map((index) => (
                          <DropdownItem
                            key={index}
                            value={`Server 10.0.0.10${index}`}
                            onClick={handleDropdownClick}
                          >
                            <i
                              className="ni ni-bold-right"
                              key={index}
                              value={`Server 10.0.0.10${index}`}
                              onClick={handleDropdownClick}
                            />
                            <span
                              key={index}
                              value={`Server 10.0.0.10${index}`}
                              onClick={handleDropdownClick}
                            >{`Server 10.0.0.10${index}`}</span>
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <div className="col-10 align-items-center text-center">
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((index) => (
                      <Button
                        color={buttonColors[index - 1]}
                        outline
                        className="mx-4"
                        value={`CSD ${index}`}
                        onClick={handleButtonClick}
                      >
                        <img
                          name={`CSD ${index}`}
                          alt="placeholder"
                          src={require("../../assets/img/icons/icons8-ssd-64.png")}
                        />
                        <br />
                        CSD {index}
                      </Button>
                    ))}
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <h1 className="col mb-0 text-primary">SSH Connection</h1>
                </Row>
                <hr className="mt-3 mb-0" />
              </CardHeader>
              <CardBody>
                <Row className="align-items-center">
                  <div className="row col-6">
                    <h2 className="mb-0 mx-2">Selected CSD</h2>
                    <Badge className="badge-lg text-sm" color="success">
                      {value}
                    </Badge>
                  </div>

                  <Nav className="mx-3" navbar>
                    <NavItem>
                      <NavLink
                        className="nav-link"
                        to="/admin/assistant"
                        tag={Link}
                      >
                        <Button
                          className="btn-icon btn-3"
                          color="info"
                          type="button"
                        >
                          <span className="btn-inner--icon">
                            <i className="ni ni-button-play" />
                          </span>
                          <span className="btn-inner--text">
                            CSD Info&Status
                          </span>
                        </Button>
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <Button
                    className="btn-icon btn-3"
                    color="default"
                    type="button"
                    onClick={connctSSH}
                  >
                    <span className="btn-inner--icon">
                      <i className="ni ni-button-play" />
                    </span>
                    <span className="btn-inner--text">Connect SSH</span>
                  </Button>
                  <Button
                    className="btn-icon btn-3"
                    color="success"
                    type="button"
                  >
                    <span className="btn-inner--icon">
                      <i className="ni ni-button-play" />
                    </span>
                    <span className="btn-inner--text">Show Snippet</span>
                  </Button>
                </Row>
                <Row className="align-items-center text-center mt-2">
                  <div className="row col-4 align-items-center justify-content-center">
                    <span className="mr-2">Full Recover</span>
                    <div>
                      <label className="custom-toggle mt-3">
                        <input type="checkbox" />
                        <span className="custom-toggle-slider rounded-circle " />
                      </label>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="progress-wrapper">
                      <div className="progress-info">
                        <div className="progress-label">
                          <span>Recover</span>
                        </div>
                        <div className="progress-percentage">
                          <span>78%</span>
                        </div>
                      </div>
                      <Progress max="100" value="78" />
                    </div>
                  </div>
                  <div className="col-2">
                    <Button color="primary">Start Recover</Button>
                  </div>
                </Row>
                <Row className="align-items-center text-center mt-2">
                  {showSSH && (
                    <iframe
                      src="http://10.0.5.123:8888/"
                      width="100%"
                      height="500px"
                      title="example"
                    />
                  )}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SSh;
