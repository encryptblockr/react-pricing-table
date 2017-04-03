import React, { Component } from 'react';

class ChartNotes extends Component {

  chartNotes;

  componentDidMount() {
    this.chartNotes.querySelectorAll(".expandable").forEach((note) => {
      note.dataset.initialHeight = `${note.offsetHeight}`;
      note.setAttribute('style', `flex: 0 0 ${note.offsetHeight}px`);

      note.addEventListener('click', () => {
        note.classList.toggle('active');
        const nextHeight = note.classList.contains('active') ? note.scrollHeight : note.dataset.initialHeight;
        note.setAttribute('style', `flex: 0 0 ${nextHeight}px`);
      })
    })
  }

  render() {
    return (
      <div className="reverse strong bg-dark lr-outset" ref={ref => this.chartNotes = ref}>
          <div className="text-green2">All plans include:</div>
          <div className="flex tb-padding-2">
            <div className="flex-item">
              <ul className="flex-column">
                <li className="expandable">
                  <div className="expandable-base">
                    <span>Extensions from our preferred extension library</span>
                    <span className="fa fa-question-circle expansion-icon"></span>
                  </div>
                  <div className="expansion">  
                    <p>We use some the best premium templates and most useful extensions available for Joomla. And their available to you to enhance your website.*</p>
                    <p>See our <a href="#" title="full list of extensions" target="blank">full list of available extensions</a>.</p>
                    <p>* Time to install and set up is counted against your monthly hours. Does not include transfer of license or installation files.</p>
                  </div>
                </li>
              </ul>
              <ul className="flex-column">
                <li className="expandable">
                  <div className="expandable-base">
                    <span>Unlimited work requests by phone, email or web</span>
                    <span className="fa fa-question-circle expansion-icon"></span>
                  </div>
                  <div className="expansion">  
                    <p>There are no caps on asking us to do work. We charge for work, not listening.</p>
                  </div>
                </li>
              </ul>
              <ul>
                <li>One round of revisions on all work requests</li>
                <li>Estimates before starting work</li>
                <li>Detailing monthly work logs</li>
              </ul>
            </div>
            <div className="flex-item">
              <ul className="flex-column">
                <li className="expandable">
                  <div className="expandable-base">
                    <span>Monthly system and extension updates</span>
                    <span className="fa fa-question-circle expansion-icon"></span>
                  </div>
                  <div className="expansion">  
                    <p>As long as you're on a plan or have active hours, we'll update your website technology to the latest versions.</p>
                  </div>
                </li>
              </ul>
              <ul className="flex-column">
                <li className="expandable">
                  <div className="expandable-base">
                    <span>Weekly database and image backups</span>
                    <span className="fa fa-question-circle expansion-icon"></span>
                  </div>
                  <div className="expansion">  
                    <p>Your files and images are safely backed up in case you need to recover an older image or web page.</p>
                  </div>
                </li>
              </ul>
              <ul className="flex-column">
                <li className="expandable">
                  <div className="expandable-base">
                    <span>Multi-platform browser testing</span>
                    <span className="fa fa-question-circle expansion-icon"></span>
                  </div>
                  <div className="expansion">  
                    <p>On every project, we test the top 90% of browsers and versions currently being used. These include the latest versions of Chrome, Safari, Firefox, Explorer and Opera.</p>
                  </div>
                </li>
              </ul>
              <ul className="flex-column">
                <li className="expandable">
                  <div className="expandable-base">
                    <span>24/7 system monitoring</span>
                    <span className="fa fa-question-circle expansion-icon"></span>
                  </div>
                  <div className="expansion">  
                    <p>We have an automated system that watches your website for unusual behavior or down-time. We're alerted immediately and can respond quickly if something goes wrong.</p>
                  </div>
                </li>
              </ul>
              <ul className="flex-column">
                <li>Pay by PayPal or Credit Card</li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

export default ChartNotes;
