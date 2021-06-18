import axios from "axios";
import { IUser } from "../interfaces/Examples";

export async function register(
  id: string,
  values: IUser,
  onSuccess?: () => void,
  onError?: () => void
) {
  try {
    await axios.post("/auth/register", values);
    if (onSuccess) onSuccess();
  } catch {
    if (onError) onError();
  }
}
