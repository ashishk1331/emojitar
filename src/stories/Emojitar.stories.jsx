import { Emojitar as Avatar } from "../index.js";

export default {
  component: Avatar,
  tags: ["autodocs"],
};

const userMail = "akstyles211@gmail.com";

export const Primary = {
  render: () => <Avatar value={userMail} />,
};

export const WithDisplayValue = {
  render: () => <Avatar value={userMail} displayValue="BU" />,
};

export const Emoji = {
  render: () => <Avatar value={userMail} emoji />,
};

export const Large = {
  render: () => <Avatar value={userMail} size={56} />,
};

export const Shadow = {
  render: () => <Avatar value={userMail} shadow />,
};

export const BorderRadius = {
  render: () => <Avatar value={userMail} radius={10} />,
};

export const CustomBorder = {
  render: () => (
    <Avatar value={userMail} border borderSize={3} borderColor="black" />
  ),
};

export const OnlyBorderProp = {
  render: () => <Avatar value={userMail} border />,
};
