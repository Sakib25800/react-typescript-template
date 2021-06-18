import * as React from "react";

export default function useForm<T = Record<string, any>>(initValues: T) {
  const [values, setValues] = React.useState<T>(initValues);

  return [
    values,
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
}
