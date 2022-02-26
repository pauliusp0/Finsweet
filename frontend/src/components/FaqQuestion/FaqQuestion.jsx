import { useRef, useState } from 'react';

const FaqQuestion = ({ render }) => {
  // -- state
  const [firstQuestionOpened, setFirstQuestionOpened] = useState(false);
  const [secondQuestionOpened, setSecondQuestionOpened] = useState(false);
  const [thirdQuestionOpened, setThirdQuestionOpened] = useState(false);
  const [fourthQuestionOpened, setFourthQuestionOpened] = useState(false);
  const [fifthQuestionOpened, setFifthQuestionOpened] = useState(false);

  const openQuestion = (question) => {
    switch (question) {
      case 1:
        setFirstQuestionOpened(!firstQuestionOpened);
        break;
      case 2:
        setSecondQuestionOpened(!secondQuestionOpened);
        break;

      case 3:
        setThirdQuestionOpened(!thirdQuestionOpened);
        break;

      case 4:
        setFourthQuestionOpened(!fourthQuestionOpened);
        break;

      case 5:
        setFifthQuestionOpened(!fifthQuestionOpened);
        break;

      default:
        break;
    }
  };

  return render(
    firstQuestionOpened,
    secondQuestionOpened,
    thirdQuestionOpened,
    fourthQuestionOpened,
    fifthQuestionOpened,
    openQuestion
  );
};

export default FaqQuestion;
