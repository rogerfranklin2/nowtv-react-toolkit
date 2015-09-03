import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Links extends React.Component {
  render() {
    return (
      <section>
        <h2>Text Links</h2>
        
        <div className="category row">
          <div className="col-md-6">
            <a className="now-link">Standard Link</a>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<a className='now-link'>Standard Link</a>"}
              </code>
            </pre>
          </div>
        </div>

        <div className="category row">
          <div className="col-md-6">
            <a className="now-link disabled">Disabled Link</a>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<a className='now-link disabled'>Disabled Link</a>"}
              </code>
            </pre>
          </div>
        </div>
      </section>
     )
   }

}

export default Links;
