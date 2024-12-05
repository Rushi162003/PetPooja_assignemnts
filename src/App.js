import './App.css';
import FormContainer from './componants/FormContainer';
import Home from './componants/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './componants/Navbar';
import DatePickerContainer from './componants/DatePickerContainer';

function App() {
  const handleDateChange = (dateRange) => {
    console.log("Selected Date Range:", dateRange);
    alert(dateRange.from)
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/form" element={<FormContainer />}></Route>
        <Route path='/datePicker' element={<DatePickerContainer
          onDateChange={handleDateChange}
          styles={{
            container: { padding: "10px", border: "1px solid #ccc" },
            buttons: { margin: "5px", padding: "10px" },
            inputs: { margin: "5px" },
          }}
        />}></Route>
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
