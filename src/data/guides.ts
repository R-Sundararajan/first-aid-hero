export type Source = { name: string; url: string }
export type Category = 'Breathing & responsiveness' | 'Injuries' | 'Sudden illness'
export type GuideIconName = 'heart' | 'wind' | 'droplet' | 'flame' | 'brain' | 'person'
export type Guide = {
  slug: string
  title: string
  shortTitle: string
  category: Category
  icon: GuideIconName
  description: string
  keywords: string[]
  recognition: string
  emergency: string
  steps: { title: string; text: string; link?: { label: string; to: string } }[]
  precautions: string[]
  explanation: { title: string; text: string }[]
  sources: Source[]
  demonstration?: Source
}

export const checkedDate = '13 November 2026'
export const emergencySource: Source = {
  name: 'Ministry of Home Affairs · Emergency Response Support System (112)',
  url: 'https://www.mha.gov.in/emergency-response-support-system-erss',
}
export const librarySource: Source = {
  name: 'British Red Cross · Learn first aid',
  url: 'https://www.redcross.org.uk/first-aid/learn-first-aid',
}
const redCrossSource = (name: string, path: string): Source => ({
  name: `British Red Cross · ${name}`,
  url: `https://www.redcross.org.uk/first-aid/learn-first-aid/${path}`,
})
const ahaBasics: Source = {
  name: 'American Heart Association · What is CPR?',
  url: 'https://cpr.heart.org/en/resources/what-is-cpr',
}
const ahaBls: Source = {
  name: 'American Heart Association · 2025 Adult Basic Life Support guidelines',
  url: 'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support',
}
const resuscitationSource: Source = {
  name: 'Resuscitation Council UK · 2025 First Aid guidelines',
  url: 'https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/first-aid-guidelines',
}

