import styled, { keyframes } from 'styled-components';

export const Page = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  width: 300px;
  height: 400px;
  background-color: #0D1117;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const ProfilePicture = styled.div`
  width: 100px;
  height: 100px;
  background-color: #D6DCD8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  color: #0D1117;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const Input = styled.input`
  margin-top: 16px;
  border-radius: 6px;
  background-color: #D6DCD8;
  border: none;
  padding: 8px;
`;

export const Textarea = styled.textarea`
  margin-top: 8px;
  border-radius: 6px;
  background-color: #D6DCD8;
  border: none;
  padding: 8px;
  resize: none;
  height: 80px;
`;

export const Label = styled.label`
  margin-top: 48px;
  font-size: 16px;
  font-weight: bold;
`;

export const SearchInput = styled.input`
  margin-top: 8px;
  font-size: 16px;
  border-radius: 6px;
  background-color: #D6DCD8;
  border: none;
  padding: 8px;
`;

export const Button = styled.button`
  margin-top: 8px;
  background-color: #D6DCD8;
  color: #0D1117;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c2c8c3;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 6px solid #d6dcd8;
  border-top: 6px solid #0d1117;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: auto;
`;

export const LoaderContainer = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
