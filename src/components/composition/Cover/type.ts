

export interface PrimitiveType{
    name: string,
    designation: string
    description:string
}

export interface ComplexType{
}

export interface EventType{

}


export type Props = PrimitiveType & ComplexType & EventType;

export default Props;