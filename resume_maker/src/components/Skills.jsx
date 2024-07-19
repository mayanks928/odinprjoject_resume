import PropTypes from "prop-types";
import { useState } from "react";

const EditSkills = ({ formData, handleChange, setEditMode, handleDelete }) => {
  return (
    <section className="skills formsection">
      <h3>Skill:</h3>
      <div className="formrow">
        <div className="formgroup fullwidth">
          <label htmlFor="skillName">Skill:</label>
          <input
            type="text"
            name="skillName"
            id="skillName"
            value={formData.skillName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="formrow">
        <div className="formgroup fullwidth">
          <label htmlFor="skillInfo">Info:</label>
          <input
            type="text"
            name="skillInfo"
            id="skillInfo"
            value={formData.skillInfo}
            onChange={handleChange}
          />
        </div>
      </div>

      <button type="button" onClick={() => setEditMode((prev) => !prev)}>
        Save
      </button>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </section>
  );
};
const PreviewSkills = ({ formData, setEditMode }) => {
  return (
    <section className="formsection">
      <div className="formrow">
        <label>{formData.skillName ? formData.skillName : "Skill Name"}</label>
      </div>
      <div className="formrow">
        <label>{formData.skillInfo ? formData.skillInfo : "Skill Info"}</label>
      </div>
      <button type="button" onClick={() => setEditMode((prev) => !prev)}>
        Edit
      </button>
    </section>
  );
};
function Skills({ formData, handleChange, handleDelete }) {
    const [editMode, setEditMode] = useState(false);
  return (
    <>
    {editMode ? (
      <EditSkills
        formData={formData}
        handleChange={handleChange}
        setEditMode={setEditMode}
        handleDelete={handleDelete}
      />
    ) : (
      <PreviewSkills formData={formData} setEditMode={setEditMode} />
    )}
  </>
  )
}

Skills.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
EditSkills.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setEditMode: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
PreviewSkills.propTypes = {
  formData: PropTypes.object.isRequired,
  setEditMode: PropTypes.func.isRequired,
};
export default Skills;
