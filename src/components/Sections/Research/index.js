import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

import Section from "..";

const REFERENCES = {
  forgetting: (() => (
    <div className="m-1">
      <p className="lead small">Selected References</p>
      <ul className="text-muted">
        <li>
          McBride, D. M. (2015). Implicit memory. In R. Scott &amp; S. Kosslyn
          (Eds.), <em>Emerging Trends in the Social and Behavioral Sciences</em>
          . New Jersey: Wiley &amp; Sons.
        </li>
        <li>
          McBride, D. M., &amp; Dosher, B. A. (1999). Forgetting rates are
          similar in conscious and automatic memory: A process dissociation
          study.
          <em>
            Journal of Experimental Psychology: Learning, Memory, and Cognition,
          </em>
          25, 583-607.
        </li>
        <li>
          McBride, D. M., &amp; Dosher, B. A. (1997). A comparison of forgetting
          in an implicit and explicit memory task.
          <em> Journal of Experimental Psychology: General</em>, 126, 371-392.
        </li>
      </ul>
    </div>
  ))(),
  falseMemory: (() => (
    <div className="m-1">
      <p className="lead small">Selected References</p>
      <ul className="text-muted">
        <li>
          Coane, J. H., McBride, D. M., &amp; Xu, S. (2020). The feature boost
          in false memory: The roles of monitoring and critical item
          identifiability. <em>Memory</em>, 28, 481-493.
          <a
            href="https://doi.org/10.1080/09658211.2020.1735445"
            rel="noopener noreferrer"
            target="_blank"

          >
            DOI
          </a>
        </li>
        <li>
          McBride, D. M., Coane, J. H., Xu, S., Feng, Y., &amp; Yu, Z. (2019).
          Short-term false memories vary as a function of list type.
          <em>Quarterly Journal of Experimental Psychology</em>, 72, 2726-2741.
        </li>
        <li>
          Coane, J. H, McBride, D. M., Raulerson, B. A. III, &amp; Jordan, J. S.
          (2007). False memory in a short-term memory task.
          <em>Experimental Psychology</em>, 54, 62-70.
        </li>
      </ul>
    </div>
  ))(),
  memoryForPictures: (() => (
    <div className="m-1">
      <p className="lead small">Selected References</p>
      <ul className="text-muted">
        <li>
          McBride, D. M., &amp; Dosher, B. A. (2002). A comparison of conscious
          and automatic memory processes for picture and word stimuli: A process
          dissociation analysis. <em>Consciousness and Cognition.</em> 11,
          423-460.
        </li>
      </ul>
    </div>
  ))(),
  prospectiveMemory: (() => (
    <div className="m-1">
      <p className="lead small">Selected References</p>
      <ul className="text-muted">
        <li>

          McBride, D. M., &amp; Flaherty, M. (in press). Comparing costs in
          time-based and event-based prospective memory. <em>Memory</em>.
          <a
            rel="noopener noreferrer"
            href="https://doi.org/10.1080/09658211.2020.1798463"
            target="_blank"
          >
            DOI
          </a>
        </li>
        <li>
          Conte, A. M., &amp; McBride, D. M. (2018). Comparing time-based and
          event-based prospective memory over short delays. <em>Memory</em>, 26,
          936-945.
        </li>
        <li>
          McBride, D. M., &amp; Workman, R. A. (2017). Is prospective memory
          unique? A comparison of prospective and retrospective memory. In B.
          Ross (Ed.), <em>Psychology of Learning and Motivation</em>, vol. 67.
          San Diego, CA: Academic Press/Elsevier.
        </li>
      </ul>
    </div>
  ))(),
  cognitiveTaskChoices: (() => (
    <div className="m-3">
      <p className="lead small">Selected References</p>
      <ul className="text-muted">
        <li>
          Rosenbaum, D.A., Fournier, L.R., Levy-Tzedek, S., McBride, D.M.,
          Rosenthal, R., Sauerberger, K. … Zentall, T.R. (2019). Sooner rather
          than later: Pre-crastination rather than procrastination.
          <em> Current Directions in Psychological Science </em>, 28, 229-233.
        </li>
        <li>
          VonderHaar, R. L., McBride, D. M., &amp; Rosenbaum, D. A. (2019). Task
          order choices in cognitive and perceptual-motor tasks: The
          cognitive-load-reduction (CLEAR) hypothesis.
          <em>Attention Perception &amp; Psychophysics</em>, 81, 1-9
        </li>
      </ul>
    </div>
  ))(),
};

const styles = {
  background: "white",
  borderRadius: " 25px",
  borderBottom: " 3px solid white",
  borderRight: " 3px solid white",
  borderLeft: " 3px solid white",
};

