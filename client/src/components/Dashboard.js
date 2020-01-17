import React from 'react';

import InfoCard from './InfoCard';

const Dashboard = (props) => {

  return (
    <>
      <div className="dash" data-testid="dashboard">
        <InfoCard/>
      </div>
    </>
  )
}

export default Dashboard;