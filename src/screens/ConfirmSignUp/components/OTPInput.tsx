import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useRef, useState, Dispatch, SetStateAction } from 'react'
import { OTPInputContainer, SplitBoxes, SplitBoxesFocused, SplitBoxText, SplitOTPBoxesContainer, TextInputHidden } from './Styles'

interface Props {
  code: string
  setCode: Dispatch<SetStateAction<string>>
  maximumLength: number
  setIsPinReady: Dispatch<SetStateAction<boolean>>
}

const OTPInput: React.FC<Props> = ({ code, setCode, maximumLength, setIsPinReady }) => {
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false)
  const inputRef = useRef<null | TextInput>(null)
  const boxArray = new Array(maximumLength).fill(0);

  useEffect(() => {
    setIsPinReady(code.length === maximumLength)
    return () => {
      setIsPinReady(false)
    }
  },[code])

  const boxDigit = (_: any, index: number) => {
    const emptyInput = "";
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    const StyledSplitBoxes =
      isInputBoxFocused && isValueFocused ? SplitBoxesFocused : SplitBoxes;

    return (
      <StyledSplitBoxes key={index}>
        <SplitBoxText>{digit}</SplitBoxText>
      </StyledSplitBoxes>
    )
  }

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef?.current?.focus()
  };

  const handleOnBlur = () => { 
    setIsInputBoxFocused(false)
  }

  return (
    <OTPInputContainer>
      <SplitOTPBoxesContainer>{boxArray.map(boxDigit)}</SplitOTPBoxesContainer>
      <TextInputHidden
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
        keyboardType="number-pad"
      />
    </OTPInputContainer>
  )
}

export { OTPInput }

const styles = StyleSheet.create({})