import React from 'react';
import Notification from '../../../src/components/Notification/Notification.react';

class Notifications extends React.Component {

  render() {
    return (
      <section className="notification">
        <h2>Notifications</h2>
        <h3>Success</h3>

        <div className="category row">
          <div className="col-md-6">
            <Notification classes='success' title='Success!'>Well done! You made a notification.</Notification>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Notification classes='success' title='Success!'>Well done! You made a notification.</Notification>"}
              </code>
            </pre>
          </div>
        </div>

        <h3>Success (no title)</h3>
        <div className="category row">
          <div className="col-md-6">
            <Notification classes='green'>Well done! You made a notification.</Notification>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Notification classes='green'>Well done! You made a notification.</Notification>"}
              </code>
            </pre>
          </div>
        </div>

        <h3>Warning</h3>

        <div className="category row">
          <div className="col-md-6">
            <Notification classes='warning' title='Booo!'>You made an unhappy notification.</Notification>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Notification classes='warning' title='Booo!'>You made an unhappy notification.</Notification>"}
              </code>
            </pre>
          </div>
        </div>

        <h3>Info</h3>

        <div className="category row">
          <div className="col-md-6">
            <Notification classes='info' title='Just Information!'>You made the most generic notification ever.</Notification>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Notification classes='info' title='Just Information!'>You made the most generic notification ever.</Notification>"}
              </code>
            </pre>
          </div>
        </div>

        <h3>Hey, look out!</h3>

        <div className="category row">
          <div className="col-md-6">
            <Notification classes='caution' title='Be careful!'>You made a warning notification.</Notification>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Notification classes='caution' title='Be careful!'>You made a warning notification.</Notification>"}
              </code>
            </pre>
          </div>
        </div>

        <h3>Icon override</h3>

        <div className="category row">
          <div className="col-md-6">
            <Notification classes='info success-icon' title='Overide Icon'>You made the most generic notification ever overriding the icon.</Notification>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Notification classes='info success-icon' title='Overide Icon'>You made the most generic notification ever overriding the icon.</Notification>"}
              </code>
            </pre>
          </div>
        </div>

        <h3>Non dismissable</h3>

        <div className="category row">
          <div className="col-md-6">
            <Notification classes='warning' title="You can't ignore me" dismissable={ false }>You must change your card details as your card is now expired.</Notification>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Notification classes='warning' title='You can\'t ignore me' dismissable={ false }>You must change your card details as your card is now expired.</Notification>"}
              </code>
            </pre>
          </div>
        </div>

        <h3>Dismissable with callback</h3>

        <div className="category row">
          <div className="col-md-6">
            <Notification classes='info' title="Title" onClose={function() {alert('called on dismiss')}}>Content</Notification>
          </div>
          <div className="col-md-6">
            <pre>
              <code className="jsx">
                {"<Notification classes='info' title='Title' onClose={function() {alert('called on dismiss')}}>Content</Notification>"}
              </code>
            </pre>
          </div>
        </div>
      </section>
    )
  }
}

export default Notifications;
