export default (configContext) => {
  const {
    OP_RANGE,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_RANGE,
        path: 'ns2:hits_pahma/agreementDate',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
