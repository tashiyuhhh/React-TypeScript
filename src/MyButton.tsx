import React from 'react';
interface MyButtonProps {
title: string;
disabled?: boolean;
}
const MyButton: React.FC<MyButtonProps> = ({ title, disabled = false }) => {
return <button disabled={disabled}>{title}</button>;
};
export default MyButton;
