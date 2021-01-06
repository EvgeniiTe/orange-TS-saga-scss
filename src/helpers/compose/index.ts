export const compose = (...funcs: any) => (component: any) => {
  return funcs.reduceRight((wrapped: any, f: any) => f(wrapped), component);
};
