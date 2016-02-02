import React from 'react';
import Toolkit from '../../../src/toolkit';

class Accordions extends React.Component {

  render() {
    return (
      <section className="inputs">
        <h2>Accordions</h2>

        <div className="category row">
          <div className="col-md-6">
            <Toolkit.Accordion>
              <Toolkit.AccordionItem title="Lorem Ipsum...">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et risus commodo turpis semper laoreet. Proin at sem et sapien cursus sodales. Cras dictum nisi vitae fermentum laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam facilisis pulvinar sagittis. Quisque vel nisl at massa blandit fermentum vel eget elit. Nullam velit urna, bibendum sed lorem quis, efficitur maximus neque.</p>

                <p>Pellentesque lobortis tellus sed purus interdum, vitae sagittis ligula fringilla. Proin ultricies interdum eros, at imperdiet lacus aliquet nec. Nam pretium nec odio non molestie. In id gravida quam. Praesent et risus et augue sollicitudin commodo. Ut at risus ut tortor faucibus vulputate at eget felis. Donec consectetur lectus congue purus gravida, nec fringilla elit pharetra. Suspendisse pharetra porta luctus. Integer porta mattis maximus. Phasellus sit amet augue hendrerit, facilisis sem eget, sodales ligula. Aliquam in ultrices arcu, sed sagittis felis. Praesent ultricies in mi quis mollis. Fusce egestas leo eu magna consectetur posuere.</p>
              </Toolkit.AccordionItem>
              <Toolkit.AccordionItem title="Continued...">
                <p>Casdasdasdurabitur a malesuada tortor, eget lacinia metus. Nunc pretium et orci posuere varius. Aliquam nibh lectus, sollicitudin in laoreet ut, aliquet ac purus. Fusce hendrerit nulla efficitur magna rutrum rutrum. Praesent mollis diam mauris, ac dignissim quam porta vitae. Praesent tempor dolor luctus nulla eleifend rutrum vel a justo. Vivamus rutrum quam ligula, non facilisis lacus vestibulum sed. Morbi at aliquet arcu. Etiam congue leo eu vulputate ullamcorper.</p>
                <p>Curabitur a malesuada tortor, eget lacinia metus. Nunc pretium et orci posuere varius. Aliquam nibh lectus, sollicitudin in laoreet ut, aliquet ac purus. Fusce hendrerit nulla efficitur magna rutrum rutrum. Praesent mollis diam mauris, ac dignissim quam porta vitae. Praesent tempor dolor luctus nulla eleifend rutrum vel a justo. Vivamus rutrum quam ligula, non facilisis lacus vestibulum sed. Morbi at aliquet arcu. Etiam congue leo eu vulputate ullamcorper.</p>
                <p>Curabitur a malesuada tortor, eget lacinia metus. Nunc pretium et orci posuere varius. Aliquam nibh lectus, sollicitudin in laoreet ut, aliquet ac purus. Fusce hendrerit nulla efficitur magna rutrum rutrum. Praesent mollis diam mauris, ac dignissim quam porta vitae. Praesent tempor dolor luctus nulla eleifend rutrum vel a justo. Vivamus rutrum quam ligula, non facilisis lacus vestibulum sed. Morbi at aliquet arcu. Etiam congue leo eu vulputate ullamcorper.</p>
                <p>Curabitur a malesuada tortor, eget lacinia metus. Nunc pretium et orci posuere varius. Aliquam nibh lectus, sollicitudin in laoreet ut, aliquet ac purus. Fusce hendrerit nulla efficitur magna rutrum rutrum. Praesent mollis diam mauris, ac dignissim quam porta vitae. Praesent tempor dolor luctus nulla eleifend rutrum vel a justo. Vivamus rutrum quam ligula, non facilisis lacus vestibulum sed. Morbi at aliquet arcu. Etiam congue leo eu vulputate ullamcorper.</p>
                <p>Curabitur a malesuada tortor, eget lacinia metus. Nunc pretium et orci posuere varius. Aliquam nibh lectus, sollicitudin in laoreet ut, aliquet ac purus. Fusce hendrerit nulla efficitur magna rutrum rutrum. Praesent mollis diam mauris, ac dignissim quam porta vitae. Praesent tempor dolor luctus nulla eleifend rutrum vel a justo. Vivamus rutrum quam ligula, non facilisis lacus vestibulum sed. Morbi at aliquet arcu. Etiam congue leo eu vulputate ullamcorper.</p>
                <p>Curabitur a malesuada tortor, eget lacinia metus. Nunc pretium et orci posuere varius. Aliquam nibh lectus, sollicitudin in laoreet ut, aliquet ac purus. Fusce hendrerit nulla efficitur magna rutrum rutrum. Praesent mollis diam mauris, ac dignissim quam porta vitae. Praesent tempor dolor luctus nulla eleifend rutrum vel a justo. Vivamus rutrum quam ligula, non facilisis lacus vestibulum sed. Morbi at aliquet arcu. Etiam congue leo eu vulputate ullamcorper.</p>
              </Toolkit.AccordionItem>
            </Toolkit.Accordion>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Toolkit.Accordion><Toolkit.AccordionItem title='WOO'><p>Look at me</p></Toolkit.AccordionItem></Toolkit.Accordion>"}
              </code>
            </pre>
          </div>
        </div>

        <div className="category row">
          <div className="col-md-6">
            <Toolkit.Accordion type='extended'>
              <Toolkit.AccordionItem title={<h4>Lorem Ipsum...</h4>}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et risus commodo turpis semper laoreet. Proin at sem et sapien cursus sodales. Cras dictum nisi vitae fermentum laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam facilisis pulvinar sagittis. Quisque vel nisl at massa blandit fermentum vel eget elit. Nullam velit urna, bibendum sed lorem quis, efficitur maximus neque.</p>

                <p>Pellentesque lobortis tellus sed purus interdum, vitae sagittis ligula fringilla. Proin ultricies interdum eros, at imperdiet lacus aliquet nec. Nam pretium nec odio non molestie. In id gravida quam. Praesent et risus et augue sollicitudin commodo. Ut at risus ut tortor faucibus vulputate at eget felis. Donec consectetur lectus congue purus gravida, nec fringilla elit pharetra. Suspendisse pharetra porta luctus. Integer porta mattis maximus. Phasellus sit amet augue hendrerit, facilisis sem eget, sodales ligula. Aliquam in ultrices arcu, sed sagittis felis. Praesent ultricies in mi quis mollis. Fusce egestas leo eu magna consectetur posuere.</p>
              </Toolkit.AccordionItem>
              <Toolkit.AccordionItem title={<h4>Continued...</h4>}>
                <p>Casdasdasdurabitur a malesuada tortor, eget lacinia metus. Nunc pretium et orci posuere varius. Aliquam nibh lectus, sollicitudin in laoreet ut, aliquet ac purus. Fusce hendrerit nulla efficitur magna rutrum rutrum. Praesent mollis diam mauris, ac dignissim quam porta vitae. Praesent tempor dolor luctus nulla eleifend rutrum vel a justo. Vivamus rutrum quam ligula, non facilisis lacus vestibulum sed. Morbi at aliquet arcu. Etiam congue leo eu vulputate ullamcorper.</p>
                <p>Curabitur a malesuada tortor, eget lacinia metus. Nunc pretium et orci posuere varius. Aliquam nibh lectus, sollicitudin in laoreet ut, aliquet ac purus. Fusce hendrerit nulla efficitur magna rutrum rutrum. Praesent mollis diam mauris, ac dignissim quam porta vitae. Praesent tempor dolor luctus nulla eleifend rutrum vel a justo. Vivamus rutrum quam ligula, non facilisis lacus vestibulum sed. Morbi at aliquet arcu. Etiam congue leo eu vulputate ullamcorper.</p>
                <p>Curabitur a malesuada tortor, eget lacinia metus. Nunc pretium et orci posuere varius. Aliquam nibh lectus, sollicitudin in laoreet ut, aliquet ac purus. Fusce hendrerit nulla efficitur magna rutrum rutrum. Praesent mollis diam mauris, ac dignissim quam porta vitae. Praesent tempor dolor luctus nulla eleifend rutrum vel a justo. Vivamus rutrum quam ligula, non facilisis lacus vestibulum sed. Morbi at aliquet arcu. Etiam congue leo eu vulputate ullamcorper.</p>
                <p>Curabitur a malesuada tortor, eget lacinia metus. Nunc pretium et orci posuere varius. Aliquam nibh lectus, sollicitudin in laoreet ut, aliquet ac purus. Fusce hendrerit nulla efficitur magna rutrum rutrum. Praesent mollis diam mauris, ac dignissim quam porta vitae. Praesent tempor dolor luctus nulla eleifend rutrum vel a justo. Vivamus rutrum quam ligula, non facilisis lacus vestibulum sed. Morbi at aliquet arcu. Etiam congue leo eu vulputate ullamcorper.</p>
                <p>Curabitur a malesuada tortor, eget lacinia metus. Nunc pretium et orci posuere varius. Aliquam nibh lectus, sollicitudin in laoreet ut, aliquet ac purus. Fusce hendrerit nulla efficitur magna rutrum rutrum. Praesent mollis diam mauris, ac dignissim quam porta vitae. Praesent tempor dolor luctus nulla eleifend rutrum vel a justo. Vivamus rutrum quam ligula, non facilisis lacus vestibulum sed. Morbi at aliquet arcu. Etiam congue leo eu vulputate ullamcorper.</p>
                <p>Curabitur a malesuada tortor, eget lacinia metus. Nunc pretium et orci posuere varius. Aliquam nibh lectus, sollicitudin in laoreet ut, aliquet ac purus. Fusce hendrerit nulla efficitur magna rutrum rutrum. Praesent mollis diam mauris, ac dignissim quam porta vitae. Praesent tempor dolor luctus nulla eleifend rutrum vel a justo. Vivamus rutrum quam ligula, non facilisis lacus vestibulum sed. Morbi at aliquet arcu. Etiam congue leo eu vulputate ullamcorper.</p>
              </Toolkit.AccordionItem>
            </Toolkit.Accordion>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
{`<Toolkit.Accordion type='extended'>
  <Toolkit.AccordionItem title={<h3>Example</h3>}>
    <p>Look at me</p>
  </Toolkit.AccordionItem>
</Toolkit.Accordion>`}
              </code>
            </pre>
          </div>
        </div>
      </section>
    )
  }
}

export default Accordions;
