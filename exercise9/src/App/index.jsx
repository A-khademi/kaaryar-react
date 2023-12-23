import "./style.css";
import TextField from "../components/TextField";
import RadioGroupField from "../components/RadioGroupField";
import CheckboxGroupField from "../components/CheckboxGroupField";
import SelectField from "../components/SelectField";
function App() {
  return (
    <section className="app">
      <form className="form">
        <TextField
          lable="نام و نام خانوادگی"
          onChange={() => {}}
          id="fullName"
        />
        <TextField lable="ایمیل" onChange={() => {}} id="email" type="email" />
        <TextField
          lable="رمز عبور"
          onChange={() => {}}
          id="password"
          type="password"
        />
        <TextField
          lable="تکرار رمز عبور"
          onChange={() => {}}
          id="confirmPassword"
          type="password"
        />
        <RadioGroupField
          options={[
            { value: "male", lable: "مرد" },
            { value: "female", lable: "زن" },
            { value: "prefer-not-to-say", lable: "نامشخص" },
          ]}
          lable="جنسیت"
          onChange={() => {}}
          value="male"
          errors={[]}
          name="gender"
        />
        <CheckboxGroupField
          options={[
            { value: "html", lable: "HTML" },
            { value: "css", lable: "CSS" },
            { value: "js", lable: "JavaScript" },
          ]}
          lable="مهارت ها"
          onChange={() => {}}
          value={["js", "css"]}
          errors={[]}
          name="skills"
        />
        <SelectField
          options={[
            { value: "tehran", lable: "تهران" },
            { value: "shiraz", lable: "شیراز" },
            { value: "ahvaz", lable: "اهواز" },
          ]}
          value="shiraz"
          onChange={() => {}}
          lable="شهر محل سکونت"
          errors={[]}
        />
      </form>
    </section>
  );
}

export default App;
