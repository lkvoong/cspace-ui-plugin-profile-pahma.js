import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  invocables: {
    report: {
      govholdings: {
        fields: fields(configContext),
        forms: forms(configContext),
      },
    },
  },
});
