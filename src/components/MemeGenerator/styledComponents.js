// Style your components here

import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 25px;
  padding-left: 25px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`
export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
`

export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`

export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSize}px;
  font-weight: 600;
  font-family: 'Open Sans';
`

export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const CustomLabel = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 0px;
`

export const CustomInput = styled.input`
  color: #5a7184;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  padding-top: 13px;
  padding-right: 14px;
  padding-bottom: 13px;
  padding-left: 15px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
`

export const CustomSelect = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10ppx;
  outline: none;
`

export const CustomOption = styled.option`
  font-size: 15px;
  padding-top: 13px;
  padding-right: 13px;
  padding-bottom: 13px;
  padding-left: 13px;
`
export const GenerateButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 13px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  min-width: 25px;
  max-width: 150px;
  padding-left: 24px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`
