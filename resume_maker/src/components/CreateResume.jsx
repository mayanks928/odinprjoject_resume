import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./CreateResume.css";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import PropTypes from "prop-types";
function educationObject() {
  return {
    educationId: uuidv4(),
    educationSchoolName: "",
    educationDegree: "",
    educationCity: "",
    educationCountry: "",
    educationStartdate: "",
    educationEnddate: "",
    educationDescription: "",
  };
}
function experienceObject() {
  return {
    experienceId: uuidv4(),
    experienceEmployer: "",
    experienceJobtitle: "",
    experienceCity: "",
    experienceCountry: "",
    experienceStartdate: "",
    experienceEnddate: "",
    experienceDescription: "",
  };
}
function skillObject() {
  return {
    skillId: uuidv4(),
    skillName: "",
    skillInfo: "",
  };
}

function CreateResume({ formData, setFormData }) {
  const [navigateCreateResume, setNavigateCreateResume] = useState("Personal");
  function handleChange(event) {
    // console.log(event);
    let name = event.target.name;
    let value = event.target.value;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
  function handleChangeSpecial(event, property, index) {
    // console.log(event);
    let name = event.target.name;
    let value = event.target.value;
    setFormData((prevFormData) => {
      let newFormData = { ...prevFormData };
      newFormData[property][index][name] = value;
      return newFormData;
    });
  }
  function handleDelete(event, property, index) {
    setFormData((prevFormData) => {
      let newFormData = { ...prevFormData };
      newFormData[property] = newFormData[property].filter(
        (item, i) => i !== index
      );
      return newFormData;
    });
  }
  return (
    <div className="createResumeDiv">
      <div className="navigateCreateResume">
        <button
          className={navigateCreateResume === "Personal" ? "active" : ""}
          onClick={() => setNavigateCreateResume("Personal")}
        >
          Personal Details
        </button>
        <button
          className={navigateCreateResume === "Education" ? "active" : ""}
          onClick={() => setNavigateCreateResume("Education")}
        >
          Education
        </button>
        <button
          className={navigateCreateResume === "Experience" ? "active" : ""}
          onClick={() => setNavigateCreateResume("Experience")}
        >
          Experience
        </button>
        <button
          className={navigateCreateResume === "Skills" ? "active" : ""}
          onClick={() => setNavigateCreateResume("Skills")}
        >
          Skills
        </button>
      </div>
      <form>
        {navigateCreateResume === "Personal" && (
          <PersonalDetails formData={formData} handleChange={handleChange} />
        )}
        {navigateCreateResume === "Education" && (
          <>
            {/* <Education formData={formData} handleChange={handleChange} /> */}
            {formData.education.map((item, index) => (
              <Education
                key={item.educationId}
                formData={item}
                handleChange={(event) => {
                  // console.log("This");
                  handleChangeSpecial(event, "education", index);
                }}
                handleDelete={(event) => {
                  handleDelete(event, "education", index);
                }}
              />
            ))}
            <section className="formsection">
              <button type="button" onClick={addEducation()}>
                Add Education
              </button>
            </section>
          </>
        )}
        {navigateCreateResume === "Experience" && (
          <>
            {formData.experience.map((item, index) => (
              <Experience
                key={item.experienceId}
                formData={item}
                handleChange={(event) => {
                  // console.log("hello");
                  handleChangeSpecial(event, "experience", index);
                }}
                handleDelete={(event) => {
                  handleDelete(event, "experience", index);
                }}
              />
            ))}
            <section className="formsection">
              <button type="button" onClick={addExperience()}>
                Add Experience
              </button>
            </section>
          </>
        )}
        {navigateCreateResume === "Skills" && (
          <>
            {formData.skills.map((item, index) => (
              <Skills
                key={item.skillId}
                formData={item}
                handleChange={(event) => {
                  handleChangeSpecial(event, "skills", index);
                }}
                handleDelete={(event) => {
                  handleDelete(event, "skills", index);
                }}
              />
            ))}
            <section className="formsection">
              <button type="button" onClick={addSkill()}>
                Add Skill
              </button>
            </section>
          </>
        )}
      </form>
    </div>
  );

  function addEducation() {
    return () => {
      setFormData((prev) => ({
        ...prev,
        education: [...prev.education, educationObject()],
      }));
    };
  }

  function addExperience() {
    return () => {
      setFormData((prev) => ({
        ...prev,
        experience: [...prev.experience, experienceObject()],
      }));
    };
  }
  function addSkill() {
    return () => {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skillObject()],
      }));
    };
  }
}
CreateResume.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default CreateResume;
