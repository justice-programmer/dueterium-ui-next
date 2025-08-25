import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "danger";
    onClick?: () => void;
    className?: string;
    color?: "purple" | "blue" | "green" | "red" | "yellow" | "gray";
};
declare const Button: React.FC<ButtonProps>;

type CardProps = {
    children: React.ReactNode;
    className?: string;
    size?: "small" | "medium" | "large";
    bgVariant?: "light" | "dark";
};
declare const Card: React.FC<CardProps>;

type InputProps = {
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: "text" | "password" | "email";
    className?: string;
};
declare const Input: React.FC<InputProps>;

type ContainerProps = {
    children: React.ReactNode;
    padding?: "none" | "small" | "medium" | "large";
};
declare const Container: React.FC<ContainerProps>;

type DialogVariant = "default" | "info" | "warning";
type DialogProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    className?: string;
    variant?: DialogVariant;
    bgVariant?: "light" | "dark";
};
declare const Dialog: React.FC<DialogProps>;

type SidebarProps = {
    children: React.ReactNode;
    width?: "narrow" | "medium" | "wide";
    bgVariant?: "light" | "dark";
    className?: string;
    attach?: boolean;
};
declare const Sidebar: React.FC<SidebarProps>;

export { Button, Card, Container, Dialog, Input, Sidebar };
