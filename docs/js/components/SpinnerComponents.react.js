import React from 'react';
import Toolkit from '../../../src/toolkit';

class Spinner extends React.Component {

  render() {

    return(
      <section>
        <h2>Spinner</h2>

        <div className="category row">
            <div className="col-md-3 spinner-container medium">
              <Toolkit.Spinner />
            </div>
          <div className="col-md-9">
            <pre>
              <code className="jsx">
                {"<Toolkit.Spinner/> default no size set"}<br/>
                {'<Toolkit.Spinner size="medium"/>'}<br/>
              </code>
            </pre>
          </div>
        </div>

        <div className="category row">
          <div className="col-md-3 spinner-container small">
            <Toolkit.Spinner size="small"/>
          </div>
          <div className="col-md-9">
            <pre>
              <code className="jsx">
                {'<Toolkit.Spinner size="small"/>'}<br/>
              </code>
            </pre>
          </div>
        </div>

        <div className="category row">
          <div className="col-md-3 spinner-container large">
            <Toolkit.Spinner size="large"/>
          </div>
          <div className="col-md-9">
            <pre>
              <code className="jsx">
                {'<Toolkit.Spinner size="large"/>'}<br/>
              </code>
            </pre>
          </div>
        </div>
      </section>

    )
  }

}

export default Spinner;
