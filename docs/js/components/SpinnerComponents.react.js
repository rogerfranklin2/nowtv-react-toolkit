import React from 'react';
import Spinner from '../../../src/components/Spinner/Spinner.react';

class Spinners extends React.Component {

  render() {

    return(
      <section>
        <h2>Spinner</h2>

        <div className="category row">
            <div className="col-md-3 spinner-container medium">
              <Spinner />
            </div>
          <div className="col-md-9">
            <pre>
              <code className="jsx">
                {"<Spinner/> default no size set"}<br/>
                {'<Spinner size="medium"/>'}<br/>
              </code>
            </pre>
          </div>
        </div>

        <div className="category row">
          <div className="col-md-3 spinner-container small">
            <Spinner size="small"/>
          </div>
          <div className="col-md-9">
            <pre>
              <code className="jsx">
                {'<Spinner size="small"/>'}<br/>
              </code>
            </pre>
          </div>
        </div>

        <div className="category row">
          <div className="col-md-3 spinner-container large">
            <Spinner size="large"/>
          </div>
          <div className="col-md-9">
            <pre>
              <code className="jsx">
                {'<Spinner size="large"/>'}<br/>
              </code>
            </pre>
          </div>
        </div>
      </section>

    )
  }

}

export default Spinners;
