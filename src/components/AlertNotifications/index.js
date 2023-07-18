// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="message-container">
        <h1 className="heading success">Success</h1>
        <p className="text">You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="error icon" />
      <div className="message-container">
        <h1 className="heading error">Error</h1>
        <p className="text">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="warning icon" />
      <div className="message-container">
        <h1 className="heading warning">Warning</h1>
        <p className="text">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="info icon" />
      <div className="message-container">
        <h1 className="heading info">Info</h1>
        <p className="text">Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  return (
    <div className="alert-container">
      <div className="responsive-container">
        <h1 className="alert-heading">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}

export default AlertNotifications
