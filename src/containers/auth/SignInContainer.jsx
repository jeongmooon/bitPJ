import React, { useState } from "react";
import SignInComponent from "../../components/auth/SignInComponent";

function SignInContainer() {
  const [userInfo, setUserInfo] = useState({
    email:"",
    password:"",
  });  

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onClickSubmit = async (e) => {
    if (userInfo.email === "" && userInfo.password === "") {
      return alert("정보를 입력하세요");
    } else {
      if (userInfo.email === "") {
        return alert("이메일을 입력하세요");
      }
      if (userInfo.password === "") {
        return alert("비밀번호 입력하세요");
      }
      const data = {
        email: userInfo.email,
        password: userInfo.password,
      };
    };
  }

  return (
    <>
      <SignInComponent userInfo={userInfo} onChangeInput={onChangeInput} onClickSubmit={onClickSubmit} />
    </>
  );
}

export default SignInContainer;