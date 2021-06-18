import * as React from "react";

export interface Props {
  firstName: string;
  lastName: string;
}

interface State {
  text: string;
}

export function UserCard({ firstName, lastName }: Props) {
  const [state, setState] = React.useState<State>({ text: "state" });
  getUserData(firstName, lastName);

  return (
    <div>
      <div>{state.text}</div>
      <div>{firstName}</div>
      <div>{lastName}</div>
    </div>
  );
}

function getUserData(firstName: string, lastName: string) {
  return firstName + "" + lastName;
}
