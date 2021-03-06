import fields from './fields';
import optionLists from './optionLists';
import vocabularies from './vocabularies';

export default () => configContext => ({
  optionLists,
  recordTypes: {
    concept: {
      vocabularies,
      fields: fields(configContext),
    },
  },
});
