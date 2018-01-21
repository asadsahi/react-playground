import React from 'react';

let FormWrapper = ComponentToWrap => props => (
  <div className="form-wrapper row justify-content-center">
    <div className="col-sm-6 col-sm-offset-3">
      <ComponentToWrap {...props} />
    </div>
  </div>
);

export { FormWrapper };
