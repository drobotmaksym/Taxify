import { HTMLAttributes } from "react";

export interface ILayout extends HTMLAttributes<HTMLElement> {}

export interface IForm extends HTMLAttributes<HTMLFormElement> {
  onSubmit: () => void;
}
