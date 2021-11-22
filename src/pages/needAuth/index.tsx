import React from 'react';

function NeetAuthPage() {
  return (
    <div>
      <h1>NeedAuth Page</h1>
      <p>
        You can't get here for the moment because of{' '}
        <code>IndexPage.wrappers = ['@/wrappers/auth']</code>
      </p>
    </div>
  );
}

NeetAuthPage.wrappers = ['@/wrappers/auth'];
export default NeetAuthPage;
