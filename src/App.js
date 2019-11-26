import React from 'react';
import FileUpload from "./Components/components/FileUpload"
import Emp from './Components/components/Emp'

function App(props) {
  console.log('app his', props);

  return (
    <div className="container">
      <FileUpload />
      <Emp {...props}/>
    </div>
  );
}

export default App;


