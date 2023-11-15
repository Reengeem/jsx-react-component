import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const firstName = prompt("Enter You Name").trim();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container justify-content-center">
        {!firstName && (
          <form>
            <p> Hello, there! (You can Provide Your Name Here)</p>
            <input type="text" />
          </form>
        )}
      </div>

      <div>
        <Card
          style={{ width: "31.2rem" }}
          className="container justify-content-center mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
        >
          <Image />
          <Card.Body>
            <Card.Title>
              <Name />
            </Card.Title>
            <Card.Text>
              <Description />
            </Card.Text>
            <Button variant="primary">
              <Price />
            </Button>
          </Card.Body>
        </Card>
        {firstName ? (
          <>
            <Stack
              direction="horizontal"
              gap={10}
              className="container justify-content-center  mb-5 fs-2"
            >
              <Badge pill bg="success">
                Hello {firstName}
              </Badge>
            </Stack>
            <div>
              <Card
                style={{ width: "31.2rem" }}
                className="container justify-content-center mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
              >
                <img
                  src="https://bilaadnigeria.com/wp-content/uploads/2022/09/RUBY-3.jpg"
                  alt=""
                />
                <Card.Body>
                  <Card.Title>Gomycode Estate</Card.Title>

                  <Button variant="primary">
                    <Price />
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