export const guides: Guide[] = [
  {
    slug: 'adult-cpr',
    title: 'Adult CPR',
    shortTitle: 'Adult CPR',
    category: 'Breathing & responsiveness',
    icon: 'heart',
    description: 'For an unresponsive adult who is not breathing normally or is only gasping.',
    keywords: [
      'cardiac arrest',
      'heart stopped',
      'collapse',
      'collapsed',
      'not breathing',
      'resuscitation',
      'AED',
      'defibrillator',
      'hands only',
      'unconscious',
    ],
    recognition:
      'Suspect cardiac arrest: an adult is unresponsive and not breathing normally, or is only gasping.',
    emergency:
      'Call 112 immediately. Put your phone on speaker and follow the operator while you help.',
    steps: [
      {
        title: 'Check safety and responsiveness',
        text: 'Make sure it is safe to approach. Tap their shoulders and ask loudly, “Are you okay?” Shout for help if they do not respond.',
      },
      {
        title: 'Check for normal breathing',
        text: 'Tilt their head back and lift their chin. Look for chest movement; listen and feel for breathing for no more than 10 seconds. If they are not breathing normally or are only gasping, act now.',
      },
      {
        title: 'Call 112. Ask for an AED',
        text: 'Tell the operator your location and that the adult is unresponsive and not breathing normally. Ask someone to bring an automated external defibrillator (AED). If alone, call on speaker before starting compressions.',
      },
      {
        title: 'Push hard and fast in the centre of the chest',
        text: 'With the person on their back on a firm, flat surface, put the heel of one hand on the lower half of the breastbone and your other hand on top. Keep your arms straight. Push 5–6 cm deep at 100–120 compressions a minute. Let the chest rise fully after every push.',
      },
      {
        title: 'Use the AED as soon as it arrives',
        text: 'Switch it on. Expose the chest and attach the pads as the diagrams show. Follow its prompts. Make sure no one touches the person during analysis or a shock. Resume compressions as soon as instructed.',
      },
      {
        title: 'Keep going until help takes over',
        text: 'Minimise pauses. Continue until professional help takes over or the person starts breathing normally. If another person can give CPR, swap about every 2 minutes with as little interruption as possible.',
      },
    ],
    precautions: [
      'This is adult guidance. Infants and children need different CPR techniques and rescue breaths. Call 112 for age-specific help.',
      'Do not mistake gasping for normal breathing or wait for an AED before beginning compressions.',
      'If they start breathing normally but remain unresponsive, keep their airway open and monitor their breathing. Follow the 112 operator.',
    ],
    explanation: [
      {
        title: 'Hands-only CPR and rescue breaths',
        text: 'Hands-only CPR is intended for bystanders helping an adult who suddenly collapses. If you are trained and able to give breaths, use 30 compressions followed by 2 rescue breaths. Breaths are especially important after drowning or other breathing-related causes. Follow the 112 operator; do not delay compressions while finding instructions.',
      },
      {
        title: 'What the AED does',
        text: 'An AED checks the heart rhythm and advises a shock only when needed. You do not need to diagnose the rhythm. Follow the device’s spoken instructions.',
      },
    ],
    sources: [
      {
        name: 'American Heart Association · Emergency treatment of cardiac arrest',
        url: 'https://www.heart.org/en/health-topics/cardiac-arrest/emergency-treatment-of-cardiac-arrest',
      },
      ahaBasics,
      ahaBls,
      redCrossSource(
        'Unresponsive, not breathing, with an AED available',
        'unresponsive-and-not-breathing-when-an-aed-is-available',
      ),
      emergencySource,
    ],
    demonstration: {
      name: 'Watch the AHA hands-only CPR demonstration',
      url: 'https://cpr.heart.org/en/cpr-courses-and-kits/hands-only-cpr',
    },
  },
  {
    slug: 'adult-choking',
    title: 'Adult choking',
    shortTitle: 'Choking',
    category: 'Breathing & responsiveness',
    icon: 'wind',
    description:
      'Help an adult with a blocked airway who cannot speak, breathe or cough effectively.',
    keywords: [
      'airway',
      'food stuck',
      'cannot breathe',
      'cant breathe',
      'cannot speak',
      'heimlich',
      'abdominal thrusts',
      'back blows',
      'choke',
    ],
    recognition:
      'Severe choking can make an adult unable to speak, breathe or cough effectively. They may clutch their neck. A weak or silent cough needs immediate help.',
    emergency:
      'For severe choking, ask someone to call 112 now while you start helping. If alone, use speakerphone.',
    steps: [
      {
        title: 'If they can cough strongly, encourage coughing',
        text: 'Stay with them and watch closely. If they cannot cough effectively, speak or breathe, move to back blows.',
      },
      {
        title: 'Give up to 5 back blows',
        text: 'Lean them forward and support their chest. Strike firmly between their shoulder blades with the heel of your hand. Check after each blow and stop if the blockage clears.',
      },
      {
        title: 'If still choking, give up to 5 abdominal thrusts',
        text: 'Stand behind them. Put a fist just above their belly button, below the breastbone. Grasp it with your other hand and pull sharply inward and upward. Check after each thrust. In late pregnancy, or if you cannot reach around their abdomen, use chest thrusts instead; follow the 112 operator.',
      },
      {
        title: 'Repeat back blows and thrusts',
        text: 'Alternate up to 5 back blows with up to 5 thrusts until the blockage clears or they become unresponsive. Make sure 112 has been called.',
      },
      {
        title: 'If they become unresponsive, start CPR',
        text: 'Lower them carefully to the ground. Begin CPR with chest compressions and follow the 112 operator. Before giving breaths, remove an object only if clearly visible; never sweep blindly with your fingers.',
        link: { label: 'Open adult CPR instructions', to: '/guides/adult-cpr' },
      },
    ],
    precautions: [
      'Do not put fingers blindly into the mouth, or give food or drink to clear the blockage.',
      'These instructions are for adults. Do not use adult thrust techniques on a baby or child.',
    ],
    explanation: [
      {
        title: 'After the blockage clears',
        text: 'Keep monitoring breathing. A healthcare professional should assess anyone who needed abdominal thrusts or chest compressions, because these can cause injury.',
      },
    ],
    sources: [
      redCrossSource('Adult choking', 'choking'),
      ahaBls,
      resuscitationSource,
      emergencySource,
    ],
  },
  {
    slug: 'severe-bleeding',
    title: 'Severe bleeding',
    shortTitle: 'Severe bleeding',
    category: 'Injuries',
    icon: 'droplet',
    description:
      'Apply firm pressure to a heavily bleeding wound while emergency help is on its way.',
    keywords: [
      'blood',
      'wound',
      'cut',
      'cuts',
      'injury',
      'haemorrhage',
      'hemorrhage',
      'bleed',
      'laceration',
    ],
    recognition:
      'Blood is flowing heavily from a wound. The person may look pale, feel cold or become dizzy. Severe blood loss needs immediate help.',
    emergency:
      'Call 112 for heavy bleeding. Ask someone else to call while you keep pressure on the wound.',
    steps: [
      {
        title: 'Make sure it is safe to help',
        text: 'Avoid hazards. Use gloves or a plastic barrier if readily available, without delaying pressure.',
      },
      {
        title: 'Press firmly on the wound',
        text: 'Use a cloth, dressing or clothing and apply firm, direct pressure to stop or slow the bleeding. If an object is embedded, press around it, not on it. Do not remove the object.',
      },
      {
        title: 'Call 112 and keep pressing',
        text: 'Give your location and explain that someone is bleeding heavily. Use speakerphone if alone. Maintain firm pressure until emergency help takes over.',
      },
      {
        title: 'Reassure them and keep them warm',
        text: 'Stay with them. Watch their responsiveness and breathing. Tell the operator if their condition changes.',
      },
    ],
    precautions: [
      'Do not remove an embedded object or wash a heavily bleeding wound.',
      'Do not interrupt pressure to keep checking the wound.',
      'If bleeding will not stop, tell the 112 operator and follow their instructions. This guide does not teach tourniquet use or wound packing.',
    ],
    explanation: [
      {
        title: 'Why pressure matters',
        text: 'Firm pressure helps limit blood loss. Pale, cold skin, dizziness or worsening responsiveness can signal shock. Keep pressing and update emergency services.',
      },
    ],
    sources: [
      redCrossSource('Bleeding heavily', 'bleeding-heavily'),
      resuscitationSource,
      emergencySource,
    ],
  },
  {
    slug: 'burns-and-scalds',
    title: 'Burns and scalds',
    shortTitle: 'Burns & scalds',
    category: 'Injuries',
    icon: 'flame',
    description: 'Cool a heat burn or scald with running water and protect the damaged skin.',
    keywords: ['burn', 'scald', 'hot water', 'boiling', 'fire', 'heat', 'steam', 'blister'],
    recognition:
      'Heat or hot liquid has damaged the skin. It may be red, blistered, swollen, white or charred. A serious burn may not be very painful.',
    emergency:
      'Call 112 for a large or deep burn, breathing difficulty, or a chemical or electrical burn. Get urgent medical advice if unsure.',
    steps: [
      {
        title: 'Move away from the source of heat safely',
        text: 'Protect yourself. Remove jewellery and clothing near the burn only if they are not stuck to the skin. Do not approach live electricity.',
      },
      {
        title: 'Cool under running water for at least 20 minutes',
        text: 'Use cool running tap water straight away. Cool the burn, and keep the rest of the person warm. If the burn is serious, call 112 while cooling; do not wait to finish.',
      },
      {
        title: 'Cover the cooled burn loosely',
        text: 'Lay cling film over the burn or use a clean, non-fluffy dressing. Do not wrap film tightly around a limb or put it over the face.',
      },
      {
        title: 'Get medical advice when needed',
        text: 'Seek urgent care for burns to the face or genitals, a large or deep burn, or if you are uncertain. Always get medical advice for a baby or child with a burn.',
      },
    ],
    precautions: [
      'Do not use ice, butter, cream or toothpaste, and do not burst blisters.',
      'Do not pull off anything stuck to the burn or apply adhesive dressings to it.',
      'These steps cover heat burns and scalds. Chemical and electrical injuries need specific emergency advice: call 112 and follow the operator.',
    ],
    explanation: [
      {
        title: 'Cool the injury, keep the person warm',
        text: 'Running water removes heat from the damaged skin. Keep water focused on the burn rather than cooling the whole body. Protect the cooled area while arranging medical help.',
      },
    ],
    sources: [
      redCrossSource('Burns', 'burns'),
      { name: 'NHS · Burns and scalds', url: 'https://www.nhs.uk/conditions/burns-and-scalds/' },
      emergencySource,
    ],
  },
  {
    slug: 'stroke',
    title: 'Stroke recognition',
    shortTitle: 'Stroke recognition',
    category: 'Sudden illness',
    icon: 'brain',
    description: 'Recognise sudden face weakness, arm weakness or speech changes and act FAST.',
    keywords: [
      'face droop',
      'speech',
      'slurred',
      'FAST',
      'weakness',
      'numbness',
      'brain',
      'balance',
      'vision',
      'tia',
    ],
    recognition:
      'Sudden face drooping, weakness in an arm or difficulty speaking may be a stroke. Even one sign needs an immediate emergency call.',
    emergency: 'Call 112 immediately if you suspect a stroke, even if the symptoms go away.',
    steps: [
      {
        title: 'Face: ask them to smile',
        text: 'Look for a droop or weakness on one side of the face.',
      },
      {
        title: 'Arms: ask them to raise both arms',
        text: 'Check whether one arm is weak, cannot lift or drifts downward.',
      },
      {
        title: 'Speech: ask them to repeat a simple sentence',
        text: 'Listen for slurred or unusual speech, or difficulty understanding you.',
      },
      {
        title: 'Time: call 112 now',
        text: 'Do not wait for all the signs. Tell the operator you suspect a stroke. Note when the symptoms first appeared, or when they were last known to be well.',
      },
      {
        title: 'Stay with them while help comes',
        text: 'Help them sit or lie comfortably and reassure them. Keep checking their breathing and responsiveness. Follow the operator if their condition changes.',
      },
    ],
    precautions: [
      'Do not wait to see whether symptoms improve or let the person drive to hospital.',
      'FAST does not detect every stroke. Sudden loss of balance or vision, or a sudden severe headache, can also need immediate help.',
    ],
    explanation: [
      {
        title: 'Symptoms that go away still matter',
        text: 'Temporary stroke-like symptoms can be a transient ischaemic attack (TIA). They still need emergency assessment. Keep the emergency call active even if the person seems better.',
      },
    ],
    sources: [
      redCrossSource('Stroke', 'stroke'),
      {
        name: 'American Stroke Association · Stroke symptoms and warning signs',
        url: 'https://www.stroke.org/en/about-stroke/stroke-symptoms',
      },
      emergencySource,
    ],
  },
  {
    slug: 'unresponsive-but-breathing',
    title: 'Unresponsive but breathing',
    shortTitle: 'Unresponsive but breathing',
    category: 'Breathing & responsiveness',
    icon: 'person',
    description: 'Keep an unresponsive adult’s airway open when they are breathing normally.',
    keywords: [
      'recovery position',
      'unconscious',
      'fainted',
      'faint',
      'collapsed',
      'collapse',
      'airway',
      'passed out',
    ],
    recognition:
      'The adult does not answer or react when you speak and tap their shoulders, but is breathing normally. Gasping is not normal breathing.',
    emergency:
      'Call 112. An unresponsive person needs emergency assessment even if they are breathing.',
    steps: [
      {
        title: 'Check safety and responsiveness',
        text: 'Make sure it is safe to approach. Tap their shoulders, speak loudly and shout for help if they do not respond.',
      },
      {
        title: 'Open the airway and check breathing',
        text: 'Gently tilt the head back and lift the chin. Look, listen and feel for normal breathing for no more than 10 seconds. If breathing is absent or only gasping, begin adult CPR.',
        link: { label: 'Not breathing normally? Open adult CPR', to: '/guides/adult-cpr' },
      },
      {
        title: 'Keep their airway open',
        text: 'If breathing normally and no injury is suspected, gently roll them onto their side and tilt their head back to keep the airway open. If a head, neck or back injury is possible, avoid unnecessary movement and follow the 112 operator; protecting the airway is the priority.',
      },
      {
        title: 'Call 112 and stay with them',
        text: 'Use speakerphone if alone. Watch breathing continuously and keep them warm. If they stop breathing normally, turn them onto their back and start CPR.',
      },
    ],
    precautions: [
      'Do not give food or drink, and do not leave the person alone.',
      'Do not use the recovery position for someone who is only gasping. They need CPR.',
      'This is adult guidance. For an infant or child, call 112 for age-specific instructions.',
    ],
    explanation: [
      {
        title: 'Why position matters',
        text: 'For a person without a suspected injury, lying on the side with the airway open can let fluid drain and help prevent the tongue blocking breathing. Keep checking: their breathing can change.',
      },
    ],
    sources: [
      redCrossSource('Unresponsive and breathing', 'unresponsive-and-breathing'),
      resuscitationSource,
      ahaBls,
      emergencySource,
    ],
  },
]

export const categories: Category[] = ['Breathing & responsiveness', 'Injuries', 'Sudden illness']

export function searchGuides(query: string, category = 'All topics'): Guide[] {
  const terms = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean)
  return guides.filter((guide) => {
    const text =
      `${guide.title} ${guide.description} ${guide.category} ${guide.keywords.join(' ')}`.toLocaleLowerCase()
    return (
      (category === 'All topics' || guide.category === category) &&
      terms.every((term) => text.includes(term))
    )
  })
}

export const allSources: Source[] = Array.from(
  new Map(
    [
      librarySource,
      ...guides.flatMap((guide) => guide.sources),
      ...guides.flatMap((guide) => (guide.demonstration ? [guide.demonstration] : [])),
    ].map((source) => [source.url, source]),
  ).values(),
)
