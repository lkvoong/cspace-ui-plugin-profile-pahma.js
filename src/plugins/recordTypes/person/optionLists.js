import { defineMessages } from 'react-intl';

export default {
  personTermStatuses: {
    values: [
      'provisional',
      'underReview',
      'possibleDuplicate',
      'duplicateRemove',
      'accepted',
      'rejected',
    ],
    messages: defineMessages({
      underReview: {
        id: 'option.personTermStatuses.underReview',
        defaultMessage: 'under review',
      },
      possibleDuplicate: {
        id: 'option.personTermStatuses.possibleDuplicate',
        defaultMessage: 'possible duplicate',
      },
      duplicateRemove: {
        id: 'option.personTermStatuses.duplicateRemove',
        defaultMessage: 'duplicate entry—remove',
      },
    }),
  },
  pahmaPersonTitles: {
    values: [
      'Acting Chairperson',
      'Admiral',
      'Baron',
      'Brigadier General',
      'Brother',
      'Canon',
      'Captain',
      'Chaiperson',
      'Chairman',
      'Chairperson',
      'Chancellor',
      'Chief',
      'Colonel',
      'Commodore',
      'Corporal',
      'Count',
      'Czar',
      'Dean',
      'Dr.',
      'Father',
      'General',
      'Governor',
      'Great-grandmother',
      'Hon.',
      'Judge',
      'Khan',
      'King',
      'Lady',
      'Lieutenant',
      'Lieutenant Colonel',
      'Lieutenant Commander',
      'Major',
      'Mayor',
      'Miss',
      'Mlle.',
      'Monsieur',
      'Mr.',
      'Mr. and Mrs.',
      'Mrs.',
      'Ms.',
      'Pastor',
      'Pfc.',
      'President',
      'Prince',
      'Prof.',
      'Ranger',
      'Reverend',
      'Senor',
      'Sheriff',
      'Sir',
      'Sister',
      'Technical Sergeant',
      'Vice Chancellor',
    ],
    messages: defineMessages({
      Senor: {
        id: 'option.pahmaPersonTitles.Senor',
        defaultMessage: 'Señor',
      },
    }),
  },
  genders: {
    values: [
      'female',
      'male',
      'transgender',
      'unknown',
    ],
  },
};
