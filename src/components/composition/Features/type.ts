import { FeatureProps, PageTitleProps } from "../../ui/";

export interface Feature extends Omit<FeatureProps,'icon'>{
    icon: string
}

export interface PrimitiveType{
}

export interface ComplexType{
    pageTitle: PageTitleProps
}

export interface EventType{
    features:Feature[]
}


export type Props = PrimitiveType & ComplexType & EventType;

export default Props;