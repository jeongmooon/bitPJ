import React from 'react'
import styled from 'styled-components';
import palette from "../../libs/styles/palette";
import AuthTemplate from "./templete/AuthTemplate";

const SignInFormBlcok = styled.div`
  box-sizing: border-box;
  h3 {
    font-size: 1.5rem;
    font-weight: bolder;
    margin-bottom: 2rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid #868e96;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 0.5rem;
  & + & {
    margin-top: 1.3rem;
  }
`;

const StlyedButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 4px;
  font-weight: bolder;
  padding: 1rem 2rem;
  outline: none;
  cursor: pointer;
  margin-top: 1.3rem;
  background-color: ${palette.main};
  color: #fff;
`;

function SignUpComponent({userInfo, onChangeInput, onClickSubmit}) {
  const {email, password,passwordCheck, name,job} = userInfo;
  console.log(userInfo)
  return (
    <>    
      { 
      <AuthTemplate>
        <SignInFormBlcok>
        <h3>회원가입</h3>
        <StyledInput
          name="email"
          placeholder="email"
          value={email}
          onChange={onChangeInput}
        />
        <StyledInput
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={onChangeInput}
        />
        <StyledInput
          type="password"
          name="passwordCheck"
          value={passwordCheck}
          placeholder="password"
          onChange={onChangeInput}
        />
        <StyledInput
          type="text"
          name="name"
          value={name}
          placeholder='name'
          onChange={onChangeInput}
        />
        <StyledInput
          type="text"
          name="job"
          value={job}
          placeholder='job'
          onChange={onChangeInput}
        />
        <StlyedButton type="submit" onClick={onClickSubmit}>
          로그인
        </StlyedButton>
      </SignInFormBlcok>
      </AuthTemplate>
      }      
    </>
  );
}

export default SignUpComponent