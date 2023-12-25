import "./style.css";
import TextField from "../components/TextField";
import RadioGroupField from "../components/RadioGroupField";
import CheckboxGroupField from "../components/CheckboxGroupField";
import SelectField from "../components/SelectField";
import { useState } from "react";
import genders from "./genders.json";
import citys from "./citys.json";
import skills from "./skills.json";

const fields={
  fullName:{
    
  }
}
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

  function getChangeHandler(key) {
    return function handleChange(newValue) {
      setFormData({
        ...formData,
        [key]: newValue,
      });
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

  console.log({ formData });
  function handleSubmit(event){
    event.preventDefault();
    console.log('submit');

  }
  function handleReset(event){
    event.preventDefault();
    console.log('reset');
  }
  return (
    <section className="app">
      <form className="form" onSubmit={handleSubmit} onReset={handleReset} noValidate>
        <TextField
          label="نام و نام خانوادگی"
          id="fullName"
          value={formData.fullName}
          onChange={getChangeHandler("fullName")}
        />
        <TextField
          label="ایمیل"
          onChange={getChangeHandler("email")}
          id="email"
          value={formData.email}
          type="email"
        />
        <TextField
          label="رمز عبور"
          value={formData.password}
          onChange={getChangeHandler("password")}
          id="password"
          type="password"
        />
        <TextField
          label="تکرار رمز عبور"
          value={formData.confirmPassword}
          onChange={getChangeHandler("confirmPassword")}
          id="confirmPassword"
          type="password"
        />
        <RadioGroupField
          options={genders}
          label="جنسیت"
          onChange={getChangeHandler("gender")}
          value={formData.gender}
          errors={[]}
          name="gender"
        />
        <CheckboxGroupField
          options={skills}
          label="مهارت ها"
          onChange={handleSkillsChange}
          value={formData.skills}
          errors={[]}
          name="skills"
        />
        <SelectField
          options={citys}
          value={formData.city}
          onChange={getChangeHandler("city")}
          label="شهر محل سکونت"
          errors={[]}
        />
        <button type="submit">ثبت نام</button>
        <button type="reset">پاک</button>
      </form>
    </section>
  );
}

export default App;
