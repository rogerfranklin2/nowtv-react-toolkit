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
            <Toolkit.Notification classes='success' title='Success!'>Well done! You made a notification.</Toolkit.Notification>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Toolkit.Notification classes='success' title='Success!'>Well done! You made a notification.</Toolkit.Notification>"}
              </code>
            </pre>
          </div>
        </div>

        <h3>Warning</h3>

        <div className="category row">
          <div className="col-md-6">
            <Toolkit.Notification classes='warning' title='Booo!'>You made an unhappy notification.</Toolkit.Notification>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Toolkit.Notification classes='warning' title='Booo!'>You made an unhappy notification.</Toolkit.Notification>"}
              </code>
            </pre>
          </div>
        </div>

        <h3>Info</h3>

        <div className="category row">
          <div className="col-md-6">
            <Toolkit.Notification classes='info' title='Just Information!'>You made the most generic notification ever.</Toolkit.Notification>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Toolkit.Notification classes='info' title='Just Information!'>You made the most generic notification ever.</Toolkit.Notification>"}
              </code>
            </pre>
          </div>
        </div>

        <h3>Hey, look out!</h3>

        <div className="category row">
          <div className="col-md-6">
            <Toolkit.Notification classes='caution' title='Be careful!'>You made a warning notification.</Toolkit.Notification>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Toolkit.Notification classes='caution' title='Be careful!'>You made a warning notification.</Toolkit.Notification>"}
              </code>
            </pre>
          </div>
        </div>

        <h3>Icon override</h3>

        <div className="category row">
          <div className="col-md-6">
            <Toolkit.Notification classes='info success-icon' title='Overide Icon'>You made the most generic notification ever overriding the icon.</Toolkit.Notification>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Toolkit.Notification classes='info success-icon' title='Overide Icon'>You made the most generic notification ever overriding the icon.</Toolkit.Notification>"}
              </code>
            </pre>
          </div>
        </div>

        <h3>Non dismissable</h3>

        <div className="category row">
          <div className="col-md-6">
            <Toolkit.Notification classes='warning' title="You can't ignore me" dismissable='false'>You must change your card details as your card is now expired.</Toolkit.Notification>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Toolkit.Notification classes='warning' title='You can\'t ignore me' dismissable='false'>You must change your card details as your card is now expired.</Toolkit.Notification>"}
              </code>
            </pre>
          </div>
        </div>
      </section>
    )
  }
}

export default Notifications;
