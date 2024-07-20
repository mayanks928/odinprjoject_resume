// import { useState } from "react";
import CreateResume from "./components/CreateResume";
import PreviewResume from "./components/PreviewResume";
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    personalFullname: "",
    personalJobtitle: "",
    personalEmail: "",
    personalPhonenumber: "",
    personalAddress: "",

    education: [],

    experience: [],

    skills: [],
  });
  return (
    <>
      <main>
        <h2>Create Resume</h2>
        <p>Enter your relevant details:</p>
        <div className="resumeDiv">
          <CreateResume formData={formData} setFormData={setFormData}/>
          <PreviewResume formData={formData} />
        </div>
      </main>
    </>
  );
}

export default App;
