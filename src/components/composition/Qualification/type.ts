import { EducationProps, JobDetailsProps, PageTitleProps } from "../../ui/";

export interface PrimitiveType{
}

export interface ComplexType{
    pageTitle: PageTitleProps
    jobDetails: JobDetailsProps[]
    educations: EducationProps[]
}

export interface EventType{

}


export type Props = PrimitiveType & ComplexType & EventType;

export default Props;