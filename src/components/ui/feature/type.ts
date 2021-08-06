import React from "react";

export interface PrimitiveType{
    icon: React.ReactElement;
    title:string;
    subtitle:string;
}

export interface ComplexType{
    
}

export interface EventType{

}


export type Props = PrimitiveType & ComplexType & EventType;

export default Props;