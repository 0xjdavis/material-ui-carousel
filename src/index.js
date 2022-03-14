import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Carousel from "./Carousel";
import CardOne from "./TestCards/CardOne";
import CardTwo from "./TestCards/CardTwo";
import Button from "@material-ui/core/Button";
import styles from "./styles.module.scss";
import "./styles.scss";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const input = ["risky", "risky", "risky", "safe", "safe", "safe"];
  const firstSafeIndex = input.indexOf("safe");

  const Title = size => <h3>Total: {size} cards</h3>;

  return (
    <div className={styles.background}>
      {/* <div className={styles.container}>
        <Carousel cardDist={25} navOnTop navTitle={Title.bind(null, 10)}>
          {Array(10)
            .fill(0)
            .map(_ => (
              <CardTwo />
            ))}
        </Carousel>
      </div> */}
      <Button
        color="primary"
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        Collapse
      </Button>

      <div className={styles.container}>
        <Carousel collapse={collapsed} splitIndex={firstSafeIndex}>
          {input.map(val => (
            <CardOne risky={val === "risky"} />
          ))}
        </Carousel>
      </div>
      <div className={styles.notes}>
        <h3>Usage Notes</h3>
        <p>1. Material UI Cards as children</p>
        <p>
          2. Card expansion: click 1 card, all cards toggle (confirmed with UX)
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;- Card takes 2 props: expanded, setExpanded
          <br />
        </p>
        <p>
          3. props.navOnTop // default false (arrows around card container), if
          true: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;- arrows on top right, transparent & no border
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;- card container at right edge of root div
        </p>
        <p>4. props.navTitle // a Title component left to arrows</p>
        <p>5. props.cardDist // distance between sibling cards</p>
        <p>6. props.stepSize // # of cards slided on each click</p>

        <h3>Improvement Ideas</h3>
        <p>- Mouse slide animation</p>
        <p>- Variable card sizes in a container</p>
        <p>- Swipe for mobile usage</p>
        <p>- Lazy loading for large data input</p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
