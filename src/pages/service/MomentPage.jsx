import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { momentPageStateAtom } from '@store/atom';
import Moment from '@components/Moment/Moment';
import AI from '@components/Moment/AI';

function MomentPage() {
  const [pageName, setPageName] = useRecoilState(momentPageStateAtom);

  const renderComponent = () => {
    if (pageName == 'moment') {
      return <Moment />;
    }
    if (pageName == 'ai') {
      return <AI />;
    }
  };

  useEffect(() => {
    console.log(pageName);
  }, [pageName]);
  return <>{renderComponent()}</>;
}

export default MomentPage;
