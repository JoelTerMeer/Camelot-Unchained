/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @Author: Andrew L. Jackson (jacksonal300@gmail.com)
 * @Date: 2017-03-30 11:11:15
 * @Last Modified by: Andrew L. Jackson (jacksonal300@gmail.com)
 * @Last Modified time: 2017-03-30 11:13:15
 */

import {events, core} from 'camelot-unchained';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AnnouncementState {
  public message: string = '';
}

class AnnouncementProps {}

class Announcement extends React.Component<AnnouncementProps, AnnouncementState> {
  
  constructor(props: AnnouncementProps) {
    super(props);
  }

  public render() {
    const messageClassNames = 'message ' + (this.state.message.length < 20 ? 'large ' : '');
    let announcement: any;
    if (this.state.message) {
      announcement = (
        <div className='announcement' key={this.state.message}>
          <div className={messageClassNames}>{this.state.message}</div>
        </div>
      );
    }

    return (
      <ReactCSSTransitionGroup transitionName='announcement' transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {announcement}
      </ReactCSSTransitionGroup>
    );
  }
  
  private onMessage = (eventData: any) => {
    const announcement = eventData as core.Announcement;
    if (announcement.type !== core.announcementType.POPUP) return;
    this.setState({message: announcement.message});
    setTimeout(() => {
      this.setState({message: ''});
    }, 20000);
  }
  
  private componentWillMount() {
    events.on('handlesAnnouncements', this.onMessage);
    this.setState({message: ''});
  }
}

export default Announcement;
