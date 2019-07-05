import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./";
import Icon from "../Icon";

import { ICONS, INTENTS } from "../../constants/";

const intents = Object.values(INTENTS);
const states = ["default", "hover", "active", "disabled"];

const Link = ({ children, to, ...props }) => (
  <a {...props} href={to}>
    {children}
  </a>
);

storiesOf("Button", module)
  .add("With intents", () => (
    <div style={{ display: "flex" }}>
      {intents.map(intent => (
        <div
          key={intent}
          style={{ textAlign: "center", padding: "0 var(--space-s)" }}
        >
          {states.map(state => (
            <div key={`${intent}-${state}`}>
              <Button
                className={`is-${state}`}
                disabled={state === "disabled"}
                intent={intent}
              >
                {intent} ({state})
              </Button>
            </div>
          ))}
        </div>
      ))}
    </div>
  ))
  .add("With icons", () => (
    <div style={{ display: "flex" }}>
      {[ICONS.IconCheck, ICONS.IconClose].map(icon => (
        <div key={icon} style={{ padding: "var(--space-s)" }}>
          <Button>
            <Icon icon={icon} />
          </Button>
        </div>
      ))}
    </div>
  ))
  .add("As link", () => (
    <Button as={Link} to="https://www.heetch.com" target="_blank">
      Link to heetch.com
    </Button>
  ));
