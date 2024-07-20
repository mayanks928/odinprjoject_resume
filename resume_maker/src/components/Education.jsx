import { useState } from "react";
import PropTypes from "prop-types";

const EditEducation = ({
  formData,
  handleChange,
  setEditMode,
  handleDelete,
}) => {
  return (
    <section className="education formsection">
      <h3>Education Details:</h3>
      <div className="formrow">
        <div className="formgroup fullwidth">
          <label htmlFor="educationSchoolName">School:</label>
          <input
            type="text"
            name="educationSchoolName"
            id="educationSchoolName"
            value={formData.educationSchoolName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="formrow">
        <div className="formgroup fullwidth">
          <label htmlFor="educationDegree">Degree:</label>
          <input
            type="text"
            name="educationDegree"
            id="educationDegree"
            value={formData.educationDegree}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="formrow">
        <div className="formgroup halfwidth">
          <label htmlFor="educationCity">City:</label>
          <input
            type="text"
            name="educationCity"
            id="educationCity"
            value={formData.educationCity}
            onChange={handleChange}
          />
        </div>
        <div className="formgroup halfwidth">
          <label htmlFor="educationCountry">Country:</label>
          <input
            type="text"
            name="educationCountry"
            id="educationCountry"
            value={formData.educationCountry}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="formrow">
        <div className="formgroup halfwidth">
          <label htmlFor="educationStartdate">Start Date:</label>
          <input
            type="month"
            name="educationStartdate"
            id="educationStartdate"
            value={formData.educationStartdate}
            onChange={handleChange}
          />
        </div>
        <div className="formgroup halfwidth">
          <label htmlFor="educationEnddate">End Date:</label>
          <input
            type="month"
            name="educationEnddate"
            id="educationEnddate"
            value={formData.educationEnddate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="formrow">
        <div className="formgroup fullwidth">
          <label htmlFor="educationDescription">Description:</label>
          <input
            type="text"
            name="educationDescription"
            id="educationDescription"
            value={formData.educationDescription}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="button" onClick={() => setEditMode((prev) => !prev)}>Save</button>
      <button type="button" onClick={handleDelete}>Delete</button>
    </section>
  );
};

const PreviewEducation = ({ formData, setEditMode }) => {
  return (
    <section className="formsection">
      <div className="formrow">
        <label>
          {formData.educationSchoolName
            ? formData.educationSchoolName
            : "School Name"}
        </label>
      </div>
      <div className="formrow">
        <label>
          {formData.educationDegree ? formData.educationDegree : "Degree"}
        </label>
      </div>
      <div className="formrow">
        <label>
          {formData.educationStartdate
            ? formData.educationStartdate
            : "Start Date - "}
          {formData.educationEnddate ? formData.educationEnddate : "End Date"}
        </label>
      </div>
      <button type="button" onClick={() => setEditMode((prev) => !prev)}>Edit</button>
    </section>
  );
};

function Education({ formData, handleChange, handleDelete }) {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      {editMode ? (
        <EditEducation
          formData={formData}
          handleChange={handleChange}
          setEditMode={setEditMode}
          handleDelete={handleDelete}
        />
      ) : (
        <PreviewEducation formData={formData} setEditMode={setEditMode} />
      )}
    </>
  );
}

Education.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
EditEducation.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setEditMode: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
PreviewEducation.propTypes = {
  formData: PropTypes.object.isRequired,
  setEditMode: PropTypes.func.isRequired,
};
export default Education;
