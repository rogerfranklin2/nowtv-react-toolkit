import React from 'react';
import Toolkit from '../../../dist/toolkit';

class Notifications extends React.Component {

  render() {
    return (
      <section className="notification">
        <h2>Notifications</h2>
        <h3>Success</h3>

        <div className="category row">
          <div className="col-md-6">
            <Toolkit.Notification classes='green' title='Success!'>Well done! You made a notification.</Toolkit.Notification>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Toolkit.Notification classes='green' title='Success!'>Well done! You made a notification.</Toolkit.Notification>"}
              </code>
            </pre>
          </div>
        </div>

        <h3>Warning</h3>

        <div className="category row">
          <div className="col-md-6">
            <Toolkit.Notification classes='red' title='Booo!'>You made an unhappy notification.</Toolkit.Notification>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Toolkit.Notification classes='red' title='Booo!'>You made an unhappy notification.</Toolkit.Notification>"}
              </code>
            </pre>
          </div>
        </div>

        <h3>Info</h3>

        <div className="category row">
          <div className="col-md-6">
            <Toolkit.Notification classes='blue' title='Just Information!'>You made the most generic notification ever.</Toolkit.Notification>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Toolkit.Notification classes='blue' title='Just Information!'>You made the most generic notification ever.</Toolkit.Notification>"}
              </code>
            </pre>
          </div>
        </div>
      </section>
    )
  }
}

export default Notifications;
