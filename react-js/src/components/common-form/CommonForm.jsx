import { element } from "prop-types";
import React from "react";
import CommonInput from "../common-input/CommonInput";

const formTypes = {
    INPUT:"input",
    SELECT:"select",
    TEXTAREA:"textarea",
}

const CommonForm = ({ formControls = [], formData, setFormData, buttonText, onHandleSubmit}) => {
  const renderFormElement = (currElement) => {
    let content;
    switch (currElement.componentType) {
      // case 'input':
      //     content = <input type={currElement.type} name={currElement.name} value={formData[currElement.name]} onChange={e => setFormData({...formData, [currElement.name]: e.target.value })} />;
      //     break;
      // case 'textarea':
      //     content = <textarea name={currElement.name} value={formData[currElement.name]} onChange={e => setFormData({...formData, [currElement.name]: e.target.value })} />;
      //     break;
      // case 'button':
      //     content = <button type={currElement.type}>{currElement.label}</button>;
      //     break;
      // default:
      //     content = null;
      case formTypes.INPUT:
        content = (
          <CommonInput
            type={currElement.type}
            label={currElement.label}
            name={currElement.name}
            id={currElement.id}
            placeholder={currElement.placeholder}
            value={formData[currElement.name]}
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
          />
        );
        break;
        default:
            content = (
                <CommonInput
                  type={currElement.type}
                  label={currElement.label}
                  name={currElement.name}
                  id={currElement.id}
                  placeholder={currElement.placeholder}
                  value={formData[currElement.name]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              );

    }
    return content;
  };

  return (
    <form onSubmit={onHandleSubmit}>
      {formControls.length > 0
        ? formControls.map((element) => renderFormElement(element))
        : null}
        <div style={{marginTop: '15px'}}>
            <button type="submit">{buttonText || 'Submit'}</button>
        </div>
    </form>
  );
};

export default CommonForm;
