import "./PreviewResume.css";
import PropTypes from "prop-types";

const EducationItem = ({ item }) => {
  return (
    <div className="contents">
      <div className="heading">
        <p className="bold">
          {item.educationSchoolName} , {item.educationDegree}
        </p>
        <p className="date">
          {item.educationStartdate} - {item.educationEnddate}
        </p>
      </div>
      <p className="other">{item.educationDescription} </p>
    </div>
  );
};
const ExperienceItem = ({ item }) => {
  return (
    <div className="contents">
      <div className="heading">
        <p className="bold">
          {item.experienceJobtitle} , {item.experienceEmployer}
        </p>
        <p className="date">
          {item.experienceStartdate} - {item.experienceEnddate}
        </p>
      </div>
      <p className="other">{item.experienceDescription} </p>
    </div>
  );
};
const SkillItem = ({ item }) => {
  return (
    <div className="contents">
      <div className="skill">
        <p className="bold">{item.skillName}</p>
        <p className="description">{item.skillInfo}</p>
      </div>
    </div>
  );
};
function PreviewResume({ formData }) {
  return (
    <div className="previewResumeDiv">
      <div className="resumePages">
        <div className="section personalDetails">
          <h3>{formData.personalFullname}</h3>
          <div className="contents">
            <ul>
              <li>{formData.personalJobtitle}</li>
              <li>{formData.personalEmail}</li>
              <li>{formData.personalPhonenumber}</li>
              <li>{formData.personalAddress}</li>
            </ul>
          </div>
        </div>
        <div className="section educationSection">
          <h3>Education</h3>
          {formData.education.map((item) => (
            <EducationItem key={item.educationId} item={item} />
          ))}
        </div>
        <div className="section skillsSection">
          <h3>Skills</h3>
          {formData.skills.map((item) => (
            <SkillItem key={item.skillId} item={item} />
          ))}
        </div>
        <div className="section experienceSection">
          <h3>Experience</h3>
          {formData.experience.map((item) => (
            <ExperienceItem key={item.educationId} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
PreviewResume.propTypes = {
  formData: PropTypes.object.isRequired,
};
EducationItem.propTypes = {
  item: PropTypes.object.isRequired,
};
ExperienceItem.propTypes = {
  item: PropTypes.object.isRequired,
};
SkillItem.propTypes={
  item:PropTypes.object.isRequired,
}
export default PreviewResume;
