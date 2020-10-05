import React, { useState } from 'react';

import Header from './components/Header'
import Body from './components/Body'

function app() {
  const [app_location, setAppLocation] = useState(global.i18n.home)

  const changeAppLocation = (new_location) => {
    setAppLocation(new_location)
  }
  
  return (
    <div className="d-flex flex-column m-1">
      <Header changeAppLocation={changeAppLocation} subtitle={app_location} />
      <Body changeAppLocation={changeAppLocation} />
    </div>
  )

}

export default app
