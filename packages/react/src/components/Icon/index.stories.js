import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import Helper from "../Helper";
import Input from "../Input";
import Label from "../Label";
import Icon from ".";

import { ICONS, ICON_SIZES } from "../../constants";

const icons = Object.keys(ICONS);
const sizes = Object.values(ICON_SIZES);

const IconsFilterer = () => {
  const [filter, setFilter] = React.useState("");

  const displayedIcons = icons.filter(icon =>
    icon.toLowerCase().includes(filter.toLowerCase())
  );

  const handleInputChange = e => setFilter(e.target.value);

  return (
    <div>
      <Label htmlFor="icon-search">Search</Label>
      <Input id="icon-search" onChange={handleInputChange} />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "var(--space-xl)",
        }}
      >
        {displayedIcons.map(icon => (
          <div
            key={icon}
            style={{
              padding: "var(--space-s)",
              width: 150,
              textAlign: "center",
            }}
          >
            <Icon key={`Icon--${icon}`} icon={icon} />
            <Helper>{icon}</Helper>
          </div>
        ))}
      </div>
    </div>
  );
};

const stories = storiesOf("Icons", module);

stories.add("All", () => <IconsFilterer />);

stories.add("Playground", () => (
  <Icon
    icon={select("Icon", icons, ICONS.IconAlertOctagon)}
    size={select("Size", sizes, ICON_SIZES.M)}
  />
));
