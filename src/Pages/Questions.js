import { useState } from "react";
import "./Questions.css";
import { IoAddCircle, IoAddCircleOutline } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";

const Questions = () => {
  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);
  const [isShow4, setIsShow4] = useState(false);
  const handleClick1 = () => {
    setIsShow1(!isShow1);
  };
  const handleClick2 = () => {
    setIsShow2(!isShow2);
  };
  const handleClick3 = () => {
    setIsShow3(!isShow3);
  };
  const handleClick4 = () => {
    setIsShow4(!isShow4);
  };
  return (
    <>
      <div className="container-fluid parent">
        <div className="row box">
          <h1>Questions</h1>
          <div className="questions">
            <div className="ques">
              <p className="first">Do I have to allow the use of cookies?</p>

              <div className="icon" onClick={handleClick1}>
                {isShow1 == false ? (
                  <IoAddCircle color="blueviolet" size={40} />
                ) : (
                  <IoCloseCircle color="blueviolet" size={40} />
                )}
              </div>
              {isShow1 == true ? (
                <p className="fs-5 s p-0">
                  Unicorn vinyl poutine brooklyn, next level direct trade
                  iceland. Shaman copper mug church-key coloring book, whatever
                  poutine normcore fixie cred kickstarter post-ironic street
                  art.{" "}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="ques">
              <p className="first"> How do I change my My Page password? </p>
              <div className="icon" onClick={handleClick2}>
                {isShow2 == false ? (
                  <IoAddCircle color="blueviolet" size={40} />
                ) : (
                  <IoCloseCircle color="blueviolet" size={40} />
                )}
              </div>
              {isShow2 == true ? (
                <p className="fs-5 s p-0">
                  Unicorn vinyl poutine brooklyn, next level direct trade
                  iceland. Shaman copper mug church-key coloring book, whatever
                  poutine normcore fixie cred kickstarter post-ironic street
                  art.{" "}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="ques">
              <p className="first"> What is BankID? </p>
              <div className="icon" onClick={handleClick3}>
                {isShow3 == false ? (
                  <IoAddCircle color="blueviolet" size={40} />
                ) : (
                  <IoCloseCircle color="blueviolet" size={40} />
                )}
              </div>
              {isShow3 == true ? (
                <p className="fs-5 s p-0">
                  Unicorn vinyl poutine brooklyn, next level direct trade
                  iceland. Shaman copper mug church-key coloring book, whatever
                  poutine normcore fixie cred kickstarter post-ironic street
                  art.{" "}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="ques">
              <p className="first"> Whose birth number can I use? </p>
              <div className="icon" onClick={handleClick4}>
                {isShow4 == false ? (
                  <IoAddCircle color="blueviolet" size={40} />
                ) : (
                  <IoCloseCircle color="blueviolet" size={40} />
                )}
              </div>
              {isShow4 == true ? (
                <p className="fs-5 s p-0">
                  Unicorn vinyl poutine brooklyn, next level direct trade
                  iceland. Shaman copper mug church-key coloring book, whatever
                  poutine normcore fixie cred kickstarter post-ironic street
                  art.{" "}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Questions;
