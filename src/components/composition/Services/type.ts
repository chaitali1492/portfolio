import { PageTitleProps, ServicesDetailsProps } from "../../ui/";

export interface Services extends Omit<ServicesDetailsProps, 'icon'>{
    icon:string
}

export interface PrimitiveType{
}

export interface ComplexType{
    services: Services[],
    pageTitle: PageTitleProps
}

export interface EventType{

}


export type Props = PrimitiveType & ComplexType & EventType;

export default Props;