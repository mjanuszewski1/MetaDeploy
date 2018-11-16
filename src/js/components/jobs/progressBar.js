// @flow

import * as React from 'react';
import classNames from 'classnames';

import type { Job as JobType } from 'jobs/reducer';

// Progress Bar has not been implemented yet in design-system-react
// https://github.com/salesforce/design-system-react/issues/1365
const ProgressBar = ({ job }: { job: JobType }): React.Node => {
  const progress = Math.min(
    Math.round((job.completed_steps.length / job.steps.length) * 100),
    100,
  );
  const id = `${job.id}-progress`;
  return (
    <div>
      <div
        id={id}
        className="slds-grid
          slds-grid_align-spread
          slds-p-bottom_x-small
          slds-text-heading_small"
      >
        <span>
          <strong>Installation Progress</strong>
        </span>
        <span aria-hidden="true">
          <strong>{progress}% Complete</strong>
        </span>
      </div>
      <div
        className="slds-progress-bar
          slds-progress-bar_large"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={progress}
        aria-labelledby={id}
        role="progressbar"
      >
        <span
          className={classNames('slds-progress-bar__value', {
            'slds-progress-bar__value_success': progress === 100,
          })}
          style={{ width: `${progress}%` }}
        >
          <span className="slds-assistive-text">Progress: {progress}%</span>
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
