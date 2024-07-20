import PropTypes from "prop-types";
import { useState } from "react";

const EditPersonalDetails = ({ formData, handleChange, setEditMode }) => (
  <section className="personalDetails formsection">
    <h3>Personal Details:</h3>
    <div className="formrow">
      <div className="formgroup fullwidth">
        <label htmlFor="personalFullname">Full Name:</label>
        <input
          type="text"
          name="personalFullname"
          id="personalFullname"
          value={formData.personalFullname}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="formrow">
      <div className="formgroup fullwidth">
        <label htmlFor="personalJobtitle">Job Title:</label>
        <input
          type="text"
          name="personalJobtitle"
          id="personalJobtitle"
          value={formData.personalJobtitle}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="formrow">
      <div className="formgroup halfwidth">
        <label htmlFor="personalEmail">Email:</label>
        <input
          type="personalEmail"
          name="personalEmail"
          id="personalEmail"
          value={formData.personalEmail}
          onChange={handleChange}
        />
      </div>
      <div className="formgroup halfwidth">
        <label htmlFor="personalPhonenumber">Phone:</label>
        <input
          type="tel"
          name="personalPhonenumber"
          id="personalPhonenumber"
          value={formData.personalPhonenumber}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="formrow">
      <div className="formgroup fullwidth">
        <label htmlFor="personalAddress">Address:</label>
        <input
          type="text"
          name="personalAddress"
          id="personalAddress"
          value={formData.personalAddress}
          onChange={handleChange}
        />
      </div>
    </div>
    <button onClick={() => setEditMode((prev) => !prev)}>Save</button>
  </section>
);
const PreviewPersonalDetails = ({ formData, setEditMode }) => {
  return (
    <section className="formsection">
      <h3>Personal Details:</h3>
      <div className="formrow">
        <label>
          {formData.personalFullname ? formData.personalFullname : "Your Name"}
        </label>
      </div>
      <div className="formrow">
        <label>
          {formData.personalJobtitle ? formData.personalJobtitle : "Job Title"}
        </label>
      </div>
      <div className="formrow">
        <label>
          {formData.personalEmail ? formData.personalEmail : "Email"}
        </label>
      </div>
      <div className="formrow">
        <label>
          {formData.personalPhonenumber
            ? formData.personalPhonenumber
            : "Phone Number"}
        </label>
      </div>
      <div className="formrow">
        <label>
          {formData.personalAddress ? formData.personalAddress : "Address"}
        </label>
      </div>
      <button onClick={() => setEditMode((prev) => !prev)}>Edit</button>
    </section>
  );
};
function PersonalDetails({ formData, handleChange }) {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      {editMode ? (
        <EditPersonalDetails
          formData={formData}
          handleChange={handleChange}
          setEditMode={setEditMode}
        />
      ) : (
        <PreviewPersonalDetails formData={formData} setEditMode={setEditMode} />
      )}
    </>
  );
}
PersonalDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
EditPersonalDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setEditMode: PropTypes.func.isRequired,
};
PreviewPersonalDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setEditMode: PropTypes.func.isRequired,
};

export default PersonalDetails;
