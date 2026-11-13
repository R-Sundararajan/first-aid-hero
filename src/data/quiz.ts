export const questions = [
  {
    question: 'Which number should you call for an emergency in India?',
    options: ['112', '911', '999'],
    correct: 0,
    explanation:
      '112 is India’s unified emergency number for police, fire and medical emergencies. Give your location and follow the operator.',
    guide: '/about',
    guideLabel: 'Emergency contacts in India',
  },
  {
    question: 'An adult is unresponsive and only gasping. What does this mean?',
    options: [
      'They are breathing normally; wait for them to wake up.',
      'They may be in cardiac arrest: call 112 and begin CPR.',
      'Give them water to help their breathing.',
    ],
    correct: 1,
    explanation:
      'Gasping is not normal breathing. In an unresponsive adult, call 112 and start chest compressions. Ask someone to bring an AED.',
    guide: '/guides/adult-cpr',
    guideLabel: 'Read the adult CPR guide',
  },
  {
    question: 'What is the key first-aid action for a heavily bleeding wound?',
    options: [
      'Wash the wound before doing anything else.',
      'Keep lifting the cloth to check the bleeding.',
      'Apply firm, direct pressure and call for help.',
    ],
    correct: 2,
    explanation:
      'Firm, continuous pressure helps limit blood loss. Ask someone to call 112. If an object is embedded, press around it and leave it in place.',
    guide: '/guides/severe-bleeding',
    guideLabel: 'Read the severe bleeding guide',
  },
  {
    question: 'How should you cool a heat burn or scald?',
    options: [
      'Apply ice directly to the skin.',
      'Use cool running water for at least 20 minutes.',
      'Cover it in butter or toothpaste.',
    ],
    correct: 1,
    explanation:
      'Cool the burn with running tap water for at least 20 minutes while keeping the rest of the person warm. Call 112 during cooling for a serious burn.',
    guide: '/guides/burns-and-scalds',
    guideLabel: 'Read the burns and scalds guide',
  },
  {
    question: 'Someone suddenly has a drooping face and slurred speech. What should you do?',
    options: [
      'Call 112 immediately, even if the signs improve.',
      'Wait until all FAST signs are present.',
      'Let them drive to hospital.',
    ],
    correct: 0,
    explanation:
      'Even one sudden stroke sign needs an emergency call. Note when symptoms began and stay with them. Symptoms that go away still need urgent assessment.',
    guide: '/guides/stroke',
    guideLabel: 'Read the stroke recognition guide',
  },
] as const
