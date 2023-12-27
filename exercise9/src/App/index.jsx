import "./style.css";
import TextField from "../components/TextField";
import RadioGroupField from "../components/RadioGroupField";
import CheckboxGroupField from "../components/CheckboxGroupField";
import SelectField from "../components/SelectField";
import { useState } from "react";
import genders from "./genders.json";
import citys from "./citys.json";
import skills from "./skills.json";
import {
  isEmail,
  isFarsi,
  isNotPresentInTheList,
  isRequired,
  isStrongPassword,
  validate,
} from "./utils";
const emails = ["1@g.com", "2@matchMedia.ir"];
const weakPassword = ["123456", "12345", "password"];
const fields = {
  fullName: {
    validators: [isRequired, isFarsi],
  },
  email: {
    validators: [isRequired, isEmail, (v) => isNotPresentInTheList(v, emails)],
  },
  password: {
    validators: [
      isRequired,
      isStrongPassword,
      (v) => isNotPresentInTheList(v, weakPassword),
    ],
  },
};
function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    skills: [],
    city: "",
  });
  const [errors, setErrors] = useState({});
  const [hasSubmitted,setHasSubmitted]=useState(false);
  function getChangeHandler(key) {
    return function handleChange(newValue) {
      const newFormData={
        ...formData,
        [key]: newValue,
      }
      setFormData(newFormData);
      if(hasSubmitted){
        const {errors } = validate(formData, fields)
        setErrors(errors)
      }
    };
  }

  function handleSkillsChange(newSkill) {
    const isOptionSelected = formData.skills.includes(newSkill);
    let newSkills = [];
    if (isOptionSelected) {
      newSkills = formData.skills.filter((skill) => skill !== newSkill);
    } else {
      newSkills = [...formData.skills, newSkill];
    }
    setFormData({
      ...formData,
      skills: newSkills,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setHasSubmitted(true)
    const { isValid, errors } = validate(formData, fields);
    console.log({
      isValid,
      errors,
    });
    if (isValid) {
      console.log("form submit ");
    } else {
      setErrors(errors);
    }
  }
  function handleReset(event) {
    event.preventDefault();
    setErrors({})
    setHasSubmitted(false)
    setFormData({
      fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    skills: [],
    city: "",
    })
    console.log("reset");
  }
  return (
    <section className="app">
      <form
        className="form"
        onSubmit={handleSubmit}
        onReset={handleReset}
        noValidate
      >
        <TextField
          label="نام و نام خانوادگی"
          id="fullName"
          value={formData.fullName}
          onChange={getChangeHandler("fullName")}
          errors={errors.fullName}
        />
        <TextField
          label="ایمیل"
          onChange={getChangeHandler("email")}
          id="email"
          value={formData.email}
          type="email"
          errors={errors.email}
        />
        <TextField
          label="رمز عبور"
          value={formData.password}
          onChange={getChangeHandler("password")}
          id="password"
          type="password"
          errors={errors.password}
        />
        <TextField
          label="تکرار رمز عبور"
          value={formData.confirmPassword}
          onChange={getChangeHandler("confirmPassword")}
          id="confirmPassword"
          type="password"
          errors={errors.confirmPassword}
        />
        <RadioGroupField
          options={genders}
          label="جنسیت"
          onChange={getChangeHandler("gender")}
          value={formData.gender}
          errors={errors.gender}
          name="gender"
        />
        <CheckboxGroupField
          options={skills}
          label="مهارت ها"
          onChange={handleSkillsChange}
          value={formData.skills}
          errors={errors.skills}
          name="skills"
        />
        <SelectField
          options={citys}
          value={formData.city}
          onChange={getChangeHandler("city")}
          label="شهر محل سکونت"
          errors={errors.city}
        />
        <button type="submit">ثبت نام</button>
        <button type="reset">پاک</button>
      </form>
    </section>
  );
}

export default App;
