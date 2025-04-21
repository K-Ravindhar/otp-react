import { useRef, useState } from "react";

const App = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const  inputIndex = useRef([]);


  const handleChange = (e, index) => {
    let value = e.target.value;
    if (isNaN(value)) return;
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      // document.getElementById(`otp-${index + 1}`).focus();
      inputIndex.current[index+1]?.focus();
    }
  };

  const handleDelete =(e,index) => {
    let newOtp = [...otp];
    if(e.key == "Backspace" && !otp[index] && index>0){
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputIndex.current[index-1]?.focus();
      // document.getElementById(`otp-${index - 1}`).focus();
    }else{
      newOtp[index] = "";
      setOtp(newOtp);
    }
  }

  return (
    <section>
      <p>Enter Otp</p>
      {otp.map((items, index) => (
        <input
          value={items}
          id={`otp-${index}`}
          ref = {(el) => inputIndex.current[index] = el} 
          key={index}
          className="border w-10 m-2 text-center rounded-md gap-2"
          maxLength="1"
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleDelete(e,index)}
        />
      ))}
    </section>
  );
};

export default App;

