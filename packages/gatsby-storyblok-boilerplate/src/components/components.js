import ComponentNotFound from "./component_not_found";
import Page from "./page";
import Blank from "./blank";
import Section from "./Section/section";
import Row from "./Row/row";
import Column from "./Column/column";
import TextBlock from "./TextBlock/text-block";
import { CommonTextBlock } from "@hsey/common";

const ComponentList = {
  page: Page,
  blank: Blank,
  section: Section,
  row: Row,
  column: Column,
  "text-block": TextBlock,
  "common-text-block": CommonTextBlock
};

const Components = type => {
  if (typeof ComponentList[type] === "undefined") {
    return ComponentNotFound;
  }
  return ComponentList[type];
};

export default Components;
