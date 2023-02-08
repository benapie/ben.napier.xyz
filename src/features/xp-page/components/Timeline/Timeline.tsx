import { NonEmptyArray } from "types/NonEmptyArray";
import { EntryData } from "../../types/EntryData";
import { Entry } from "./Entry";
import * as Styled from "./styles/Timeline.styles";

const entries = [
  {
    title: "Sofware Development Engineer",
    subtitle: "Amazon",
    body: "Working on Prime Video for living room devices.",
    date: "2022-?",
  },
  {
    title: "MSci Maths and CompSci",
    subtitle: "Durham University",
    body: "Dissertation in topological data analysis: an approach to data science using techniques from topology. Taught mathematics problems classes for undergraduates, responsible for assessing students work.",
    date: "2018-2022",
  },
  {
    title: "Industrial placement",
    subtitle: "Materials Processing Institute",
    body: "Placement year prior to university, then internships each summer throughout university. Focused on IoT software development (Go, Node.js, Kepware) and scientific software development (C#). Awarded the Millman Scholarship.",
    date: "2017-2021",
  },
] satisfies NonEmptyArray<EntryData>;

export const Timeline = () => (
  <Styled.Timeline>
    {entries.map((entryData, index) => (
      <Entry
        direction={index % 2 === 0 ? "ltr" : "rtl"}
        data={entryData}
        key={`${entryData.title}${entryData.date}`}
      />
    ))}
  </Styled.Timeline>
);
