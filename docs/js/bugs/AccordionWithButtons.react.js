import React from 'react';
import Toolkit from '../../../src/toolkit';

class Accordions extends React.Component {

  render() {
    return (
      <section className="inputs">
        <h2>Accordion with Buttons</h2>
        <p>Clicking the button should not close the accordion</p>
        <div className="category row">
          <div className="col-md-6">
            <Toolkit.Accordion>
              <Toolkit.AccordionItem title="Lorem Ipsum...">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et risus commodo turpis semper laoreet. Proin at sem et sapien cursus sodales. Cras dictum nisi vitae fermentum laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam facilisis pulvinar sagittis. Quisque vel nisl at massa blandit fermentum vel eget elit. Nullam velit urna, bibendum sed lorem quis, efficitur maximus neque.</p>
                <Toolkit.Button classes="primary green">Im a button :)</Toolkit.Button>
              </Toolkit.AccordionItem>
              <Toolkit.AccordionItem title="Continued..." maxHeight={150}>
                <Toolkit.Button classes="primary green">Im another button :)</Toolkit.Button>
              </Toolkit.AccordionItem>
            </Toolkit.Accordion>
          </div>
        </div>
      </section>
    )
  }
}

export default Accordions;
