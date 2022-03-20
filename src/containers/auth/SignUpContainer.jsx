import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import SignUpComponent from '../../components/auth/SignUpComponent'
import client from '../../libs/api/client'

function SignUpContainer() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email:"",
    password:"",
    passwordCheck:"",
    name:"",
    job:"",
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
      if(userInfo.password == userInfo.passwordCheck){
        if (userInfo.email === "") {
          return alert("이메일을 입력하세요");
        }
        if (userInfo.password === "") {
          return alert("비밀번호 입력하세요");
        }
        if (userInfo.name === "") {
          return alert("이름을 입력하세요");
        }
        if (userInfo.job === "") {
          return alert("직업을 입력하세요");
        }
        const data = {
          email: userInfo.email,
          password: userInfo.password,
          name: userInfo.name,
          job: userInfo.job
        };

      const response = await client.post("/AddUserTest", data);
      if(response.status == 200){
        navigate("/");
      } else if(response.status == 500){
        alert("에러");
      }
      } else {
        return alert("비밀번호가 같지 않습니다");
      };
    }
  }
  return (
    <SignUpComponent userInfo={userInfo} onChangeInput={onChangeInput} onClickSubmit={onClickSubmit} />
  )
}

export default SignUpContainer