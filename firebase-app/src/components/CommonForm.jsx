import CommonInput from "./CommonInput";

const formElementTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

const CommonForm = ({
  formControls = [],
  buttonText,
  formData,
  onSubmit,
  setFormData,
}) => {
  const renderFormElement = (formControl, formData) => {
    let element = null;
    switch (formControl.componentType) {
      case formElementTypes.INPUT:
        element = (
          <CommonInput
            type={formControl.type}
            placeholder={formControl.placeholder}
            value={formData[formControl.name]}
            name={formControl.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                [formControl.name]: e.target.value,
              })
            }
          />
        );
        break;
      default:
        element = (
          <CommonInput
            type={formControl.type}
            placeholder={formControl.placeholder}
            value={formData[formControl.name]}
            name={formControl.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                [formControl.name]: e.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  };
  return (
    <form onSubmit={onSubmit}>
      {formControls.map((formElement) =>
        renderFormElement(formElement, formData)
      )}
      <button type="submit">{buttonText || "Submit"}</button>
    </form>
  );
};

export default CommonForm;
