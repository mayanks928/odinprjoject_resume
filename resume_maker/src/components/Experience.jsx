import { useState } from "react";
import PropTypes from "prop-types";

const EditExperience = ({formData, handleChange, setEditMode, handleDelete}) => {
  return (
    <section className="experience formsection">
      <h3>Experience:</h3>
      <div className="formrow">
        <div className="formgroup fullwidth">
          <label htmlFor="experienceEmployer">Employer:</label>
          <input
            type="text"
            name="experienceEmployer"
            id="experienceEmployer"
            value={formData.experienceEmployer}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="formrow">
        <div className="formgroup fullwidth">
          <label htmlFor="experienceJobtitle">Job Title:</label>
          <input
            type="text"
            name="experienceJobtitle"
            id="experienceJobtitle"
            value={formData.experienceJobtitle}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="formrow">
        <div className="formgroup halfwidth">
          <label htmlFor="experienceCity">City:</label>
          <input
            type="text"
            name="experienceCity"
            id="experienceCity"
            value={formData.experienceCity}
            onChange={handleChange}
          />
        </div>
        <div className="formgroup halfwidth">
          <label htmlFor="experienceCountry">Country:</label>
          <input
            type="text"
            name="experienceCountry"
            id="experienceCountry"
            value={formData.experienceCountry}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="formrow">
        <div className="formgroup halfwidth">
          <label htmlFor="experienceStartdate">Start Date:</label>
          <input
            type="month"
            name="experienceStartdate"
            id="experienceStartdate"
            value={formData.experienceStartdate}
            onChange={handleChange}
          />
        </div>
        <div className="formgroup halfwidth">
          <label htmlFor="experienceEnddate">End Date:</label>
          <input
            type="month"
            name="experienceEnddate"
            id="experienceEnddate"
            value={formData.experienceEnddate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="formrow">
        <div className="formgroup fullwidth">
          <label htmlFor="experienceDescription">Description:</label>
          <input
            type="text"
            name="experienceDescription"
            id="experienceDescription"
            value={formData.experienceDescription}
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

const PreviewExperience = ({ formData, setEditMode }) => {
  return (
    <section className="formsection">
      <div className="formrow">
        <label>
          {formData.experienceJobtitle ? formData.experienceJobtitle : "Role"}
        </label>
      </div>
      <div className="formrow">
        <label>
          {formData.experienceEmployer
            ? formData.experienceEmployer
            : "Employer"}
        </label>
      </div>
      <div className="formrow">
        <label>
          {formData.experienceStartdate
            ? formData.experienceStartdate
            : "Start Date - "}
          {formData.experienceEnddate ? formData.experienceEnddate : "End Date"}
        </label>
      </div>
      <button type="button" onClick={() => setEditMode((prev) => !prev)}>
        Edit
      </button>
    </section>
  );
};
function Experience({ formData, handleChange, handleDelete }) {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      {editMode ? (
        <EditExperience
          formData={formData}
          handleChange={handleChange}
          setEditMode={setEditMode}
          handleDelete={handleDelete}
        />
      ) : (
        <PreviewExperience formData={formData} setEditMode={setEditMode} />
      )}
    </>
  );
}

Experience.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
EditExperience.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setEditMode: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
PreviewExperience.propTypes = {
  formData: PropTypes.object.isRequired,
  setEditMode: PropTypes.func.isRequired,
};

export default Experience;
