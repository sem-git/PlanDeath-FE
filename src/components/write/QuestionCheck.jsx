import React, { useState } from 'react';
import { styled } from 'styled-components';

import Typography from '../Typography';
import home6 from '@assets/home_6.png';
import TopBar from '@components/bar/TopBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SaveButton = styled.button`
  margin-top: 20px;
  border-radius: 50px;
  display: flex;
  color: white;
  background-color: black;
  font-size: 15px;
  gap: 10px;
  width: 100px;
  height: 30px;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`;

const DeleteButton = styled.button`
  margin-top: 20px;
  border-radius: 50px;
  display: flex;
  color: white;
  background-color: black;
  font-size: 15px;
  gap: 10px;
  width: 100px;
  height: 30px;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`;
function QuestionCheck({ ques1, ques2, ques3, ques4 }) {
  const navigate = useNavigate();

  return (
    <>
      <TopBar />
      <div className="p-[28px]">
        <div className="ml-[95px] mb-[30px]">
          <Typography title={'About ME'} type={'bold30'} />
        </div>
        <div className="mt-[20px] mb-[10px]">
          <Typography title={'Q1. 비상금이 있다면, 어디에 있나요?'} type={'question15'} />
          <div
            className="bg-[#F3EDE0]/60 w-[100%] rounded-[10px] px-[15px] py-[10px] resize-none outline-none"
          >
            {ques1}
          </div>
        </div>

        <div className="mt-[20px] mb-[10px]">
          <Typography title={'Q2. 어떤 분위기의 장례식을 원하시나요?'} type={'question15'} />
          <div
            className="bg-[#F3EDE0]/60 w-[100%] rounded-[10px] px-[15px] py-[10px] resize-none outline-none"
          >
            {ques2}
          </div>
        </div>

        <div className="mt-[20px] mb-[10px]">
          <Typography title={'Q3. 당신이 원하는 묘비명은 무엇인가요?'} type={'question15'} />
          <div
            className="bg-[#F3EDE0]/60 w-[100%] rounded-[10px] px-[15px] py-[10px] resize-none outline-none"
          >
            {ques3}
          </div>
        </div>

        <div className="mt-[20px] mb-[10px]">
          <Typography title={'Q4. 부모님 혹은 친구가 나의 핸드폰을 열어보기를 원하시나요?'} type={'question15'} />
          <div
            className="bg-[#F3EDE0]/60 w-[100%] rounded-[10px] px-[15px] py-[10px] resize-none outline-none"
          >
            {ques4}
          </div>
        </div>
        <div className="flex justify-center mt-[10px]">
          <SaveButton
            onClick={() => {
              document.startViewTransition(() => navigate('/write'))
            }}
          >
            확인
          </SaveButton>
          <DeleteButton
            onClick={() => {
              if (confirm("삭제하시겠습니까?")) {
                axios.delete('/api/answer/delete')
                .then(res => document.startViewTransition(() => navigate('/write')))
              }
            }}
          >
            삭제
          </DeleteButton>
        </div>
      </div>
    </>
  );
}

export default QuestionCheck;
