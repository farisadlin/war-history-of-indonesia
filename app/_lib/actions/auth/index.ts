"use server";
import { signIn, signOut } from "../../../../auth";

type UserLoginActionType = {
  email: string;
  password: string;
};

export const userLoginAction = async (payload: UserLoginActionType) => {
  try {
    await signIn("credentials", {
      email: payload.email,
      password: payload.password,
    });
  } catch (error) {}
};

export const userLogoutAction = async () => {
  await signOut();
};
