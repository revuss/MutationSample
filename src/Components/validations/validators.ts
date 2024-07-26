export const emailValidator = ({ value }: { value: string }) => {
  if (!/\S+@\S+\.\S+/.test(value)) {
    return "Enter a valid email";
  }
};

export const passwordValidator = ({ value }: { value: string }) => {
  if (value.length < 8) {
    return "Password must be more than 8 characters";
  }
};

export const confirmPasswordValidator = ({
  value,
  fieldApi,
}: {
  value: string;
  fieldApi: any;
}) => {
  const password = fieldApi.form.getFieldValue("password");

  if (value !== password) {
    return "Passwords don't match";
  }

  return undefined;
};
