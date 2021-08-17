import { PageTitleProps, ProgressBarProps } from "../../ui";


export interface PersonalDetails{
    image:string
    name:string
    designation:string
    email:string
    phone:string
}  

export interface PrimitiveType{
    desc:string
}

export interface ComplexType{
    expertise: {title:string, skills:ProgressBarProps[]}
    personalDetails: PersonalDetails
    pageTitle: PageTitleProps
}

export interface EventType{

}


export type Props = PrimitiveType & ComplexType & EventType;

export default Props;