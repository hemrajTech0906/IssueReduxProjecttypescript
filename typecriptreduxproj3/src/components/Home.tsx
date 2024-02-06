// import React, { useState } from "react";
// import "./Home.css";
// import { UseSelector,useDispatch, useSelector } from "react-redux";
// import { RootState } from "../Redux/store";
// import { addIssue } from "../Redux/IssueSlice";
// interface IState {
//   issue: string;
// }

// const Home: React.FC = () => {
//     let dispatch=useDispatch()
//     let issuelist=useSelector((state:RootState)=>state.issue.projectIssues)
//   const [state, setState] = useState<IState>({
//     issue: "",
//   });

//   let handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     let { name, value } = e.target;
//     setState((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));

//     // setState(e.target.value)
//   };

//   let submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault()
//     console.log(state)
//     dispatch(addIssue(state))

//     alert('summited successfully')
//   };

//   return (
//     <div>
//       HomePage
//       <form onSubmit={submitHandler}>
//         <h1>
//           {" "}
//           <div className="heading">Add Issue</div>{" "}
//         </h1>

//         <input
//           type="text"
//           placeholder="issues"
//           name="issue"
//           value={state.issue}
//           onChange={handleChange}
//           style={{ width: "800px", height: "60px" }}
//         />

//         <button type="submit">Add</button>
//       </form>

//       <div>{JSON.stringify(state)}
      
//       <li>{issuelist.map((data ,ind)=>
//        (
//         <div key={ind}>
//               {data.length}
//         </div>
//        )
        
//       )}</li>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useState } from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/store";
import { addIssue } from "../Redux/IssueSlice";

interface IState {
  issue: string;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const issuelist = useSelector((state: RootState) => state.issue.projectIssues);

  const [state, setState] = useState<IState>({
    issue: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addIssue(state.issue));
    setState({ issue: "" }); // Clear the input field after submitting
    // alert("Submitted successfully");
  };

  return (
    <div>
      HomePage
      <form onSubmit={submitHandler}>
        <h1>
          <div className="heading">Add Issue</div>
        </h1>

        <input
          type="text"
          placeholder="issues"
          name="issue"
          value={state.issue}
          onChange={handleChange}
          style={{ width: "800px", height: "60px" }}
        />

        <button type="submit">Add</button>
      </form>

      <div>
        <h2>Issue List:</h2>
        <h1>

        <ul>
          {issuelist.map((data, ind) => (
            <li key={ind}>{data}</li>
          ))}
        </ul>
        </h1>
        
      </div>
    </div>
  );
};

export default Home;

