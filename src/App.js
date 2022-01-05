
// import Parent from '../src/P_to_C/Parent';                         // data pass  parent Component to Child Component

// import Parent from '../src/C_to_P/Parent';                         // data pass  Child Component to Parent  Component

// import Index from '../src/IncDecCount';                            // increment  decrement  component

//import Form from '../src/InputField/Form';                          // FORM and show data

// import Api from '../src/DataFromAPI/DataApi';                         // handle API

// import Card from '../src/Card/Card';                                 

import New from '../src/Card/nowplaying/index';

import Carousal from '../src/Carousal/Carousal';
import BootstrapMultiCarousal from './BootstrapCarousal/BootstrapCarousal';
import Fun from './IncDecCount/fun';
import Form from './InputField/Form';
import JsonData from './JsonData/JsonData';
import MultiItemCarousal from './MultiItemCarousal/MultiItemCarousal';

function App() {
  return (
    <>
      {/* <Parent/> */}
      {/* <Index />  */}
      {/* <Form/> */}
      {/* <Api /> */}
      {/* <Card /> */}

      <Carousal />

      <MultiItemCarousal title='Best Selling Products' />

      {/* <MultiItemCarousal title ='Products'/> */}

      <BootstrapMultiCarousal />

      <MultiItemCarousal title="New Arivals" />

      <New />
      <Form />

      {/* <JsonData/> */}

      <Fun />

    </>

  );
}

export default App;
