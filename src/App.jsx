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


// import { useState, useMemo } from "react";

// const Example = () => {
//   const [count, setCount] = useState(0);
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

//   const expensiveCalculation = (nums) => {
//     console.log("Performing expensive calculation...");
//     return nums.map((num) => num * 2);
//   };

//   const memoizedResult = useMemo(() => expensiveCalculation(numbers), [numbers]);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>
//         Add Number
//       </button>
//       <p>Count: {count}</p>
//       <h2>Computed Values:</h2>
//       {memoizedResult.map((num, index) => (
//         <p key={index}>{num}</p>
//       ))}
//     </div>
//   );
// };

// export default Example;
  