const toggleStyles = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: " 24px",
  color: " #395BAC",
  textAlign: " left",
  width: "100%",
};

const ResearchCard = ({ onToggle, id, activeKey, eventKey, title, body }) => {
  return (
    <>
      <div style={styles} id={`${id}-heading`}>
        <Accordion.Toggle
          variant="link"
          eventKey={eventKey}
          style={toggleStyles}
          as={Button}
          onClick={() => onToggle(eventKey)}
        >
          <p className="mb-0" style={{ fontWeight: 400, fontSize: "24px" }}>
            {title}
          </p>
          <span
            className="js-rotate-if-collapsed"
            style={{ marginTop: "auto" }}
          >
            <i
              className={`indicator fas fa-chevron-${
                activeKey === eventKey ? "down" : "left"
              }`}
            ></i>
          </span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={eventKey}>
          <div>
            <div
              className="card-body"
              style={{ backgroundColor: "whitesmoke" }}
            >
              {body}
            </div>
            {REFERENCES[id]}
          </div>
        </Accordion.Collapse>
      </div>
    </>
  );
};
export default function Research() {
  const [activeKey, setActiveKey] = useState("0");

  const onToggle = (keyString) => void setActiveKey(keyString);

  const accordionItemProps = {
    onToggle,
  };

  return (
    <Section title="Research" id="research" className="section bg-light-accent">
      <div className="col-sm-12 mx-auto">
        <Accordion
          defaultActiveKey={activeKey}
          onSelect={(activeKey) => {
            setActiveKey(activeKey);
          }}
        >
          <ResearchCard
            title="Cognitive Task Choices"
            body={`How do we decide the order of tasks we need to complete? A recent finding suggests that in some cases,
                  people will complete a task as soon as possible, even if doing so requires extra effort (Rosenbaum et
                  al., 2014). Some of my current work is investigating this effect in cognitive tasks to better
                  understand how we choose when to complete cognitive tasks and whether this choice is based on reducing
                  ones cognitive load.`}
            id="cognitiveTaskChoices"
            eventKey="0"
            activeKey={activeKey}
            {...accordionItemProps}
          ></ResearchCard>
          <ResearchCard
            title="Prospective Memory"
            body={` Prospective memory (PM) is used when we try to remember to perform a task at a particular time or after a specific event. For example, we use prospective memory when we remember to take medication each night before we go to bed. When we walk into the kitchen to pour ourselves a drink and forget why we went to the kitchen because we remembered three other things we needed to do on the way, our prospective memory has failed us.​​ `}
            id="prospectiveMemory"
            eventKey="1"
            activeKey={activeKey}
            {...accordionItemProps}
          ></ResearchCard>
          <ResearchCard
            title="Memory for Pictures"
            body={` My dissertation project tested current theories of the picture superiority effect (better memory for pictures than words). A popular theory is dual coding (Paivio, 1991), which states that pictures are better remembered because they are encoded with two specific codes (pictorial and verbal) while words elicit just a single code (verbal). The extra code associated with pictures give them an advantage during retrieval.​ `}
            id="memoryForPictures"
            eventKey="2"
            activeKey={activeKey}
            {...accordionItemProps}
          ></ResearchCard>
          <ResearchCard
            title="False Memory"
            body={`In 1995, Roediger and McDermott revived the Deese (1959) paradigm for creating false memories in a laboratory experiment. Using this procedure, Roediger and McDermott showed that subjects will falsely recall and recognize items from a studied word list that were not shown. The false items were induced by lists of words that are strongly associated to the critical item (e.g., falsely recall “sleep” is given “dream”, “bed”, “rest”, “awake”, etc). Subjects will even report an experience of recalling the context with which the critical item appeared (Payne, Ellie, & Blackwell, 1996).​ `}
            id="falseMemory"
            eventKey="3"
            activeKey={activeKey}
            {...accordionItemProps}
          ></ResearchCard>
          <ResearchCard
            title="Implicit Memory and Forgetting"
            body={`My research on implicit and explicit memory (also automatic and conscious memory) has focused on what the differences really are. One popular view of the implicit/explicit distinction is that of separable memory systems for the two forms of memory. Several authors (e.g., Dosher & Rosedale, 1991; Nadel, 1994; Schacter & Tulving, 1994) have cited forgetting differences as an important criterion for distinguishing memory systems. Along these lines, claims of differing forgetting rates have been made for implicit and explicit tasks. ​ `}
            id="forgetting"
            eventKey="4"
            activeKey={activeKey}
            {...accordionItemProps}
          ></ResearchCard>
        </Accordion>
      </div>
    </Section>
  );
}
