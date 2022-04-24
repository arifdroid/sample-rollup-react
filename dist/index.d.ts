/// <reference types="react" />
import React from 'react';

declare const Button: (props: any) => JSX.Element;

declare const _default$1: ((props: any, ref: React.Ref<any>) => JSX.Element) & {
    displayName: string;
} & {
    Label: (<TTag extends React.ElementType<any> = "label">(props: any, ref: React.Ref<HTMLLabelElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Icon: (<TTag_1 extends React.ElementType<any> = "i">(props: any, ref: React.Ref<HTMLLIElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
};

declare const _default: any;

export { Button, _default$1 as HButton, _default as HSample };
